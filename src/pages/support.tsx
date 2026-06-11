import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Support() {
  return <RedirectPage redirect={redirects.support} />;
}
