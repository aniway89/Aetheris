import { FaChevronRight } from 'react-icons/fa'

const Report = () => {
    return (
        <div className="absolute bottom-0 px-8 py-2 bg-neutral-900/50 backdrop-blur-lg w-full flex flex-col gap-2 items-center sr-only">
            <div className="w-7 h-1 bg-neutral-400 rounded-full"></div>
            <div className="w-full text-center text-lg font-bold mb-4">What do you want to report?</div>
            <div className="buttonsss py-2 px-4 flex  justify-between items-center border border-neutral-700 rounded-lg">
                <div className="flex flex-col">
                    <div className="text-sm font-semibold">Spamming</div>
                    <div className="text-xs text-neutral-400">
                        This user repeatedly sends spam messages or unauthorized links.
                    </div>
                </div>
                <FaChevronRight />

            </div>
            <div className="buttonsss py-2 px-4 flex  justify-between items-center border border-neutral-700 rounded-lg">
                <div className="flex flex-col">
                    <div className="text-sm font-semibold">Harassment or Abuse</div>
                    <div className="text-xs text-neutral-400">
                        This user uses offensive language, threats, or harasses others.
                    </div>

                </div>
                <FaChevronRight />

            </div>
        </div>
    )
}

export default Report