import { Link } from 'react-router-dom';
import { Home, ShoppingBag, Calculator, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-8 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-[#D9B777]/30 text-[#D9B777] font-bold text-xs uppercase tracking-wider mb-6">
          <span>Ошибка 404</span>
        </div>

        {/* Big 404 */}
        <div className="relative mb-6">
          <h1 className="text-8xl sm:text-9xl font-black text-[#1B222D] tracking-tighter select-none">
            4<span className="text-[#D9B777]">0</span>4
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-[180px] font-black tracking-widest text-[#1B222D]">SAKA</span>
          </div>
        </div>

        {/* Titles */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B222D] mb-3">
          Страница не найдена
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
          Кажется, запрашиваемая страница не существует, была удалена или вы ввели неверный адрес.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1B222D] hover:bg-[#283242] text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <Home size={16} />
            <span>На главную</span>
          </Link>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D9B777] hover:bg-[#c9a665] text-[#1B222D] font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <ShoppingBag size={16} />
            <span>Перейти в каталог</span>
          </Link>
        </div>

        {/* Quick Links Suggestions */}
        <div className="bg-[#F8F9FA] rounded-3xl p-6 border border-gray-100 max-w-lg mx-auto text-left">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">
            Популярные разделы сайта
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-700">
            <Link
              to="/calculator"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-amber-50 hover:text-[#D9B777] transition-colors border border-gray-100 shadow-xs"
            >
              <Calculator size={16} className="text-[#D9B777]" />
              <span>Калькулятор ткани</span>
            </Link>
            <Link
              to="/catalog"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-amber-50 hover:text-[#D9B777] transition-colors border border-gray-100 shadow-xs"
            >
              <ShoppingBag size={16} className="text-[#D9B777]" />
              <span>Каталог полотен</span>
            </Link>
            <Link
              to="/delivery"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-amber-50 hover:text-[#D9B777] transition-colors border border-gray-100 shadow-xs"
            >
              <span>📦</span>
              <span>Доставка и оплата</span>
            </Link>
            <Link
              to="/contacts"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white hover:bg-amber-50 hover:text-[#D9B777] transition-colors border border-gray-100 shadow-xs"
            >
              <span>📞</span>
              <span>Контакты</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
