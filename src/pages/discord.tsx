import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Discord() {
  return <RedirectPage redirect={redirects.discord} />;
}
