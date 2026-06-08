import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Delegate() {
  return <RedirectPage redirect={redirects.delegate} />;
}
