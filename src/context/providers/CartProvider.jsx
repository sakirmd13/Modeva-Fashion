import { useReducer } from "react";
import { CartContext } from "../Context";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: action.payload.qty }
              : item
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case "INCREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.qty < 5
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [CartState, CartDispatch] = useReducer(CartReducer, {
    cartItems: [],
  });

  return (
    <CartContext.Provider value={{ CartState, CartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
