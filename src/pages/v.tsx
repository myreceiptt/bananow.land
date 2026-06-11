import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function V() {
  return <RedirectPage redirect={redirects.v} />;
}
