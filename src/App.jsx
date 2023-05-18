import logo from './assets/logo.svg';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import header from './assets/mobile/image-header.jpg';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import egg from './assets/mobile/image-transform.jpg';
import cup from './assets/mobile/image-stand-out.jpg';
import cherries from './assets/mobile/image-graphic-design.jpg';
import orange from './assets/mobile/image-photography.jpg';
import emily from './assets/image-emily.jpg';
import thomas from './assets/image-thomas.jpg';
import jennie from './assets/image-jennie.jpg';
import milkBottles from './assets/mobile/image-gallery-milkbottles.jpg';
import orangeHalf from './assets/mobile/image-gallery-orange.jpg';
import cone from './assets/mobile/image-gallery-cone.jpg';
import sugarCubes from './assets/mobile/image-gallery-sugar-cubes.jpg';
import { useState } from 'react';
import Testimonial from './components/Testimonial';
import Logo from './assets/Logo';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const navLinks = ['About', 'Services', 'Projects'];

  const testimonials = [
    {
      img: emily,
      quote:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      jobTitle: 'Marketing Director',
    },

    {
      img: thomas,
      quote:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      jobTitle: 'Chief Operating Officer',
    },

    {
      img: jennie,
      quote:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      jobTitle: 'Business Owner',
    },
  ];

  return (
    <div className="mx-auto max-w-[1440px]">
      <main>
        <div
          style={{ backgroundImage: `url(${header})` }}
          className="relative min-h-[80vh] w-full bg-cover bg-center"
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
                            <a
                              href={`#${link.toLowerCase()}`}
                              onClick={toggleMenu}
                            >
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
            <h1 className="mt-20 text-center font-Fraunces text-4xl font-black uppercase leading-tight tracking-widest text-white">
              we are creatives
            </h1>
          </header>
          <HiOutlineArrowNarrowDown className="mx-auto mt-5 h-[150px] w-full text-white" />
        </div>

        <section id="about">
          <div className="flex flex-col-reverse text-center">
            <div className="px-4 py-20">
              <h2 className="font-Fraunces text-4xl font-black">
                Transform your brand
              </h2>
              <p className="my-5 font-Barlow text-lg tracking-wide text-slate-400">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a
                aria-label="Learn more about transforming your brand"
                className="relative font-Fraunces text-lg font-black uppercase after:absolute after:-inset-x-2 after:bottom-0 after:-z-10 after:h-3 after:translate-y-1 after:rounded after:bg-yellow-300/50 after:transition-colors after:hover:bg-yellow-300"
                href="#"
              >
                Learn more
              </a>
            </div>
            <img src={egg} alt="egg casting shadow on yellow background" />
          </div>

          <div className="flex flex-col-reverse text-center">
            <div className="px-4 py-20">
              <h2 className="font-Fraunces text-4xl font-black">
                Stand out the right audience
              </h2>
              <p className="my-5 font-Barlow text-lg tracking-wide text-slate-400">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <a
                aria-label="Learn more about standing out to the right audience"
                className="relative font-Fraunces text-lg font-black uppercase after:absolute after:-inset-x-2 after:bottom-0 after:-z-10 after:h-3 after:translate-y-1 after:rounded after:bg-red-300/50 after:transition-colors after:hover:bg-red-300"
                href="#"
              >
                Learn more
              </a>
            </div>
            <img src={cup} alt="egg casting shadow on yellow background" />
          </div>
        </section>

        <section id="services">
          <div
            style={{ backgroundImage: `url(${cherries})` }}
            className="relative min-h-[600px] bg-cover bg-top"
          >
            <div className="absolute bottom-20 px-4 text-center">
              <h3 className="font-Fraunces text-2xl font-black text-slate-700">
                Graphic Design
              </h3>
              <p className="mt-5 font-Barlow text-slate-600">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${orange})` }}
            className="relative min-h-[600px] bg-cover bg-top"
          >
            <div className="absolute bottom-20 px-4 text-center">
              <h3 className="font-Fraunces text-2xl font-black text-slate-700">
                Photography
              </h3>
              <p className="mt-5 font-Barlow text-slate-600">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-14 px-10 py-16">
          <h3 className="text-center font-Fraunces uppercase tracking-[4px] text-slate-400">
            Client testimonials
          </h3>

          {testimonials.map((client) => (
            <Testimonial
              key={client.name}
              img={client.img}
              quote={client.quote}
              name={client.name}
              jobTitle={client.jobTitle}
            />
          ))}
        </section>

        <div className="grid grid-cols-2">
          <div>
            <img src={milkBottles} alt="milk bottles" />
            <img src={cone} alt="waffle cone" />
          </div>
          <div>
            <img src={orangeHalf} alt="half an orange on a plate" />
            <img src={sugarCubes} alt="stacked sugar cubes" />
          </div>
        </div>

        <footer className="bg-emerald-200">
          <div className="flex flex-col items-center">
            <Logo className="mt-12 text-teal-700" />

            <ul className="mb-16 mt-7 flex space-x-16 font-Barlow text-teal-600">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>

            <ul className="flex space-x-5 pb-20 text-teal-700">
              {[
                <AiFillFacebook size={20} />,
                <AiOutlineInstagram size={20} />,
                <AiOutlineTwitter size={20} />,
                <BsPinterest size={20} />,
              ].map((social, index) => (
                <li key={index}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
