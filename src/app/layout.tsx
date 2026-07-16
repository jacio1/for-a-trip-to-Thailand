'use client'

import "./global.css";
import { I18nProvider } from "./providers/i18n-provider";

<<<<<<< HEAD

export const metadata: Metadata = {
  title: "Jacio1 hardcoded",
  description: "Redmorrayne is god tier dev",
};
=======
import NavigationBar from "../components/NavigationBar";
import { usePathname } from "next/navigation";
>>>>>>> ed5f3b9393eb4c999d518737f28a0704c49e4d5f

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hiddenPaths = ["/signin", "/signup"];
  const shouldShowNavbar = !hiddenPaths.includes(pathname);

  return (
    <html lang="en" data-theme="dark" className="w-full h-full">
      <body className="w-full h-full flex items-center justify-center bg-[#202020]">
        <div className="w-full h-full max-w-120 max-h-240 relative bg-(--page-bg) overflow-hidden">
          <div className="h-full pb-20 overflow-y-auto">
            <I18nProvider>{children}</I18nProvider>
          </div>

          {shouldShowNavbar && <NavigationBar />}
        </div>
      </body>
    </html>
  );
}
