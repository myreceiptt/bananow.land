import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function EscapeAce() {
  return <RedirectPage redirect={redirects.escapeace} />;
}
