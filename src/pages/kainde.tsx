import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Kainde() {
  return <RedirectPage redirect={redirects.kainde} />;
}
