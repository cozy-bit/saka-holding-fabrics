import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-black text-[#1A3B6B] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Страница не найдена</h2>
      <p className="text-sm text-gray-500 mb-8">
        Возможно, она была перемещена или вы перешли по неверному адресу.
      </p>
      <Link to="/">
        <Button variant="primary">Вернуться на главную</Button>
      </Link>
    </div>
  );
}
