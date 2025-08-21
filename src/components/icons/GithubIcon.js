"use client";
import { useTheme } from "next-themes";
import { useEffect, useState , useRef} from "react";
import Lottie from "lottie-react";
import GithubAnimationData from "../../../public/animations/github.json";

export default function GithubIcon() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const githubRef = useRef();

  if (!mounted) {
    // Render a placeholder until client loads
    return <div className="w-8 h-8" />;
  }

  return (
    <div
      onMouseEnter={() => githubRef.current?.play()}
      onMouseLeave={() => githubRef.current?.stop()}
    >
      <Lottie
        lottieRef={githubRef}
        animationData={GithubAnimationData}
        className={`w-8 h-8 cursor-pointer ${
          theme === "dark" ? "invert" : "invert-0"
        }`}
        loop={true}
        autoplay={false}
      />
    </div>
  );
}
