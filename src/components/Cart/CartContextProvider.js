import React, { useReducer, createContext } from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false
}

const sumItems = (items) =>{
    const itemsCounter= items.reduce((total,product) => total+product.quantity , 0 )
    const total = items.reduce((total,product)=> total+ (product.price*product.quantity),0);
    return{itemsCounter,total}

}
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1,
                })
            }

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkOut:false
                
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        case "INCREASE_ITEM":
            const indexItem = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexItem].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREACE_ITEM":
            const indexItemD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexItemD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: true,
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkOut: false,
            }
            
        default:
            return state;
            
    }
}

export const CartContext = createContext();

const CartContextProvider = (props) => {
    
    const [state , dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{  state, dispatch }}>

            {props.children}

        </CartContext.Provider>
    )


};

export default CartContextProvider;