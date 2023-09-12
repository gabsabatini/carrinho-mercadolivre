import { createContext, Dispatch, SetStateAction } from "react";
import { ProductData } from "@/types/types";

export type ContextType = {
    products: ProductData[];
    setProducts: Dispatch<SetStateAction<ProductData[]>>; // Deve ser uma função que atualiza o estado de ProductData
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>; // Deve ser uma função que atualiza o estado booleano
};

const Context = createContext<ContextType | undefined>(undefined);

export default Context;