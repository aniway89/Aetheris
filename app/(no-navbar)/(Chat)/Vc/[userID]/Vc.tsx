"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import VcAudioSelection from "../Components/VcAudioSelection";
import VcHadder from "../Components/VcHadder";
import VcNavbar from "../Components/VcNavbar";
import Vcusercard from "../Components/Vcusercard";

const Vc = () => {
    const [expanded, setExpanded] = useState(true);
    const [audioOpen, setAudioOpen] = useState(false);
    const [selectedAudio, setSelectedAudio] =
        useState<"speaker" | "bluetooth" | "hearpeace">("speaker");

    const containerRef = useRef<HTMLDivElement>(null);
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    // %-based padding (Framer-safe)
    const expandedPadding = isDesktop ? "10%" : "8%";
    const collapsedPadding = isDesktop ? "2%" : "3%";

    const handleBackgroundClick = (e: React.MouseEvent) => {
        const target = e.target as Node;

        if (containerRef.current?.contains(target)) {
            if (audioOpen) setAudioOpen(false);
            else setExpanded(v => !v);
            return;
        }

        if (audioOpen) setAudioOpen(false);
    };

    return (
        <div
            className="relative flex flex-col items-center w-full h-[100dvh] overflow-hidden bg-black"
            onClick={handleBackgroundClick}
        >
            {/* ================= HEADER ================= */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="absolute top-0 w-full z-20"
                    >
                        <VcHadder
                            selectedAudio={selectedAudio}
                            onSpeakerClick={() => setAudioOpen(true)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================= VC CARD PADDING SHELL ================= */}
            <motion.div
                ref={containerRef}
                className="w-full h-full flex items-center justify-center"
                animate={{
                    paddingTop: expanded ? expandedPadding : collapsedPadding,
                    paddingBottom: expanded ? expandedPadding : collapsedPadding,
                    paddingLeft: expanded ? expandedPadding : collapsedPadding,
                    paddingRight: expanded ? expandedPadding : collapsedPadding,
                }}
                transition={{
                    type: "spring",
                    stiffness: 210,
                    damping: 26,
                    mass: 0.9,
                }}
            >
                {/* ================= VC CARD LAYOUT ================= */}
                <div
                    className="
            flex items-center justify-center w-full h-full
            gap-4
            flex-col
            lg:flex-row
          "
                >
                    <Vcusercard />
                    <Vcusercard />
                </div>
            </motion.div>

            {/* ================= AUDIO SELECTION ================= */}
            <AnimatePresence>
                {audioOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute bottom-0 w-full z-30 max-w-[600px]"
                    >
                        <VcAudioSelection
                            selected={selectedAudio}
                            onSelect={type => {
                                setSelectedAudio(type);
                                setAudioOpen(false);
                            }}
                            onClose={() => setAudioOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ================= NAVBAR ================= */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="absolute bottom-1 w-full z-20 max-w-[600px]"
                    >
                        <VcNavbar />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Vc;
