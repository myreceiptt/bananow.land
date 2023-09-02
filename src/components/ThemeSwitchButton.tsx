import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import useSound from "use-sound";

export default function ThemeSwitchButton() {
    const sound3Loc = "/sounds/jept.mp3";
    const [play3] = useSound(
      sound3Loc,
      { volume: 0.75 }
    );
    const sound3Click = () => {
      play3();
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    };

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    return (

        <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 flex items-center justify-center hover:bg-white-now hover:dark:bg-dark-now rounded-full transition-all"
            // onClick={() =>
            //     setTheme(resolvedTheme === "dark" ? "light" : "dark")
            // }
            onClick={sound3Click}
        >
            {mounted && (
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-dark-now dark:text-white-now">

                    {resolvedTheme === "dark" ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />

                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />

                    )}
                </svg>
            )
            }
        </button >

    )
}