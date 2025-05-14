import Image, { StaticImageData } from "next/image";

import { ArrowDown } from "lucide-react";
import AppleSvg from "@/assets/Promocao/Shopping/Apple.svg"

interface IProps {
  data: {
    original_price: string;
    discount_price: string;
    description: string;
    hasCashback?: boolean;
  }
  image: StaticImageData;
}

export default function Product({ data, image }: IProps) {
  return (
    <div className="product">
      <div>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          quality={80}
          className="w-full object-cover rounded-2xl"
          alt=""
          draggable={false}
        />
      </div>
      <div className="flex items-center justify-between mt-3 mb-0.5">
        <h3 className="text-base font-normal text-zinc-500"><s>{data.original_price}</s></h3>
        <div className="flex items-center justify-center gap-1 rounded-full w-14 py-0.5 bg-[#2C2C2C]">
          <ArrowDown size={18} />
          <span className="text-sm font-normal">10%</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium text-white mb-2">{data.discount_price}</h3>
        <div className="flex flex-col items-start gap-3">
          <span className="w-fit text-xs text-zinc-300 font-medium bg-[#2C2C2C] px-3 py-1 rounded">No débito</span>
          {
            data.hasCashback && <span className="w-fit text-xs text-[#B30FE2] font-medium bg-[#2E054B] px-3 py-1 rounded">CASHBACK DE R$ 35,99</span>
          }
        </div>
        <p className="mt-3 text-sm 2xl:text-xs font-normal text-zinc-200 sm:line-clamp-2">{data.description}</p>
        <span className="mt-3 flex items-center justify-center gap-1.5 w-fit text-xs text-zinc-200 font-normal bg-[#2C2C2C] px-2.5 py-1.5 rounded-full">
          <Image src={AppleSvg} width={20} height={20} quality={80} className="object-cover" alt="" />
          Apple no Nubank
        </span>
      </div>
    </div>
  )
}