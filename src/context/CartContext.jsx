import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Футер 2-х нитка диагональ',
      color: 'Мята (04/21)',
      rolls: 1,
      packs: 15,
      weightKg: 16,
      price: 1200,
    }
  ]);

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, rolls: item.rolls + (product.rolls || 1) }
            : item
        );
      }
      return [...prev, { ...product, rolls: product.rolls || 1 }];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateRolls = (id, rolls) => {
    if (rolls < 1) return;
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, rolls } : item))
    );
  };

  const totalItems = items.reduce((sum, item) => sum + item.rolls, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.rolls, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateRolls,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
