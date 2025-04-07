"use client";
import { JSX } from "react";
import Account from "@/components/Home/Account";

import {
  CreditCard,
  DollarSign,
  EyeClosed,
  Heart,
  IdCard,
  SquareArrowOutUpRight
}
  from "lucide-react";
import { Galleria } from "primereact/galleria";

import Slide1 from "@/assets/Home/Slide-1.jpg";
import Slide2 from "@/assets/Home/Slide-2.jpg";
import Slide3 from "@/assets/Home/Slide-3.jpg";
import Slide4 from "@/assets/Home/Slide-4.jpg";
import Slide5 from "@/assets/Home/Slide-5.jpg";
import Slide6 from "@/assets/Home/Slide-6.jpg";
import Image from "next/image";
import { Carousel } from "primereact/carousel";

const SLIDE_GALLERY = [
  {
    title: "Convide todo mundo para o Nu:",
    description: "Coisa boa a gente compartilha.",
    icon: <Heart fill="#B30FE2" size={28} color="#B30FE2" />
  },
  {
    title: "Você tem até R$ 20.000 disponíveis",
    description: "para empréstimo.",
    icon: <DollarSign size={32} color="#B30FE2" />
  },
  {
    title: "Traga seus dados e aumente sua",
    description: "chance de crédito",
    icon: <IdCard size={32} color="#B30FE2" strokeWidth={1} />
  }
]

function Gallery(props: { title: string, description: string, icon: JSX.Element }) {
  return (
    <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center">
      <h2 className="font-normal text-lg 2xl:text-xl text-zinc-100">
        {props.title} <br /> {props.description}
      </h2>
      <div className="bg-black h-12 w-12 flex items-center justify-center rounded-full cursor-pointer">
        {props.icon}
      </div>
    </div>
  )
}

const LearnMore = [
  {
    title: "Descubra NuCel",
    description: "Em breve, a experiência Nu também em planos de celular",
    image: Slide1
  },
  {
    title: "Seguro de vida",
    description: "Cuide de quem você ama de um jeito que cabe no seu bolso",
    image: Slide2
  },
  {
    title: "Área de Seguros Do Nu",
    description: "Toda proteção para você e para quem você ama num só lugar",
    image: Slide3
  },
  {
    title: "Indique Nu para amigos",
    description: "Espalhe como é simples estar no controle.",
    image: Slide4
  },
  {
    title: "Portabiidade de salário",
    description: "Liberdade é escolher onde receber o seu dinheiro",
    image: Slide5
  },
  {
    title: "WhatsApp",
    description: "Pagamentos seguros, rápidos e sem tarifa.",
    image: Slide6
  },

]

export default function Home() {
  return (
    <div id="grid-page-home" className="gap-5">
      <Account />
      <div id="information" className="animate-down">
        <Galleria
          value={SLIDE_GALLERY}
          showThumbnails={false}
          showIndicators
          showIndicatorsOnItem
          item={Gallery}
          autoPlay
        />
        <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center my-4">
          <div className="flex items-center gap-2">
            <CreditCard color="#fff" size={32} />
            <h2 className="font-normal text-xl text-zinc-100">Meus cartões</h2>
          </div>
          <button className='bg-[#820AD1] w-36 py-2.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-lg font-normal'>
            Saiba mais
          </button>
        </div>
        <div id="cards-home" className="grid grid-cols-3 gap-5 min-h-[190px]">
          <div className="w-full h-[220px]">
            <p className="grid grid-cols-[1fr_auto] gap-1.5 items-center before:block before:flex-1/2 before:h-[1px] before:bg-zinc-500 text-sm font-normal text-zinc-300">Cartões de crédito</p>
            <div className="bg-[#0F0F0F] h-full mt-2.5 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="2xl:text-2xl text-lg font-medium text-zinc-200">Fatura atual</h2>
                  <p className="text-xl font-normal text-zinc-200 mt-2">******</p>
                </div>
                <EyeClosed size={32} />
              </div>
            </div>
          </div>
          <div className="w-full h-[220px]">
            <p className="grid grid-cols-[1fr_auto] gap-1.5 items-center before:block before:flex-1/2 before:h-[1px] before:bg-zinc-500 text-sm font-normal text-zinc-300">Empréstimos</p>
            <div className="bg-[#0F0F0F] h-full mt-2.5 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="2xl:text-2xl text-lg font-medium text-zinc-200">Valor disponível <br /> de até</h2>
                  <p className="text-xl font-normal text-zinc-200 mt-2">******</p>
                </div>
                <EyeClosed size={32} />
              </div>
            </div>
          </div>
          <div className="w-full h-[250px] rounded-lg p-5 bg-[#4E0578] relative">
            <h2 className="2xl:text-2xl text-lg font-medium text-zinc-200">Planeje as suas contas</h2>
            <p className="text-base font-normal text-zinc-300 mt-2">Acompanhe, pague e programe com a ajuda do Assistente de pagamentos.</p>
            <button className="bg-black h-12 w-12 flex items-center justify-center absolute bottom-0 right-0 rounded-tl-lg cursor-pointer">
              <SquareArrowOutUpRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <div id="footer">
        <h1 className="grid grid-cols-[auto_1fr] gap-1.5 items-center after:block after:flex-1/2 after:h-[1px] after:bg-zinc-500 text-lg font-medium text-white">Saiba mais</h1>
        <Carousel
          value={LearnMore}
          numVisible={3}
          numScroll={3}
          showNavigators={false}
          className="mt-3"
          itemTemplate={(data) => {
            return (
              <div key={`learn-more-${data.title}`} className="rounded pb-2 mr-3 bg-[#0F0F0F] min-h-[320px]">
                <Image src={data.image} alt="" width={220} height={220} quality={80} className="object-cover w-full rounded" />
                <div className="px-2.5 py-1.5">
                  <h2 className="text-xl py-1 font-normal text-white">{data.title}</h2>
                  <p className="text-sm text-zinc-300 font-normal w-[85%] 2xl:w-full">{data.description}</p>
                  <button className='bg-[#B30FE2] w-32 py-1.5 rounded-2xl cursor-pointer hover:brightness-110 transition ease-in-out mt-3.5'>
                    Saiba mais
                  </button>
                </div>
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}
