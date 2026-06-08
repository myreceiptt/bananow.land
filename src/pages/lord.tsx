import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Lord() {
  return <RedirectPage redirect={redirects.lord} />;
}
