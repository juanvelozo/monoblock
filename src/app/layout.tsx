import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/ui/Tabs";
import { RoutesEnum, routes } from "@/constants/routes";
import { ILayoutDefaultProps } from "@/types/ui/layout/Layout.types";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: ILayoutDefaultProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          tabView={[
            { value: RoutesEnum.NOTES, icon: "🗒️", href: routes.notes },
            { value: RoutesEnum.PROFILE, icon: "👤", href: routes.profile },
          ]}
        />
        <div className="container m-auto h-[85vh]">
         
            {children}
    
        </div>
      </body>
    </html>
  );
}
