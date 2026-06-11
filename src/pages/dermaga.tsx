import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Dermaga() {
  return <RedirectPage redirect={redirects.dermaga} />;
}
