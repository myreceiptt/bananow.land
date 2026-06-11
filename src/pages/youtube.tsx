import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Youtube() {
  return <RedirectPage redirect={redirects.youtube} />;
}
