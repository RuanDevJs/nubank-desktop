import Image from "next/image";
import { Carousel } from "primereact/carousel";

import Slide1 from "@/assets/Home/Slide-1.jpg";
import Slide2 from "@/assets/Home/Slide-2.jpg";
import Slide3 from "@/assets/Home/Slide-3.jpg";
import Slide4 from "@/assets/Home/Slide-4.jpg";
import Slide5 from "@/assets/Home/Slide-5.jpg";
import Slide6 from "@/assets/Home/Slide-6.jpg";

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

export default function Footer() {
  return (
    <footer id="footer" className="opacity-0 animate-down" style={{ animationDelay: '0.32s' }}>
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
    </footer>
  )
}
