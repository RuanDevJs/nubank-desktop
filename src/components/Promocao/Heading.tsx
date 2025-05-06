import { Gift, Search, Settings, Store, Ticket, Truck } from 'lucide-react';

const CARDS = [
  {
    title: "Pedidos",
    icon: <Truck size={32} strokeWidth={1.5} />
  },
  {
    title: "Cupons",
    icon: <Ticket size={32} strokeWidth={1.5} />
  },
  {
    title: "Lojas",
    icon: <Store size={32} strokeWidth={1.5} />
  },
  {
    title: "Gift Cards",
    icon: <Gift size={32} strokeWidth={1.5} />
  },
  {
    title: "Serviços",
    icon: <Settings size={32} strokeWidth={1.5} />
  }
];

export default function Heading() {
  return (
    <div id="heading" className='bg-[#4E0578] px-3.5 py-5'>
      <div className='p-3 bg-[#000000] w-full rounded-full flex gap-1.5'>
        <Search size={18} color='#c2c2c2' className='opacity-75 cursor-pointer' />
        <input
          className='w-full outline-none text-base font-normal'
          placeholder='Busque aqui o que desejar.'
        />
      </div>
      <div className='grid grid-cols-5 items-center mt-5 gap-3'>
        {CARDS.map((card) => (
          <div key={card.title} className='bg-[#820AD1] p-3.5 rounded-xl cursor-pointer hover:brightness-110 transition ease-in-out hover:translate-y-[-8px]'>
            <div className='w-12 h-12 m-auto rounded-full bg-[rgba(25,_25,_25,_0.2)] flex items-center justify-center'>
              {card.icon}
            </div>
            <h2 className='text-base font-medium mt-2 text-center'>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
