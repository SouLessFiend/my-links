import React, { useState } from 'react';
import AdminModal from './AdminModal'; // Подключаем созданное нами окошко

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white flex flex-col">
      {/* Шапка сайта */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-6">
          <span className="text-pink-500 font-bold text-xl">BlondieMedia</span>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-white font-medium">Видосы</a>
            <a href="#" className="text-zinc-400 hover:text-white">Лента (Скоро)</a>
          </nav>
        </div>

        {/* Правая часть: Кнопка админки + Войти через Twitch */}
        <div className="flex items-center gap-3">
          {/* Кнопка открытия админки */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition flex items-center gap-2"
          >
            ⚙️ Админка
          </button>

          {/* Существующая кнопка входа через Twitch */}
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#772ce8] hover:bg-[#641bc4] rounded-lg transition flex items-center gap-2">
            Войти через Twitch
          </button>
        </div>
      </header>

      {/* Основной контент страницы */}
      <main className="p-8 flex-1">
        {/* Здесь твои видео и категории */}
      </main>

      {/* Плавающее окно админ-панели */}
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
