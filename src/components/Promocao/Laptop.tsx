import Product from "@/components/Promocao/Product";
import Notebook from "@/assets/Promocao/Laptop/NotebookSamsungGalaxyBook4.png"
import GalaxyTabS9 from "@/assets/Promocao/Laptop/GalaxyTabS9.png"
import NotebookDellInspiron15 from "@/assets/Promocao/Laptop/NotebookDellInspiron15.png"
import NotebookNitro5 from "@/assets/Promocao/Laptop/NotebookNitro5.png"
import TabletGalaxyTabS6 from "@/assets/Promocao/Laptop/TabletGalaxyTabS6.png"

const LAPTOPS = [
  {
    data: {
      original_price: "R$ 2.676,45",
      discount_price: "R$ 2.489,00",
      description: "Notebook Samsung Galaxy Book4, Intel Core i5, 8GB RAM, 256GB",
      hasCashback: true
    },
    image: Notebook
  },
  {
    data: {
      original_price: "R$ 2.676,45",
      discount_price: "R$ 2.489,00",
      description: "Galaxy Tab S9 FE, Grafite, 10.9”, Wifi, 128 GB, 6 GB",
      hasCashback: true
    },
    image: GalaxyTabS9
  },
  {
    data: {
      original_price: "R$ 2.676,45",
      discount_price: "R$ 2.489,00",
      description: "Notebook Dell Inspiron 15 com processador INtel Core i3",
      hasCashback: true
    },
    image: NotebookDellInspiron15
  },
  {
    data: {
      original_price: "R$ 2.676,45",
      discount_price: "R$ 2.489,00",
      description: "Notebook Acer Nitro V15 ANV15-51-58AZ",
      hasCashback: true
    },
    image: NotebookNitro5
  },
  {
    data: {
      original_price: "R$ 2.676,45",
      discount_price: "R$ 2.489,00",
      description: "Tablet Samsung Galaxy Tab S6 Lite (2024), 64GB, 4GB de RAM",
      hasCashback: true
    },
    image: TabletGalaxyTabS6
  },
]

export default function Laptop() {
  return (
    <div id="laptop" className="mt-7 w-[99%]">
      <h3 className="grid grid-cols-[auto_1fr] gap-3 items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">
        Dê um up no seu setup!
      </h3>
      <p className="font-light text-2xl text-zinc-100 mt-2.5">Notebooks, acessórios e muito cashback!</p>
      <div className="grid sm:grid-cols-3 2xl:grid-cols-5 gap-5 mt-4 border-b border-zinc-700 pb-5">
        {LAPTOPS.map(({ data, image }) => <Product data={data} image={image} key={data.description} />)}
      </div>
    </div>
  )
}
