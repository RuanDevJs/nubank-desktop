import { EyeClosed } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='grid grid-cols-[240px_1fr] h-[500px] gap-5'>
        <div className='bg-[#0F0F0F] p-5 rounded flex flex-col justify-between'>
          <div>
            <div className='flex items-center justify-between'>
              <h1 className='text-lg font-normal'>
                Total em <br /> investimentos
              </h1>
              <EyeClosed size={25} strokeWidth={1.5} />
            </div>
            <input
              type='password'
              className='w-full border-none outline-none font-bold text-base text-white mt-3.5' defaultValue="R$ 750,00"
              readOnly
            />
          </div>
          <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
            Saiba mais
          </button>
        </div>
        <div className='h-full'>
          <h2 className='grid grid-cols-[auto_1fr] gap-5 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-normal text-white'>
            <span className='bg-[#2C2C2C] rounded-full py-1 px-3'>
              Minha organização
            </span>
          </h2>
          <div className='grid grid-cols-3 gap-5 h-[460px] mt-2'>
            <div className='bg-[#8F0BE6]'>
              <h3>Minha Carteira</h3>
            </div>
            <div className='bg-[#8F0BE6]'>
              <h3>Minha Carteira</h3>
            </div>
            <div className='bg-[#8F0BE6]'>
              <h3>Minha Carteira</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
