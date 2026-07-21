import React, { useState } from 'react';
import AdminModal from './AdminModal';

export default function Header() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  // Здесь можно добавить проверку на is_admin из Supabase, 
  // чтобы кнопка отображалась только у тебя:
  const [isAdmin] = useState(true); 

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#0e0e10] border-b border-zinc-800">
      {/* Логотип и навигация */}
      <div className="flex items-center gap-6">
        <span className="text-pink-500 font-bold text-xl">BlondieMedia</span>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="text-white font-medium">Видосы</a>
          <a href="#" className="text-zinc-400 hover:text-white">Лента (Скоро)</a>
        </nav>
      </div>

      {/* Правая часть: кнопка админки + вход через Twitch */}
      <div className="flex items-center gap-3">
        {isAdmin && (
          <button
            onClick={() => setIsAdminOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition"
          >
            ⚙️ Админка
          </button>
        )}

        <button className="px-4 py-2 text-sm font-medium text-white bg-[#772ce8] hover:bg-[#641bc4] rounded-lg transition flex items-center gap-2">
          Войти через Twitch
        </button>
      </div>

      {/* Само плавающее окно админ-панели */}
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </header>
  );
}
