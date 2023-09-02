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
    <div className="bg-white-now dark:bg-dark-now">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center text-neutral-900 dark:text-white">
          Do you want to visit <span className="text-green-now dark:text-yellow-now font-extrabold">BANANOW</span>?<br />Please immediately contact the immigration officer of <span className="text-yellow-now dark:text-green-now font-extrabold">BANANOW</span>!
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link onClick={sound2Click} href="/discord/" target="_blank">
          <button className="bg-green-now dark:bg-yellow-now text-neutral-900 dark:text-white rounded-full px-6 p-3 font-medium dark:hover:bg-white-now hover:bg-dark-now hover:text-white dark:hover:text-neutral-900">
            Immigration Check
          </button>
        </Link>
      </div>
    </div>
  );
}
