import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Instagram() {
  return <RedirectPage redirect={redirects.instagram} />;
}
