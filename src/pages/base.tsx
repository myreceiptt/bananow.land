import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Base() {
  return <RedirectPage redirect={redirects.base} />;
}
