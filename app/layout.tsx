import "../styles/globals.css";
import "../styles/dist.css";
import Title from "./title";
import Menu from "./menu";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <head />
      <body>
        <Title />
        <Menu />
        {children}
      </body>
    </html>
  );
}
