import logo from './assets/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import header from './assets/mobile/image-header.jpg';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const navLinks = ['About', 'Services', 'Projects'];

  return (
    <div className="mx-auto max-w-[1440px]">
      <main>
        <div
          style={{ backgroundImage: `url(${header})` }}
          className="relative h-[60vh] w-full bg-cover bg-center"
        >
          <header className="relative px-5 py-8">
            <div className="flex items-center justify-between ">
              <img src={logo} alt="sunnyside logo" />
              <AiOutlineMenu
                aria-label="Open menu"
                className="aspect-square h-full w-7 cursor-pointer object-cover text-white"
                onClick={toggleMenu}
              />

              {openMenu && (
                <div className="absolute inset-x-5 flex translate-y-56 flex-col bg-white p-10 text-center">
                  <div className="relative ">
                    <div
                      aria-hidden="true"
                      className="absolute -right-10 top-0 -translate-y-[80px] "
                    >
                      <div className="relative aspect-square w-[40px] overflow-hidden bg-white">
                        <div className="absolute aspect-square w-[120px] -translate-x-20 -translate-y-20 rotate-45 bg-[#3ebfff]" />
                      </div>
                    </div>

                    <nav>
                      <ul className="space-y-8 font-Barlow text-lg font-semibold text-slate-400">
                        {navLinks.map((link) => (
                          <li key={link}>
                            <a href="#">{link}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <button className="mx-auto mt-10 rounded-full bg-yellow-300 px-8 py-4 font-Fraunces text-lg uppercase text-black">
                      Contact
                    </button>
                  </div>
                </div>
              )}
            </div>
            <h1 className="mt-20 text-center font-Fraunces text-4xl font-black uppercase leading-tight tracking-widest text-white">
              we are creatives
            </h1>
          </header>
          <HiOutlineArrowNarrowDown className="mx-auto mt-5 h-[150px] w-full text-white" />
        </div>
      </main>
    </div>
  );
}

export default App;
