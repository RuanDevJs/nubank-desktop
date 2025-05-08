import Image, { StaticImageData } from "next/image";
import { ArrowDown } from "lucide-react";

import Playstation from "@/assets/Promocao/Shopping/Playstation.png";
import PlaystationDisk from "@/assets/Promocao/Shopping/Playstation 5 Slim Disk.png";
import Smartphone from "@/assets/Promocao/Shopping/Smartphone.png";
import Headphone from "@/assets/Promocao/Shopping/Headphone.png";
import JogoDePanela from "@/assets/Promocao/Shopping/JogoDePanela.png";
import Ventilador from "@/assets/Promocao/Shopping/Ventilador.png";

import AppleSvg from "@/assets/Promocao/Shopping/Apple.svg"

interface IProps {
  data: {
    original_price: string;
    discount_price: string;
    description: string;
  }
  image: StaticImageData;
}

const PRODUTOS: IProps[] = [
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "PlayStation 5 Slim Edição Digital com 2 Jogos"
    },
    image: Playstation
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "PlayStation 5 Slim Disk + 2 Jogos"
    },
    image: PlaystationDisk
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "Smartphone Motorola MotoG31 128GB Grafite"
    },
    image: Smartphone
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "JBL, Fone de Ouvido On ear, Tune 520BT - Preto"
    },
    image: Headphone
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "Conjunto de Panelas 10 Peças Tramontina Turim com Revestimento Antiaderente"
    },
    image: JogoDePanela
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "Ventilador de Coluna Britânia BVT450 Maxx Force 160 W"
    },
    image: Ventilador
  },
]

function Produto({ data, image }: IProps) {
  return (
    <div>
      <div>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          quality={80}
          className="w-full object-cover"
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
          <span className="w-fit text-xs text-[#B30FE2] font-medium bg-[#2E054B] px-3 py-1 rounded">CASHBACK DE R$ 35,99</span>
        </div>
        <p className="mt-3 text-sm 2xl:text-xs font-normal text-zinc-200">{data.description}</p>
        <span className="mt-3 flex items-center justify-center gap-1.5 w-fit text-xs text-zinc-200 font-normal bg-[#2C2C2C] px-2.5 py-1.5 rounded-full">
          <Image src={AppleSvg} width={20} height={20} quality={80} className="object-cover" alt="" />
          Apple no Nubank
        </span>
      </div>
    </div>
  )
}

export default function Shopping() {
  return (
    <div id="shopping" className="mt-7 w-[99%]">
      <h3 className="grid grid-cols-[auto_auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Shopping do Nu <span className='ml-1.5 mr-3 font-bold text-[#B30FE2]'>indica </span></h3>
      <p className="font-light text-2xl text-zinc-100 mt-2.5">As melhores ofertas do momento</p>
      <div className="grid gap-7 grid-cols-3 2xl:grid-cols-6 items-start mt-3">
        {PRODUTOS.map(produto => <Produto image={produto.image} data={produto.data} key={produto.data.description} />)}
      </div>
    </div>
  )
}
