import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Class() {
  return <RedirectPage redirect={redirects.class} />;
}
