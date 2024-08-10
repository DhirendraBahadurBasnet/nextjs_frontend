import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Hero/>
    <NewProduct/>
    <Testimonial/>

   </main>
  );
}
