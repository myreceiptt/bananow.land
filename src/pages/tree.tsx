import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Tree() {
  return <RedirectPage redirect={redirects.tree} />;
}
