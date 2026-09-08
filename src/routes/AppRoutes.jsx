import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

// 1. Бахтовар
import { HomePage } from '../pages/Home/HomePage';
import { CatalogPage } from '../pages/Catalog/CatalogPage';
import { ProductPage } from '../pages/Product/ProductPage';

// 2. Амирхон
import { CalculatorPage } from '../pages/Calculator/CalculatorPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { OrdersPage } from '../pages/Profile/OrdersPage';
import { OrderDetailPage } from '../pages/Profile/OrderDetailPage';

// 3. Шукрулло
import { AboutPage } from '../pages/About/AboutPage';
import { NewsPage } from '../pages/News/NewsPage';
import { ArticlePage } from '../pages/Article/ArticlePage';

// 4. Али
import { DeliveryPage } from '../pages/Delivery/DeliveryPage';
import { ContactsPage } from '../pages/Contacts/ContactsPage';

// 404
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Бахтовар */}
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<ProductPage />} />

        {/* Амирхон */}
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile/orders" element={<OrdersPage />} />
        <Route path="profile/orders/:id" element={<OrderDetailPage />} />

        {/* Шукрулло */}
        <Route path="about" element={<AboutPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:id" element={<ArticlePage />} />

        {/* Али */}
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="contacts" element={<ContactsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
