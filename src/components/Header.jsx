import React, { useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export const Header = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const handleClick = () => {
        document.documentElement.classList.toggle("dark");
        setDarkTheme(!darkTheme);
    };

    return (
        <header className="container mx-auto px-6 pt-8">
            <div className="flex justify-between">
                <h1 className=" text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                    Todo
                </h1>
                <button className="" onClick={handleClick}>
                    {darkTheme ? (
                        <SunIcon color="yellow" />
                    ) : (
                        <MoonIcon color="skyblue" />
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
