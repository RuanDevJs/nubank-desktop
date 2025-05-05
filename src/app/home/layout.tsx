"use client";

import Header from "@/components/Header";
import Aside from "@/components/Home/Aside";

import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

const rootLayoutVariant = tv({
  base: "grid grid-cols-[250px_2fr] 2xl:grid-cols-[300px_2fr] gap-5",
  variants: {
    defaultPage: {
      true: "py-8 px-5",
      false: "pt-1 pb-5"
    }
  }
});

const asideLayoutVariant = tv({
  variants: {
    defaultPage: {
      true: "",
      false: "pt-1 pb-5 ml-5 w-full"
    }
  }
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <div className={rootLayoutVariant({ defaultPage: pathname !== "/home/promocao" ? true : false })}>
        <div className={asideLayoutVariant({ defaultPage: pathname !== "/home/promocao" ? true : false })}>
          <Aside />
        </div>
        <main className="ml-10 -mt-1">
          {children}
        </main>
      </div>
    </div>
  )
}
