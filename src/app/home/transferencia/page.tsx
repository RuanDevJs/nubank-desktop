'use client'

import { ArrowRight, ArrowUpLeft, ArrowUpRight, LayoutGrid } from 'lucide-react'
import { div } from 'motion/react-client';
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
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

  function Price({ price }: { price: number }) {
    const validate = selectedPrice === price;
    return (
      <div className={priceVariant({ isSelected: validate })} onClick={() => setSelectedPrice(price)}>
        <span className='font-normal text-sm text-zinc-300'>R${price}</span>
      </div>
    )
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='bg-[#0F0F0F] min-w-[560px] w-[760px] px-8 py-10 rounded m-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <button className='bg-[#2C2C2C] w-10 h-10 flex items-center justify-center rounded-full'>
              <ArrowUpLeft size={28} />
            </button>
            <button className='bg-[#2C2C2C] rounded-full h-10 px-3.5 font-medium text-base'>
              Voltar a página inicial
            </button>
          </div>
          <div>
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
        <div className='flex items-center w-full mt-7 group'>
          <div className='flex items-center w-full'>
            <button className='bg-transparent border border-[#2c2c2c] w-[94%] rounded-full h-10 px-3.5 font-normal text-base cursor-pointer transition ease-in-out group-hover:bg-[#a30cff] duration-[0.32s]'>
              Transferir
            </button>
            <button className='bg-transparent border border-[#2c2c2c] w-[6%]  h-10 flex items-center justify-center rounded-full cursor-pointer transition ease-in-out group-hover:bg-[#a30cff] duration-[0.32s]'>
              <ArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
