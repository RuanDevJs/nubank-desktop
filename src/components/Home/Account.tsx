'use client';

import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';

export default function Account() {
  const [showAccountInformations, setShowAccountInformations] = useState(false);
  const inputInformationType = showAccountInformations ? "text" : "password";

  const toggleShowAccountInformations = () => {
    setShowAccountInformations(oldValue => !oldValue);
  }

  return (
    <div id="account" className='bg-[#0F0F0F] min-h-[50dvh] rounded-xl'>
      <div className='py-8 px-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-medium text-white'>Conta</h1>
          <button
            className='outline-none border-none bg-none cursor-pointer'
            onClick={toggleShowAccountInformations}
          >
            {showAccountInformations ? <Eye size={25} /> : <EyeClosed size={25} />}
          </button>
        </div>
        <div>
          <p className='text-sm font-normal text-zinc-500 py-1.5'>Saldo na conta</p>
          <input type={inputInformationType} className='w-full border-none outline-none font-bold text-base text-white' defaultValue="R$ 750,00" readOnly />
        </div>
        <div className='mt-8 bg-[#4E0578] w-[180px] h-[180px] rounded-full flex items-center justify-center hover:brightness-125 transition ease-in-out cursor-pointer'>
          <div className='bg-[#2C2C2C] w-[130px] h-[130px] border-[10px] border-[#000] rounded-full flex flex-col items-center justify-center'>
            <p className='text-xs'>Total investido: </p>
            <input type={inputInformationType} className='w-full border-none outline-none font-bold text-base text-white text-center' defaultValue="R$ 450,00" readOnly />
          </div>
        </div>
        <div className='mt-7'>
          <ul className='space-y-2'>
            <li className='flex justify-between items-center'>
              <p className='flex items-center text-xs font-normal text-white before:block before:w-1.5 before:h-1.5 before:bg-[#B30FE2] before:rounded-full gap-1.5'>Saldo na conta</p>
              <input type={inputInformationType} className='w-[35%] border-none outline-none font-bold text-base text-white' defaultValue="R$ 750,00" />
            </li>
            <li className='flex justify-between items-center'>
              <p className='flex items-center text-xs font-normal text-white before:block before:w-1.5 before:h-1.5 before:bg-[#2E054B] before:rounded-full gap-1.5'>Saldo de investimento</p>
              <input type={inputInformationType} className='w-[35%] border-none outline-none font-bold text-base text-white' defaultValue="R$ 450,00" />
            </li>
            <li className='mt-10'>
              <button className='bg-[#B30FE2] w-32 py-1.5 rounded-2xl cursor-pointer hover:brightness-110 transition ease-in-out'>
                Saiba mais
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
