/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";
import { products, drinks, addons } from "../db/data";
import { cartReducer, extrasReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const kfcProducts = products.map((prods) => ({
    id: prods.id,
    title: prods.title,
    slug: prods.slug,
    image: prods.image,
    description: prods.description,
    price: prods.price,
    stock: prods.stock,
    category: prods.category,
    quantity: 1
  }));

  const kfcAddons = addons.map((addon) => ({
    id: addon.id,
    name: addon.name,
    price: addon.price,
  }))

  const [state, dispatch] = useReducer(cartReducer, {
    products: kfcProducts,
    cart: [],
  });

  const [stateExtras, dispatchExtras] = useReducer(extrasReducer, {
    drinks: drinks,
    addons: kfcAddons,
    extras: []
  });

  return (
    <Cart.Provider value={{ state, dispatch, stateExtras, dispatchExtras }}>
      {/* Inside of this Cart.Provider will wrap whole of a React App. */}
      {/* This {children} come from index.js because this is the point where the app start. */}
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
