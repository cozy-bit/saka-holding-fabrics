import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { useModal } from '../../context/ModalContext';
import { CartModal } from '../modals/CartModal/CartModal';
import { PriceListModal } from '../modals/PriceListModal/PriceListModal';
import { CallbackModal } from '../modals/CallbackModal/CallbackModal';

export function Layout() {
  const { activeModal } = useModal();

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-x-clip">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />

      {/* Global Modals */}
      {activeModal === 'cart' && <CartModal />}
      {activeModal === 'pricelist' && <PriceListModal />}
      {activeModal === 'callback' && <CallbackModal />}
    </div>
  );
}
