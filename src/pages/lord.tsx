import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Lord() {
  return <RedirectPage redirect={redirects.lord} />;
}
