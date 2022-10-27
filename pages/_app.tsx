import "../styles/globals.css";
import type { AppProps } from "next/app";
// Contexts
import { AlertProvider } from "../modules/shared/context";
import { UIProvider } from "@modules/13-Stripe-Menu/context/uiContext";
import { CartProvider } from "@modules/14-Cart/context/cartContext";

const MyProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <CartProvider>
      <UIProvider>
        <AlertProvider>{children}</AlertProvider>
      </UIProvider>
    </CartProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProviders>
      <Component {...pageProps} />
    </MyProviders>
  );
}

export default MyApp;
