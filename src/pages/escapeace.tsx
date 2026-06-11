import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function EscapeAce() {
  return <RedirectPage redirect={redirects.escapeace} />;
}
