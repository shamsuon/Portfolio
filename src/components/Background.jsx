import { memo } from 'react';

// Highly optimized, static radial backdrops for 60/120 FPS buttery-smooth scrolling
const Background = memo(() => {
  return (
    <div className="bg-gradient-container" aria-hidden="true">
      <div className="ambient-mesh ambient-mesh-top" />
      <div className="ambient-mesh ambient-mesh-mid" />
      <div className="ambient-mesh ambient-mesh-bottom" />
      <div className="bg-grid-overlay" />
    </div>
  );
});

Background.displayName = 'Background';

export default Background;
