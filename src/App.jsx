import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { CartProvider } from './context/CartContext';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ModalProvider>
          <AppRoutes />
        </ModalProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
