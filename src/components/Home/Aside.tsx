import { Barcode, CircleDollarSign, Home, Search, Banknote, Smartphone, PiggyBank, BadgePercent, Gift } from "lucide-react";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="w-full">
      <nav className="h-full">
        <div className="flex flex-col justify-center items-center">
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
              <div className="flex gap-2 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Home color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Inicio</Link>
              </div>
              <div className="flex gap-2 mt-5 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <CircleDollarSign color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Área Pix</Link>
              </div>
              <div className="flex gap-2 mt-5 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Barcode color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Pagar</Link>
              </div>
              <div className="flex gap-2 mt-5 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Banknote color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Pegar emprestado</Link>
              </div>
              <div className="flex gap-2 mt-5 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Banknote color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Transferir</Link>
              </div>
              <div className="flex gap-2 mt-5 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <Smartphone color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Recarga de celular</Link>
              </div>
            </div>
          </li>
          <li className="border-b-1 border-zinc-500 pb-7">
            <h2 className="text-lg font-medium uppercase py-5">Investimentos</h2>
            <div>
              <div className="flex gap-2 items-center">
                <div className="border p-1 rounded-full hover:bg-zinc-800 cursor-pointer transition ease-in-out">
                  <PiggyBank color="#d4d4d8" size={20} />
                </div>
                <Link href="#" className="font-normal text-base text-zinc-300">Caixinhas e investir</Link>
              </div>
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
