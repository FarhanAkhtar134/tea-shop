import UnfurlingLeaf from './components/UnfurlingLeaf';
import TeaCatalog from './components/TeaCatalog';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Unfurling Leaf Animation */}
      <UnfurlingLeaf />
      
      {/* Tea Catalog with Steaming Cup Animation */}
      <TeaCatalog />
    </main>
  );
}