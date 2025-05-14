import Cashback from "@/components/Promocao/Cashback";
import Heading from "@/components/Promocao/Heading";
import BlackFriday from "@/components/Promocao/BlackFriday";
import Shopping from "@/components/Promocao/Shopping";
import Category from "@/components/Promocao/Category";
import Iphone from "@/components/Promocao/Iphone";
import Renovation from "@/components/Promocao/Renovation";



export default function Promocao() {
  return (
    <div>
      <Heading />
      <Cashback />
      <BlackFriday />
      <Shopping />
      <Category />
      <Iphone />
      <Renovation />
    </div>
  )
}
