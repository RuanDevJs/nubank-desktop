import Product from "@/components/Promocao/Product";

import GeladeiraBrastempFrostFree from "@/assets/Promocao/Renovation/Geladeira Brastemp Frost Free Duplex BRM44HB.png";
import FritadeiraAirFryer from "@/assets/Promocao/Renovation/Fritadeira Air Fryer Forno Oven 12 Litros, Mondial.png";
import LavadoraRoupasConsul12kg from "@/assets/Promocao/Renovation/Lavadora de Roupas Consul 12kg CWH12BB com Dosagem Econômica.png";
import GeladeiraBrastempBRM44HK from "@/assets/Promocao/Renovation/Geladeira Brastemp BRM44HK Frost Free.png";
import LavadoraRoupasElectrolux from "@/assets/Promocao/Renovation/Lavadora de Roupas Electrolux 11Kg LES11 Essencial Care.png";

const PRODUCT = [
  {
    data: {
      original_price: "R$ 3.689,00",
      discount_price: "R$ 3.399,00",
      description: "Geladeira Brastemp BRM44HK Frost Free",
    },
    image: GeladeiraBrastempFrostFree
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 3.399,00",
      description: "Fritadeira Air Fryer Forno Oven 12 Litros, Mondial",
    },
    image: FritadeiraAirFryer
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 3.399,00",
      description: "Lavadora de Roupas Consul 12kg CWH12BB com Dosagem Econômica",
    },
    image: LavadoraRoupasConsul12kg
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 3.399,00",
      description: "Geladeira Brastemp Frost Free Duplex BRM44HB",
    },
    image: GeladeiraBrastempBRM44HK
  },
  {
    data: {
      original_price: "R$ 5.299,00",
      discount_price: "R$ 3.399,00",
      description: "Lavadora de Roupas Electrolux 11Kg LES11 Essencial Care",
    },
    image: LavadoraRoupasElectrolux
  },
]

export default function Renovation() {
  return (
    <div id="iphone" className="mt-5 w-[99%]">
      <h3 className="grid grid-cols-[auto_1fr] gap-3 items-center after:block after:w-full after:h-[1px] after:bg-zinc-700 text-sm font-semibold text-white">Renove a sua casa</h3>
      <p className="font-light text-2xl text-zinc-100 mt-2.5">Com tecnologia e estilo.</p>
      <div className="mt-5 grid grid-cols-5 gap-5" id="grid-teste">
        {PRODUCT.map((product) => <Product data={product.data} image={product.image} key={product.data.description} />)}
      </div>
    </div>
  )
}
