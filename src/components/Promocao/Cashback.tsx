import CashbackAmazon from "@/assets/Promocao/Amazon.svg"
import CashbackCasasBahia from "@/assets/Promocao/Casas Bahia.svg"
import CashbackMagazineLuiza from "@/assets/Promocao/Magazine Luiza.svg"
import CashbackAliexpres from "@/assets/Promocao/Aliexpress.svg"
import CashbackShopee from "@/assets/Promocao/Shopee.svg"
import CashbackCarrefour from "@/assets/Promocao/Carrefour.svg"
import CashbackNike from "@/assets/Promocao/Nike.svg"
import CashbackAdidas from "@/assets/Promocao/Adidas.svg"
import CashbackKabum from "@/assets/Promocao/Kabum.svg"
import CashbackCentauro from "@/assets/Promocao/Centauro.svg"

import Image, { ImageProps } from "next/image"

interface ICashback {
  title: string;
  description: string;
  image: ImageProps;
}

const CASHBACKS: ICashback[] = [
  {
    title: "Amazon",
    description: "Até 3%",
    image: CashbackAmazon
  },
  {
    title: "Casas Bahia",
    description: "5%",
    image: CashbackCasasBahia
  },
  {
    title: "Magazine Luiza",
    description: "3%",
    image: CashbackMagazineLuiza
  },
  {
    title: "AliExpress",
    description: "2%",
    image: CashbackAliexpres
  },
  {
    title: "Shopee",
    description: "0,5%",
    image: CashbackShopee
  },
  {
    title: "Carrefour",
    description: "Até 3%",
    image: CashbackCarrefour
  },
  {
    title: "Nike",
    description: "Até 2,5%",
    image: CashbackNike
  },
  {
    title: "Adidas",
    description: "Até 3%",
    image: CashbackAdidas
  },
  {
    title: "Kabum",
    description: "Até 3%",
    image: CashbackKabum
  },
  {
    title: "Centauro",
    description: "Até 3%",
    image: CashbackCentauro

  },
]

export default function Cashback() {
  return (
    <div id="cashback" className='w-[99%] mt-5'>
      <h3 className="grid grid-cols-[auto_auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-medium text-white">Cashbacks da <span className='ml-1.5 mr-3 text-[#B30FE2]'> Black Friday </span></h3>
      <div className="grid grid-cols-10 gap-5 mt-2.5">
        {CASHBACKS.map((cashback) => (
          <div key={cashback.title} className='mt-3.5 transition ease-in-out hover:brightness-110 hover:bg-[rgba(0,0,0,0.64)] hover:-translate-y-2 cursor-pointer'>
            <div className='mb-1'>
              <Image src={cashback.image.src} width={80} height={80} quality={80} className='w-full h-full' draggable={false} alt={cashback.title} />
            </div>
            <h3 className='text-sm font-medium text-center py-1 text-white line-clamp-1'>{cashback.title}</h3>
            <p className='text-xs font-normal text-center text-zinc-400'>{cashback.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
