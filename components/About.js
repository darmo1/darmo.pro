import * as React from "react";
import Link from "next/link";
import { annotate, annotationGroup } from "rough-notation";
import daniloImg from "../public/danilo-profile.jpg";
import Image from "next/image";

const About = () => {
  const word1 = React.useRef(null);
  const word2 = React.useRef(null);
  const word3 = React.useRef(null);
  const word4 = React.useRef(null);

  const annotateWord = (word, color) => {
    return annotate(word.current, {
      color,
      type: "highlight",
      multiline: true,
      padding: [0, 2],
      iterations: 1,
    });
  };

  React.useEffect(() => {
    const ag = annotationGroup([
      annotateWord(word1, "#FDE68A"),
      annotateWord(word2, "#BAE6FD"),
      annotateWord(word3, "#A7F3D0"),
      annotateWord(word4, "#C7D2FE"),
    ]);
    ag.show();
  }, []);

  return (
    <div className="">
      <div className="max-w-4xl mx-auto flex flex-wrap">
        <div className=" py-4  lg:w-1/2 ">
          <div className="">
            <p>
              <span className="text-2xl font-bold text-gray-900  mr-4 lg:text-4xl">
                Hi!
              </span>
              <h1
                className="inline-block text-2xl font-bold text-gray-900 lg:text-4xl"
                ref={word1}
              >
                I'm Danilo
              </h1>
            </p>

            <br />
            <div className=" leading-8 ">
              <p ref={word2} className="text-gray-800 inline-block">
                Frontend Developer and Materials engineer.
              </p>
              <br />
              <span>
                Welcome to my website where{" "}
                <p ref={word3} className="text-gray-800 inline-block">
                  I share what I'm learning
                </p>{" "}
                about technology and sometimes about materials science.{" "}
                I'd like  to &nbsp;
                <p ref={word4} className="text-gray-800 inline-block">
                   become a better developer
                </p>{" "}
                and create products from then both of the best worlds <span className="font-bold">materials and tech. 🤝</span>
               <div className="my-4">
               <hr/>
                <Link href={"https://www.linkedin.com/in/danilomorales110"}>
                  <a className="font-bold transition-colors hover:text-sky-500 mr-4"  target="_blank">
                    Linkedin
                  </a>
                </Link>{" "}
                <Link href={"https://www.twitter.com/darmo10"}>
                  <a className="font-bold transition-colors hover:text-sky-500 mr-4"  target="_blank">
                    Twitter
                  </a>
                </Link>{" "}
                <Link href={"https://github.com/darmo1"}>
                  <a className="font-bold transition-colors hover:text-sky-500 mr-4"  target="_blank">
                    Github
                  </a>
                </Link>{" "}
            
                  <Link href={"/cv-danilo.pdf"}>
  
                  <a className="font-bold transition-colors hover:text-sky-500 mr-4 h-full" target="_blank" rel="noopener noreferrer">
                    
                    CV
                  </a>
              
                </Link>{" "}
  
                <hr/>
               </div>
              </span>
            </div>
          </div>
        </div>
        <div className=" flex-shrink-0 mt-6 px-8 py-4 mb-4 lg:w-1/2  lg:my-6 flex justify-center items-center">
          <Image
            src={daniloImg}
            alt="danilo-profile"
            className="rounded-full"
            placeholder="blur"
            priority={true}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
