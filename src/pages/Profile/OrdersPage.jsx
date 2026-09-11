import { Link } from 'react-router-dom';
import { Check, Clock, ArrowRight } from 'lucide-react';

export function OrdersPage() {
  const orders = [
    { id: 1, date: '01.01.23', status: 'Принят', sum: '12.570 ₽', shipment: 'Ожидает обработки', items: '2 товара' },
    { id: 2, date: '01.01.23', status: 'Ожидает', sum: '56.951 ₽', shipment: 'Ожидает обработки', items: '324 товара' },
    { id: 3, date: '01.01.23', status: 'Принят', sum: '126 ₽', shipment: 'Ожидает обработки', items: '1 товар' },
    { id: 4, date: '01.01.23', status: 'Принят', sum: '526.815 ₽', shipment: 'Ожидает обработки', items: '22 товара' },
    { id: 5, date: '01.01.23', status: 'Принят', sum: '3.120.140 ₽', shipment: 'Ожидает обработки', items: '2466 товара' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-10">
      {/* Navigation tabs */}
      <div className="flex items-center gap-6 sm:gap-8 mb-6 sm:mb-8 border-b border-gray-100 pb-3">
        <Link
          to="/profile"
          className="text-xl sm:text-3xl font-bold text-gray-400 hover:text-gray-700 transition-colors"
        >
          Личные данные
        </Link>
        <Link
          to="/profile/orders"
          className="text-xl sm:text-3xl font-black text-[#1B222D] border-b-2 border-[#1B222D] pb-3 -mb-3.5"
        >
          Ваши заказы
        </Link>
      </div>

      {/* Mobile View: Exact match with Amirkhon-orders-mobile.png */}
      <div className="block md:hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[45px_75px_110px_1fr] items-center px-4 py-2 text-xs font-bold text-gray-400">
          <div>№ заказа</div>
          <div>Дата заказа</div>
          <div>Статус</div>
          <div className="text-right">Сумма</div>
        </div>

        {/* Rows */}
        <div className="space-y-3 mt-1">
          {orders.map((order) => (
            <Link
              key={order.id}
              to={`/profile/orders/${order.id}`}
              className="grid grid-cols-[45px_75px_110px_1fr] items-center px-4 py-3.5 rounded-2xl bg-[#F7F8FA] hover:bg-[#F2F4F7] transition-all border border-gray-100/80 active:scale-[0.99]"
            >
              <div className="text-sm font-bold text-[#1B222D]">
                {order.id}
              </div>
              <div className="text-xs font-semibold text-gray-600">
                {order.date}
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#D9B777] text-white font-bold text-[11px] tracking-wide shadow-xs">
                  {order.status === 'Принят' ? (
                    <Check size={11} className="stroke-[3]" />
                  ) : (
                    <Clock size={11} />
                  )}
                  <span>{order.status}</span>
                </span>
              </div>
              <div className="text-xs font-black text-[#1B222D] text-right truncate">
                {order.sum}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Detailed View */}
      <div className="hidden md:block w-full overflow-x-auto pb-4">
        <div className="min-w-[860px]">
          {/* Table Headers */}
          <div className="grid grid-cols-[80px_110px_130px_120px_180px_120px_1fr] items-center px-6 py-3 text-xs font-semibold text-gray-400">
            <div>№ заказа</div>
            <div>Дата заказа</div>
            <div>Статус</div>
            <div>Сумма</div>
            <div>Отгрузка</div>
            <div>Товары</div>
            <div className="text-right"></div>
          </div>

          {/* Order Cards */}
          <div className="space-y-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-[80px_110px_130px_120px_180px_120px_1fr] items-center px-6 py-4 rounded-2xl bg-[#F7F8FA] hover:bg-[#F2F4F7] transition-all border border-gray-100/80"
              >
                {/* № заказа */}
                <div className="text-sm font-bold text-[#1B222D]">
                  {order.id}
                </div>

                {/* Дата заказа */}
                <div className="text-sm font-medium text-gray-600">
                  {order.date}
                </div>

                {/* Статус */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D9B777] text-white font-bold text-xs tracking-wide shadow-xs">
                    {order.status === 'Принят' ? (
                      <Check size={13} className="stroke-[3]" />
                    ) : (
                      <Clock size={13} />
                    )}
                    <span>{order.status}</span>
                  </span>
                </div>

                {/* Сумма */}
                <div className="text-sm font-black text-[#1B222D]">
                  {order.sum}
                </div>

                {/* Отгрузка */}
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                  <Clock size={14} className="text-gray-400 shrink-0" />
                  <span>{order.shipment}</span>
                </div>

                {/* Товары */}
                <div className="text-sm font-medium text-gray-600">
                  {order.items}
                </div>

                {/* Действие */}
                <div className="flex justify-end">
                  <Link
                    to={`/profile/orders/${order.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D9B777] hover:bg-[#c9a665] text-[#1B222D] font-bold text-xs tracking-wide transition-all shadow-xs hover:shadow"
                  >
                    <span>Подробнее о заказе</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
