import Embassy from "../components/ui/Embassy";
import Layout from "../components/ui/Layout";
import { SkoolFaq } from "../components/skool/SkoolFaq";
import { SkoolHero } from "../components/skool/SkoolHero";
import { SkoolHowItWorks } from "../components/skool/SkoolHowItWorks";
import { SkoolPartners } from "../components/skool/SkoolPartners";
import { SkoolPaths } from "../components/skool/SkoolPaths";
import { SkoolPrograms } from "../components/skool/SkoolPrograms";

export default function Skool() {
  return (
    <Layout
      title="Skool Now - BANANOW Land"
      description="Skool Now is BANANOW Land's home for learning programs, sports communities, real-world skills, partners, sponsors, and future literacy.">
      <SkoolHero />
      <SkoolPaths />
      <SkoolHowItWorks />
      <SkoolPrograms />
      <SkoolPartners />
      <SkoolFaq />
      <Embassy />
    </Layout>
  );
}
