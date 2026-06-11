import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Professor() {
  return <RedirectPage redirect={redirects.professor} />;
}
