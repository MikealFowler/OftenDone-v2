
import "./global.css";


export const metadata = {
  title: "OftenDone Services",
  description: "OftenDone Services offers reliable, modern solutions for your everyday needs — from Errand running to Technology help.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
