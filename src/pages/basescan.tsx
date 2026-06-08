import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function BaseScan() {
  return <RedirectPage redirect={redirects.basescan} />;
}
