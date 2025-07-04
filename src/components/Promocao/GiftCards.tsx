import Image from "next/image";

import Pokemon from "@/assets/Promocao/GiftCards/Pokemon.png";
import Nintendo from "@/assets/Promocao/GiftCards/Nitendo.svg";

import Microsoft from "@/assets/Promocao/GiftCards/Microsoft.png";
import Xbox from "@/assets/Promocao/GiftCards/Xbox.svg";
import NubankSVG from "@/assets/Promocao/GiftCards/NubankLogo.svg";
import Background from "@/assets/Promocao/GiftCards/Background.jpg";

import { ArrowRight } from "lucide-react";

export default function GiftCards(){
    return(
        <div id="gifts-cards" className="w-[99%] mt-6">
                <h3 className="grid grid-cols-[auto_1fr] gap-3 items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">
                  Gifts Cards
                </h3>
                <p className="font-light text-2xl text-zinc-100 mt-2.5">Descontos para você economizar</p>
                <div id="grid-gift-cards" className="mt-3 grid grid-cols-2 gap-5">
                  <div className="bg-[#ECECEC] rounded h-[180px] 2xl:h-auto">
                    <div className="flex items-center gap-14 h-full">
                      <div className="relative">
                        <Image
                          src={Pokemon}
                          alt=""
                          quality={80}
                          className="object-cover w-full h-[180px] 2xl:h-auto"
                          draggable={false}
                        />
                        <div className="absolute top-12 -right-10 2xl:top-[32%]">
                          <Image
                            src={Nintendo}
                            width={80}
                            height={80}
                            alt=""
                            quality={80}
                            className="object-cover"
                            draggable={false}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm text-black font-medium 2xl:text-lg">Gift cards com até</p>
                          <p className="text-[#4E0578] font-medium text-2xl 2xl:text-5xl">
                            <span className="text-6xl font-medium 2xl:text-8xl">16%</span> de <br />desconto
                          </p>
                        </div>
                      </div>
                      <button className="bg-[#4E0578] p-2 rounded-full hover:brightness-125 transition ease-in-out cursor-pointer 2xl:p-5 2xl:left-10 relative">
                        <ArrowRight size={25} />
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#ECECEC] rounded h-[180px] 2xl:h-auto">
                    <div className="flex items-center gap-14 h-full">
                      <div className="relative">
                        <Image
                          src={Microsoft}
                          alt=""
                          quality={80}
                          className="object-cover w-full h-[180px] 2xl:h-auto"
                          draggable={false}
                        />
                        <div className="absolute top-12 -right-10 2xl:top-[32%]">
                          <Image
                            src={Xbox}
                            width={80}
                            height={80}
                            alt=""
                            quality={80}
                            className="object-cover"
                            draggable={false}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm text-black font-medium 2xl:text-lg">Gift cards com até</p>
                          <p className="text-[#4E0578] font-medium text-2xl 2xl:text-5xl">
                            <span className="text-6xl font-medium 2xl:text-8xl">12%</span> de <br />desconto
                          </p>
                        </div>
                      </div>
                      <button className="bg-[#4E0578] p-2 rounded-full hover:brightness-125 transition ease-in-out cursor-pointer 2xl:p-5 2xl:left-10 relative">
                        <ArrowRight size={25} />
                      </button>
                    </div>
                  </div>
                </div>
                <div id="nu-pay" className="mt-5 bg-[#ECECEC] rounded 2xl:w-full">
                  <div className="grid grid-cols-2 2xl:grid-cols-[42%_1fr] items-center h-full">
                    <div className="ml-10">
                      <div className="flex items-center gap-2">
                        <div>
                          <Image src={NubankSVG} alt="" width={72} height={72} className="2xl:w-24" />
                        </div>
                        <h2 className="text-5xl 2xl:text-7xl font-medium text-[#4E0578]">Pay</h2>
                      </div>
                      <div className="mt-3 2xl:mt-5">
                        <p className="font-normal text-lg 2xl:text-3xl text-black">
                          Pague com mais segurança, <br />
                          <span className="text-[#4E0578] font-medium">sem usar o cartão</span>.
                        </p>
                        <button className="2xl:mt-5 2xl:px-10 2xl:text-xl px-5 py-2 mt-2.5 font-normal text-sm bg-[#4E0578] rounded-full cursor-pointer hover:brightness-125 transition ease-in-out">
                          Saiba mais
                        </button>
                      </div>
                    </div>
                    <div className="bg-red-400 h-full">
                      <Image src={Background} alt="" quality={80} className="w-full h-full rounded-tr rounded-br object-contain" />
                    </div>
                  </div>
                </div>
              </div>
    )
}