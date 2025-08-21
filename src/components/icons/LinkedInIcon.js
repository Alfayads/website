"use client";
import { useTheme } from "next-themes";
import { useEffect, useState , useRef} from "react";
import Lottie from "lottie-react";
import LinkedInAnimationData from "../../../public/animations/linkedin.json";

export default function LinkedInIcon() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const linkedInRef = useRef();

  if (!mounted) {
    // Render a placeholder until client loads
    return <div className="w-8 h-8" />;
  }

  return (
    <div
      onMouseEnter={() => linkedInRef.current?.play()}
      onMouseLeave={() => linkedInRef.current?.stop()}
    >
      <Lottie
        lottieRef={linkedInRef}
        animationData={LinkedInAnimationData}
        className={`w-8 h-8 cursor-pointer ${
          theme === "dark" ? "invert" : "invert-0"
        }`}
        loop={true}
        autoplay={false}
      />
    </div>
  );
}
