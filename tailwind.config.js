/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "button-gray": "rgba(55,57,78,255)",
                "gray-todo": "rgba(37,39,60,255)",
                "gray-rgba": "rgba(23,23,33,255)",
            },
        },
    },
    plugins: [],
};
