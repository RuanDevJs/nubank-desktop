import Image from 'next/image'
import Link from 'next/link'

import NubankLogo from "@/assets/Header/NubankLogo.svg"
import ProfilePicture from "@/assets/Header/ProfilePicture.png"
import { ArrowDown, Bell, Menu, Plus } from 'lucide-react'

export default function Header() {
  return (
    <header className='bg-[rgba(46,_5,_75,_0.6)] p-5 flex justify-between items-center'>
      <div>
        <Link href="/home">
          <Image src={NubankLogo} width={50} alt="" />
        </Link>
      </div>
      <nav>
        <ul className='flex items-center gap-5'>
          <li className='bg-[#4E0578] hover:brightness-125 cursor-pointer transition ease-in-out py-1.5 px-2 rounded-xl flex items-center justify-around gap-3 relative min-h-[70px]'>
            <a href="#" className='bg-[#BE87FF] p-2 rounded-full'>
              <Plus size={25} />
            </a>
            <div className='mt-1'>
              <h1 className='font-medium text-base'>Abrir conta PJ</h1>
              <p className='font-normal text-xs'>Crie a conta da <br /> sua empresa</p>
            </div>
            <a href='#' className='ml-1 self-start text-xs font-normal text-[#ECECEC] bg-[#B30FE2] px-1.5 py-0.5 rounded'>conheça</a>
          </li>
          <li className='bg-[#421D5D] py-1.5 px-2.5 flex items-center rounded-full min-h-[70px] gap-2 hover:brightness-125 cursor-pointer transition ease-in-out'>
            <Image src={ProfilePicture} alt="" quality={80} className='object-cover w-[50px] h-[50px] rounded-full border-2 border-white' />
            <h1 className='text-lg font-medium'>Ruan Vitor</h1>
            <button className='bg-[#820AD1] p-1 rounded-full cursor-pointer'>
              <ArrowDown size={18} />
            </button>
          </li>
          <li className='bg-[#421D5D] flex items-center justify-center rounded-full w-[70px] h-[70px] hover:brightness-125 cursor-pointer transition ease-in-out'>
            <button className='cursor-pointer'>
              <Menu size={25} />
            </button>
          </li>
          <li className='bg-[#421D5D] flex items-center justify-center rounded-full w-[70px] h-[70px] hover:brightness-125 cursor-pointer transition ease-in-out'>
            <button className='cursor-pointer'>
              <Bell size={25} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
