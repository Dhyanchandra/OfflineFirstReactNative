import {ADD_TO_CART,REMOVE_TO_CART,DECREASE_TO_CART,INCREASE_TO_CART} from './constants'

export const addToCart = (item)=>{
 return {
    type: ADD_TO_CART,
    data : item
 }
}
export const removeToCart = (item)=>{
 return {
    type: REMOVE_TO_CART,
    data : item
 }
}
export const increaseToItem = (item)=>{
 return {
    type: INCREASE_TO_CART,
    data : item
 }
}
export const decreaseToItem = (item)=>{
 return {
    type: DECREASE_TO_CART,
    data : item
 }
}