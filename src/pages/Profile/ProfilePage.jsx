import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil, User, Package, Check, X } from 'lucide-react';
import userAvatar from '../../assets/amirkhon/profile/01-user-avatar.png';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Панфилова Ольга Васильевна',
    phone: '+7 800 555 35 35',
    email: 'mailboxname@mail.com',
    city: 'Санкт-Петербург'
  });
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile({ ...tempProfile });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-12">
      {/* Top Tab Switcher */}
      <div className="flex items-center gap-6 mb-8 border-b border-gray-200/80 pb-3">
        <Link
          to="/profile"
          className="text-2xl font-black text-[#1B222D] border-b-2 border-[#1B222D] pb-3 -mb-3.5"
        >
          Личные данные
        </Link>
        <Link
          to="/profile/orders"
          className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors pb-3"
        >
          Ваши заказы
        </Link>
      </div>

      {/* Main Profile Card (Exact Figma Layout) */}
      <div className="bg-[#F6F7F9] rounded-3xl p-8 sm:p-12 border border-gray-200/60 shadow-xs">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
          {/* Avatar with Golden Edit Badge */}
          <div className="relative shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
              <img
                src={userAvatar}
                alt={profile.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute bottom-2 right-2 w-11 h-11 rounded-full bg-[#D9B777] text-white hover:bg-[#c9a665] flex items-center justify-center shadow-md cursor-pointer transition-all hover:scale-105 border-2 border-white"
              title="Редактировать данные"
            >
              <Pencil size={18} />
            </button>
          </div>

          {/* Details Grid */}
          <div className="flex-1 w-full">
            {isEditing ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">ФИО</label>
                  <input
                    type="text"
                    value={tempProfile.fullName}
                    onChange={(e) => setTempProfile({ ...tempProfile, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#D9B777]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">E-mail</label>
                  <input
                    type="email"
                    value={tempProfile.email}
                    onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#D9B777]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    value={tempProfile.phone}
                    onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#D9B777]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Город</label>
                  <input
                    type="text"
                    value={tempProfile.city}
                    onChange={(e) => setTempProfile({ ...tempProfile, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-900 focus:outline-none focus:border-[#D9B777]"
                  />
                </div>
                <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
                  >
                    <X size={16} />
                    <span>Отмена</span>
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-5 py-2 rounded-lg text-sm font-bold bg-[#D9B777] text-[#1B222D] hover:bg-[#c9a665] flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Check size={16} />
                    <span>Сохранить</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 pt-4">
                {/* ФИО */}
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    ФИО
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-[#1B222D]">
                    {profile.fullName}
                  </div>
                </div>

                {/* E-mail */}
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    E-mail
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-[#1B222D]">
                    {profile.email}
                  </div>
                </div>

                {/* Телефон */}
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Телефон
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-[#1B222D]">
                      {profile.phone}
                    </span>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-gray-400 hover:text-[#D9B777] transition-colors cursor-pointer"
                      title="Редактировать"
                    >
                      <Pencil size={15} />
                    </button>
                  </div>
                </div>

                {/* Город */}
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Город
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-[#1B222D]">
                    {profile.city}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
