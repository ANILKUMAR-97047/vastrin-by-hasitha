'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart:', error);
                setCart([]);
            }
        }
        setIsLoading(false);
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, isLoading]);

    const addToCart = (product, selectedSize, selectedColor, quantity) => {
        setCart((prevCart) => {
            // Check if product with same size and color already exists
            const existingItem = prevCart.find(
                (item) =>
                    item.id === product.id &&
                    item.size === selectedSize &&
                    item.color === selectedColor
            );

            if (existingItem) {
                // Update quantity if same product with same size and color
                return prevCart.map((item) =>
                    item.id === product.id &&
                    item.size === selectedSize &&
                    item.color === selectedColor
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Add as new item
                return [
                    ...prevCart,
                    {
                        id: product.id,
                        name: product.title,
                        price: parseFloat(product.price),
                        image: product.image,
                        size: selectedSize,
                        color: selectedColor,
                        quantity: quantity,
                    },
                ];
            }
        });
    };

    const removeFromCart = (productId, size, color) => {
        setCart((prevCart) =>
            prevCart.filter(
                (item) =>
                    !(item.id === productId && item.size === size && item.color === color)
            )
        );
    };

    const updateQuantity = (productId, size, color, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.size === size && item.color === color
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartCount,
                isLoading,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
