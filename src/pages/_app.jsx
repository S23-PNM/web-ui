import { Inter } from "next/font/google";
// eslint-disable-next-line import/no-unresolved
import "@/styles/globals.css";

const Font = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={Font.variable}>
      <section className="font-sans tracking-tighter">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </section>
    </main>
  );
}