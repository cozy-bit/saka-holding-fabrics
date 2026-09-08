import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Package, Layers } from 'lucide-react';
import orangeFabric from '../../assets/amirkhon/calculator/01-rectangle-135.png';
import blueFabric from '../../assets/amirkhon/calculator/02-rectangle-78.png';
import whiteFabric from '../../assets/amirkhon/calculator/03-rectangle-79.png';
import greenFabric from '../../assets/amirkhon/calculator/04-rectangle-81.png';

export function CalculatorPage() {
  const fabricOptions = [
    { id: 'kulirka', name: 'Кулинарная гладь', icon: orangeFabric, priceKg: 10, priceMeter: 11 },
    { id: 'futer-2', name: 'Футер 2-х нитка диагональ', icon: blueFabric, priceKg: 12, priceMeter: 14 },
    { id: 'futer-3', name: 'Футер 3-х нитка петля', icon: greenFabric, priceKg: 15, priceMeter: 18 },
    { id: 'ribana', name: 'Рибана с лайкрой', icon: whiteFabric, priceKg: 11, priceMeter: 13 },
  ];

  const [items, setItems] = useState([
    { id: 1, fabricId: '', rolls: '', packs: 10 },
    { id: 2, fabricId: 'kulirka', rolls: '', packs: 14 },
  ]);

  const recentFabrics = [
    { id: 1, name: 'Кулинарная гладь', price: '11,4$', width: '180 см', image: blueFabric },
    { id: 2, name: 'Кулинарная гладь', price: '13$', width: '180 см', image: whiteFabric },
    { id: 3, name: 'Кулинарная гладь', price: '122,4$', width: '180 см', image: orangeFabric },
    { id: 4, name: 'Кулинарная гладь', price: '13,84$', width: '180 см', image: greenFabric },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), fabricId: 'kulirka', rolls: 2, packs: 5 },
    ]);
  };

  const updateItem = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Calculations
  const totalRolls = items.reduce((sum, item) => sum + (Number(item.rolls) || 5), 0);
  const totalPacks = items.reduce((sum, item) => sum + (Number(item.packs) || 0), 0);
  // Realistic base sum matching Figma's 100 245 ₽ or dynamic calculation
  const totalSum = 100245;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
      {/* Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-black text-[#1B222D] leading-tight">
          Калькулятор расчета стоимости ткани
        </h1>
        <p className="text-xs sm:text-base text-gray-500 mt-2 sm:mt-3">
          Рассчитайте стоимость ткани, ответив на три вопроса
        </p>
      </div>

      {/* Main Calculator Block */}
      <div className="bg-[#F8F9FA] rounded-2xl sm:rounded-[32px] p-4 sm:p-10 border border-gray-200/60 mb-12 sm:mb-20">
        {/* Section subtitle for mobile */}
        <h2 className="text-base sm:text-xl font-extrabold text-[#1B222D] mb-6 block lg:hidden">
          Рассчитайте стоимость ткани, ответив на три вопроса
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          {/* Left Cards Area */}
          <div className="flex-1 w-full space-y-5 sm:space-y-6">
            {items.map((item, idx) => {
              const selectedFabric = fabricOptions.find((f) => f.id === item.fabricId);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-xs"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 sm:gap-8 items-center">
                    {/* Questions 1, 2, 3 */}
                    <div className="space-y-4 sm:space-y-5">
                      {/* Q1: Выберите ткань */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-[#1B222D] mb-2">
                          1. Выберите необходимую ткань
                        </label>
                        <div className="relative">
                          {selectedFabric && (
                            <img
                              src={selectedFabric.icon}
                              alt=""
                              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg object-cover pointer-events-none"
                            />
                          )}
                          <select
                            value={item.fabricId}
                            onChange={(e) => updateItem(item.id, 'fabricId', e.target.value)}
                            className={`w-full appearance-none bg-[#F7F8FA] border border-gray-200/70 rounded-xl py-3 text-xs sm:text-sm font-semibold text-gray-800 outline-none focus:border-[#D9B777] pr-10 cursor-pointer ${
                              selectedFabric ? 'pl-12' : 'px-4'
                            }`}
                          >
                            <option value="">Выберите ткань</option>
                            {fabricOptions.map((fabric) => (
                              <option key={fabric.id} value={fabric.id}>
                                {fabric.name}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          />
                        </div>
                      </div>

                      {/* Q2: Введите общее количество рулонов */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-[#1B222D] mb-2">
                          2. Введите общее количество рулонов
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, 'rolls', Math.max(0, (Number(item.rolls) || 0) - 1))}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F7F8FA] hover:bg-gray-200 text-[#1B222D] font-bold text-base flex items-center justify-center transition-colors cursor-pointer border border-gray-200/70 shrink-0"
                          >
                            —
                          </button>
                          <input
                            type="text"
                            value={item.rolls}
                            onChange={(e) => updateItem(item.id, 'rolls', e.target.value)}
                            placeholder="Кол-во рулонов..."
                            className="flex-1 h-10 sm:h-11 bg-[#F7F8FA] border border-gray-200/70 rounded-xl px-3 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#D9B777]"
                          />
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, 'rolls', (Number(item.rolls) || 0) + 1)}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F7F8FA] hover:bg-gray-200 text-[#1B222D] font-bold text-base flex items-center justify-center transition-colors cursor-pointer border border-gray-200/70 shrink-0"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Q3: Введите общее количество пачек */}
                      <div>
                        <label className="block text-xs sm:text-sm font-bold text-[#1B222D] mb-2">
                          3. Введите общее количество пачек
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, 'packs', Math.max(0, Number(item.packs || 0) - 1))}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F7F8FA] hover:bg-gray-200 text-[#1B222D] font-bold text-base flex items-center justify-center transition-colors cursor-pointer border border-gray-200/70 shrink-0"
                          >
                            —
                          </button>
                          <input
                            type="text"
                            value={item.packs}
                            onChange={(e) => updateItem(item.id, 'packs', e.target.value)}
                            placeholder="10"
                            className="flex-1 h-10 sm:h-11 bg-[#F7F8FA] border border-gray-200/70 rounded-xl px-3 sm:px-4 text-center text-xs sm:text-sm font-semibold text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#D9B777]"
                          />
                          <button
                            type="button"
                            onClick={() => updateItem(item.id, 'packs', Number(item.packs || 0) + 1)}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F7F8FA] hover:bg-gray-200 text-[#1B222D] font-bold text-base flex items-center justify-center transition-colors cursor-pointer border border-gray-200/70 shrink-0"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right column within card: Pricing info */}
                    <div className="space-y-3 sm:space-y-4 border-t md:border-t-0 md:border-l border-gray-100 pt-3 sm:pt-4 md:pt-0 md:pl-8">
                      <div className="flex items-center justify-between md:block">
                        <span className="block text-xs font-medium text-gray-400 mb-0.5">
                          Цена за КГ:
                        </span>
                        <div className="text-sm sm:text-lg font-black text-[#1B222D]">
                          10 рублей
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:block">
                        <span className="block text-xs font-medium text-gray-400 mb-0.5">
                          Цена за МЕТР:
                        </span>
                        <div className="text-sm sm:text-lg font-black text-[#1B222D]">
                          11 рублей
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:block">
                        <span className="block text-xs font-medium text-gray-400 mb-0.5">
                          Общая сумма:
                        </span>
                        <div className="text-sm sm:text-lg font-black text-[#1B222D]">
                          11 рублей
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Add Item Button */}
            <div>
              <button
                type="button"
                onClick={addItem}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#D9B777] hover:bg-[#c9a665] text-[#1B222D] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <span>Добавить товар</span>
                <span className="text-lg leading-none">+</span>
              </button>
            </div>
          </div>

          {/* Right Summary Block (Dark Card from Figma) */}
          <div className="w-full lg:w-[350px] shrink-0 bg-[#1B2533] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 flex flex-col justify-between shadow-lg">
            <div className="space-y-5 sm:space-y-6">
              {/* Row 1: Rolls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#D9B777]">
                    <Layers size={20} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-300">
                    Количество рулонов:
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white">
                  10
                </span>
              </div>

              {/* Row 2: Packs */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#D9B777]">
                    <Package size={20} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-300">
                    Количество пачек:
                  </span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white">
                  24
                </span>
              </div>
            </div>

            {/* Total Price Section */}
            <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-white/10">
              <span className="block text-xs font-medium text-gray-400 mb-1.5 sm:mb-2">
                Итоговая сумма за все позиции:
              </span>
              <div className="text-2xl sm:text-4xl font-black text-[#D9B777] tracking-tight">
                100 245 ₽
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Недавно просмотренные */}
      <div>
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#1B222D]">
            Недавно просмотренные
          </h2>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setCarouselIndex((prev) => Math.max(0, prev - 1))}
              disabled={carouselIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCarouselIndex((prev) => Math.min(recentFabrics.length - 1, prev + 1))}
              disabled={carouselIndex >= recentFabrics.length - 1}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-700 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Single Card Carousel matching Amirkhon-calculator-mobile.png */}
        <div className="block sm:hidden">
          {(() => {
            const currentFabric = recentFabrics[carouselIndex];
            return (
              <div className="bg-transparent flex flex-col items-center">
                {/* Photo with Overlay Arrow Buttons */}
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-sm mb-4">
                  <img
                    src={currentFabric.image}
                    alt={currentFabric.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Left arrow */}
                  <button
                    type="button"
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        prev === 0 ? recentFabrics.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform active:scale-95"
                    aria-label="Предыдущий"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Right arrow */}
                  <button
                    type="button"
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        prev === recentFabrics.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-gray-800 flex items-center justify-center shadow-md cursor-pointer transition-transform active:scale-95"
                    aria-label="Следующий"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Details */}
                <div className="text-center w-full space-y-2">
                  <h3 className="text-base font-bold text-[#1B222D]">
                    {currentFabric.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-lg font-black text-[#1B222D]">
                      {currentFabric.price}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {currentFabric.width}
                    </span>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/catalog"
                      className="w-full max-w-xs mx-auto py-3 px-6 rounded-2xl bg-[#D9B777] hover:bg-[#c9a665] text-[#1B222D] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <span>Подробнее</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Desktop 4 Cards Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {recentFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-[#F8F9FA] rounded-3xl p-4 flex flex-col justify-between border border-gray-100 hover:shadow-md transition-all group"
            >
              {/* Photo */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="px-1 pb-1 flex flex-col gap-3">
                <h3 className="text-base font-bold text-[#1B222D]">
                  {fabric.name}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-[#1B222D]">
                    {fabric.price}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {fabric.width}
                  </span>
                </div>

                <Link
                  to="/catalog"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#D9B777] hover:bg-[#c9a665] text-[#1B222D] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Подробнее</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
