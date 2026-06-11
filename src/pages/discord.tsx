import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Discord() {
  return <RedirectPage redirect={redirects.discord} />;
}
