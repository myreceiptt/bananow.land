import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function OpenSea() {
  return <RedirectPage redirect={redirects.opensea} />;
}
