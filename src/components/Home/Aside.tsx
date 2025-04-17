'use client';

import { Barcode, CircleDollarSign, Home, Search, Banknote, Smartphone, PiggyBank, BadgePercent, Gift } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";

const activeLink = tv({
  base: "flex gap-2 mt-5 items-center text-zinc-300 transition ease-in-out",
  variants: {
    active: {
      true: "border-l-3 py-2 px-3 bg-[#0F0F0F] text-white rounded-tr rounded-br border-[#820AD1]",
      false: "border-l-3 bg-transparent border-transparent rounded-tr rounded-br"
    }
  }
})

export default function Aside() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <aside className="w-full">
      <nav className="h-full">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center gap-2.5 rounded-full border-2 border-white px-2.5 py-1.5">
            <button className="outline-none cursor-pointer">
              <Search size={25} />
            </button>
            <input className="w-full outline-none font-normal text-sm 2xl:text-base text-zinc-100" placeholder="Busque aqui o que desejar" />
          </div>
        </div>
        <ul>
          <li className="border-b-1 border-zinc-500 pb-7">
            <h2 className="text-lg font-medium uppercase py-5">Menu</h2>
            <div>
              <Link href="/home" className={activeLink({ active: isActiveLink("/home"), className: "mt-0" })}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Home size={20} color="#d4d4d8" />
                </div>
                <span className="font-normal text-base text-zinc-300">Inicio</span>
              </Link>
              <Link href="/home/area-pix" className={activeLink({ active: isActiveLink("/home/area-pix") })}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <CircleDollarSign color="#d4d4d8" size={20} />
                </div>
                <span className="font-normal text-base text-zinc-300">Área Pix</span>
              </Link>
              <Link href="/home/pagamentos" className={activeLink({ active: isActiveLink("/home/pagamentos") })}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Barcode color="#d4d4d8" size={20} />
                </div>
                <span className="font-normal text-base text-zinc-300">Pagar</span>
              </Link>
              <Link href="/home/emprestimos" className={activeLink({ active: isActiveLink("/home/emprestimos") })}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Banknote color="#d4d4d8" size={20} />
                </div>
                <span className="font-normal text-base text-zinc-300">Pegar emprestado</span>
              </Link>
              <Link href="/home/transferencia" className={activeLink({ active: isActiveLink("/home/transferencia") })}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Banknote color="#d4d4d8" size={20} />
                </div>
                <span className="font-normal text-base text-zinc-300">Transferir</span>
              </Link>
              <Link href="/home/recarga-celular" className={activeLink({ active: isActiveLink("/home/recarga-celular") })}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Smartphone color="#d4d4d8" size={20} />
                </div>
                <span className="font-normal text-base text-zinc-300">Recarga de celular</span>
              </Link>
            </div>
          </li>
          <li className="border-b-1 border-zinc-500 pb-7">
            <h2 className="text-lg font-medium uppercase py-5">Investimentos</h2>
            <div>
              <Link href="/home/caixinha" className={activeLink({ active: isActiveLink("/home/caixinha") })} style={{ marginTop: 0 }}>
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <PiggyBank color="#d4d4d8" size={20} />
                </div>
                <span className="font-normal text-base text-zinc-300">Caixinhas e investir</span>
              </Link>
            </div>
          </li>
          <li>
            <h2 className="text-lg font-medium uppercase py-5">Shopping</h2>
            <div>
              <div className="flex gap-2 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <BadgePercent color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Promoções</Link>
              </div>
            </div>
          </li>
          <li className="mt-10 flex items-center gap-3">
            <div className="bg-[#2C2C2C] w-14 h-14 flex items-center justify-center rounded-full">
              <Gift size={30} color="#B30FE2" />
            </div>
            <h2 className="text-sm text-white font-normal">Convide todo mundo <br /> para o Nu: Coisa boa a <br /> gente compartilha.</h2>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
