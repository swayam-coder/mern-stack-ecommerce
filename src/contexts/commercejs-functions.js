import { createContext, useContext, useState } from "react";
import { commerce } from "../lib/commerce";

const commerceContext = createContext()

export function useCommerce() {
    return useContext(commerceContext)
}

export default function CommerceProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [favCart, setFavCart] = useState({});
    const [fav, setfav] = useState({});
    const [order, setOrder] = useState({});
    const [search ,setSearch] = useState("");

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productid, quantity) => {
        const response = await commerce.cart.add(productid, quantity);
        console.log(response.cart);
        setCart(response.cart);
    }

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
        setCart(response.cart);
    };
    
    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
        setCart(response.cart);
    };

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        console.log(newCart);
        setCart(newCart);
    };
    
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            console.log(order);
            refreshCart();
        } catch (error) {
            console.log(error);;
        }
    };

    const handleWishlist = async (productid, quantity) => {
        const Wishlist =  commerce.favCart.add(productid, quantity);
        setFavCart(Wishlist.favCart)
    }
    
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        setCart(response.cart);
    };

    const commercecontext = {
        fetchProducts,
        fetchCart,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
        handleCaptureCheckout,
        refreshCart,
        handleWishlist,
        handleEmptyCart,
        cart,
        products,
        favCart,
        fav,
        order,
        search,
    }

    return <commerceContext.Provider value={commercecontext}>
        {children}
    </commerceContext.Provider>
}