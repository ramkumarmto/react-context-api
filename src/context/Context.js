import { createContext } from "react";

const initaialVal = {
    "username" : "ramkumar",
    "password" : "123456"
}

export const userContext = createContext(initaialVal);