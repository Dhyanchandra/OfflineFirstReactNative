import {ADD_TO_CART, DECREASE_TO_CART, REMOVE_TO_CART,INCREASE_TO_CART} from './constants'
const initialState = [];

export const reducer=(state=initialState,action)=>{
 
    switch(action.type){
        case ADD_TO_CART:
            return [...state,action.data]
        case REMOVE_TO_CART:
            let result = state.filter((element)=>{
                return element.id !== action.data
            })
            return [...result]
        case DECREASE_TO_CART:
            let result1 = state.map(item => {
                if (item.id === action.data) {
                    if (item.quantity > 1) {
                        return {
                        ...item,
                        quantity: item.quantity - 1,
                        };
                    }else{
                        let resulttt = state.filter((element)=>{
                            return element.id !== action.data
                            })
                            return [...resulttt]
                     }
                }
                return item;
            }).filter(item => item !== null);
            return [...result1]
        case INCREASE_TO_CART:
           let result2 = state.map(item => {
                if (item.id === action.data) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
                }
                return item;
            });
            return [...result2]
        default:
            return state

    }
}