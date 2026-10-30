import { memo } from 'react';

// Lightweight, GPU-accelerated stars without continuous JS animation loops
const StarBackground = memo(() => {
  return (
    <div className="pure-star-field" aria-hidden="true">
      <div className="stars-layer stars-layer-1" />
      <div className="stars-layer stars-layer-2" />
    </div>
  );
});

StarBackground.displayName = 'StarBackground';

export default StarBackground;
