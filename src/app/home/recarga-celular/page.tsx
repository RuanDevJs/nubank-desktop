'use client'

import React from 'react'
import { ArrowRight, ArrowUpLeft, LayoutGrid } from 'lucide-react';

import Link from 'next/link';

export default function RecargaCelular() {
  return (
    <div className='w-full h-full opacity-0 animate-up'>
      <div className='bg-[#0F0F0F] h-[auto] w-[100%] px-8 py-10 rounded m-auto'>
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
          <h1 className='text-2xl font-medium'>Qual número você quer recarregar?</h1>
          <input
            type="text"
            className='block w-full outline-0 border-0 border-b border-zinc-500 font-normal text-xl mt-7 px-1 text-zinc-200'
            placeholder='(00) 00000-0000'
            inputMode='numeric'
          />
        </div>
        <div className="mt-7">
          <p className='text-zinc-300 text-base font-medium cursor-pointer'>
            Histórico recente:
          </p>
          <p className='text-zinc-500 text-sm font-medium cursor-pointer py-1'>
            (00) 0000-0000
            <span className='text-zinc-600 text-xs font-normal ml-1'>31 dias atrás</span>
          </p>
        </div>
        <div className='flex items-center w-full mt-12 group'>
          <div className='flex items-center w-full'>
            <button className='bg-transparent border border-[#2c2c2c] w-[94%] rounded-full h-10 px-3.5 font-normal text-base cursor-pointer transition ease-in-out group-hover:bg-[#a30cff] duration-[0.32s] group-hover:border-[#a30cff]'>
              Pagar recarga
            </button>
            <button className='bg-transparent border border-[#2c2c2c] w-[6%]  h-10 flex items-center justify-center rounded-full cursor-pointer transition ease-in-out group-hover:bg-[#a30cff] group-hover:border-[#a30cff] duration-[0.32s]'>
              <ArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
