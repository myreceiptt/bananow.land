import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Youtube() {
  return <RedirectPage redirect={redirects.youtube} />;
}
