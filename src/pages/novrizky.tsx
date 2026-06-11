import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Novrizky() {
  return <RedirectPage redirect={redirects.novrizky} />;
}
