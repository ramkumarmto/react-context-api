import { createContext } from "react";

const initaialVal = {
    "username" : "ramkumar",
    "password" : "123456"
}
// as much as context we can create 
export const userContext = createContext(initaialVal);
export const themeContext = createContext();