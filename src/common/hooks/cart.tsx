import { Product } from "@project_types/product";
import React, { createContext, useContext, useEffect, useState } from "react";


export interface CartItem {
    product: Product;
    quantity: number;
}

const CartContext = createContext({
    items: new Map<string, CartItem>(),
    addItem: (product: Product) => {},
    removeItem: (id: string) => {},
    decreaseItem: (id: string) => {}
});

export interface CartProviderProps {
    children?: React.ReactNode;
}

const CartProvider = ({children}: CartProviderProps) => {
    const [items, setItems] = useState<Map<string, CartItem>>(new Map<string, CartItem>());

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart !== null) {
            setItems(new Map(JSON.parse(storedCart)))
            console.log(new Map(JSON.parse(storedCart)))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(Array.from(items)))
    },[items])


    const addItem = (product: Product) => {
        let quantity = 1;
        if (items.has(product.id)) {
            quantity = items.get(product.id)!.quantity + 1;
        }

        setItems(prev => new Map(prev.set(product.id, { product, quantity })))
    }

    const removeItem = (id: string) => {
        if (items.delete(id)) {
            setItems(new Map(items));
        }
    }

    const decreaseItem = (id: string) => {
        if (items.has(id)) {
            const cartItem = items.get(id)
            setItems(
                new Map(
                    items.set(
                        cartItem!.product.id, 
                        { product: cartItem!.product, quantity: cartItem!.quantity - 1}
                    )
                )
            );
        }
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, decreaseItem }}>
            {children}
        </CartContext.Provider>
    )
} 

const useCart = () => {
    return useContext(CartContext);
}

export { CartContext, useCart, CartProvider };