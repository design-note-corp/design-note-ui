import "../styles/globals.scss";
import { themeClass } from "../styles/theme.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={themeClass}>
      <Component {...pageProps} />
    </div>
  );
}
