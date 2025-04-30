/* eslint-disable @next/next/no-img-element */
import { ArrowRight, EyeClosed, House, Plus, ShieldCheckIcon, Smartphone, Wallet } from 'lucide-react'
import NuLimiteGarantido from "@/assets/Caixinha/NuLimiteGarantido.png"

export default function page() {
  return (
    <div>
      <div className='grid grid-cols-[240px_1fr] min-h-[500px] gap-5'>
        <div className='bg-[#0F0F0F] p-5 rounded flex flex-col justify-between opacity-0 animate-down' style={{ animationDelay: '0.32s' }}>
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
        <div className='h-full opacity-0 animate-up' style={{ animationDelay: '0.42s' }}>
          <h2 className='h-[28px] grid grid-cols-[auto_1fr] gap-5 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-normal text-white'>
            <span className='bg-[#2C2C2C] rounded-full py-1 px-3'>
              Minha organização
            </span>
          </h2>
          <div className='grid grid-cols-3 gap-5 h-[310px] mt-2.5 overflow-hidden'>
            <div className='h-full '>
              <div className='bg-[#2E054B] h-[80%] rounded-2xl 2xl:px-5 2xl:py-8 p-3 flex items-end justify-start'>
                <div className='flex flex-col gap-5'>
                  <Wallet size={40} strokeWidth={1.8} color='#BE87FF' className='border-2 border-[#BE87FF] rounded-full p-1' />
                  <h3 className='text-[#BE87FF] text-3xl 2xl:text-5xl font-medium'>Minha Carteira</h3>
                </div>
              </div>
              <div className='flex items-center w-full h-[20%]'>
                <button className='bg-[#2E054B] border border-[#2E054B] w-[80%] 2xl:w-[90%] rounded-full h-10 px-3.5 font-normal text-base cursor-pointer transition ease-in-out group-hover:bg-[#2E054B] duration-[0.32s] group-hover:border-[#2E054B]'>
                  Transferir
                </button>
                <button className='bg-[#2E054B] border border-[#2E054B] w-[20%] 2xl:w-[10%]  h-10 flex items-center justify-center rounded-full cursor-pointer transition ease-in-out group-hover:bg-[#2E054B] group-hover:border-[#2E054B] duration-[0.32s]'>
                  <ArrowRight size={25} />
                </button>
              </div>
            </div>
            <div className='h-full'>
              <img src={NuLimiteGarantido.src} alt="" className='h-[250px] w-full' />
              <div className='flex flex-col justify-center w-full h-[20%]'>
                <p className='text-base text-zinc-500 font-normal'>Nu Limite Garantido</p>
                <p className='text-base text-white font-medium'>R$ 000.000,00</p>
              </div>
            </div>
            <div className='h-full'>
              <div className='bg-[#002247] rounded-2xl h-[80%] flex flex-col items-center justify-center'>
                <Plus size={64} color='#25799E' />
              </div>
              <div className='h-[20%] flex items-start'>
                <p className='mt-3 text-zinc-100 font-normal'>Criar caixinha</p>
              </div>
            </div>
          </div>
          <div className='h-[154px]'>
            <h2 className='grid grid-cols-[1fr_auto] gap-5 items-center before:block before:w-full before:h-[1px] before:bg-zinc-500 text-sm font-normal text-white h-[20%] mb-0.5'>
              <span className='font-normal text-base text-zinc-200'>
                Cartões de crédito
              </span>
            </h2>
            <div className='h-[80%] bg-[#0F0F0F] rounded-2xl'>
              <div className='h-full flex flex-col justify-center px-10'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h2 className='text-xl font-normal'>Total em criptomoedas</h2>
                    <input type='password'
                      className='w-full border-none outline-none font-bold text-base text-white mt-3.5' defaultValue="R$ 750,00"
                      readOnly />
                  </div>
                  <div className='w-[42px] h-[42px] rounded-full bg-zinc-800 flex items-center justify-center cursor-pointer hover:brightness-125 transition ease-in-out'>
                    <ArrowRight size={30} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-[230px] 2xl:h-[230px] mt-5 opacity-0 animate-down' style={{ animationDelay: '.22s' }}>
        <h2 className='h-[28px] grid grid-cols-[auto_1fr] gap-5 items-center after:block after:w-full after:h-[1px] after:bg-zinc-500 text-sm font-medium text-white'>
          Seguros
        </h2>
        <div className='grid grid-cols-1 2xl:grid-cols-3 gap-5 mt-3 h-[83%] pb-5 2xl:pb-0'>
          <div className="bg-[#2C2C2C] px-3 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center flex-1/3 opacity-0 animate-up" style={{ animationDelay: '0.32s' }}>
            <div className="flex items-center gap-2">
              <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#3D3D3D]'>
                <ShieldCheckIcon color="#fff" size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-normal text-lg text-zinc-100">Assistente de Pagamentos</h2>
            </div>
            <button className='bg-[#820AD1] w-28 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
              Conhecer
            </button>
          </div>
          <div className="bg-[#2C2C2C] px-3 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center flex-1/3 opacity-0 animate-up" style={{ animationDelay: '0.42s' }}>
            <div className="flex items-center gap-2">
              <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#3D3D3D]'>
                <Smartphone color="#fff" size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-normal text-lg text-zinc-100">Seguro Celular</h2>
            </div>
            <button className='bg-[#820AD1] w-28 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
              Conhecer
            </button>
          </div>
          <div className="bg-[#2C2C2C] px-3 py-10 w-full rounded-xl cursor-pointer hover:brightness-125 transition ease-in-out flex justify-between items-center flex-1/3 opacity-0 animate-up" style={{ animationDelay: '0.52s' }}>
            <div className="flex items-center gap-2">
              <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#3D3D3D]'>
                <House color="#fff" size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-normal text-lg text-zinc-100">Seguro Residencial</h2>
            </div>
            <button className='bg-[#820AD1] w-28 py-1.5 rounded-full cursor-pointer hover:brightness-110 transition ease-in-out text-sm font-normal'>
              Conhecer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
