import { ArrowRight, Cake, HandCoins, Landmark, Plus, Signal } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='h-full'>
      <div className='opacity-0 animate-up' style={{ animationDelay: '0.22s' }}>
        <div className='h-[70px]'>
          <h1 className="grid grid-cols-[auto_auto_1fr] items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-base font-medium text-white">
            Empréstimos <span className='text-[#B30FE2] ml-1.5 mr-5'>Nubank</span>
          </h1>
          <p className='text-xl font-light text-zinc-300 py-1.5'>
            Para você realizar seus objetivos.
          </p>
        </div>
        <div>
          <h2 className="grid grid-cols-[auto_1fr] gap-8 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-medium text-white">
            Temos 2 opções para você
          </h2>
          <div className='grid grid-cols-2 min-h-[185px] gap-5 mt-3'>
            <div className='w-full h-full bg-[#0F0F0F] px-3 py-6 rounded-lg'>
              <div className=' h-full flex flex-col'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#2E054B]'>
                      <HandCoins size={32} color="#B30FE2" strokeWidth={1} />
                    </div>
                    <h1 className='text-xl font-medium text-zinc-300'>Registrar ou trazer chaves</h1>
                  </div>
                  <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
                    Saiba mais
                  </button>
                </div>
                <div className='mt-auto flex justify-between'>
                  <div>
                    <p className='text-sm text-zinc-300'>Simule até</p>
                    <h3 className='text-lg font-medium text-white'>R$ 120.000,00</h3>
                  </div>
                  <div>
                    <p className='text-sm text-zinc-300 text-right'>Taxas a partir de</p>
                    <button className='text-base font-medium text-[#FF9101] bg-[#743406] px-1 rounded'>Depende de análise</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-[#0F0F0F] px-3 py-6 rounded-lg'>
              <div className=' h-full flex flex-col'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#743406]'>
                      <Cake size={32} color="#FF9101" strokeWidth={1} />
                    </div>
                    <h1 className='text-xl font-medium text-zinc-300'>Antecipação <br />FGTS</h1>
                  </div>
                  <button className='bg-[#820AD1] w-36 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-base font-normal'>
                    Saiba mais
                  </button>
                </div>
                <div className='mt-auto flex justify-between'>
                  <div>
                    <p className='text-sm text-zinc-300'>Antecipe até</p>
                    <h3 className='text-lg font-medium text-white'>12 parcelas</h3>
                  </div>
                  <div>
                    <p className='text-sm text-zinc-300 text-right'>Taxas a partir de</p>
                    <h3 className='text-lg font-medium'>1,29% ao mês</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-0 animate-down mt-5' style={{ animationDelay: '0.32s' }}>
        <div>
          <h1 className="grid grid-cols-[auto_1fr] gap-8 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-xl font-light text-white">
            Aumente suas chances de ter mais ofertas
          </h1>
        </div>
        <div>
          <div className='grid grid-cols-4 min-h-[185px] gap-5 mt-3'>
            <div className='w-full h-full bg-[#2C2C2C] p-3 rounded-lg'>
              <div className='h-full flex flex-col gap-2'>
                <h1 className='text-lg 2xl:text-xl font-medium text-zinc-300'>Traga seus dados via Open Finance</h1>
                <p className='text-xs font-normal text-zinc-300'>Compartilhar seus dados de outros bancos com o Nubank pode melhorar sua análise de crédito para empréstimos.</p>
                <div className='flex items-center mt-1'>
                  <button className='bg-[#820AD1] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#820AD1] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-[#2C2C2C] p-3 rounded-lg'>
              <div className='h-full flex flex-col gap-2'>
                <h1 className='text-lg 2xl:text-xl font-medium text-zinc-300'>Tenha dinheiro guardado</h1>
                <p className='text-xs font-normal text-zinc-300'>Seu dinheiro dendendo por pelo menos 3 mses pode ser garantia para um empréstimo até 5x maior.</p>
                <div className='flex items-center mt-auto'>
                  <button className='bg-[#820AD1] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#820AD1] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-[#2C2C2C] p-3 rounded-lg'>
              <div className='h-full flex flex-col gap-2'>
                <h1 className='text-lg 2xl:text-xl 2xl:w-full w-32 font-medium text-zinc-300'>Receba seu salário aqui</h1>
                <p className='text-xs font-normal text-zinc-300'>Concentre suas finanças fazendo a portabilidade dp seu salário para o Nubank.</p>
                <div className='flex items-center mt-auto'>
                  <button className='bg-[#820AD1] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#820AD1] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-[#2C2C2C] p-3 rounded-lg'>
              <div className='h-full flex flex-col justify-between gap-2'>
                <div>
                  <h1 className='text-lg 2xl:text-xl font-medium text-zinc-300'>Tenha as contas em dia</h1>
                  <p className='text-xs font-normal text-zinc-300'>Um critério importante para ter mais crédito é pagar as contas sem atraso.
                    Também fora do Nubank</p>
                </div>
                <div className='flex items-center'>
                  <button className='bg-[#820AD1] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#820AD1] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-0 animate-down mt-5' style={{ animationDelay: '0.52s' }}>
        <div>
          <h1 className="grid grid-cols-[auto_1fr] gap-8 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-xl font-light text-white">
            Nossos empréstimos
          </h1>
        </div>
        <div>
          <div className='grid grid-cols-2 2xl:grid-cols-4 min-h-[185px] gap-5 mt-3'>
            <div className='w-full h-full bg-transparent border-[2px] border-zinc-700 p-5 rounded-lg'>
              <div className='h-full flex flex-col gap-2'>
                <div className='mb-1'>
                  <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#2E054B]'>
                    <HandCoins size={28} color="#B30FE2" strokeWidth={1} />
                  </div>
                  <p className='text-xs font-normal text-zinc-300 mt-4'>
                    Empréstimo Pessoal
                  </p>
                </div>
                <h2 className='text-lg 2xl:text-xl font-medium text-white'>
                  Dinheiro rápido e sem burocracia
                </h2>
                <p className='text-xs 2xl:text-sm font-normal my-2 text-zinc-400'>
                  Você gerencia tudo pelo app. como e quando quiser
                </p>
                <div className='flex items-center mt-1'>
                  <button className='bg-[#3D3D3D] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal text-white'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#3D3D3D] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-transparent border-[2px] border-zinc-700 p-5 rounded-lg hidden 2xl:block'>
              <div className='h-full flex flex-col gap-2'>
                <div className='mb-1'>
                  <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#291096]'>
                    <Landmark size={28} color="#1EE1FF" strokeWidth={1} />
                  </div>
                  <p className='text-xs font-normal text-zinc-300 mt-4'>
                    Consignado
                  </p>
                </div>
                <h2 className='text-lg 2xl:text-xl font-medium text-white'>
                  Parcelas descontadas da sua folha
                </h2>
                <p className='text-xs 2xl:text-sm font-normal my-2 text-zinc-400'>
                  Sem intermediários e com autonomia para gerenciar.
                </p>
                <div className='flex items-center mt-1'>
                  <button className='bg-[#3D3D3D] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal text-white'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#3D3D3D] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-transparent border-[2px] border-zinc-700 p-5 rounded-lg hidden 2xl:block'>
              <div className='h-full flex flex-col gap-2'>
                <div className='mb-1'>
                  <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#991040]'>
                    <Signal size={28} color="#FFF" strokeWidth={1.5} />
                  </div>
                  <p className='text-xs font-normal text-zinc-300 mt-4'>
                    Investimento como garantia
                  </p>
                </div>
                <h2 className='text-lg 2xl:text-xl font-medium text-white'>
                  Seu investimento continua rendendo
                </h2>
                <p className='text-xs 2xl:text-sm font-normal my-2 text-zinc-400'>
                  E você tem acesso as melhores condições.
                </p>
                <div className='flex items-center mt-1'>
                  <button className='bg-[#3D3D3D] py-1.5 px-5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal text-white'>
                    Saiba mais
                  </button>
                  <button className='w-[32px] h-[32px] bg-[#3D3D3D] full cursor-pointer hover:brightness-110 transition ease-in-out flex items-center justify-center rounded-full'>
                    <ArrowRight color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full h-full bg-[#2C2C2C] p-5 rounded-lg'>
              <div className='h-full flex flex-col items-center justify-center gap-2'>
                <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#3D3D3D]'>
                  <Plus size={28} color="#FFF" strokeWidth={1.5} />
                </div>
                <h3 className='text-lg text-white font-medium'>Exibir todos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
