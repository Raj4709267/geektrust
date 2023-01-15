import * as types from "./actionType"

const getProductRequest=()=>{
    return {type:types.GET_PRODUCT_REQUEST}
}

const getProductSuccess=(payload)=>{
    return {
        type:types.GET_PRODUCT_SUCCESS,
        payload
    }
}

const getProductFailure=()=>{
    return {type:types.GET_PRODUCT_FAILURE}
}

export {getProductFailure,getProductRequest,getProductSuccess}