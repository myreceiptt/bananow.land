import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Delegate() {
  return <RedirectPage redirect={redirects.delegate} />;
}
