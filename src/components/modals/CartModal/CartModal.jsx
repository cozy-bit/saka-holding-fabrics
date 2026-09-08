import { useState } from 'react';
import { X, Mail, Phone, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useModal } from '../../../context/ModalContext';
import blueFabric from '../../../assets/amirkhon/calculator/02-rectangle-78.png';

export function CartModal() {
  const { closeModal } = useModal();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [cartItems, setCartItems] = useState([
    { id: 1, image: blueFabric, title: 'Футер 2-х нитка диагональ', count: 3, price: '450₽' },
    { id: 2, image: blueFabric, title: 'Футер 2-х нитка диагональ', count: 16, price: '4650₽' },
    { id: 3, image: blueFabric, title: 'Футер 2-х нитка диагональ', count: 1, price: '305 005₽' },
  ]);

  const updateCount = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: Math.max(1, item.count + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-[#F8F9FA] rounded-[32px] w-full max-w-[540px] shadow-2xl overflow-hidden border border-gray-100 p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors p-1 cursor-pointer"
          aria-label="Закрыть"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-[#1B222D] mb-6">
          Корзина
        </h2>

        {/* Cart Items */}
        <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-1">
          {cartItems.length === 0 ? (
            <div className="py-8 text-center text-gray-400 font-medium text-sm">
              Ваша корзина пуста
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-100/80 shadow-xs"
              >
                {/* Thumb */}
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name + Stepper */}
                <div className="flex-1 min-w-0 pr-2">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1B222D] truncate mb-2">
                    {item.title}
                  </h4>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 bg-[#F7F8FA] rounded-full px-2.5 py-1">
                    <button
                      type="button"
                      onClick={() => updateCount(item.id, 1)}
                      className="text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      <Plus size={13} />
                    </button>
                    <span className="min-w-[14px] text-center font-bold text-[#1B222D]">
                      {item.count}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateCount(item.id, -1)}
                      className="text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                      <Minus size={13} />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-sm sm:text-base font-black text-[#1B222D] whitespace-nowrap">
                  {item.price}
                </div>

                {/* Delete button */}
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-gray-300 hover:text-gray-600 p-1 cursor-pointer transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 rounded-2xl bg-white border border-gray-100/80 shadow-xs">
            <Mail size={18} className="text-gray-400 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail"
              required
              className="w-full text-xs sm:text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400 bg-transparent"
            />
          </div>

          <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 rounded-2xl bg-white border border-gray-100/80 shadow-xs">
            <Phone size={18} className="text-gray-400 shrink-0" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              required
              className="w-full text-xs sm:text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400 bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-4 px-6 rounded-full bg-[#D9B777] hover:bg-[#c9a665] text-[#1B222D] font-bold text-sm sm:text-base flex items-center justify-between shadow-md cursor-pointer transition-all hover:scale-[1.01]"
          >
            <span>Оформить заказ</span>
            <ShoppingCart size={20} className="stroke-[2.5]" />
          </button>
        </form>
      </div>
    </div>
  );
}
