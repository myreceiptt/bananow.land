import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Pung() {
  return <RedirectPage redirect={redirects.pung} />;
}
