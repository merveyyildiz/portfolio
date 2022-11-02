import React from "react";
import Layout from "../components/Layout";
import Typical from 'react-typical';
import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";
import Link from "next/link";

const TypeingAnimation = React.memo(
  function animation () {
    return (
      <Typical
        loop={Infinity}
        wrapper='p'
        steps= {[
          "Computer Engineer",
          2000,
          "Frontend Developer",
          2000
        ]}
        />
    );
  },
  (props, prevPros) => true
);

export default function Home() {

  return (
    <Layout title="Portfolio" description="My portfolio">
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col px-4 md:px-1 justify-center md:items-start text-center">

            {/** introduce  */}
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I`m
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white font-rockNRoll">Merve Yıldız</h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypeingAnimation />
            </div>

            {/** social account */}
            <div className="flex items-center justify-center md:justify-start mt-8 space-x-6 md:mt-4 ">
              <a
                href="https://github.com/merveyyildiz" 
                target={"_blank"}
                rel="noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-100 hover:text-pinkish-200 hover:scale-110"
                >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </a>
              <a 
                href="https://www.linkedin.com/in/merve-y%C4%B1ld%C4%B1z-6a486913a/"
                target={"_blank"}
                rel="noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-100 hover:text-pinkish-200 hover:scale-110"
                >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </a>
            </div>

            {/** code area */}
            <article className="mt-3 md:mt-4 prose md:prose-lg dark:prose-dark text-start">
              <div>
                <pre>
                  <code className="language-js">
                    <div className="flex items-center py-0 my-0 space-x-4 text-gray-500 mb-4 md:mb-0">
                      <span>{"// Portfolio.js"}</span>
                    </div>
                    <div className="flex items-center space-x-0 md:space-x-4 ">
                      <img
                        src="https://pbs.twimg.com/profile_images/1546902964597661696/IxY9Fslh_400x400.jpg"
                        alt="me"
                        className="w-11 h-11 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-sm">
                          <span className="text-pink-300">{">"}</span> const techWeb
                          <span className="font-bold text-pink-300">1</span> = [`Javascript`, `Typescript`,`Angular`,`React`];
                        </p>
                        <p className="text-sm">
                          <span className="text-pink-300">{">"}</span> const techWeb
                          <span className="font-bold text-pink-300">2</span> = [`Next`,`.Net`,`Websoket`];
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-8">
                      <Link href="/projects">
                        <a className="transition duration-300">Projects</a>
                      </Link>
                    </div>
                  </code>
                </pre>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  )
}
