

import { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

function Header() {
    const [theme, setTheme] = useState('dark');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    function changeTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='text-indigo-950 dark:text-white'>
            <div className="w-full mx-auto px-6 sm:px-9 py-6 flex items-center justify-between ">
                <div className="header-logo flex items-center gap-2">
                    <a href="/">
                        <img className="cursor-pointer" src={logo} alt="MintBudds Logo" />
                    </a>
                    <a className="text-4xl font-semibold mt-2" href="/">MintBudds</a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex header-navigation text-xl font-normal items-center gap-12 mt-3">
                    {['Market', 'Activity', 'Features', 'Community'].map((item) => (
                        <a key={item} className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            {item}
                        </a>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex header-buttons text-xl items-center gap-6 mt-2">
                    <img className="cursor-pointer" src={theme === "dark" ? moon : sun} alt="Theme changing" onClick={changeTheme} />
                    <button className='bg-transparent border-2 border-white rounded-full w-32 h-12 hover:text-black hover:bg-white transition-all duration-300'> Sign up</button>
                    <button className='bg-transparent border-2 border-white rounded-full w-32 h-12 hover:text-black hover:bg-white transition-all duration-300'>Log in</button>
                </div>

                {/* Mobile Menu Button */}
                <button className="text-5xl block md:text-6xl lg:hidden relative z-60" onClick={toggleMenu}>
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 fixed" onClick={toggleMenu}>
                    <div className=" bg-gray-800 rounded-lg p-6 w-80 flex flex-col gap-4 text-center md:w-96">
                        {['Market', 'Activity', 'Features', 'Community'].map((item) => (
                            <a key={item} className="cursor-pointer text-white text-xl py-2 hover:text-gray-400 transition-all duration-300" onClick={toggleMenu}>{item}</a>
                        ))}
                        <button className='bg-white text-black border-2 border-white rounded-full w-full py-2 mt-4 hover:bg-transparent hover:text-white transition-all duration-300' onClick={toggleMenu}>Sign up</button>
                        <button className='bg-white text-black border-2 border-white rounded-full w-full py-2 hover:bg-transparent hover:text-white transition-all duration-300' onClick={toggleMenu}>Log in</button>
                        
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;