import * as types from './actionType'

const reducer=(state,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_PRODUCT_SUCCESS:{
            return {...state,products:payload,display:payload}
        }
        case "ADD_FILTER_DATA":{
            return {...state,display:payload}
        }
        case "ADD_TO_CART":{
            return {...state,cart:[...state.cart,...payload]}
        }
        case "CHANGE_QUANT":{
            return {...state,cart:[...payload]}
        }
        case "ITEM_DELETE":{
            return {...state,cart:payload}
        }   
        default: return state
    }

}

export {reducer}