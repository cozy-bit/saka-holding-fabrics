import { useState, useMemo } from "react";
import { ShoppingBag, Plus, Minus, X, Scissors } from "lucide-react";

const FABRICS = [
  {
    id: "linen",
    name: "Лён небелёный",
    composition: "100% лён",
    width: 150,
    weight: 220,
    price: 890,
    colors: ["#E8DFC8", "#D9CCA6"],
  },
  {
    id: "sateen",
    name: "Хлопковый сатин",
    composition: "100% хлопок",
    width: 220,
    weight: 140,
    price: 650,
    colors: ["#F2E1E5", "#E3B8C1"],
  },
  {
    id: "tweed",
    name: "Шерстяной твид",
    composition: "80% шерсть, 20% полиэстер",
    width: 145,
    weight: 320,
    price: 2400,
    colors: ["#6E5C4B", "#4C3F33"],
  },
  {
    id: "silk",
    name: "Шёлковый атлас",
    composition: "100% шёлк",
    width: 140,
    weight: 90,
    price: 3200,
    colors: ["#8296A3", "#5C707F"],
  },
  {
    id: "corduroy",
    name: "Вельвет рубчик",
    composition: "98% хлопок, 2% эластан",
    width: 140,
    weight: 280,
    price: 1450,
    colors: ["#8B3A3A", "#652626"],
  },
  {
    id: "velvet",
    name: "Бархат хлопковый",
    composition: "90% хлопок, 10% шёлк",
    width: 140,
    weight: 310,
    price: 2800,
    colors: ["#2E4034", "#1B261F"],
  },
  {
    id: "denim",
    name: "Джинсовая ткань",
    composition: "98% хлопок, 2% эластан",
    width: 150,
    weight: 340,
    price: 980,
    colors: ["#3B5876", "#28394D"],
  },
  {
    id: "calico",
    name: "Ситец набивной",
    composition: "100% хлопок",
    width: 220,
    weight: 110,
    price: 420,
    colors: ["#F4EDE4", "#D8C9A3"],
  },
];

const rub = (n) => n.toLocaleString("ru-RU") + " ₽";

function Swatch({ colors }) {
  return (
    <div
      className="h-36 w-full border-b-2 border-dashed border-stone-400/50"
      style={{
        backgroundImage: `repeating-linear-gradient(115deg, ${colors[0]} 0px, ${colors[0]} 7px, ${colors[1]} 7px, ${colors[1]} 14px)`,
      }}
    />
  );
}

function FabricCard({ fabric, meters, onAdd, onChange, onRemove }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Swatch colors={fabric.colors} />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif text-lg text-stone-800">{fabric.name}</h3>
        <p className="text-sm text-stone-500">{fabric.composition}</p>
        <p className="text-sm text-stone-500">
          Ширина {fabric.width} см · {fabric.weight} г/м²
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-serif text-xl text-stone-800">
            {rub(fabric.price)}
            <span className="ml-1 text-sm font-sans text-stone-400">/ м</span>
          </span>
        </div>

        {meters ? (
          <div className="mt-2 flex items-center justify-between rounded-md border border-stone-200 bg-stone-50 px-3 py-2">
            <button
              onClick={() => onChange(fabric.id, -0.5)}
              className="rounded-full p-1 text-stone-600 hover:bg-stone-200"
              aria-label="Уменьшить"
            >
              <Minus size={16} />
            </button>
            <span className="text-sm font-medium text-stone-700">
              {meters} м
            </span>
            <button
              onClick={() => onChange(fabric.id, 0.5)}
              className="rounded-full p-1 text-stone-600 hover:bg-stone-200"
              aria-label="Увеличить"
            >
              <Plus size={16} />
            </button>
            <button
              onClick={() => onRemove(fabric.id)}
              className="ml-2 rounded-full p-1 text-stone-400 hover:bg-red-50 hover:text-red-600"
              aria-label="Удалить из корзины"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAdd(fabric.id)}
            className="mt-2 rounded-md bg-amber-800 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-900"
          >
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
}

export function CatalogPage() {
  const [cart, setCart] = useState({});

  const addToCart = (id) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const changeMeters = (id, delta) =>
    setCart((prev) => {
      const next = Math.max(0, +(prev[id] + delta).toFixed(1));
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });

  const removeFromCart = (id) =>
    setCart((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });

  const cartItems = useMemo(
    () =>
      Object.entries(cart).map(([id, meters]) => ({
        ...FABRICS.find((f) => f.id === id),
        meters,
      })),
    [cart]
  );

  const total = cartItems.reduce((sum, i) => sum + i.price * i.meters, 0);
  const itemCount = cartItems.length;

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-6">
          <Scissors className="text-amber-800" size={26} />
          <div>
            <h1 className="font-serif text-2xl text-stone-800">
              Мануфактура «Нить»
            </h1>
            <p className="text-sm text-stone-500">
              Ткани на отрез — от льна до бархата
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 lg:flex-row lg:items-start">
        <section className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {FABRICS.map((fabric) => (
            <FabricCard
              key={fabric.id}
              fabric={fabric}
              meters={cart[fabric.id]}
              onAdd={addToCart}
              onChange={changeMeters}
              onRemove={removeFromCart}
            />
          ))}
        </section>

        <aside className="w-full shrink-0 rounded-md border border-stone-200 bg-white p-5 shadow-sm lg:sticky lg:top-6 lg:w-80">
          <div className="mb-4 flex items-center gap-2 border-b border-stone-200 pb-3">
            <ShoppingBag className="text-amber-800" size={20} />
            <h2 className="font-serif text-lg text-stone-800">Корзина</h2>
            <span className="ml-auto text-sm text-stone-400">
              {itemCount} {itemCount === 1 ? "позиция" : "позиции"}
            </span>
          </div>

          {itemCount === 0 ? (
            <p className="py-6 text-center text-sm text-stone-400">
              Пока пусто. Выберите ткань в каталоге.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 border-b border-stone-100 pb-3 last:border-0"
                >
                  <div
                    className="h-10 w-10 shrink-0 rounded-sm border border-stone-200"
                    style={{
                      backgroundImage: `repeating-linear-gradient(115deg, ${item.colors[0]} 0px, ${item.colors[0]} 4px, ${item.colors[1]} 4px, ${item.colors[1]} 8px)`,
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-stone-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-stone-500">
                      {item.meters} м × {rub(item.price)}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-stone-700">
                    {rub(item.price * item.meters)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="shrink-0 rounded-full p-1 text-stone-400 hover:bg-red-50 hover:text-red-600"
                    aria-label="Удалить"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4">
            <span className="font-serif text-base text-stone-800">Итого</span>
            <span className="font-serif text-xl text-stone-800">
              {rub(total)}
            </span>
          </div>

          <button
            disabled={itemCount === 0}
            className="mt-4 w-full rounded-md bg-stone-800 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-900 disabled:cursor-not-allowed disabled:bg-stone-300"
          >
            Оформить заказ
          </button>
        </aside>
      </main>
    </div>
  );
}
