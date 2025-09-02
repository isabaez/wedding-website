import localFont from "next/font/local";
import "@components/global/globals.scss";

const hamiltonScript = localFont({
  src: '/fonts/hamilton-script.woff2',
  weight: '400',
  style: 'normal',
  preload: true,
  fallback: ['serif'],
  display: 'swap',
  variable: '--font-hamilton-script',
})

const aguilaThin = localFont({
  src: '/fonts/latinotype-aguila-thin.woff2',
  weight: '100',
  style: 'normal',
  preload: true,
  fallback: ['sans-serif'],
  display: 'swap',
  variable: '--font-aguila-thin',
})

export const metadata = {
  title: "Uri & Brianna's Wedding - May 2, 2026",
  description: "Wedding details, dress code, registry, RSVP form, and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hamiltonScript.variable} ${aguilaThin.variable}`}>
        {children}
      </body>
    </html>
  );
}
