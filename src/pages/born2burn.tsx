import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Born2Burn() {
  return <RedirectPage redirect={redirects.born2burn} />;
}
