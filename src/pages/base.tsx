import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Base() {
  return <RedirectPage redirect={redirects.base} />;
}
