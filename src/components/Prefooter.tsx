import Link from "next/link";

export default function Prefooter() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          Do you want to visit <span className="text-rose-500">BANANOW</span>? Please immediately contact the immigration officer of <span className="text-rose-500">BANANOW</span>!
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link href="https://www.bananow.land/discord/" target="_blank">
          <button className="bg-rose-500 text-white rounded-full px-6 p-3 font-medium dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black">
            Immigration Check
          </button>
        </Link>
      </div>
    </div>
  );
}
