import Cashback from "@/components/Promocao/Cashback";
import Heading from "@/components/Promocao/Heading";

import Iphone from "@/assets/Promocao/BlackFriday/Iphone.png";
import ArCondicionado from "@/assets/Promocao/BlackFriday/Ar Condicionado.png";

import NubankLogo from "@/assets/Promocao/BlackFriday/nubank Logo.svg";

import Image from "next/image";

export default function Promocao() {
  return (
    <div>
      <Heading />
      <Cashback />
      <div id="black-friday" className="w-[99%] mt-10 grid grid-cols-2 gap-5 items-stretch">
        <div className="2xl:h-full bg-[#ECECEC] rounded relative overflow-hidden hover:-translate-y-5 hover:brightness-105 cursor-pointer transition ease-in-out">
          <div className="grid grid-cols-[auto_1fr] h-full">
            <div className="h-full relative z-10 p-3 2xl:p-5">
              <div className="flex gap-3">
                <h1 className="text-xl 2xl:text-2xl font-medium uppercase text-white">
                  Black Friday
                </h1>
                <Image src={NubankLogo} width={32} height={32} alt="" />
              </div>
              <p className="text-2xl 2xl:text-3xl font-light text-white my-3">
                Seu novo Iphone <br /> em <span className="font-medium">até 24x</span>
              </p>
              <button
                className="font-normal text-sm 2xl:text-lg bg-[#B30FE2] py-1 px-2.5 rounded-full transition ease-in-out hover:brightness-110 cursor-pointer"
              >
                Comprar agora
              </button>
            </div>
            <div className="h-full flex flex-col justify-end items-end">
              <Image
                src={Iphone.src}
                alt=""
                className="relative z-10 object-cover w-[100%] 2xl:w-[100%] h-[80%] 2xl:h-full"
                width={Iphone.width}
                height={Iphone.height}
                draggable="false"
              />
            </div>
          </div>
          <div className="bg-[#BE87FF] w-[572px] h-[572px] rounded-full absolute -top-16 -left-50 z-1" />
        </div>
        <div className="2xl:h-full bg-[#ECECEC] rounded relative overflow-hidden hover:-translate-y-5 hover:brightness-105 cursor-pointer transition ease-in-out">
          <div className="grid grid-cols-[auto_1fr] h-full">
            <div className="h-full relative z-10 p-3 2xl:p-5">
              <div className="flex gap-3">
                <h1 className="text-xl 2xl:text-2xl font-medium uppercase text-black">
                  Black Friday
                </h1>
                <Image src={NubankLogo} width={32} height={32} alt="" />
              </div>
              <div className="my-3">
                <p className="text-2xl 2xl:text-3xl font-normal text-black">
                  Ar condicionado para <br /> curtir o verão
                </p>
                <p className="w-full flex items-end gap-1 text-sm font-normal text-[#B30FE2] mt-1.5">
                  R$ <span className="text-5xl font-bold">120</span> <span className="text-xs text-zinc-900 font-normal">sem juros <br /> e frete</span>
                </p>
              </div>
              <button
                className="mt-2 font-normal text-sm 2xl:text-lg bg-[#B30FE2] py-1 px-2.5 rounded-full transition ease-in-out hover:brightness-110 cursor-pointer"
              >
                Comprar agora
              </button>
            </div>
            <div className="h-full flex flex-col justify-end items-end">
              <Image
                src={ArCondicionado.src}
                alt=""
                className="relative z-10 object-cover w-[100%] 2xl:w-[100%] h-[80%] 2xl:h-full"
                width={220}
                height={220}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
