import { useReducer, useState } from "react";
import { createContext } from "react";
import { reducer } from "./StoreReducer";

const StoreContext=createContext();

const StoreContextProvider=({children})=>{
   
    const initialState={
        count:0,
        products:[],
        display:[],
        cart: []
    }


    const [state,dispatch]=useReducer(reducer,initialState)


    return(
        <StoreContext.Provider value={{state,dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreContext,StoreContextProvider}