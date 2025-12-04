import { NavLink } from 'react-router-dom';
import { container, wrapper, logo, menu, menu_item, menu_item_active, menu_item_counter, shopping_cart_style } from './styles.css'
import { useCart } from '@hooks/cart';
import { ShoppingCartOutlined } from "@ant-design/icons"

const Menu = () => {
    const { items } = useCart();

    return (
        <header className={wrapper}>
            <section className={container}>
                <span className={logo}>90s shop</span>
                <nav className={menu}>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? menu_item_active : menu_item}
                    >
                        Home
                    </NavLink>
                    <NavLink to="/cart"
                        className={({ isActive }) => isActive ? `${menu_item_active} ${shopping_cart_style}` : `${menu_item} ${shopping_cart_style}`}
                    >
                        <ShoppingCartOutlined />
                        {items.size > 0  && (<span className={menu_item_counter}> {items.size} </span>)}
                    </NavLink>
                </nav>
            </section>
        </header>
    );
}

export default Menu;