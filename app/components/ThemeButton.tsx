    "use client";

    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
    import { useEffect, useState } from "react";

    export default function ThemeButton() {
    const [dark, setDark] = useState(false);
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") ?? "light";
        document.documentElement.dataset.theme = savedTheme;
        setDark(savedTheme === "dark");

    },[])
    const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
    };

    return (
        <button
        className="Theme font-semibold capitalize py-[5] px-[7] rounded-[7] dark:hover:bg-[#1c3161] hover:bg-[#ececec]"
        onClick={()=>{
            if(localStorage.getItem("theme")===null){
                localStorage.setItem("theme","light")
                setDark(false)
            }else if(localStorage.getItem("theme")==="light"){
                localStorage.setItem("theme","dark")
                setDark(true)
            }
            else{
                localStorage.setItem("theme","light")
                setDark(false)
            }
            toggleTheme()
        }}
        >
        {
        
        
        
        
        dark ? (
            <span className="flex items-center gap-[5]">
            <FontAwesomeIcon className="w-[15] text-amber-400" icon={faSun} />
            Light
            </span>
        ) : (
            <span className="flex items-center gap-[5]">
            <FontAwesomeIcon className="w-[15] text-blue-600" icon={faMoon} />
            Dark
            </span>
        )}
        </button>
    );
    }