import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Instagram() {
  return <RedirectPage redirect={redirects.instagram} />;
}
