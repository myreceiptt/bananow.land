import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Nota() {
  return <RedirectPage redirect={redirects.nota} />;
}
