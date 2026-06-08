import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Tree() {
  return <RedirectPage redirect={redirects.tree} />;
}
