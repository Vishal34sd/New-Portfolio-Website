import { useEffect, useState } from "react";

const LightningCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: "screen" }}
    >
      {/* main flame core */}
      <div
        className="w-7 h-7 rounded-full bg-linear-to-tr from-yellow-200 via-amber-300 to-orange-500 shadow-[0_0_35px_10px_rgba(252,211,77,0.9)] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 14}px, ${position.y - 14}px)`,
        }}
      />

      {/* soft outer glow */}
      <div
        className="absolute w-12 h-12 rounded-full bg-yellow-200/20 blur-2xl shadow-[0_0_45px_18px_rgba(252,211,77,0.55)] transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />

      {/* rising sparks around cursor */}
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-amber-300/90 shadow-[0_0_18px_6px_rgba(252,211,77,0.8)] transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x + 10}px, ${position.y - 18}px)`,
        }}
      />
      <div
        className="absolute w-2 h-2 rounded-full bg-yellow-100/90 shadow-[0_0_14px_4px_rgba(254,249,195,0.9)] transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 10}px)`,
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-orange-300/90 shadow-[0_0_14px_4px_rgba(248,187,132,0.8)] transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x + 4}px, ${position.y + 14}px)`,
        }}
      />
    </div>
  );
};

export default LightningCursor;
