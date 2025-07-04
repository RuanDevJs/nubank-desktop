'use client'

import { ArrowRight, ArrowUpLeft, ArrowUpRight, LayoutGrid } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'
import { tv } from 'tailwind-variants';

const priceVariant = tv({
  base: "px-3 border border-zinc-500 rounded-full transition ease-in-out bg-transparent cursor-pointer hover:bg-[#A30CFF] hover:border-[#A30CFF] transition ease-in-out duration-[0.25s]",
  variants: {
    isSelected: {
      true: "bg-[#A30CFF] border-[#A30CFF]"
    }
  }
})

export default function Transferencia() {
  const prices = [5, 10, 50, 100, 1000, 10000];
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  function Price({ price }: { price: number }) {
    const validate = selectedPrice === `R$ ${price},00`;

    return (
      <div className={priceVariant({ isSelected: validate })} onClick={() => setSelectedPrice(`R$ ${price},00`)}>
        <span className='font-normal text-sm text-zinc-300'>R${price}</span>
      </div>
    )
  }

  return (
    <div className='w-full h-full opacity-0 animate-up'>
      <div className='bg-[#0F0F0F] h-[65%] w-[100%] px-8 py-10 rounded m-auto'>
        <div className='group flex items-center justify-between'>
          <Link href="/home" className='flex items-center cursor-pointer'>
            <button className='bg-[#2C2C2C] group-hover:brightness-125 w-10 h-10 flex items-center justify-center rounded-full'>
              <ArrowUpLeft size={28} />
            </button>
            <button className='bg-[#2C2C2C] group-hover:brightness-125 rounded-full h-10 px-3.5 font-medium text-base'>
              Voltar a página inicial
            </button>
          </Link>
          <div className='cursor-pointer'>
            <button className='bg-[#2C2C2C] w-10 h-10 flex items-center justify-center rounded-full'>
              <LayoutGrid size={24} color='#B30FE2' strokeWidth={1} />
            </button>
          </div>
        </div>
        <div className='mt-7'>
          <h1 className='text-2xl font-medium'>Qual é o valor da sua transferência?</h1>
          <p className='text-base font-medium text-[#C8C2C2] mt-1.5'>Saldo disponível de R$ 38.500,00</p>
          <input
            type="text"
            className='block w-full outline-0 border-0 border-b border-zinc-500 font-normal text-xl mt-7 px-1 text-zinc-200'
            placeholder='R$ 0'
            inputMode='numeric'
            value={selectedPrice}
            onChange={({ target }) => setSelectedPrice(target.value)}
            onBlur={(event) => selectedPrice.length && !selectedPrice.includes("R$") ? setSelectedPrice(`R$ ${event.target.value},00`) : null}
          />
        </div>
        <div className='flex items-center gap-3 mt-7'>
          {prices.map((price) => <Price price={price} key={price} />)}
        </div>
        <div className="mt-7">
          <p className='flex gap-1.5 items-center text-[#A30CFF] text-base font-normal border-b border-[#A30CFF] w-fit cursor-pointer hover:brightness-125 transition ease-in-out'>
            Consultar meus limites Pix
            <ArrowUpRight size={22} strokeWidth={1} />
          </p>
        </div>
        <div className='flex items-center w-full mt-12 group'>
          <div className='flex items-center w-full'>
            <button className='bg-transparent border border-[#2c2c2c] w-[94%] rounded-full h-10 px-3.5 font-normal text-base cursor-pointer transition ease-in-out group-hover:bg-[#a30cff] duration-[0.32s] group-hover:border-[#a30cff]'>
              Transferir
            </button>
            <button className='bg-transparent border border-[#2c2c2c] w-[6%]  h-10 flex items-center justify-center rounded-full cursor-pointer transition ease-in-out group-hover:bg-[#a30cff] duration-[0.32s] group-hover:border-[#a30cff]'>
              <ArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
