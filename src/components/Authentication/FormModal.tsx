"use client";

import Image from "next/image";
import Nubank from "@/assets/Authentication/NubankLogo.svg"

import Link from "next/link";
import { motion } from "motion/react";
import { tv } from "tailwind-variants";
import { useSearchParams } from "next/navigation";
import { Eye } from "lucide-react";

const linkVariant = tv({
  base: "text-lg pb-2 font-base cursor-pointer transition ease-in-out duration-[.3s]",
  variants: {
    isSelected: {
      true: "text-white font-medium text-2xl pb-2 ",
      false: "text-zinc-600 hover:text-zinc-400 transition ease-in-out"
    }
  },
});

type Auth = "sign-in" | "sign-up";

export default function FormModal() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("auth") as Auth;

  return (
    <div className="flex flex-col items-center justify-center h-full px-5">
      <form className="py-8 w-[85%] min-h-fit max-h-[87%] bg-[#0F0F0F] rounded-4xl">
        <div className="flex justify-center">
          <Image src={Nubank} alt="" quality={80} height={25} />
        </div>
        <div>
          <div id="menu" className="w-60 m-auto flex items-center justify-center gap-6 mt-7 border-b-2 border-[#FFFFFF] relative">
            <Link href="/?auth=sign-in" className={linkVariant({ isSelected: currentPage === "sign-in" })}>
              Login
            </Link>
            <Link href="/?auth=sign-up" className={linkVariant({ isSelected: currentPage !== "sign-in" })}>
              Inscreva-se
            </Link>
            <motion.div animate={{ left: currentPage === 'sign-in' ? "-1px" : "70px", width: currentPage === 'sign-in' ? "105px" : "172px" }} className="bg-[#B30FE2]  h-[4px] absolute -bottom-1 rounded" />
          </div>
          <p className="my-6 text-center text-zinc-400">Seja bem vindo(a) ao seu <br /> banco
            <span className="font-medium text-[#B30EE2]"> Nubank</span>!</p>
        </div>
        <div className="border-t border-[#909090] w-[92%] m-auto" />
        <div className="w-[92%] m-auto pt-7 space-y-4">
          {currentPage === 'sign-in' ? <SignIn /> : <SignUp />}
          <div>
            <button type="button" className="w-full 2xl:h-16 bg-[#820AD1] p-3 rounded-md cursor-pointer hover:brightness-125 transition ease-in-out mt-1.5">
              {currentPage === 'sign-in' ? "Fazer Login" : "Criar minha conta Nubank"}
            </button>
            {
              currentPage === 'sign-in' && <p className="text-sm font-light text-center mt-4">
                Não tem uma conta? <a href="#" className="text-[#820AD1]">Faça seu cadastro aqui</a>
              </p>
            }
          </div>
        </div>
      </form>
    </div>
  )
}

function SignIn() {
  const size = window.innerWidth;
  return (
    <>
      <div>
        <label className="block py-1 font-medium">CPF: </label>
        <div className="w-full 2xl:h-16 p-3.5 rounded-md bg-[#2C2C2C] flex items-center gap-2.5">
          <input type="text" placeholder="xxx xxx xxx-xx" className="text-base outline-none w-[87%]" />
          <div className="cursor-pointer">
            <Eye size={size > 1300 ? 32 : 25} />
          </div>
        </div>
      </div>
      <div>
        <label className="block py-1 font-medium">Senha: </label>
        <div className="w-full 2xl:h-16 p-3.5 rounded-md bg-[#2C2C2C] flex items-center gap-2.5">
          <input type="password" placeholder="_ _ _ _" className="outline-none w-[87%]" maxLength={12} />
          <div className="cursor-pointer">
            <Eye size={size > 1300 ? 32 : 25} />
          </div>
        </div>
        <p className="font-normal text-xs py-1 text-right">Esqueceu a senha?</p>
      </div>
    </>
  )
}

function SignUp() {
  return (
    <>
      <div>
        <label className="block py-1 font-medium">Nome completo: </label>
        <div className="w-full 2xl:h-16 p-3.5 rounded-md bg-[#2C2C2C] flex items-center gap-2.5">
          <input type="text" placeholder="John Doe" className="outline-none w-[87%]" maxLength={12} />
        </div>
      </div>
      <div>
        <label className="block py-1 font-medium">Email: </label>
        <div className="w-full 2xl:h-16 p-3.5 rounded-md bg-[#2C2C2C] flex items-center gap-2.5">
          <input type="email" placeholder="nome@exemplo.com" className="text-base outline-none w-[87%]" />
        </div>
      </div>
    </>
  )
}