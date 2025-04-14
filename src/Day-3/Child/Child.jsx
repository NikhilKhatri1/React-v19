import React, { useContext } from 'react'
import { ContextName } from '../Context/ChangeNameContext'

const Child = () => {
    const { theme, setTheme } = useContext(ContextName);
    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div className={`${theme === "light" ? "bg-slate-100 text-gray-800 h-[100vh]" : "bg-slate-800 text-gray-50 h-[100vh]"}`}>
            <h1 className={`${theme === "light" ? "text-gray-800" : "text-gray-50"}`}>Change Theme</h1>
            <button
                className={`${theme === "light" ? "text-gray-50 border-1 p-2 border-sky-700 rounded-xl bg-sky-500" : "text-gray-800 border-1 p-2 border-gray-900 rounded-xl bg-white"}`}
                onClick={handleChangeTheme}>{theme}</button>
        </div>
    )
}

export default Child