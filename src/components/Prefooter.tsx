import Link from "next/link";

import useSound from "use-sound";

export default function Prefooter() {
  const sound2Loc = "/sounds/tinggg.mp3";
  const [play2] = useSound(
    sound2Loc,
    { volume: 0.75 }
  );
  const sound2Click = () => {
    play2();
  };
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          Do you want to visit <span className="text-yellow-now">BANANOW</span>?<br />Please immediately contact the immigration officer of <span className="text-yellow-now">BANANOW</span>!
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link onClick={sound2Click} href="/discord/" target="_blank">
          <button className="bg-yellow-now text-white rounded-full px-6 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
            Immigration Check
          </button>
        </Link>
      </div>
    </div>
  );
}
