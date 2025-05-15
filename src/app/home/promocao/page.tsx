import Cashback from "@/components/Promocao/Cashback";
import Heading from "@/components/Promocao/Heading";
import BlackFriday from "@/components/Promocao/BlackFriday";
import Shopping from "@/components/Promocao/Shopping";
import Category from "@/components/Promocao/Category";
import Iphone from "@/components/Promocao/Iphone";
import Renovation from "@/components/Promocao/Renovation";
import PortableAppliances from "@/components/Promocao/PortableAppliances";

import Image from "next/image";

import Produtos from "@/assets/Promocao/Cupom/Produtos.png"

import Amazon from "@/assets/Promocao/Cashback/Amazon.svg"
import Aliexpress from "@/assets/Promocao/Cashback/Aliexpress.svg"
import MagazineLuiza from "@/assets/Promocao/Cashback/Magazine Luiza.svg"
import Shopee from "@/assets/Promocao/Cashback/Shopee.svg"

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
      <div id="cupons" className="mt-6 w-[99%]">
        <div>
          <h3 className="grid grid-cols-[auto_1fr] gap-3 items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Cupons exclusivos</h3>
          <p className="font-light text-2xl text-zinc-100 mt-2.5">Com desconto nas suas lojas favoritas.</p>
        </div>
        <div className="bg-[#ECECEC] max-w-[70%] 2xl:max-w-[50%] h-[200px] mx-auto mt-5 rounded">
          <div className="grid grid-cols-[250px_1fr] gap-10 h-full items-center">
            <div className="bg-[#B30FE2] rounded h-full p-5 relative">
              <div>
                <Image src={Produtos.src} width={Produtos.width} height={Produtos.height} quality={80} className="object-cover w-full h-full" alt="" />
              </div>
              <div className="w-[30px] h-[30px] bg-black rounded-full absolute top-[-10px] right-[50px]" />
              <div className="w-[30px] h-[30px] bg-black rounded-full absolute bottom-[-10px] right-[50px]" />
            </div>
            <div className="w-full">
              <div className="mb-3.5">
                <h2 className="text-2xl text-zinc-950 font-medium">Descontos incríveis e <br /> cupons exclusivos.</h2>
              </div>
              <div className="flex gap-3">
                <div>
                  <Image src={Amazon} width={50} height={50} quality={80} className="object-cover" alt="" />
                </div>
                <div>
                  <Image src={Aliexpress} width={50} height={50} quality={80} className="object-cover" alt="" />
                </div>
                <div>
                  <Image src={MagazineLuiza} width={50} height={50} quality={80} className="object-cover" alt="" />
                </div>
                <div>
                  <Image src={Shopee} width={50} height={50} quality={80} className="object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
