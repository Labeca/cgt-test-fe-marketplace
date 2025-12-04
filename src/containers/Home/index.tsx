import ProductCard from "./components/ProductCard";
import { Product } from "@project_types/product";
import { FC, useCallback, useEffect, useState } from "react";
import { page_wrapper, product_container } from "./styles.css";

const Home:FC = () => {
    const [products, setProducts] = useState<Array<Product>>([]);

    const fetchProduct = useCallback (async () => {
        const response = await fetch('http://fakestoreapi.com/products', { method: 'GET' });
        if (!response.ok) {
            throw new Error('Failed to fetch weather');
        }

        setProducts(await response.json())
    }, []);

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <section className={page_wrapper}>
            <h1>
                You are probably interested in
            </h1>

            <section className={product_container}>
                {
                    products.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
            </section>
        </section>
    );
}

export default Home;