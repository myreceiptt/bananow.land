import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Dermaga() {
  return <RedirectPage redirect={redirects.dermaga} />;
}
