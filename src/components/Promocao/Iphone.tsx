import Image from "next/image";
import Product from "@/components/Promocao/Product";

import IphoneWallpaper from "@/assets/Promocao/Iphone/Iphones.jpg";
import Iphone16_128GB from "@/assets/Promocao/Iphone/Apple iPhone 16 (128GB) - Preto.png";
import Iphone16_256GB from "@/assets/Promocao/Iphone/Apple iPhone 16 (256GB) - Preto.png";
import Iphone14_128GB from "@/assets/Promocao/Iphone/Apple iPhone 14 (128GB) - Meia noite.png";
import Iphone14_256GB from "@/assets/Promocao/Iphone/Apple iPhone 16 (256GB) - Preto.png";

const PRODUCT = [
  {
    data: {
      original_price: "R$ 7.799,00",
      discount_price: "R$ 6.629,00",
      description: "Apple iPhone 16 (128GB) - Preto",
    },
    image: Iphone16_128GB
  },
  {
    data: {
      original_price: "R$ 4.711,78",
      discount_price: "R$ 4.205,00",
      description: "Apple iPhone 16 (256GB) - Preto",
    },
    image: Iphone16_256GB
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 3.577,00",
      description: "Apple iPhone 14 (128GB) - Meia noite",
    },
    image: Iphone14_128GB
  },
  {
    data: {
      original_price: "R$ 11.299,00",
      discount_price: "R$ 9.604,15",
      description: "Apple iPhone 16 Pro (256GB) - Titânio Preto",
    },
    image: Iphone14_256GB
  },
]

export default function Iphone() {
  return (
    <div id="iphone" className="mt-5 w-[99%]">
      <h3 className="grid grid-cols-[auto_1fr] gap-3 items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Seu novo iPhone em até 24x</h3>
      <p className="font-light text-2xl text-zinc-100 mt-2.5">Aproveite a condição especial para você.</p>
      <div className="w-full h-auto bg-white rounded-lg mt-3">
        <div className="grid items-center grid-cols-[minmax(380px_,auto)_1fr]">
          <h2 className="text-2xl 2xl:text-4xl text-black font-normal p-7 2xl:leading-12">Escolha o seu novo <br /> iPhone com frete grátis.</h2>
          <Image
            src={IphoneWallpaper}
            alt=""
            width={IphoneWallpaper.width}
            height={IphoneWallpaper.height}
            quality={80}
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
            draggable={false}
          />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {PRODUCT.map((product) => <Product data={product.data} image={product.image} key={product.data.description} />)}
      </div>
    </div>
  )
}
