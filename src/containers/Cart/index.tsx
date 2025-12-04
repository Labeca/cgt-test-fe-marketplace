import { FC, useMemo } from "react";
import { page_wrapper, product_container, footer_style } from "./styles.css";
import { useCart } from "@hooks/cart";
import ProductItem from "./components/ProductItem";
import Price from "@components/Price";

const Home:FC = () => {

    const { items } = useCart();

    const renderItems = useMemo(() => {
        const components: React.ReactNode[] = []
        for(const {product, quantity} of items.values()) {
            components.push((<ProductItem product={product} quantity={quantity} key={product.id} />))
        }
        return components;
    }, [items])

    const getCartTotal = useMemo(() => {
        let total = 0
        for(const {product, quantity} of items.values()) {
            total += product.price * quantity
        }
        return total
    }, [items])

    return (
        <section className={page_wrapper}>
            <h1>
                Your shopping cart
            </h1>
            <ul className={product_container}>
                {renderItems}
            </ul>
            <hr />
            <p className={footer_style}>
                Total: <Price value={getCartTotal} size="lg" />
            </p>
        </section>
    );
}

export default Home;