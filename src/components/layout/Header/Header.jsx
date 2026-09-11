import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingCart, 
  User, 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Calculator, 
  ArrowRight,
  MessageCircle,
  Globe
} from 'lucide-react';
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
  const [catalogSubmenuOpen, setCatalogSubmenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setCatalogSubmenuOpen(false);
  }, [location.pathname]);

  // Lock body & document scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog', hasSubmenu: true },
    { name: 'О компании', path: '/about' },
    { name: 'Новости', path: '/news' },
    { name: 'Доставка и оплата', path: '/delivery' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const catalogCategories = [
    { name: 'Все полотна', path: '/catalog' },
    { name: 'Кулинарная гладь', path: '/catalog?category=smooth' },
    { name: 'Футер 2-х нитка', path: '/catalog?category=footer2' },
    { name: 'Футер 3-х нитка', path: '/catalog?category=footer3' },
    { name: 'Пике (Лакоста)', path: '/catalog?category=pike' },
    { name: 'Рибана / Кашкорсе', path: '/catalog?category=ribana' },
  ];

  return (
    <>
      <header className="w-full bg-[#1B222D] text-white border-b border-gray-800 sticky top-0 z-50 shadow-md">
        {/* Top micro-bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5 flex justify-between items-center gap-2 sm:gap-4">
          
          {/* Brand logos row: Saka Logo + 3 emblems */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Link 
              to="/" 
              className="flex items-center shrink-0 focus:outline-hidden"
              aria-label="Главная страница Saka Holding"
            >
              <img 
                src={sakaLogo} 
                alt="Saka Holding" 
                className="h-6 xs:h-7 sm:h-9 w-auto object-contain" 
              />
            </Link>

            {/* Sub-brand emblems */}
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-gray-700/80 shrink-0">
              <img 
                src={sakaEmblem} 
                alt="Saka" 
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-contain shrink-0" 
                title="Saka"
              />
              <img 
                src={erosLogo} 
                alt="Eros" 
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-contain shrink-0" 
                title="Eros"
              />
              <img 
                src={tortexLogo} 
                alt="Tortex" 
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-contain shrink-0" 
                title="Tortex"
              />
            </div>

            {/* Desktop slogan */}
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

          {/* Mobile Right Controls: Cart Icon + Burger Button */}
          <div className="flex md:hidden items-center gap-1.5 xs:gap-2 shrink-0">
            {/* Mobile Cart Trigger */}
            <button
              onClick={() => openModal('cart')}
              className="relative p-2 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 text-gray-200 cursor-pointer transition-all focus:outline-hidden"
              aria-label={`Корзина, товаров: ${totalItems}`}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D9B777] text-[#1B222D] text-[10px] font-black min-w-[17px] h-[17px] px-1 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 text-white cursor-pointer transition-all focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-[#D9B777]" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Main navigation menu (Desktop only) */}
        <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-8 py-2.5 items-center justify-between border-t border-gray-800/80">
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
      </header>

      {/* Backdrop for mobile drawer */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Fullscreen Drawer Navigation */}
      <aside
        className={`fixed inset-x-0 top-[51px] xs:top-[55px] sm:top-[63px] bottom-0 z-50 md:hidden bg-[#1B222D] border-t border-gray-800 flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-out shadow-2xl ${
          mobileMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-6 opacity-0 pointer-events-none'
        }`}
        aria-label="Мобильное меню"
      >
        <div className="px-5 pt-4 pb-6 flex flex-col space-y-5">
          {/* Main Navigation links */}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasSubmenu) {
                return (
                  <div key={link.path} className="flex flex-col">
                    <div
                      className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                        isActive || catalogSubmenuOpen
                          ? 'bg-white/10 text-[#D9B777]'
                          : 'text-gray-200 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setCatalogSubmenuOpen((prev) => !prev)}
                    >
                      <Link 
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1"
                      >
                        {link.name}
                      </Link>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCatalogSubmenuOpen((prev) => !prev);
                        }}
                        className="p-1 hover:text-white transition-transform"
                        aria-label="Развернуть подкатегории каталога"
                      >
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-200 ${
                            catalogSubmenuOpen ? 'rotate-180 text-[#D9B777]' : 'opacity-70'
                          }`} 
                        />
                      </button>
                    </div>

                    {/* Expandable subcategories */}
                    {catalogSubmenuOpen && (
                      <div className="pl-4 pr-2 py-1.5 my-1 space-y-1 bg-black/20 rounded-xl border border-gray-800/60">
                        {catalogCategories.map((cat) => (
                          <Link
                            key={cat.path}
                            to={cat.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <span>{cat.name}</span>
                            <ArrowRight size={13} className="opacity-40" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-white/10 text-[#D9B777]'
                      : 'text-gray-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} className={isActive ? 'text-[#D9B777]' : 'opacity-40'} />
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs in Mobile Menu */}
          <div className="space-y-2.5 pt-2 border-t border-gray-800/80">
            {/* Calculator Button (Gold brand primary) */}
            <Link
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D9B777] text-[#1B222D] font-bold text-sm hover:bg-[#c9a665] active:scale-98 transition-all shadow-md"
            >
              <Calculator size={18} />
              <span>Калькулятор ткани</span>
            </Link>

            {/* Profile Button */}
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 active:scale-98 text-white font-semibold text-sm transition-all border border-gray-800"
            >
              <User size={17} className="text-[#D9B777]" />
              <span>Личный кабинет / Войти</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('cart');
              }}
              className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 active:scale-98 text-white font-semibold text-sm transition-all border border-gray-800 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart size={17} className="text-[#D9B777]" />
                <span>Корзина</span>
              </div>
              <span className="bg-[#D9B777] text-[#1B222D] font-bold text-xs px-2 py-0.5 rounded-full">
                {totalItems} {totalItems === 1 ? 'товар' : 'товаров'}
              </span>
            </button>
          </div>

          {/* Direct Contacts & Feedback */}
          <div className="pt-3 border-t border-gray-800/80 flex flex-col space-y-3">
            <a
              href="tel:+902125470826"
              className="flex items-center gap-2.5 text-white font-bold text-base hover:text-[#D9B777] transition-colors"
            >
              <Phone size={17} className="text-[#D9B777] shrink-0" />
              <span>+90 212 547 08 26</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('callback');
              }}
              className="text-left text-xs font-medium text-gray-400 hover:text-[#D9B777] underline cursor-pointer transition-colors"
            >
              Заказать обратный звонок
            </button>

            {/* Messengers & Language row */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800/60 text-xs">
              <div className="flex items-center gap-3 text-gray-400">
                <a
                  href="https://wa.me/902125470826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/sakaholding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-sky-400 transition-colors"
                >
                  <span>Telegram</span>
                </a>
              </div>

              {/* Language switcher */}
              <div className="flex items-center gap-1.5 font-semibold text-gray-400">
                <Globe size={13} className="text-gray-500" />
                <span className="text-white font-bold px-1.5 py-0.5 rounded bg-white/10">RU</span>
                <span>/</span>
                <span className="hover:text-white cursor-pointer">EN</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
