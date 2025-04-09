import { Barcode, CircleDollarSign, CreditCard, HandCoins, Repeat } from 'lucide-react'
import React from 'react'

export default function index() {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[45%]'>
        <div className='opacity-0 animate-down mb-5' style={{ animationDelay: ".22s " }}>
          <h1 className="grid grid-cols-[auto_1fr] gap-5 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-medium text-white">
            Opções de pagamento
          </h1>
        </div>
        <div className='grid grid-cols-3 gap-5 h-[80%] overflow-hidden' style={{ alignItems: 'start' }}>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-down' style={{ animationDelay: ".32s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <CreditCard size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>
              Fatura do cartão Nubank
            </h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-down' style={{ animationDelay: ".42s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <Barcode size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300'>Boleto</h2>
          </div>
          <div className='bg-[#0F0F0F] flex flex-col justify-center items-center gap-5 h-full rounded-sm cursor-pointer hover:brightness-125 transition ease-in-out opacity-0 animate-down' style={{ animationDelay: ".52s " }}>
            <div className='flex items-center justify-center w-[80px] h-[80px] bg-[#2C2C2C] rounded-full'>
              <CircleDollarSign size={50} strokeWidth={1} />
            </div>
            <h2 className='text-xl font-normal text-zinc-300 2xl:w-full w-52 text-center'>
              Pix QR Code ou Copia e Cola
            </h2>
          </div>
        </div>
      </div>
      <div className='w-full h-[55%] flex flex-col justify-between'>
        <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center flex-1/3 opacity-0 animate-up" style={{ animationDelay: '0.42s' }}>
          <div className="flex items-center gap-2">
            <div>
              <HandCoins color="#fff" size={50} strokeWidth={1} />
            </div>
            <h2 className="font-normal text-xl text-zinc-100">Assistente de Pagamentos</h2>
          </div>
          <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
            Saiba mais
          </button>
        </div>
        <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center my-4 flex-1/3 animate-up" style={{ animationDelay: '0.52s' }}>
          <div className="flex items-center gap-2">
            <Barcode color="#fff" size={50} strokeWidth={1} />
            <h2 className="font-normal text-xl text-zinc-100">Buscador de Boletos</h2>
          </div>
          <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
            Saiba mais
          </button>
        </div>
        <div className="bg-[#2C2C2C] px-8 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center flex-1/3 animate-up" style={{ animationDelay: '0.62s' }}>
          <div className="flex items-center gap-2">
            <Repeat color="#fff" size={50} strokeWidth={1} />
            <h2 className="font-normal text-xl text-zinc-100">Débito Automático</h2>
          </div>
          <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  )
}
