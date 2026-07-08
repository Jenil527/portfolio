import React, { useEffect, useRef, useState } from 'react';
import './InteractiveAvatar.css';

function InteractiveAvatar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      const angle = Math.atan2(deltaY, deltaX);
      // Limit eye movement distance to 6 pixels for bigger eyes
      const distance = Math.min(6, Math.hypot(deltaX, deltaY) / 30);
      
      setMousePos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="avatar-container" ref={containerRef}>
      <svg viewBox="0 0 200 200" className="cartoon-avatar">
        {/* Background Aura */}
        <circle cx="100" cy="100" r="95" fill="var(--accent-color)" opacity="0.05" />
        
        {/* Hoodie Back */}
        <path d="M 50 170 C 40 140, 160 140, 150 170 L 170 200 L 30 200 Z" fill="#2d3748" />

        {/* Neck */}
        <rect x="85" y="130" width="30" height="30" fill="#8d5524" />
        <rect x="85" y="130" width="30" height="12" fill="#5c3a1c" opacity="0.6" /> {/* Shadow */}

        {/* Ears */}
        <path d="M 45 105 C 35 105, 35 125, 45 125 Z" fill="#8d5524" />
        <path d="M 155 105 C 165 105, 165 125, 155 125 Z" fill="#8d5524" />

        {/* Head Shape (Modern Rounded Rectangle) */}
        <rect x="45" y="50" width="110" height="95" rx="40" fill="#8d5524" />

        {/* Modern Short Fade Haircut */}
        <path d="M 45 80 C 45 35, 155 35, 155 80 Q 100 65, 45 80 Z" fill="#1a1a1a" />
        <path d="M 45 80 L 45 95 Q 43 88 45 80 Z" fill="#2d2d2d" />
        <path d="M 155 80 L 155 95 Q 157 88 155 80 Z" fill="#2d2d2d" />

        {/* Cowboy Hat */}
        {/* Crown */}
        <path d="M 60 65 L 70 30 Q 85 15 100 25 Q 115 15 130 30 L 140 65 Z" fill="#c19a6b" />
        {/* Hatband */}
        <path d="M 60 65 L 62 55 Q 100 60 138 55 L 140 65 Z" fill="#5c3a21" />
        {/* Brim */}
        <path d="M 15 45 Q 100 85 185 45" stroke="#c19a6b" strokeWidth="14" strokeLinecap="round" fill="none" />

        {/* Eyebrows */}
        <path d="M 55 85 Q 75 80 85 88" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M 145 85 Q 125 80 115 88" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Large Expressive Eyes */}
        <ellipse cx="72" cy="102" rx="12" ry="16" fill="#ffffff" />
        <ellipse cx="128" cy="102" rx="12" ry="16" fill="#ffffff" />
        
        {/* Pupils */}
        <circle cx={72 + mousePos.x} cy={102 + mousePos.y} r="6.5" fill="#1a1a1a" />
        <circle cx={128 + mousePos.x} cy={102 + mousePos.y} r="6.5" fill="#1a1a1a" />
        
        {/* Eye Highlights */}
        <circle cx={70 + mousePos.x} cy={99 + mousePos.y} r="2" fill="#ffffff" />
        <circle cx={126 + mousePos.x} cy={99 + mousePos.y} r="2" fill="#ffffff" />

        {/* Nose */}
        <path d="M 100 110 L 96 118 L 100 120" stroke="#5c3a1c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        {/* Friendly Smirk */}
        <path d="M 88 132 Q 100 138 112 130" stroke="#4a2e15" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        
        {/* Hoodie Front */}
        <path d="M 65 145 Q 100 165 135 145 L 155 200 L 45 200 Z" fill="#4a5568" />
        
        {/* Hoodie Strings */}
        <path d="M 80 152 Q 78 170 82 185" stroke="#a0aec0" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 120 152 Q 122 170 118 185" stroke="#a0aec0" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export default InteractiveAvatar;
