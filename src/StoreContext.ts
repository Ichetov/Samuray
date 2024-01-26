import React from "react";
import { storeType } from "./App";
import { store } from "./components/redux/Store";




const StoreContext = React.createContext<storeType | undefined>(undefined);

export default StoreContext;