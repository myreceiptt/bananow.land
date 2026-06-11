import Embassy from "../components/Embassy";
import { Hero } from "../components/land/Hero";
import Layout from "../components/Layout";
import TheHeads from "../components/land/TheHeads";
import { Features } from "../components/land/Features";
import { BrandProducts } from "../components/land/BrandProducts";
import Faq from "../components/land/Faq";
import Farmers from "../components/land/Farmers";

export default function Land() {
  return (
    <Layout>
      <Hero />
      <Features />
      <BrandProducts />
      <TheHeads />
      <Farmers />
      <Faq />
      <Embassy />
    </Layout>
  );
}
