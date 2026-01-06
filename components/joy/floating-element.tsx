import CloudSvg from "../svg/cloud-svg";
import FlowerSvg from "../svg/flower-svg";
import HeartSvg from "../svg/heart-svg";
import StarSvg from "../svg/start-svg";
import SunSvg from "../svg/sun-svg";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Sun - top right */}
      <div
        className="absolute top-10 right-10 animate-float-slow"
        style={{ animationDelay: "0s" }}
      >
        <SunSvg className="w-24 h-24 md:w-32 md:h-32 opacity-90" />
      </div>

      {/* Cloud - top left */}
      <div
        className="absolute top-20 left-5 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <CloudSvg className="w-28 h-20 md:w-36 md:h-24 opacity-70" />
      </div>

      {/* Small hearts */}
      <div
        className="absolute top-1/3 left-10 animate-float-slow"
        style={{ animationDelay: "1s" }}
      >
        <HeartSvg className="w-10 h-10 opacity-60" />
      </div>
      <div
        className="absolute top-1/2 right-16 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <HeartSvg className="w-8 h-8 opacity-50" />
      </div>

      {/* Stars */}
      <div
        className="absolute bottom-32 left-20 animate-sparkle"
        style={{ animationDelay: "0.3s" }}
      >
        <StarSvg className="w-12 h-12 opacity-70" />
      </div>
      <div
        className="absolute top-40 right-1/4 animate-sparkle"
        style={{ animationDelay: "0.8s" }}
      >
        <StarSvg className="w-8 h-8 opacity-50" />
      </div>
      <div
        className="absolute bottom-20 right-10 animate-sparkle"
        style={{ animationDelay: "1.2s" }}
      >
        <StarSvg className="w-10 h-10 opacity-60" />
      </div>

      {/* Flowers */}
      <div
        className="absolute bottom-16 left-10 animate-bounce-gentle"
        style={{ animationDelay: "0.2s" }}
      >
        <FlowerSvg className="w-14 h-14 opacity-70" />
      </div>
      <div
        className="absolute bottom-28 right-1/3 animate-bounce-gentle"
        style={{ animationDelay: "0.7s" }}
      >
        <FlowerSvg className="w-10 h-10 opacity-50" />
      </div>

      {/* Additional cloud */}
      <div
        className="absolute bottom-40 right-5 animate-float-slow"
        style={{ animationDelay: "2s" }}
      >
        <CloudSvg className="w-24 h-16 opacity-50" />
      </div>
    </div>
  );
}
