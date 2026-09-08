import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import sakaLogo from '../../../assets/shared/logos/saka-logo-white.png';

export function Footer() {
  return (
    <footer className="w-full bg-[#1B222D] text-gray-300 mt-auto border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={sakaLogo} alt="Saka Holding" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Производитель турецкого трикотажного полотна высшего качества с прямыми поставками со склада в Москве.
            </p>
          </div>

          {/* Nav column */}
          <div>
            <h4 className="text-white text-base font-bold mb-4">Навигация</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Новости</Link></li>
              <li><Link to="/delivery" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/profile/orders" className="hover:text-white transition-colors">Корзина</Link></li>
            </ul>
          </div>

          {/* Info column */}
          <div>
            <h4 className="text-white text-base font-bold mb-4">Информация</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">Помощь</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Блог</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Вопрос-ответ</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Политика конфиденциальности</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Карта сайта</span></li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h4 className="text-white text-base font-bold mb-4">Следите за новостями</h4>
            <form onSubmit={(e) => { e.preventDefault(); alert('Спасибо за подписку!'); }} className="flex rounded-full bg-[#273142] p-1 border border-gray-700/60 mb-8 max-w-sm">
              <input
                type="email"
                required
                placeholder="Ваш E-mail"
                className="bg-transparent text-white text-sm px-4 py-2 w-full outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#D9B777] text-[#1B222D] text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#c9a665] transition-colors cursor-pointer shrink-0"
              >
                Отправить
              </button>
            </form>

            <a
              href="tel:+902125470826"
              className="flex items-center gap-2 text-white font-extrabold text-lg hover:text-[#D9B777] transition-colors"
            >
              <Phone size={18} className="text-[#D9B777]" />
              <span>+90 212 547 08 26</span>
            </a>
          </div>
        </div>

        {/* Bottom micro-row */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium">Напишите нам, мы онлайн:</span>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#273142] text-white flex items-center justify-center font-bold text-[11px] hover:bg-[#D9B777] hover:text-[#1B222D] transition-colors cursor-pointer">VK</span>
              <span className="w-7 h-7 rounded-full bg-[#273142] text-white flex items-center justify-center font-bold text-[11px] hover:bg-[#D9B777] hover:text-[#1B222D] transition-colors cursor-pointer">WA</span>
              <span className="w-7 h-7 rounded-full bg-[#273142] text-white flex items-center justify-center font-bold text-[11px] hover:bg-[#D9B777] hover:text-[#1B222D] transition-colors cursor-pointer">TG</span>
              <span className="w-7 h-7 rounded-full bg-[#273142] text-white flex items-center justify-center font-bold text-[11px] hover:bg-[#D9B777] hover:text-[#1B222D] transition-colors cursor-pointer">IG</span>
            </div>
          </div>

          <div>
            Copyright © {new Date().getFullYear()} Сака Текстиль. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}
