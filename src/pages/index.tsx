import Embassy from "../components/Embassy";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import TheHeads from "../components/TheHeads";
import { Features } from "../components/Features";
import { BrandProducts } from "../components/BrandProducts";
import Faq from "../components/Faq";
import Farmers from "../components/Farmers";
// import { NaNowNews } from "@/components/NaNowNews";

export default function Land() {
  return (
    <Layout>
      <Hero />
      <Features />
      <BrandProducts />
      <TheHeads />
      <Farmers />
      {/* <NaNowNews /> */}
      <Faq />
      <Embassy />
    </Layout>
  );
}
