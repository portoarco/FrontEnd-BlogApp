"use client";

import {Provider} from "react-redux";
import {ReactNode} from "react";
import {store} from "@/lib/redux/store"

interface IStoreProviderProps{
    children:ReactNode;
}

function StoreProvider(props:IStoreProviderProps){
    return <Provider store={store}>
        {props.children}
    </Provider>
}
export default StoreProvider;