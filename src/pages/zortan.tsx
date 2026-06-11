import RedirectPage from "../components/redirect/RedirectPage";
import { redirects } from "../data/redirects";

export default function Zortan() {
  return <RedirectPage redirect={redirects.zortan} />;
}
