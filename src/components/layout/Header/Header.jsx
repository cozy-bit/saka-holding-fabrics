import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Phone, ChevronDown, Menu, X, Calculator } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex justify-between items-center gap-2 sm:gap-4 border-b border-gray-800/80">
        {/* Brand logos row */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={sakaLogo} alt="Saka Holding" className="h-7 sm:h-9 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-1 sm:gap-2 pl-2 sm:pl-3 border-l border-gray-700">
            <img src={sakaEmblem} alt="Saka" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain shrink-0" />
            <img src={erosLogo} alt="Eros" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain shrink-0" />
            <img src={tortexLogo} alt="Tortex" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain shrink-0" />
          </div>
          <span className="hidden xl:inline text-xs text-gray-400 pl-3 border-l border-gray-700 max-w-xs leading-tight">
            Производитель турецкого трикотажного полотна
          </span>
        </div>

        {/* Right action items on Desktop (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 text-xs">
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

        {/* Mobile Right Controls: Cart + Burger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => openModal('cart')}
            className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 cursor-pointer"
            aria-label="Корзина"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D9B777] text-[#1B222D] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white cursor-pointer transition-colors focus:outline-none"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={24} className="text-[#D9B777]" /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Main navigation menu (Desktop) */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-8 py-2.5 items-center justify-between">
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
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D9B777] text-[#1B222D] font-bold text-xs hover:bg-[#c9a665] transition-colors shadow-xs"
        >
          Калькулятор ткани
        </Link>
      </div>

      {/* Mobile Slide-down / Full Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B222D] border-b border-gray-800 animate-in slide-in-from-top duration-200 px-5 pt-3 pb-6 max-h-[calc(100vh-65px)] overflow-y-auto">
          {/* Main links list */}
          <nav className="flex flex-col space-y-1 mb-5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-white/10 text-[#D9B777]'
                      : 'text-gray-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasSubmenu && <ChevronDown size={16} className="opacity-60" />}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons on Mobile */}
          <div className="space-y-3 pt-3 border-t border-gray-800">
            <Link
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D9B777] text-[#1B222D] font-bold text-sm hover:bg-[#c9a665] transition-colors shadow-xs"
            >
              <Calculator size={16} />
              <span>Калькулятор ткани</span>
            </Link>

            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
            >
              <User size={16} className="text-[#D9B777]" />
              <span>Личный кабинет</span>
            </Link>
          </div>

          {/* Contact & Phone section in Mobile Menu */}
          <div className="mt-5 pt-4 border-t border-gray-800 flex flex-col gap-3">
            <a
              href="tel:+902125470826"
              className="flex items-center gap-2 text-white font-bold text-base hover:text-[#D9B777] transition-colors"
            >
              <Phone size={16} className="text-[#D9B777]" />
              <span>+90 212 547 08 26</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('callback');
              }}
              className="text-left text-xs text-gray-400 hover:text-[#D9B777] underline cursor-pointer transition-colors"
            >
              Заказать обратный звонок
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-xs font-semibold pt-2 text-gray-400">
              <span>Язык сайта:</span>
              <span className="text-white font-bold px-2 py-0.5 rounded bg-white/10">RU</span>
              <span>/</span>
              <span className="hover:text-white cursor-pointer">EN</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

