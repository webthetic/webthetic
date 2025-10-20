import { motion } from 'motion/react';
import { useState, useRef, MouseEvent } from 'react';

interface PerspectiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PerspectiveButton({ children, onClick, className = '' }: PerspectiveButtonProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 50, y: 50 });
  };

  // Calculate rotation based on mouse position
  const rotateX = isHovering ? (mousePosition.y - 50) / 8 : 0;
  const rotateY = isHovering ? -(mousePosition.x - 50) / 8 : 0;

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{ perspective: '1000px' }}
    >
      <motion.button
        onClick={onClick}
        animate={{
          rotateX,
          rotateY,
          z: isHovering ? -25 : 0,
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="relative px-8 py-4 rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(194, 220, 242, 0.5)',
          boxShadow: '0 8px 32px rgba(160, 204, 242, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Directional fill effect */}
        <div
          className="absolute inset-0 transition-all duration-250 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(194, 220, 242, 0.7) 0%, rgba(160, 204, 242, 0.3) 40%, transparent 90%)`,
            opacity: isHovering ? 1 : 0,
          }}
        />

        {/* Inner shadow effect for depth */}
        <div
          className="absolute inset-0 transition-all duration-250 pointer-events-none rounded-2xl"
          style={{
            boxShadow: isHovering 
              ? `inset ${(mousePosition.x - 50) / 4}px ${(mousePosition.y - 50) / 4}px 20px rgba(0, 0, 0, 0.18)`
              : 'none',
          }}
        />
        
        {/* Corner highlight effect */}
        <div
          className="absolute w-32 h-32 rounded-full transition-all duration-200 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: isHovering ? 0.9 : 0,
          }}
        />

        {/* Button content */}
        <span className="relative z-10 text-gray-800 tracking-wide">
          {children}
        </span>
      </motion.button>
    </div>
  );
}