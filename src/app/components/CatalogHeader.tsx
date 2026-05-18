"use client";
import PouringTea from "./PouringTea";

export default function CatalogHeader() {
  return (
    <div className="mb-12">
      <PouringTea />
      <h1 
        className="text-4xl md:text-5xl font-serif text-center mb-3 tracking-wide"
        style={{ color: 'var(--text-primary)' }}
      >
        Our Tea Collection
      </h1>
      <div 
        className="w-20 h-px mx-auto my-4"
        style={{ backgroundColor: 'var(--border-color)' }}
      />
      <p 
        className="text-center max-w-2xl mx-auto text-sm tracking-wide"
        style={{ color: 'var(--text-secondary)' }}
      >
        Each leaf tells a story of terroir, tradition, and the patient hands that harvested it
      </p>
    </div>
  );
}