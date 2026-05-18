import { useEffect, useRef } from 'react';

interface UseOptimizedAnimationOptions {
  enabled?: boolean;
  throttleMs?: number;
}

export function useOptimizedAnimation(
  animateFn: (timestamp: number) => void,
  deps: any[] = [],
  options: UseOptimizedAnimationOptions = {}
): void {
  const { enabled = true, throttleMs = 16 } = options;
  const frameRef = useRef<number | undefined>(undefined); // Fixed: Allow undefined
  const lastTimeRef = useRef<number>(0);
  const animateFnRef = useRef(animateFn);
  
  useEffect(() => {
    animateFnRef.current = animateFn;
  }, [animateFn]);
  
  useEffect(() => {
    if (!enabled) return;
    
    let isAnimating = true;
    
    const animate = (timestamp: number): void => {
      if (!isAnimating) return;
      
      // Throttle if needed
      if (timestamp - lastTimeRef.current >= throttleMs) {
        animateFnRef.current(timestamp);
        lastTimeRef.current = timestamp;
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      isAnimating = false;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled, throttleMs, ...deps]);
}