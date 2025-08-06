"use client"

import React from "react";
import MediaSearchBar from "./MediaSearchBar";
import { SubsequentHero } from "../components/Hero";
import { motion } from "framer-motion";
import { Title } from "../components/Title";

interface MediaHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onSearch?: (query: string) => void;
}

const MediaHeroSection: React.FC<MediaHeroSectionProps> = ({ title, onSearch }) => {
  return (
    <SubsequentHero
      className={`bg-[url('/images/gradient.png')] bg-cover bg-center`}
    >
      <div className="relative z-10 flex justify-center">
        <Title label="Gallery" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-5">
        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          initial={{ opacity: 1 }}
          animate={{}}
        >
          {title.split(" ").map((word, wordIdx, arr) => (
            <span key={wordIdx} style={{ display: "inline-block", whiteSpace: "pre" }}>
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 * (arr.slice(0, wordIdx).join(" ").length + wordIdx + charIdx) }}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIdx < arr.length - 1 && (
                <motion.span
                  key={`space-${wordIdx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.04 * (arr.slice(0, wordIdx + 1).join(" ").length + wordIdx) }}
                  style={{ display: "inline-block" }}
                >
                  {"\u00A0"}
                </motion.span>
              )}
            </span>
          ))}
        </motion.h1>
        <MediaSearchBar
          placeholder="Search media..."
          onSearch={(query) => {
            if (onSearch) {
              onSearch(query);
            }
          }}
        />
      </div>
    </SubsequentHero>
  );
};

export default MediaHeroSection;