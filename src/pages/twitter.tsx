import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Twitter() {
  return <RedirectPage redirect={redirects.twitter} />;
}
