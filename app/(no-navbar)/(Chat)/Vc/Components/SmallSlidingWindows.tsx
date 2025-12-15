"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdCallEnd } from "react-icons/md";
import { RiFullscreenFill } from "react-icons/ri";
import Link from "next/link";

const SNAP_RADIUS = 70;
const GAP = 15;

const COLLAPSED_W = 160;
const EXPANDED_W = 200;
const RATIO = 10 / 16;

const SmallSlidingWindows = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [pos, setPos] = useState({ x: 20, y: 20 });

  const size = expanded
    ? { w: EXPANDED_W, h: EXPANDED_W * RATIO }
    : { w: COLLAPSED_W, h: COLLAPSED_W * RATIO };

  /* ---------- CLAMP ---------- */
  const clamp = (x: number, y: number, w: number, h: number) => {
    return {
      x: Math.min(Math.max(x, GAP), window.innerWidth - w - GAP),
      y: Math.min(Math.max(y, GAP), window.innerHeight - h - GAP),
    };
  };

  /* ---------- SNAP ---------- */
  const snap = (x: number, y: number, w: number, h: number) => {
    let nx = x;
    let ny = y;

    if (x < SNAP_RADIUS) nx = GAP;
    if (y < SNAP_RADIUS) ny = GAP;

    if (window.innerWidth - (x + w) < SNAP_RADIUS)
      nx = window.innerWidth - w - GAP;

    if (window.innerHeight - (y + h) < SNAP_RADIUS)
      ny = window.innerHeight - h - GAP;

    return clamp(nx, ny, w, h);
  };

  /* ---------- CLICK OUTSIDE ---------- */
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  /* ---------- TOGGLE (CENTER SCALE) ---------- */
  const toggle = () => {
    const oldW = expanded ? EXPANDED_W : COLLAPSED_W;
    const newW = expanded ? COLLAPSED_W : EXPANDED_W;

    const delta = (newW - oldW) / 2;

    const next = clamp(
      pos.x - delta,
      pos.y - delta * RATIO,
      newW,
      newW * RATIO
    );

    setPos(next);
    setExpanded((p) => !p);
  };

  return (
    <motion.div
      ref={ref}
      drag
      dragMomentum={false}
      onDragEnd={(e, info) => {
        const snapped = snap(info.point.x, info.point.y, size.w, size.h);
        setPos(snapped);
      }}
      animate={{
        x: pos.x,
        y: pos.y,
        width: size.w,
        height: size.h,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      className="fixed z-[900] rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer"
    >
      {/* TOP CONTROLS */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 left-0 w-full flex justify-end gap-1 p-2 z-10"
          >
            <MdCallEnd className="p-1 text-3xl bg-red-600 rounded-md" />
           <Link href={`/Vc/&{userID}`}>   
           <RiFullscreenFill  className="p-1 text-3xl bg-neutral-800 rounded-md" />
           </Link> 
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND */}
      <img
        src="https://i.pinimg.com/originals/7f/f9/a2/7ff9a27da311166cc40ccfd331d1c7e5.gif"
        className="w-full h-full object-cover blur-lg"
        alt=""
      />

      {/* AVATAR */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://wallpapers-clan.com/wp-content/uploads/2023/06/cool-pfp-29.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default SmallSlidingWindows;
