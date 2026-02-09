import { useReducer } from "react";
import { WishlistContext } from '../Context';

const WishlistProvider = ({ children }) => {

    const WishlistReducer = (state, action) => {
        // console.log(JSON.stringify(state));
        // console.log(JSON.stringify(action));
        const { type, payload } = action;
        switch (type) {
            case "ADD_TO_WISHLIST":
                return {
                    ...state,
                    wishlistItems: [...state.wishlistItems, {
                        id: payload.id,
                        title: payload.title,
                        thumbnail: payload.thumbnail,
                        price: payload.price,
                    }]
                }
            case "REMOVE_FROM_WISHLIST":
                return {
                    ...state,
                    wishlistItems: state.wishlistItems.filter((item) => item.id !== payload)
                }
            default:
                return state;
        }
    }
    const [WishlistState, WishlistDispatch] = useReducer(WishlistReducer,
        {
            userId: 1,
            wishlistItems: [],
        }
    )
    return (
        <WishlistContext.Provider value={{WishlistState, WishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}
export default WishlistProvider;