"use client";
import { useTheme } from "next-themes";
import { useEffect, useState , useRef} from "react";
import Lottie from "lottie-react";
import InstagramAnimationData from "../../../public/animations/instagram.json";

export default function InstagramIcon() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const instagramRef = useRef();

  if (!mounted) {
    // Render a placeholder until client loads
    return <div className="w-8 h-8" />;
  }

  return (
    <div
      onMouseEnter={() => instagramRef.current?.play()}
      onMouseLeave={() => instagramRef.current?.stop()}
    >
      <Lottie
        lottieRef={instagramRef}
        animationData={InstagramAnimationData}
        className={`w-8 h-8 cursor-pointer ${
          theme === "dark" ? "invert" : "invert-0"
        }`}
        loop={false}
        autoplay={false}
      />
    </div>
  );
}
