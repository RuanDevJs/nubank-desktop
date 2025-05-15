import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Cashback from "@/components/Promocao/Cashback";
import Heading from "@/components/Promocao/Heading";
import BlackFriday from "@/components/Promocao/BlackFriday";
import Shopping from "@/components/Promocao/Shopping";
import Category from "@/components/Promocao/Category";
import Iphone from "@/components/Promocao/Iphone";
import Renovation from "@/components/Promocao/Renovation";

import LeCreuset from "@/assets/Promocao/Portable Appliances/Le Creuset.jpg";
import CasasBahia from "@/assets/Promocao/Portable Appliances/Casas Bahia.jpg";
import Midea from "@/assets/Promocao/Portable Appliances/Midea.jpg";
import Shopclub from "@/assets/Promocao/Portable Appliances/Shopclub.jpg";

export default function Promocao() {
  return (
    <div>
      <Heading />
      <Cashback />
      <BlackFriday />
      <Shopping />
      <Category />
      <Iphone />
      <Renovation />
      <div id="portable-appliances" className="w-[99%] mt-7">
        <div id="portable appliances-heading">
          <div className="grid grid-cols-[1fr_auto] gap-3.5 items-center">
            <h3 className="grid gap-3 grid-cols-[auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Confira os eletroportáteis</h3>
            <div className="flex items-center group">
              <button className="bg-[#0F0F0F] border border-[#909090] py-1.5 px-3 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out ">Mostrar mais</button>
              <button className="bg-[#0F0F0F] border border-[#909090] p-1 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out">
                <ArrowRight size={25} />
              </button>
            </div>
          </div>
          <p className="font-light text-2xl text-zinc-100">nas lojas parceiras do Shopping do Nu.</p>
        </div>
        <div className="grid grid-cols-2 items-start gap-5 mt-5">
          <div className="flex items-center gap-5">
            <div>
              <Image src={LeCreuset.src} width={LeCreuset.width} height={LeCreuset.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 font-light">Le Creuset</p>
              <h2 className="text-xl text-zinc-100 font-medium mt-1">3,5% de <br /> cashback</h2>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <Image src={CasasBahia.src} width={CasasBahia.width} height={CasasBahia.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 font-light">Casas Bahia</p>
              <h2 className="text-xl text-zinc-100 font-medium mt-1">5% de <br /> cashback</h2>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <Image src={Midea.src} width={Midea.width} height={Midea.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 font-light">Midea</p>
              <h2 className="text-xl text-zinc-100 font-medium mt-1">1,5% de <br /> cashback</h2>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <Image src={Shopclub.src} width={Shopclub.width} height={Shopclub.height} alt="" className="rounded-lg object-cover cursor-pointer" draggable={false} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 font-light">ShopClub</p>
              <h2 className="text-xl text-zinc-100 font-medium mt-1">1% de <br /> cashback</h2>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="bg-[#0F0F0F] border border-[#909090] py-2 px-5 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out text-lg">Ver mais lojas parceiras</button>
          <button className="bg-[#0F0F0F] border border-[#909090] p-1 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out">
            <ArrowRight size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}
