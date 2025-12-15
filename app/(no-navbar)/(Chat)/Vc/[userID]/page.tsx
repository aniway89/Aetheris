"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VcAudioSelection from "../Components/VcAudioSelection";
import VcHadder from "../Components/VcHadder";
import VcNavbar from "../Components/VcNavbar";
import Vcusercard from "../Components/Vcusercard";

const Page = () => {
  const [expanded, setExpanded] = useState(true); // SFP off by default
  const [audioOpen, setAudioOpen] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState<"speaker" | "bluetooth" | "hearpeace">("speaker");

  const containerRef = useRef<HTMLDivElement>(null);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    const target = e.target as Node;

    // Click inside Vcusercard container
    if (containerRef.current?.contains(target)) {
      if (audioOpen) {
        setAudioOpen(false);
      } else {
        setExpanded(prev => !prev);
      }
      return;
    }

    // Click outside container
    if (audioOpen) setAudioOpen(false);
  };

  const handleAudioSelect = (type: "speaker" | "bluetooth" | "hearpeace") => {
    setSelectedAudio(type);
    setAudioOpen(false);
  };

  return (
    <div
      className="relative flex flex-col items-center w-full h-[100dvh] overflow-hidden bg-black "
      onClick={handleBackgroundClick}
    >
      {/* Header */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="header"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 w-full z-20"
          >
            <VcHadder
              selectedAudio={selectedAudio}
              onSpeakerClick={() => setAudioOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* VcUserCard container */}
      <motion.div
        ref={containerRef}
        className="flex flex-col items-center justify-center w-full gap-4 h-full"
        animate={{ padding: expanded ? 40 : 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Vcusercard />
        <Vcusercard />
      </motion.div>

      {/* Audio Selection (VAC) */}
    <AnimatePresence>
      {audioOpen && (
        <motion.div
          key="audioSelection"
          initial={{ y: "100%" }}       // start below
          animate={{ y: 0 }}            // slide up
          exit={{ y: "100%" }}          // slide down
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute bottom-0 w-full z-30"
        >
          <VcAudioSelection
            selected={selectedAudio}
            onSelect={handleAudioSelect}
            onClose={() => setAudioOpen(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>


      {/* Navbar */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="navbar"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-0 w-full z-20"
          >
            <VcNavbar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
