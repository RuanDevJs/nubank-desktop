import Cashback from "@/components/Promocao/Cashback";
import Heading from "@/components/Promocao/Heading";
import BlackFriday from "@/components/Promocao/BlackFriday";
import Shopping from "@/components/Promocao/Shopping";
import Category from "@/components/Promocao/Category";
import Iphone from "@/components/Promocao/Iphone";
import Renovation from "@/components/Promocao/Renovation";
import PortableAppliances from "@/components/Promocao/PortableAppliances";
import Cupons from "@/components/Promocao/Cupons";
import Laptop from "@/components/Promocao/Laptop";

import Pokemon from "@/assets/Promocao/GiftCards/Pokemon.png";
import Nintendo from "@/assets/Promocao/GiftCards/Nitendo.svg";

import Microsoft from "@/assets/Promocao/GiftCards/Microsoft.png";
import Xbox from "@/assets/Promocao/GiftCards/Xbox.svg";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
      <PortableAppliances />
      <Cupons />
      <Laptop />
      <div id="gifts-cards" className="w-[99%] mt-6">
        <h3 className="grid grid-cols-[auto_1fr] gap-3 items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">
          Gifts Cards
        </h3>
        <p className="font-light text-2xl text-zinc-100 mt-2.5">Descontos para você economizar</p>
        <div id="grid-gift-cards" className="mt-3 grid grid-cols-2 gap-5">
          <div className="bg-[#ECECEC] rounded h-[180px] 2xl:h-auto">
            <div className="flex items-center gap-14 h-full">
              <div className="relative">
                <Image
                  src={Pokemon}
                  alt=""
                  quality={80}
                  className="object-cover w-full h-[180px] 2xl:h-auto"
                  draggable={false}
                />
                <div className="absolute top-12 -right-10 2xl:top-[32%]">
                  <Image
                    src={Nintendo}
                    width={80}
                    height={80}
                    alt=""
                    quality={80}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-sm text-black font-medium 2xl:text-lg">Gift cards com até</p>
                  <p className="text-[#4E0578] font-medium text-2xl 2xl:text-5xl">
                    <span className="text-6xl font-medium 2xl:text-8xl">16%</span> de <br />desconto
                  </p>
                </div>
              </div>
              <button className="bg-[#4E0578] p-2 rounded-full hover:brightness-125 transition ease-in-out cursor-pointer 2xl:p-5 2xl:left-10 relative">
                <ArrowRight size={25} />
              </button>
            </div>
          </div>
          <div className="bg-[#ECECEC] rounded h-[180px] 2xl:h-auto">
            <div className="flex items-center gap-14 h-full">
              <div className="relative">
                <Image
                  src={Microsoft}
                  alt=""
                  quality={80}
                  className="object-cover w-full h-[180px] 2xl:h-auto"
                  draggable={false}
                />
                <div className="absolute top-12 -right-10 2xl:top-[32%]">
                  <Image
                    src={Xbox}
                    width={80}
                    height={80}
                    alt=""
                    quality={80}
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <p className="text-sm text-black font-medium 2xl:text-lg">Gift cards com até</p>
                  <p className="text-[#4E0578] font-medium text-2xl 2xl:text-5xl">
                    <span className="text-6xl font-medium 2xl:text-8xl">12%</span> de <br />desconto
                  </p>
                </div>
              </div>
              <button className="bg-[#4E0578] p-2 rounded-full hover:brightness-125 transition ease-in-out cursor-pointer 2xl:p-5 2xl:left-10 relative">
                <ArrowRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
