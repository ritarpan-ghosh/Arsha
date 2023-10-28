"use client";

import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-theme flex flex-col px-5 pb-8">
        <div className="self-stretch max-w-7xl mx-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0 order-2 lg:order-1">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <h1 className="text-white text-5xl font-bold leading-[116.667%] max-w-full max-md:text-4xl">
                  Better Solutions For Your Business
                </h1>
                <p className="text-white text-opacity-60 text-xl font-semibold leading-[120%] mt-6 max-md:max-w-full">
                  We are a team of talented designers making websites with
                  Bootstrap
                </p>
                <div className="flex mt-16 max-md:mt-10">
                  <a
                    href="#"
                    className="text-white leading-[150%] tracking-wider bg-theme2 self-stretch max-w-full px-4 lg:px-6 py-3 rounded-full mx-4"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="text-white text-base leading-[106.667%] self-center my-auto mx-4 flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-[42%] ml-5 order-1 lg:order-2">
              <Image
                width={640}
                height={640}
                src={"/hero-img.png"}
                className="aspect-[1.21] object-center w-full overflow-hidden grow max-md:max-w-full animate-trans-up-down"
                alt="Business Solutions"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="brands w-full min-h-28 py-2 bg-gray-200 flex items-center">
        <div className="w-full mx-auto max-w-7xl min-h-16 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4">
          <Image
            src={"/client-1.png"}
            width={100}
            height={40}
            alt="Client"
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 mx-auto my-auto"
          />
          <Image
            src={"/client-2.png"}
            width={100}
            height={40}
            alt="Client"
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 mx-auto my-auto"
          />
          <Image
            src={"/client-3.png"}
            width={100}
            height={40}
            alt="Client"
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 mx-auto my-auto"
          />
          <Image
            src={"/client-4.png"}
            width={100}
            height={40}
            alt="Client"
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 mx-auto my-auto"
          />
          <Image
            src={"/client-5.png"}
            width={100}
            height={40}
            alt="Client"
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 mx-auto my-auto"
          />
          <Image
            src={"/client-6.png"}
            width={100}
            height={40}
            alt="Client"
            className="grayscale hover:grayscale-0 transition-all ease-in-out duration-300 mx-auto my-auto"
          />
        </div>
      </section>
      <section id="about">
        <div className="w-full mx-auto max-w-7xl my-20 px-4">
          <h1 className="uppercase text-center text-3xl font-bold text-theme mb-6">
            About Us
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                voluptatum laboriosam magni fugit nulla, cumque cum laborum
                animi. Magnam non tenetur necessitatibus maxime voluptatem quam
                accusamus quia labore, animi perferendis, delectus iusto neque
                ab eius!
              </p>
              <p className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-theme2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h- text-theme2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Lorem ipsum dolor sit amet.
              </p>
              <p className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-theme2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores nisi, inventore excepturi earum eaque ut laborum ea
                vel labore, cum quos modi quod odit, minima magnam. Animi
                eligendi voluptatem id enim sed voluptatibus sequi cupiditate
                iste, laboriosam molestias. Reiciendis, dolorem.
              </p>
              <a
                href=""
                className="border-theme2 border-2 px-4 py-2 rounded-xl text-theme2 hover:bg-theme2 hover:text-white transition-all ease-in-out duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="w-full mx-auto max-w-7xl px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl text-theme">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit, ducimus{" "}
              <span className="font-bold">amet consectetur adipisicing.</span>
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint
              delectus ab unde, eligendi blanditiis earum animi, corporis
              quibusdam debitis officiis sunt placeat impedit? Magni sequi
              maiores non nostrum qui.
            </p>
            <div className="w-full pt-2">
              <div className="rounded-2xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                        <span>What is your refund policy?</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        If you're unhappy with your purchase for any reason,
                        email us within 90 days and we'll refund you in full, no
                        questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as={"div"} className="mt-4">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                        <span>What is your refund policy?</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ea, ratione libero! Temporibus autem sapiente fuga
                        veniam non magnam ea molestiae iure! Sed doloribus
                        minima cupiditate qui, recusandae aliquid quaerat magnam
                        officia aspernatur odit voluptas tenetur, aperiam ad
                        debitis. Nesciunt odit reiciendis adipisci! Eveniet
                        ducimus officia non sapiente quia, natus quas quisquam
                        accusamus beatae similique repudiandae reiciendis
                        adipisci veniam molestias aperiam neque voluptate, ad id
                        culpa! Laboriosam impedit nesciunt deserunt nostrum
                        vitae? Amet, fuga dolore rem nam ratione, ipsum
                        praesentium mollitia modi cupiditate quidem quod. Rem
                        sed quo recusandae fuga consequuntur quia, debitis
                        laudantium! Et modi magni debitis porro. Similique,
                        excepturi?
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image src={"/why-us.png"} width={640} height={640} alt="Why us" />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 py-16 gap-4">
          <div>
            <Image src={"/skills.png"} width={640} height={640} alt="Skills" />
          </div>
          <div className="flex flex-col px-5">
            <h1 className="text-theme text-3xl leading-10 w-[408px] max-w-full self-start font-bold">
              Voluptatem dignissimos provident quasi corporis voluptates
            </h1>
            <p className="text-neutral-700 text-base leading-6 mt-2.5 max-md:max-w-full italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex w-[541px] max-w-full items-start justify-between gap-5 mt-4 self-start max-md:flex-wrap">
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch">
                {" "}
                HTML{" "}
              </div>
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch whitespace-nowrap">
                {" "}
                100%{" "}
              </div>
            </div>
            <hr className="bg-theme flex w-full h-2.5 flex-col mt-3 self-start max-md:max-w-full" />
            <div className="flex w-[542px] max-w-full items-start justify-between gap-5 mt-6 self-start max-md:flex-wrap">
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch">
                {" "}
                CSS{" "}
              </div>
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch whitespace-nowrap">
                {" "}
                90%{" "}
              </div>
            </div>
            <hr className="bg-theme flex w-[90%] h-2.5 max-w-full flex-col mt-3 self-start" />
            <div className="flex w-[541px] max-w-full items-start justify-between gap-5 mt-6 self-start max-md:flex-wrap">
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch">
                {" "}
                JavaScript{" "}
              </div>
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch whitespace-nowrap">
                {" "}
                75%{" "}
              </div>
            </div>
            <hr className="bg-theme w-[75%] h-2.5 flex max-w-full flex-col mt-3 pr-5 self-start" />
            <div className="flex w-[542px] max-w-full items-start justify-between gap-5 mt-6 self-start max-md:flex-wrap">
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch">
                {" "}
                Photoshop{" "}
              </div>
              <div className="text-slate-600 text-xs leading-5 uppercase self-stretch whitespace-nowrap">
                {" "}
                55%{" "}
              </div>
            </div>
            <hr className="bg-theme w-[55%] h-2.5 flex max-w-full flex-col mt-3 pr-5 self-start" />
          </div>
        </div>
      </section>
      <section className="bg-gray-200" id="services">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <h1 className="uppercase text-4xl font-semibold text-theme text-center mt-4 mb-6">
            Services
          </h1>
          <p className="text-center text-gray-800 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            pariatur magni culpa. Fuga saepe rerum eius voluptas sit id labore
            consectetur voluptatum maxime blanditiis iure, optio expedita
            repellendus ex ducimus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col transition-all ease-in-out duration-300 px-5 group hover:-translate-y-2">
              <Link
                href="/"
                className="text-theme font-semibold text-2xl leading-7 ml-2.5 mt-24 max-md:mt-10 group-hover:text-theme2 transition-all ease-in-out duration-300"
              >
                Lorem Ipsum
              </Link>
              <p className="text-neutral-700 text-sm leading-6 ml-2.5 mt-4 mb-14 max-md:mb-10">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
            <div className="shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col transition-all ease-in-out duration-300 px-5 group hover:-translate-y-2">
              <Link
                href="/"
                className="text-theme font-semibold text-2xl leading-7 ml-2.5 mt-24 max-md:mt-10 group-hover:text-theme2 transition-all ease-in-out duration-300"
              >
                Lorem Ipsum
              </Link>
              <p className="text-neutral-700 text-sm leading-6 ml-2.5 mt-4 mb-14 max-md:mb-10">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
            <div className="shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col transition-all ease-in-out duration-300 px-5 group hover:-translate-y-2">
              <Link
                href="/"
                className="text-theme font-semibold text-2xl leading-7 ml-2.5 mt-24 max-md:mt-10 group-hover:text-theme2 transition-all ease-in-out duration-300"
              >
                Lorem Ipsum
              </Link>
              <p className="text-neutral-700 text-sm leading-6 ml-2.5 mt-4 mb-14 max-md:mb-10">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
            <div className="shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col transition-all ease-in-out duration-300 px-5 group hover:-translate-y-2">
              <Link
                href="/"
                className="text-theme font-semibold text-2xl leading-7 ml-2.5 mt-24 max-md:mt-10 group-hover:text-theme2 transition-all ease-in-out duration-300"
              >
                Lorem Ipsum
              </Link>
              <p className="text-neutral-700 text-sm leading-6 ml-2.5 mt-4 mb-14 max-md:mb-10">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta w-full py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-7 text-white px-4">
          <div className="lg:col-span-5 col-span-7">
            <h1 className="text-3xl font-bold mb-4">Call To Action</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              excepturi porro rem officia molestiae asperiores, mollitia
              consectetur deleniti quae magni veritatis delectus possimus
              accusamus nisi aut ex vero voluptate aspernatur?
            </p>
          </div>
          <div className="lg:col-span-2 col-span-7 ml-auto pt-10">
            <a
              href="#"
              className="text-white text-base leading-[150%] px-6 py-3 rounded-[50px] border-2 border-solid transition-all ease-in-out duration-300 hover:bg-sky-400 hover:border-sky-400 border-white"
            >
              Call To Action
            </a>
          </div>
        </div>
      </section>
      <section className="mt-8 mb-4 py-4" id="portfolio">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="uppercase text-center text-4xl font-bold text-theme">
            Portfolio
          </h1>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            neque! Impedit reiciendis pariatur, fugiat iusto dolore minus
            tempore dolorem sunt totam maiores perspiciatis facere doloremque,
            hic libero consectetur expedita quod.
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-6">
            <div>
              <Link href={"/"}>
                <Image
                  src={"/portfolio.jpg"}
                  width={800}
                  height={600}
                  alt="Portfolio"
                  className="hover:-translate-y-2 transition-all ease-in-out duration-300"
                />
              </Link>
            </div>
            <div className="row-span-2">
              <Link href={"/"}>
                <Image
                  src={"/portfolio.jpg"}
                  width={800}
                  height={600}
                  alt="Portfolio"
                  className="h-full object-cover hover:-translate-y-2 transition-all ease-in-out duration-300"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/portfolio.jpg"}
                  width={800}
                  height={600}
                  alt="Portfolio"
                  className="hover:-translate-y-2 transition-all ease-in-out duration-300"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/portfolio.jpg"}
                  width={800}
                  height={600}
                  alt="Portfolio"
                  className="hover:-translate-y-2 transition-all ease-in-out duration-300"
                />
              </Link>
            </div>
            <div>
              <Link href={"/"}>
                <Image
                  src={"/portfolio.jpg"}
                  width={800}
                  height={600}
                  alt="Portfolio"
                  className="hover:-translate-y-2 transition-all ease-in-out duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200" id="team">
        <div className="max-w-7xl my-4 pt-10 pb-6 px-4 mx-auto">
          <h1 className="text-4xl text-center font-bold text-theme uppercase mt-4 mb-4">
            Team
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            facilis reiciendis sit tenetur, suscipit, hic cupiditate rerum nemo
            deleniti ab omnis nostrum provident, porro similique. Cupiditate
            voluptate est dicta harum.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <article className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col px-5 rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 md:max-w-[780px] max-w-[500px] mx-auto">
              <div className="w-full ml-2.5 my-8 self-start">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="/team-1.jpg"
                      className="aspect-square rounded-full object-cover object-center overflow-hidden max-md:mt-8 max-w-[200px] mx-auto"
                      alt="Employee Avatar"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-8">
                      <h2 className="text-slate-600 text-xl leading-6">
                        Walter White
                      </h2>
                      <p className="text-neutral-700 text-sm leading-6 mt-2.5">
                        Chief Executive Officer
                      </p>
                      <hr className="w-[65%]" />
                      <p className="text-neutral-700 text-sm leading-5 mt-6">
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div className="flex w-[152px] max-w-full items-start gap-2 mt-3.5 self-start max-md:justify-center">
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col px-5 rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 md:max-w-[780px] max-w-[500px] mx-auto">
              <div className="w-full ml-2.5 my-8 self-start">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="/team-1.jpg"
                      className="aspect-square rounded-full object-cover object-center overflow-hidden max-md:mt-8 max-w-[200px] mx-auto"
                      alt="Employee Avatar"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-8">
                      <h2 className="text-slate-600 text-xl leading-6">
                        Walter White
                      </h2>
                      <p className="text-neutral-700 text-sm leading-6 mt-2.5">
                        Chief Executive Officer
                      </p>
                      <hr className="w-[65%]" />
                      <p className="text-neutral-700 text-sm leading-5 mt-6">
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div className="flex w-[152px] max-w-full items-start gap-2 mt-3.5 self-start max-md:justify-center">
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col px-5 rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 md:max-w-[780px] max-w-[500px] mx-auto">
              <div className="w-full ml-2.5 my-8 self-start">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="/team-1.jpg"
                      className="aspect-square rounded-full object-cover object-center overflow-hidden max-md:mt-8 max-w-[200px] mx-auto"
                      alt="Employee Avatar"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-8">
                      <h2 className="text-slate-600 text-xl leading-6">
                        Walter White
                      </h2>
                      <p className="text-neutral-700 text-sm leading-6 mt-2.5">
                        Chief Executive Officer
                      </p>
                      <hr className="w-[65%]" />
                      <p className="text-neutral-700 text-sm leading-5 mt-6">
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div className="flex w-[152px] max-w-full items-start gap-2 mt-3.5 self-start max-md:justify-center">
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="shadow-[0px_2px_15px_0px_rgba(0,0,0,0.10)] bg-white flex flex-col px-5 rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 md:max-w-[780px] max-w-[500px] mx-auto">
              <div className="w-full ml-2.5 my-8 self-start">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="/team-1.jpg"
                      className="aspect-square rounded-full object-cover object-center overflow-hidden max-md:mt-8 max-w-[200px] mx-auto"
                      alt="Employee Avatar"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-8">
                      <h2 className="text-slate-600 text-xl leading-6">
                        Walter White
                      </h2>
                      <p className="text-neutral-700 text-sm leading-6 mt-2.5">
                        Chief Executive Officer
                      </p>
                      <hr className="w-[65%]" />
                      <p className="text-neutral-700 text-sm leading-5 mt-6">
                        Explicabo voluptatem mollitia et repellat qui dolorum
                        quasi
                      </p>
                      <div className="flex w-[152px] max-w-full items-start gap-2 mt-3.5 self-start max-md:justify-center">
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                        <div className="bg-slate-100 flex h-8 flex-col flex-1 rounded-[50px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl my-4 pt-10 pb-6 px-4 mx-auto">
          <h1 className="text-4xl text-center font-bold text-theme uppercase mt-4 mb-4">
            Team
          </h1>
          <p className="text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugit
            totam voluptatibus eligendi numquam similique exercitationem
            cupiditate officiis aperiam. Reprehenderit nam sint necessitatibus
            ducimus quaerat accusantium ipsam, adipisci quidem dolorem?
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-4">
            <div className="shadow-[0px_3px_20px_0px_rgba(20,45,100,0.10)] bg-white flex flex-col px-5 rounded-md">
              <div className="self-center flex w-full flex-col mt-16 mb-16 max-md:my-10">
                <h2 className="text-slate-600 text-xl leading-6 self-start whitespace-nowrap">
                  Free Plan
                </h2>
                <div className="flex w-full items-start gap-1 mt-3 self-start">
                  <span className="text-slate-600 text-3xl self-start">$</span>
                  <span className="text-slate-600 text-5xl leading-[57.6px] mt-2 self-start whitespace-nowrap max-md:text-4xl">
                    0
                  </span>
                </div>
                <p className="text-sky-400 text-lg leading-5 mt-3.5 self-start whitespace-nowrap">
                  per month
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-14 whitespace-nowrap max-md:mt-10 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Quam adipiscing vitae proin
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Nec feugiat nisl pretium
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Nulla at volutpat diam uteera
                </p>
                <p className="text-stone-300 text-base leading-5 mr-2.5 mt-5 whitespace-nowrap line-through flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Pharetra massa massa ultricies
                </p>
                <p className="text-stone-300 flex gap-2 text-base leading-5 mt-6 whitespace-nowrap line-through">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Massa ultricies mi quis hendrerit
                </p>
                <span className="mt-4">
                  <a
                    href="#"
                    className="hover:text-white inline text-sm px-5 py-2 rounded-full border-2 border-solid transition-all ease-in-out duration-300 hover:bg-theme2 text-theme2  border-theme2"
                  >
                    Get Started
                  </a>
                </span>
              </div>
            </div>
            <div className="shadow-[0px_3px_20px_0px_rgba(20,45,100,0.10)] bg-white flex flex-col px-5 rounded-md">
              <div className="self-center flex w-full flex-col mt-16 mb-16 max-md:my-10">
                <h2 className="text-slate-600 text-xl leading-6 self-start whitespace-nowrap">
                  Free Plan
                </h2>
                <div className="flex w-full items-start gap-1 mt-3 self-start">
                  <span className="text-slate-600 text-3xl self-start">$</span>
                  <span className="text-slate-600 text-5xl leading-[57.6px] mt-2 self-start whitespace-nowrap max-md:text-4xl">
                    29
                  </span>
                </div>
                <p className="text-sky-400 text-lg leading-5 mt-3.5 self-start whitespace-nowrap">
                  per month
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-14 whitespace-nowrap max-md:mt-10 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Quam adipiscing vitae proin
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Nec feugiat nisl pretium
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Nulla at volutpat diam uteera
                </p>
                <p className="text-neutral-400 text-base leading-5 mr-2.5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Pharetra massa massa ultricies
                </p>
                <p className="text-neutral-400 flex gap-2 text-base leading-5 mt-6 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Massa ultricies mi quis hendrerit
                </p>
                <span className="mt-4">
                  <a
                    href="#"
                    className="hover:text-white inline text-sm px-5 py-2 rounded-full border-2 border-solid transition-all ease-in-out duration-300 hover:bg-theme2 text-theme2  border-theme2"
                  >
                    Get Started
                  </a>
                </span>
              </div>
            </div>
            <div className="shadow-[0px_3px_20px_0px_rgba(20,45,100,0.10)] bg-white flex flex-col px-5 rounded-md">
              <div className="self-center flex w-full flex-col mt-16 mb-16 max-md:my-10">
                <h2 className="text-slate-600 text-xl leading-6 self-start whitespace-nowrap">
                  Free Plan
                </h2>
                <div className="flex w-full items-start gap-1 mt-3 self-start">
                  <span className="text-slate-600 text-3xl self-start">$</span>
                  <span className="text-slate-600 text-5xl leading-[57.6px] mt-2 self-start whitespace-nowrap max-md:text-4xl">
                    49
                  </span>
                </div>
                <p className="text-sky-400 text-lg leading-5 mt-3.5 self-start whitespace-nowrap">
                  per month
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-14 whitespace-nowrap max-md:mt-10 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Quam adipiscing vitae proin
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Nec feugiat nisl pretium
                </p>
                <p className="text-neutral-400 text-base leading-5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Nulla at volutpat diam uteera
                </p>
                <p className="text-neutral-400 text-base leading-5 mr-2.5 mt-5 whitespace-nowrap flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Pharetra massa massa ultricies
                </p>
                <p className="text-neutral-400 flex gap-2 text-base leading-5 mt-6 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Massa ultricies mi quis hendrerit
                </p>
                <span className="mt-4">
                  <a
                    href="#"
                    className="hover:text-white inline text-sm px-5 py-2 rounded-full border-2 border-solid transition-all ease-in-out duration-300 hover:bg-theme2 text-theme2  border-theme2"
                  >
                    Get Started
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="max-w-7xl my-4 pt-10 pb-6 px-4 mx-auto">
          <h1 className="text-4xl text-center font-bold text-theme uppercase mt-4 mb-4">
            Frequently asked questions
          </h1>
          <p className="text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugit
            totam voluptatibus eligendi numquam similique exercitationem
            cupiditate officiis aperiam. Reprehenderit nam sint necessitatibus
            ducimus quaerat accusantium ipsam, adipisci quidem dolorem?
          </p>
          <Disclosure as={"div"} className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit facilis laborum natus tempora sit, ducimus deleniti
                  recusandae eius quod officiis, explicabo cumque aperiam eos
                  reprehenderit saepe error, illo vero fuga.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit facilis laborum natus tempora sit, ducimus deleniti
                  recusandae eius quod officiis, explicabo cumque aperiam eos
                  reprehenderit saepe error, illo vero fuga.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit facilis laborum natus tempora sit, ducimus deleniti
                  recusandae eius quod officiis, explicabo cumque aperiam eos
                  reprehenderit saepe error, illo vero fuga.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit facilis laborum natus tempora sit, ducimus deleniti
                  recusandae eius quod officiis, explicabo cumque aperiam eos
                  reprehenderit saepe error, illo vero fuga.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit facilis laborum natus tempora sit, ducimus deleniti
                  recusandae eius quod officiis, explicabo cumque aperiam eos
                  reprehenderit saepe error, illo vero fuga.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </section>
      <section id="contact">
        <div className="max-w-7xl my-4 pt-10 pb-6 px-4 mx-auto">
          <h1 className="text-4xl text-center font-bold text-theme uppercase mt-4 mb-4">
            Contact
          </h1>
          <p className="text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugit
            totam voluptatibus eligendi numquam similique exercitationem
            cupiditate officiis aperiam. Reprehenderit nam sint necessitatibus
            ducimus quaerat accusantium ipsam, adipisci quidem dolorem?
          </p>
          <div className="shadow-[0px_0px_24px_0px_rgba(0,0,0,0.12)] w-[641px] mt-4 mx-auto rounded-xl">
            <div className="flex flex-col px-5">
              <div className="flex w-[328px] max-w-full items-start gap-4 ml-2.5 mt-8 self-start">
                <aside className="self-stretch flex flex-col w-11">
                  <div className="bg-sky-100 self-stretch flex w-full h-11 flex-col items-center justify-center rounded-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="bg-sky-100 self-stretch flex w-full items-center justify-center h-11 flex-col mt-10 rounded-[50px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="bg-sky-100 self-stretch flex w-full h-11 flex-col items-center justify-center mt-11 rounded-[50px] max-md:mt-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                </aside>
                <section className="self-stretch flex flex-col grow shrink-0 basis-auto">
                  <h2 className="text-slate-600 text-2xl leading-7">
                    Location:
                  </h2>
                  <p className="text-slate-500 text-sm leading-5 mt-3 self-start whitespace-nowrap">
                    A108 Adam Street, New York, NY 535022
                  </p>
                  <h2 className="text-slate-600 text-2xl leading-7 mt-8 self-start whitespace-nowrap">
                    Email:
                  </h2>
                  <p className="text-slate-500 text-sm leading-5 mt-4">
                    info@example.com
                  </p>
                  <h2 className="text-slate-600 text-2xl leading-7 mt-7 self-start whitespace-nowrap">
                    Call:
                  </h2>
                  <p className="text-slate-500 text-sm leading-5 mt-3 self-start whitespace-nowrap">
                    +1 5589 55488 55s
                  </p>
                </section>
              </div>
            </div>
            <form className="bg-white flex w-full flex-col px-5 mt-12">
              <div className="self-stretch flex w-full items-start justify-between gap-5 ml-2.5 mt-10 max-md:flex-wrap max-md:mr-2.5">
                <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
                  <label
                    htmlFor="name"
                    className="text-neutral-700 text-base leading-6 self-start whitespace-nowrap"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="rounded border bg-white flex w-[279px] h-11 flex-col mt-3.5 border-solid border-zinc-200 self-start"
                  />
                </div>
                <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
                  <label
                    htmlFor="email"
                    className="text-neutral-700 text-base leading-6 self-start whitespace-nowrap"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="rounded border bg-white flex w-[279px] h-11 flex-col mt-3.5 border-solid border-zinc-200 self-start"
                  />
                </div>
              </div>
              <label
                htmlFor="subject"
                className="text-neutral-700 text-base leading-6 ml-2.5 mt-7 self-start whitespace-nowrap"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="rounded border bg-white self-stretch flex w-full h-11 flex-col mt-2.5 mx-2.5 border-solid border-zinc-200 max-md:max-w-full"
              />
              <label
                htmlFor="message"
                className="text-neutral-700 text-base leading-6 ml-2.5 mt-7 self-start whitespace-nowrap"
              >
                Message
              </label>
              <textarea
                id="message"
                className="rounded border bg-white self-stretch flex w-full h-[232px] flex-col mt-2.5 mx-2.5 border-solid border-zinc-200 max-md:max-w-full"
              />
              <button
                type="submit"
                className="bg-sky-400 self-center flex w-[177px] max-w-full flex-col mt-6 mb-8 px-5 py-4 rounded-[50px]"
              >
                <span className="text-white text-center text-base leading-6 self-center whitespace-nowrap">
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
