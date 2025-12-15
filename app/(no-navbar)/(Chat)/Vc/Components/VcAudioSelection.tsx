import React from "react"; // add this at the top
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { HiSpeakerWave } from 'react-icons/hi2';
import { MdOutlineBluetoothSearching } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

interface VcAudioSelectionProps {
  selected: "speaker" | "bluetooth" | "hearpeace";
  onSelect: (type: "speaker" | "bluetooth" | "hearpeace") => void;
  onClose: () => void;
}

const audioOptions: { type: "speaker" | "bluetooth" | "hearpeace"; label: string; icon: (active: boolean) => JSX.Element }[] = [
  { type: "hearpeace", label: "Hearpeace", icon: (active) => <HiOutlineDeviceMobile className={`text-2xl ${active ? "text-neutral-950" : "text-neutral-400"}`} /> },
  { type: "speaker", label: "Speaker", icon: (active) => <HiSpeakerWave className={`text-2xl ${active ? "text-neutral-950" : "text-neutral-400"}`} /> },
  { type: "bluetooth", label: "Bluetooth", icon: (active) => <MdOutlineBluetoothSearching className={`text-2xl ${active ? "text-neutral-950" : "text-neutral-400"}`} /> },
];


const VcAudioSelection = ({ selected, onSelect, onClose }: VcAudioSelectionProps) => {
  return (

          <div className="flex flex-col rounded-3xl px-4 py-3 text-lg border-t border-neutral-700 backdrop-blur-2xl bg-neutral-900/60 text-neutral-100 gap-3">

            {/* Drag handle */}
            <div className="Audio flex flex-col items-center gap-2 text-lg font-semibold py-2">
              <div className="w-6 h-1 bg-neutral-500 rounded-xl"></div>
              Select Audio Output
            </div>

            {audioOptions.map(option => {
              const isActive = selected === option.type;
              return (
                <div
                  key={option.type}
                  className={`Speaker flex items-center gap-2 py-4 px-5 rounded-xl backdrop-blur-2xl cursor-pointer border 
                    ${isActive 
                      ? "bg-neutral-200 border-neutral-950 text-neutral-950" 
                      : "bg-neutral-900 border-neutral-800 text-neutral-400"}`
                  }
                  onClick={() => {
                    onSelect(option.type);
                    onClose(); // triggers exit animation
                  }}
                >
                  {option.icon(isActive)}
                  {option.label}
                </div>
              );
            })}

          </div>
  
  );
};

export default VcAudioSelection;
