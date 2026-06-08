import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function InAMotion() {
  return <RedirectPage redirect={redirects.inamotion} />;
}
