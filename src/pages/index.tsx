import Embassy from "../components/Embassy";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import TheHeads from "../components/TheHeads";
import { Features } from "../components/Features";
import { BrandProducts } from "../components/BrandProducts";
import Faq from "../components/Faq";
import Farmers from "../components/Farmers";
// import { News1 } from "@/components/News";
// import { News2 } from "@/components/News";

export default function Land() {
  return (
    <Layout>
      <Hero />
      <Features />
      <BrandProducts />
      {/* <News1 /> */}
      {/* <News2 /> */}
      <TheHeads />
      <Farmers />
      <Faq />
      <Embassy />
    </Layout>
  );
}
