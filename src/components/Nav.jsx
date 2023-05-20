import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Logo';

const Nav = ({ links }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className="relative z-50 flex items-center justify-between px-5 py-8 @container @5xl:px-10">
      <Logo className="text-white" />

      <div className="@2xl:hidden">
        <AiOutlineMenu
          aria-label="Open menu"
          className="aspect-square h-full w-7 cursor-pointer object-cover text-white"
          onClick={toggleMenu}
        />
        {openMenu && (
          <div className="absolute inset-x-5 flex translate-y-16 flex-col bg-white p-10 text-center">
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
                  {links.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} onClick={toggleMenu}>
                        {link}
                      </a>
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

      <div className="hidden items-center gap-10 @2xl:flex">
        <nav>
          <ul className="flex space-x-8 font-Barlow text-white @3xl:space-x-16">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="rounded-full bg-white px-6 py-4 font-Fraunces uppercase transition-colors hover:bg-opacity-20 hover:text-white">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Nav;
