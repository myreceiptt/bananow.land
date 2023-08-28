import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import TheHeads from "../components/TheHeads";
import { Features } from "../components/Features";
import { BrandProducts } from "../components/BrandProducts";
import Faq from "../components/Faq";
import Customers from "../components/Customers";

export default function Land() {
  return (
    <Layout>
      <Hero />
      <BrandProducts />
      <Features />
      <TheHeads />
      <Faq />
      <Contact />
      <Customers />
    </Layout>
  );
}
