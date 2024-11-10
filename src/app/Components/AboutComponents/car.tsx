"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Position = {
  bottom: number;
  left: number;
  rotation: number;
};

export const Car = () => {
  const [carPosition, setCarPosition] = useState<Position>({
    bottom: 1,
    left: 0,
    rotation: 0,
  });

  const activeKeys = new Set<string>();
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 800; // Fallback width if window is not defined
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 600; // Fallback height if window is not defined

  // Car dimensions
  const carWidth = 100;
  const carHeight = 100;

  const moveCar = () => {
    setCarPosition((prev: Position) => {
      let newBottom = prev.bottom;
      let newLeft = prev.left;
      let newRotation = prev.rotation;

      if (activeKeys.has("w") && activeKeys.has("d")) {
        newBottom = Math.min(newBottom + 5, screenHeight - carHeight);
        newLeft = Math.min(newLeft + 5, screenWidth - carWidth);
        newRotation = 45;
      } else if (activeKeys.has("w") && activeKeys.has("a")) {
        newBottom = Math.min(newBottom + 5, screenHeight - carHeight);
        newLeft = Math.max(newLeft - 5, 0);
        newRotation = -45;
      } else if (activeKeys.has("s") && activeKeys.has("d")) {
        newBottom = Math.max(newBottom - 5, 0);
        newLeft = Math.min(newLeft + 5, screenWidth - carWidth);
        newRotation = 135;
      } else if (activeKeys.has("s") && activeKeys.has("a")) {
        newBottom = Math.max(newBottom - 5, 0);
        newLeft = Math.max(newLeft - 5, 0);
        newRotation = -135;
      } else if (activeKeys.has("w")) {
        newBottom = Math.min(newBottom + 5, screenHeight - carHeight);
        newRotation = 0;
      } else if (activeKeys.has("s")) {
        newBottom = Math.max(newBottom - 5, 0);
        newRotation = 180;
      } else if (activeKeys.has("a")) {
        newLeft = Math.max(newLeft - 5, 0);
        newRotation = -90;
      } else if (activeKeys.has("d")) {
        newLeft = Math.min(newLeft + 5, screenWidth - carWidth);
        newRotation = 90;
      }

      return { bottom: newBottom, left: newLeft, rotation: newRotation };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      activeKeys.add(e.key.toLowerCase());
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      activeKeys.delete(e.key.toLowerCase());
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const interval = setInterval(moveCar, 50);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <motion.span
      style={{
        bottom: carPosition.bottom,
        left: carPosition.left,
        position: "absolute",
        rotate: carPosition.rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <Image
        src={"/racing-car.png"}
        alt="car"
        width={carWidth}
        height={carHeight}
        className="cursor-pointer car"
      />
    </motion.span>
  );
};
