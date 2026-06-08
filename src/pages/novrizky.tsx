import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Novrizky() {
  return <RedirectPage redirect={redirects.novrizky} />;
}
