import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function LadyMe() {
  return <RedirectPage redirect={redirects.ladyme} />;
}
