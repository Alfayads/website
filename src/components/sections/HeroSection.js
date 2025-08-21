"use client";

import Image from "next/image";
import LogoLoop from "@/components/ui/LogoLoop";
import { useTheme } from "next-themes";
import ScrollDownAnimationData from "../../../public/animations/scrollDown.json";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFlutter,
  SiAngular,
  SiThreedotjs,
  SiElectron,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  SiAmazonwebservices,
  SiMongodb,
  SiPostgresql,
  SiBootstrap,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJquery
} from "react-icons/si";
import Lottie from "lottie-react";
import { useRef } from "react";
import GithubIcon from "@/components/icons/GithubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiFlutter />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiAngular />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiThreedotjs />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiElectron />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiFirebase />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiGit />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiGithub />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiDocker />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiPostman />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiFigma />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiAmazonwebservices />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiMongodb />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiPostgresql />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiBootstrap />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiNodedotjs />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiHtml5 />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiCss3 />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiJquery />,
    title: "Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function HeroSection() {
  const { theme } = useTheme();
 const githubRef = useRef();
  const linkedinRef = useRef();
  const instagramRef = useRef();

  return (
    <div className="flex flex-col items-center justify-center md:justify-start min-h-screen p-4 sm:p-20 bg-secondary">
      <div className="absolute top-4 left-4 flex gap-4 items-center">
        <GithubIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
     <main className="flex flex-col items-center text-center px-4">
  <h1 className="font-primary text-primary 
    text-8xl sm:text-9xl md:text-8xl lg:text-9xl xl:text-[200px] leading-tight">
    I&apos;m Al<span className="text-[#683CD8]">fayad</span>,
  </h1>

  <p className="text-accent font-accent font-light w-full text-center sm:text-left 
    text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] mt-4">
    Architecting the back-end, designing the front-end
  </p>
</main>
      <div
      className="w-[80%] sm:w-[60%] md:w-[50%] "
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          top: "70px",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor={theme !== "dark" ? "#ffffff" : "#000000"}
          ariaLabel="Technology partners"
        />
      </div>
      <div className="mt-8">
        {" "}
        <button
          className={`px-8 py-3 rounded-full border border-[#683CD8] font-primary text-primary bg-transparent hover:bg-[#683CD8] hover:text-white`}
        >
          Hire Me
        </button>
      </div>
      <div className="absolute bottom-4 flex items-center justify-center gap-4">
        <Lottie
          animationData={ScrollDownAnimationData}
          className={`w-10 h-10 ${theme === "dark" ? "invert" : "invert-0"}`}
          loop={true}
        />
      </div>

    </div>
  );
}
