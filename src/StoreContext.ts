import React from "react";
import { storeType } from "./App";





const StoreContext = React.createContext<storeType | undefined>(undefined);

export default StoreContext;