import React, { useState, useRef } from 'react';

export default function AdminModal({ isOpen, onClose }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offsetRef.current.x,
      y: e.clientY - offsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="absolute pointer-events-auto w-96 bg-[#18181b] border border-zinc-700 rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div
          onMouseDown={handleMouseDown}
          className="bg-[#202024] px-4 py-3 cursor-move flex items-center justify-between border-b border-zinc-700 select-none"
        >
          <span className="font-semibold text-white text-sm">⚙️ Админ-панель</span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white text-xs font-bold px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 transition"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-zinc-300 text-sm">
          <p>Панель управления сайтом.</p>
        </div>
      </div>
    </div>
  );
}
