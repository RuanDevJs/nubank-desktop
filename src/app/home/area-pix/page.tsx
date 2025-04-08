import { Banknote, Calendar, Copy, HandHelping, PiggyBankIcon, QrCode, Settings, Shield } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[70%]'>
        <div className='min-h-[15%] opacity-0 animate-down' style={{ animationDelay: ".22s " }}>
          <h1 className="grid grid-cols-[auto_1fr] gap-5 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-medium text-white">
            Área pix
          </h1>
          <p className='text-xl font-light text-zinc-300 py-1.5'>
            Envie e receba pagamentos a qualquer hora e dia da semana, se pagar nada por isso.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-5 h-[85%] overflow-hidden' style={{ alignItems: 'start' }}>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-down' style={{ animationDelay: ".32s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <Banknote size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>Transferir</h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-down' style={{ animationDelay: ".42s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <Calendar size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>Programar</h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-down' style={{ animationDelay: ".52s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <QrCode size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>Ler QR code</h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-up' style={{ animationDelay: ".62s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <Copy size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300 text-center'>Pix Copia e Cola</h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-up' style={{ animationDelay: ".72s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <HandHelping size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>Cobrar</h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-up' style={{ animationDelay: ".82s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <PiggyBankIcon size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>Depositar</h2>
          </div>
        </div>
      </div>
      <div className='h-[30%] mt-5 opacity-0 animate-up'>
        <div className='min-h-[15%]'>
          <h1 className="grid grid-cols-[auto_1fr] gap-5 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-medium text-zinc-300">
            Preferências
          </h1>
          <div className='grid grid-cols-2 gap-5'>
            <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center my-4">
              <div className="flex items-center gap-2">
                <div>
                  <Shield color="#fff" size={32} strokeWidth={1} />
                </div>
                <h2 className="font-normal text-base text-zinc-100">Preferências Registrar <br /> ou trazer chaves</h2>
              </div>
              <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
                Saiba mais
              </button>
            </div>
            <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center my-4">
              <div className="flex items-center gap-2">
                <Settings color="#fff" size={32} />
                <h2 className="font-normal text-base text-zinc-100">Configurar Pix</h2>
              </div>
              <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
