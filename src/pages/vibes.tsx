import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Vibes() {
  return <RedirectPage redirect={redirects.vibes} />;
}
