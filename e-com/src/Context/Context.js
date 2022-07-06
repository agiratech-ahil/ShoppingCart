import React, { createContext, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducer";

const Cart = createContext();
faker.seed(99);
export default function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    Description: faker.commerce.productDescription(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => {
  return useContext(Cart);
};
