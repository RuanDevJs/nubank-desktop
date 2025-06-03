import { ArrowRight } from "lucide-react";

import Shopee from "@/assets/Promocao/Look/Shopee.jpg";
import MagicFeet from "@/assets/Promocao/Look/MagicFeet.jpg";
import Reserva from "@/assets/Promocao/Look/Reserva.jpg";
import Hering from "@/assets/Promocao/Look/Hering.jpg";
import Image from "next/image";

export default function Look() {
  return (
    <div id="portable-appliances" className="w-[99%] mt-7">
      <div id="portable appliances-heading">
        <div className="grid grid-cols-[1fr_auto] gap-3.5 items-center">
          <h3 className="grid gap-3 grid-cols-[auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Complete o look</h3>
          <div className="flex items-center group">
            <button className="bg-[#0F0F0F] border border-[#909090] py-1.5 px-3 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out ">Mostrar mais</button>
            <button className="bg-[#0F0F0F] border border-[#909090] p-1 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out">
              <ArrowRight size={25} />
            </button>
          </div>
        </div>
        <p className="font-light text-2xl text-zinc-100">As melhores marcas para você</p>
      </div>
      <div className="grid grid-cols-2 items-start gap-5 mt-5">
        <div className="flex items-center gap-5">
          <div>
            <Image src={Shopee.src} width={Shopee.width} height={Shopee.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-light">Shopee</p>
            <h2 className="text-xl text-zinc-100 font-medium mt-1">3,5% de <br /> cashback</h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Image src={MagicFeet.src} width={MagicFeet.width} height={MagicFeet.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-light">Magic Feet</p>
            <h2 className="text-xl text-zinc-100 font-medium mt-1">5% de <br /> cashback</h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Image src={Reserva.src} width={Reserva.width} height={Reserva.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-light">Reserva</p>
            <h2 className="text-xl text-zinc-100 font-medium mt-1">1,5% de <br /> cashback</h2>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Image src={Hering.src} width={Hering.width} height={Hering.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
          </div>
          <div>
            <p className="text-sm text-zinc-500 font-light">Hering Outlet</p>
            <h2 className="text-xl text-zinc-100 font-medium mt-1">1% de <br /> cashback</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
