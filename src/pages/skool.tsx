import Embassy from "../components/Embassy";
import Layout from "../components/Layout";
import SkoolNow from "../components/skool/SkoolNow";

export default function Skool() {
  return (
    <Layout
      title="Skool Now - BANANOW Land"
      description="Skool Now is BANANOW Land's home for learning programs, sports communities, real-world skills, partners, sponsors, and future literacy.">
      <SkoolNow />
      <Embassy />
    </Layout>
  );
}
