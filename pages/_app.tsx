import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Inter } from "@next/font/google";

import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
