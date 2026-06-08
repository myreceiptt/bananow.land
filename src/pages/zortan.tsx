import RedirectPage from "../components/RedirectPage";
import { redirects } from "../data/redirects";

export default function Zortan() {
  return <RedirectPage redirect={redirects.zortan} />;
}
