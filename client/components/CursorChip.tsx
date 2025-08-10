import React from 'react';

interface CursorChipProps {
  x: number;
  y: number;
  visible: boolean;
}

const CursorChip: React.FC<CursorChipProps> = ({ x, y, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      style={{ left: `${x}px`, top: `${y}px` }}
      className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-opacity duration-300"
    >
      View Work
    </div>
  );
};

export default CursorChip;