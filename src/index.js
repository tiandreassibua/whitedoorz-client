import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
        <React.StrictMode>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    </CartProvider>
);
