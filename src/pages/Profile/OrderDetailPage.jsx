import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Calendar } from 'lucide-react';
import blueFabric from '../../assets/amirkhon/calculator/02-rectangle-78.png';
import orangeFabric from '../../assets/amirkhon/calculator/01-rectangle-135.png';
import greenFabric from '../../assets/amirkhon/calculator/04-rectangle-81.png';

export function OrderDetailPage() {
  const { id } = useParams();

  const items = [
    {
      id: 1,
      image: blueFabric,
      title: 'Футер 2-х нитка диагональ',
      price: '1200₽',
      rolls: 1,
      packs: 15,
      weight: 16,
      sum: '15000₽'
    },
    {
      id: 2,
      image: orangeFabric,
      title: 'Футер 2-х нитка диагональ',
      price: '1200₽',
      rolls: 1,
      packs: 15,
      weight: 16,
      sum: '15000₽'
    },
    {
      id: 3,
      image: greenFabric,
      title: 'Футер 2-х нитка диагональ',
      price: '1200₽',
      rolls: 1,
      packs: 15,
      weight: 16,
      sum: '15000₽'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-10">
      {/* Back link */}
      <Link
        to="/profile/orders"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Назад ко всем заказам</span>
      </Link>

      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1B222D]">
            Заказ №{id || 3}
          </h1>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#D9B777] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs">
            <Check size={14} className="stroke-[3]" />
            <span>Принят, ожидается оплата</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <Calendar size={16} className="text-gray-400" />
          <span>01.01.23</span>
        </div>
      </div>

      {/* Composition Section */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1B222D] mb-4">
          Состав заказа
        </h2>

        {/* Mobile View: Clean cards */}
        <div className="block md:hidden space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F8FA] rounded-2xl p-4 border border-gray-100/80 space-y-3 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-100 shadow-xs">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-[#1B222D] leading-tight truncate">
                    {item.title}
                  </h4>
                  <div className="text-xs font-semibold text-gray-400 mt-1">
                    Цена за метр: <span className="text-[#1B222D] font-bold">{item.price}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200/60 text-xs">
                <div>
                  <span className="block text-gray-400 font-medium">Рулонов:</span>
                  <span className="font-bold text-[#1B222D]">{item.rolls}</span>
                </div>
                <div>
                  <span className="block text-gray-400 font-medium">Пачек:</span>
                  <span className="font-bold text-[#1B222D]">{item.packs}</span>
                </div>
                <div>
                  <span className="block text-gray-400 font-medium">Вес:</span>
                  <span className="font-bold text-[#1B222D]">{item.weight} кг</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200/60">
                <span className="text-xs font-bold text-gray-400 uppercase">Сумма позиции:</span>
                <span className="text-base font-black text-[#D9B777]">{item.sum}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Table Container */}
        <div className="hidden md:block w-full overflow-x-auto">
          <div className="min-w-[820px] bg-[#F7F8FA] rounded-3xl p-6 sm:p-8 border border-gray-100">
            {/* Column Headers */}
            <div className="grid grid-cols-[280px_100px_120px_120px_140px_1fr] text-xs font-semibold text-gray-400 pb-4">
              <div>Наименование</div>
              <div>Цена</div>
              <div>Кол-во рулонов</div>
              <div>Кол-во пачек</div>
              <div>Общее кол-во, кг</div>
              <div className="text-right sm:text-left">Общая сумма</div>
            </div>

            {/* Item Rows */}
            <div className="divide-y divide-gray-200/60">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[280px_100px_120px_120px_140px_1fr] items-center py-5"
                >
                  {/* Image + Title */}
                  <div className="flex items-center gap-4 pr-3">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-gray-100 shadow-xs">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-bold text-[#1B222D] leading-snug">
                      {item.title}
                    </span>
                  </div>

                  {/* Цена */}
                  <div className="text-sm font-black text-[#1B222D]">
                    {item.price}
                  </div>

                  {/* Кол-во рулонов */}
                  <div className="text-sm font-medium text-gray-700">
                    {item.rolls}
                  </div>

                  {/* Кол-во пачек */}
                  <div className="text-sm font-medium text-gray-700">
                    {item.packs}
                  </div>

                  {/* Общее кол-во, кг */}
                  <div className="text-sm font-medium text-gray-700">
                    {item.weight}
                  </div>

                  {/* Общая сумма */}
                  <div className="text-sm font-black text-[#1B222D] text-right sm:text-left">
                    {item.sum}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
