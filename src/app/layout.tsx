import RigthBar from "@/components/RigthBar";
import "./globals.css";
import LeftBar from "@/components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-2 flex justify-between px-2">
          <div className="w-auto xsm:max-w-36 sm:pr-1">
            <LeftBar />
          </div>
          <div className="flex-1 border-x-1 text-center mx-2">{children}</div>
          <div className="">
            <RigthBar />
          </div>
        </div>
      </body>
    </html>
  );
}
