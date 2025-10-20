import { motion } from 'motion/react';
import { useState, useRef, MouseEvent } from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function GlassButton({ children, variant = 'primary', onClick, className = '' }: GlassButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
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
    setIsPressed(false);
    setIsHovering(false);
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: variant === 'primary' 
          ? 'rgba(160, 204, 242, 0.3)' 
          : 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(194, 220, 242, 0.5)',
        boxShadow: isPressed 
          ? 'inset 0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.05)'
          : '0 8px 32px rgba(160, 204, 242, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      }}
    >
      {/* Mouse-following glow effect - works for all variants */}
      <div
        className="absolute rounded-full transition-opacity duration-200 pointer-events-none"
        style={{
          width: '120px',
          height: '120px',
          background: variant === 'primary'
            ? 'radial-gradient(circle, rgba(160, 204, 242, 0.4) 0%, rgba(194, 220, 242, 0.2) 40%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(194, 220, 242, 0.3) 40%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.6 : 0,
        }}
      />
      
      {variant === 'primary' && (
        <>
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(194, 220, 242, 0.4), rgba(160, 204, 242, 0.4))',
                'linear-gradient(90deg, rgba(160, 204, 242, 0.4), rgba(184, 202, 217, 0.4))',
                'linear-gradient(135deg, rgba(184, 202, 217, 0.4), rgba(194, 220, 242, 0.4))',
                'linear-gradient(45deg, rgba(194, 220, 242, 0.4), rgba(160, 204, 242, 0.4))',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </>
      )}

      {/* Button content */}
      <span className="relative z-10 text-gray-800 tracking-wide">
        {children}
      </span>
    </motion.button>
  );
}