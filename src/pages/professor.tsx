import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Professor() {
  return <RedirectPage redirect={redirects.professor} />;
}
