import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Presente from "@/assets/Promocao/Categorias/Presente.svg";
import Smartphone from "@/assets/Promocao/Categorias/Smartphone.svg";
import MaquinaDeLavar from "@/assets/Promocao/Categorias/MaquinaDeLavar.svg";
import ControleDualSense from "@/assets/Promocao/Categorias/ControleDualSense.svg";
import Televisão from "@/assets/Promocao/Categorias/Televisão.svg";
import Liquidificador from "@/assets/Promocao/Categorias/Liquidificador.svg";
import Mala from "@/assets/Promocao/Categorias/Mala.svg";
import Notebook from "@/assets/Promocao/Categorias/Notebook.svg";

export default function Category() {
  return (
    <div id="category" className="mt-5 w-[99%]">
      <div className="grid grid-cols-[1fr_auto] gap-3.5 items-center">
        <h3 className="grid gap-3 grid-cols-[auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Categorias</h3>
        <div className="flex items-center group">
          <button className="bg-[#0F0F0F] border border-[#909090] py-1.5 px-3 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out ">Ver todas as categorias</button>
          <button className="bg-[#0F0F0F] border border-[#909090] p-1 rounded-full group-hover:brightness-125 cursor-pointer transition ease-in-out">
            <ArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-8 items-start mt-5 gap-2">
        <div>
          <div className="bg-[rgba(208,_80,_165,_1)] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={Presente} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Gift Cards</h3>
        </div>
        <div>
          <div className="bg-[#4D86B1] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={Smartphone} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden ml-7" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Celulares e acessórios</h3>
        </div>
        <div>
          <div className="bg-[#7A76D4] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={MaquinaDeLavar} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden ml-4 mt-2" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Eletro-domésticos</h3>
        </div>
        <div>
          <div className="bg-[#4D86B1] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={ControleDualSense} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Games</h3>
        </div>
        <div>
          <div className="bg-[#49ABB4] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={Televisão} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">TV, Vídeo e Áudio</h3>
        </div>
        <div>
          <div className="bg-[#7A76D6] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={Liquidificador} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Eletro-portáteis</h3>
        </div>
        <div>
          <div className="bg-[#4D86B1] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={Mala} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Viagens</h3>
        </div>
        <div>
          <div className="bg-[#481571] w-full h-28 rounded flex items-center justify-center overflow-hidden">
            <Image draggable={false} src={Notebook} alt="" width={100} height={100} quality={80} className="object-cover overflow-hidden" />
          </div>
          <h3 className="font-medium text-sm text-zinc-200 text-center mt-2">Informática</h3>
        </div>
      </div>
    </div>
  )
}