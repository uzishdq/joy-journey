import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full gradient-joy text-retro-paper">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <Image src="/logo.png" alt="JoyJournet" height={100} width={200} />
        </div>
        <p className="text-justify max-w-xl text-md leading-relaxed">
          Joy Journey offers a gentle space to pause, reflect, and reconnect
          with your emotions—helping you navigate daily feelings with awareness,
          compassion, and intention.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs">
        © 2026 Joy Journey. All rights reserved.
      </div>
    </footer>
  );
}
