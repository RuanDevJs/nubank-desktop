import Playstation from "@/assets/Promocao/Shopping/Playstation.png";
import PlaystationDisk from "@/assets/Promocao/Shopping/Playstation 5 Slim Disk.png";
import Smartphone from "@/assets/Promocao/Shopping/Smartphone.png";
import Headphone from "@/assets/Promocao/Shopping/Headphone.png";
import JogoDePanela from "@/assets/Promocao/Shopping/JogoDePanela.png";
import Ventilador from "@/assets/Promocao/Shopping/Ventilador.png";

import Product from "./Product";

const PRODUTOS = [
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "PlayStation 5 Slim Edição Digital com 2 Jogos",
      hasCashback: true
    },
    image: Playstation
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "PlayStation 5 Slim Disk + 2 Jogos",
      hasCashback: true
    },
    image: PlaystationDisk
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "Smartphone Motorola MotoG31 128GB Grafite",
      hasCashback: true
    },
    image: Smartphone
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "JBL, Fone de Ouvido On ear, Tune 520BT - Preto",
      hasCashback: true
    },
    image: Headphone
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "Conjunto de Panelas 10 Peças Tramontina Turim com Revestimento Antiaderente",
      hasCashback: true
    },
    image: JogoDePanela
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 4.769,10",
      description: "Ventilador de Coluna Britânia BVT450 Maxx Force 160 W",
      hasCashback: true
    },
    image: Ventilador
  },
]

export default function Shopping() {
  return (
    <div id="shopping" className="mt-7 w-[99%]">
      <h3 className="grid grid-cols-[auto_auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Shopping do Nu <span className='ml-1.5 mr-3 font-bold text-[#B30FE2]'>indica </span></h3>
      <p className="font-light text-2xl text-zinc-100 mt-2.5">As melhores ofertas do momento</p>
      <div className="grid gap-7 grid-cols-3 2xl:grid-cols-6 items-start mt-3">
        {PRODUTOS.map(produto => <Product image={produto.image} data={produto.data} key={produto.data.description} />)}
      </div>
    </div>
  )
}
