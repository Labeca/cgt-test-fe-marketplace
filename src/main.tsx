import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home';
import Product from './pages/product';
import Cart from './pages/cart';
import { initializeMocking } from '@mocks/browser';
import { CartProvider } from '@hooks/cart';
import reportWebVitals from './reportWebVitals';

async function init () {
  await initializeMocking();
  const rootElement = document.getElementById('root');
  if (rootElement !== null) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    );
  }
}

init();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
