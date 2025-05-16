
import { Contact } from "./components/section/Contact";
import { Products } from "./components/section/Products";
import { Accesorry } from "./components/section/Accesorry";

export default function Home() {
  return ( 

 <div className="w-full min-h-screen bg-[#fafafa] py-8 px-3">
    <Contact/> 
    <Products/> 
    <Accesorry/>
  </div>
  );
}
