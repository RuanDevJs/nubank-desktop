"use client";
import Account from "@/components/Home/Account";
import { CreditCard, DollarSign, EyeClosed, Heart, IdCard, SquareArrowOutUpRight } from "lucide-react";
import { Galleria } from "primereact/galleria";
import { JSX } from "react";

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

export default function Home() {
  return (
    <div id="grid-page-home" className="gap-5">
      <Account />
      <div id="information">
        <Galleria
          value={SLIDE_GALLERY}
          showThumbnails={false}
          showIndicators
          showIndicatorsOnItem
          item={Gallery}
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
        footer
      </div>
    </div>
  )
}
