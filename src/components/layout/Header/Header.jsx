import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Phone, ChevronDown } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useModal } from '../../../context/ModalContext';

import sakaLogo from '../../../assets/shared/logos/saka-logo-white.png';
import sakaEmblem from '../../../assets/shared/logos/saka-emblem.png';
import erosLogo from '../../../assets/shared/logos/eros-logo.png';
import tortexLogo from '../../../assets/shared/logos/tortex-logo.png';

export function Header() {
  const { totalItems } = useCart();
  const { openModal } = useModal();
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog', hasSubmenu: true },
    { name: 'О компании', path: '/about' },
    { name: 'Новости', path: '/news' },
    { name: 'Доставка и оплата', path: '/delivery' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="w-full bg-[#1B222D] text-white border-b border-gray-800 sticky top-0 z-40 shadow-md">
      {/* Top micro-bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex flex-wrap justify-between items-center gap-4 border-b border-gray-800/80">
        {/* Brand logos row */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={sakaLogo} alt="Saka Holding" className="h-9 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-gray-700">
            <img src={sakaEmblem} alt="Saka" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain shrink-0" />
            <img src={erosLogo} alt="Eros" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain shrink-0" />
            <img src={tortexLogo} alt="Tortex" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain shrink-0" />
          </div>
          <span className="hidden xl:inline text-xs text-gray-400 pl-3 border-l border-gray-700 max-w-xs leading-tight">
            Производитель турецкого трикотажного полотна
          </span>
        </div>

        {/* Right action items */}
        <div className="flex items-center gap-5 sm:gap-7 text-xs">
          {/* Cart Icon trigger */}
          <button
            onClick={() => openModal('cart')}
            className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-gray-200"
            title="Открыть корзину"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D9B777] text-[#1B222D] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            )}
          </button>

          {/* User Auth / Profile */}
          <Link
            to="/profile"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
          >
            <User size={15} />
            <span className="font-medium">Войти</span>
          </Link>

          {/* Phone & Callback */}
          <div className="flex flex-col items-start leading-tight">
            <a
              href="tel:+902125470826"
              className="flex items-center gap-1.5 text-white font-bold text-sm tracking-wide hover:text-[#D9B777] transition-colors"
            >
              <Phone size={13} className="text-[#D9B777]" />
              <span>+90 212 547 08 26</span>
            </a>
            <button
              onClick={() => openModal('callback')}
              className="text-[11px] text-gray-400 hover:text-[#D9B777] underline cursor-pointer transition-colors"
            >
              Заказать звонок
            </button>
          </div>

          {/* Language */}
          <div className="flex items-center gap-1 font-semibold text-xs">
            <span className="text-white">RU</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">EN</span>
          </div>
        </div>
      </div>

      {/* Main navigation menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
        <nav className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1 py-1 transition-colors ${
                  isActive ? 'text-[#D9B777] font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {link.hasSubmenu && <ChevronDown size={14} className="opacity-70" />}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/calculator"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-[#D9B777] text-[#1B222D] font-bold text-xs hover:bg-[#c9a665] transition-colors shadow-xs"
        >
          Калькулятор ткани
        </Link>
      </div>
    </header>
  );
}
