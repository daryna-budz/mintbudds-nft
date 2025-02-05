import { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

function Header(){
    const [theme,setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.className = theme; 
    }, [theme]);

    function changeTheme(){
        setTheme(theme === "dark" ? "light" : "dark");
    }


    return (
        <nav className='text-indigo-950 dark:text-white'>
            <div className="w-full mx-auto px-6 sm:px-9 py-6 flex items-center justify-between">
              <div className="header-logo flex items-center gap-2">
                 <a href="/"><img className="cursor-pointer" src={logo} alt="MintBudds Logo" href="/" /></a>
                 <a className="text-4xl font-semibold mt-2" href="/">MintBudds</a>
              </div>

              <div className="hidden md:flex header-navigation text-xl font-normal items-center gap-12 mt-3 ">
                  <a className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"> Market</a>
                  <a className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Activity</a>
                  <a className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Features</a>
                  <a className="cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">Community</a>
              </div>

              <div className="hidden md:flex header-buttons text-xl items-center gap-6 mt-2">
                <img className="cursor-pointer" src={theme==="dark" ? moon : sun} alt="Theme changing" onClick={changeTheme}/>
                <button className='bg-transparent border-2 border-white rounded-full w-32 h-12 hover:text-black hover:bg-white transition-all duration-300'> Sign up</button>
                <button className='bg-transparent border-2 border-white rounded-full w-32 h-12 hover:text-black hover:bg-white transition-all duration-300'>Log in</button>
              </div>

              <button className="text-7xl block md:hidden">☰</button>
            </div>
        </nav>
    );
}

export default Header;