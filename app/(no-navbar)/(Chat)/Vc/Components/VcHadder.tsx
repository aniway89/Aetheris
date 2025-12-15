import { HiChevronDown, HiOutlineDeviceMobile } from "react-icons/hi";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineBluetoothSearching } from "react-icons/md";

interface VcHadderProps {
  selectedAudio: "speaker" | "bluetooth" | "hearpeace";
  onSpeakerClick: () => void;
}

const VcHadder = ({ selectedAudio, onSpeakerClick }: VcHadderProps) => {

  const renderIcon = () => {
    switch (selectedAudio) {
      case "speaker":
        return <HiSpeakerWave className="text-xl" />;
      case "bluetooth":
        return <MdOutlineBluetoothSearching className="text-xl" />;
      case "hearpeace":
        return <HiOutlineDeviceMobile className="text-xl" />;
    }
  };

  return (
    <div className="flex items-center w-full justify-between py-6 px-4 overflow-hidden">

      <div className="User-display-name max-w-[300px] text-lg flex items-center gap-4 font-semibold">
        <HiChevronDown className="text-2xl" />
        Yoru.ayan is here
      </div>

      {/* Speaker Icon */}
      <div
        className="speaker border p-2 rounded-full bg-white/90 text-black cursor-pointer flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation(); // prevent SFP toggle
          onSpeakerClick();
        }}
      >
        {renderIcon()}
      </div>

    </div>
  );
};

export default VcHadder;
