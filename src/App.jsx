import * as images from './assets/images';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import Testimonial from './components/Testimonial';
import AboutCard from './components/AboutCard';
import Nav from './components/Nav';

function App() {
  const navLinks = ['About', 'Services', 'Projects'];

  const testimonials = [
    {
      img: images.emily,
      quote:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      jobTitle: 'Marketing Director',
    },

    {
      img: images.thomas,
      quote:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      jobTitle: 'Chief Operating Officer',
    },

    {
      img: images.jennie,
      quote:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      jobTitle: 'Business Owner',
    },
  ];

  return (
    <>
      <main className="@container">
        <div className="relative h-screen">
          <div className="absolute h-full w-full">
            <img
              src={images.header}
              alt=""
              className=" h-full w-full object-cover @5xl:hidden"
            />
            <img
              src={images.headerDesktop}
              alt=""
              className=" hidden h-full w-full object-cover @5xl:block"
            />
          </div>
          <header className="relative">
            <Nav links={navLinks} />
            <h1 className="mt-20 text-center font-Fraunces text-4xl font-black uppercase leading-tight tracking-widest text-white @3xl:mt-20 @3xl:text-5xl @5xl:text-6xl">
              we are creatives
            </h1>
          </header>
          <HiOutlineArrowNarrowDown className="relative mx-auto mt-5 h-[150px] w-full text-white @3xl:mt-20 @5xl:mt-32" />
        </div>

        <section id="about" className="grid @3xl:grid-rows-2">
          <div className="grid text-center @3xl:grid-cols-2 @3xl:text-left">
            <div className="@3xl:m-auto">
              <AboutCard
                title={'Transform your brand'}
                text={
                  'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
                }
                ariaLabel={'transforming your brand'}
                linkColor="yellow"
              />
            </div>

            <div className="row-start-1 @3xl:col-start-2">
              <img
                src={images.egg}
                alt="egg casting shadowon yellow background"
                className="h-full w-full object-cover @5xl:hidden"
              />
              <img
                src={images.eggDesktop}
                alt="egg casting shadowon yellow background"
                className="hidden h-full w-full object-cover @5xl:block"
              />
            </div>
          </div>

          <div className="grid text-center @3xl:grid-cols-2 @3xl:text-left">
            <div className="@3xl:m-auto">
              <AboutCard
                title={'Stand out the right audience'}
                text={
                  'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
                }
                ariaLabel={'standing out to the right audience'}
                linkColor="red"
              />
            </div>

            <div className="row-start-1">
              <img
                src={images.cup}
                alt="red cup"
                className="h-full w-full object-cover @5xl:hidden"
              />
              <img
                src={images.cupDesktop}
                alt="red cup"
                className="hidden h-full w-full object-cover @5xl:block"
              />
            </div>
          </div>
        </section>

        <section id="services" className="grid @3xl:grid-cols-2">
          <div className="relative">
            <img
              src={images.cherries}
              alt="cherries"
              className=" h-full w-full object-cover @5xl:hidden"
            />
            <img
              src={images.cherriesDesktop}
              alt="cherries"
              className="hidden h-full w-full object-cover @5xl:block"
            />
            <div className="absolute inset-x-0 bottom-20 mx-auto px-4 text-center @5xl:bottom-10 @5xl:max-w-sm @7xl:bottom-20">
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

          <div className="relative">
            <img
              src={images.orange}
              alt="orange"
              className="h-full w-full object-cover @5xl:hidden"
            />
            <img
              src={images.orangeDesktop}
              alt="orange"
              className="hidden h-full w-full object-cover @5xl:block"
            />

            <div className="absolute inset-x-0 bottom-20 mx-auto px-4 text-center @5xl:bottom-10 @5xl:max-w-sm @7xl:bottom-20">
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

        <section className="px-10 py-16 @3xl:px-28 @5xl:p-10 @5xl:py-32">
          <h3 className="mb-16 text-center font-Fraunces uppercase tracking-[4px] text-slate-400">
            Client testimonials
          </h3>

          <div className="mx-auto grid gap-16 @5xl:grid-cols-3 @7xl:max-w-5xl @7xl:gap-10">
            {testimonials.map((client) => (
              <Testimonial
                key={client.name}
                img={client.img}
                quote={client.quote}
                name={client.name}
                jobTitle={client.jobTitle}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="grid grid-cols-2 @5xl:grid-cols-4">
          <img
            className="h-full w-full object-cover @5xl:hidden"
            src={images.milkBottles}
            alt="milk bottles"
          />
          <img
            className="hidden h-full w-full object-cover @5xl:block"
            src={images.milkBottlesDesktop}
            alt="milk bottles"
          />

          <img
            className="h-full w-full object-cover @5xl:hidden"
            src={images.orangeHalf}
            alt="half an orange on a plate"
          />
          <img
            className="hidden h-full w-full object-cover @5xl:block"
            src={images.orangeHalfDesktop}
            alt="half an orange on a plate"
          />

          <img
            className="h-full w-full object-cover @5xl:hidden"
            src={images.cone}
            alt="waffle cone"
          />
          <img
            className="hidden h-full w-full object-cover @5xl:block"
            src={images.coneDesktop}
            alt="waffle cone"
          />

          <img
            className="h-full w-full object-cover @5xl:hidden"
            src={images.sugarCubes}
            alt="stacked sugar cubes"
          />
          <img
            className="hidden h-full w-full object-cover @5xl:block"
            src={images.sugarCubesDesktop}
            alt="stacked sugar cubes"
          />
        </section>
      </main>

      <footer className="bg-emerald-200 @container">
        <div className="flex flex-col items-center">
          <images.Logo className="mt-12 text-teal-700" />

          <ul className="mb-16 mt-7 flex space-x-16 font-Barlow text-teal-600">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex space-x-5 pb-20 text-teal-700 @5xl:pb-10">
            {[
              <AiFillFacebook size={20} />,
              <AiOutlineInstagram size={20} />,
              <AiOutlineTwitter size={20} />,
              <BsPinterest size={20} />,
            ].map((social, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="transition-colors hover:text-white"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
