
const ThankYouForReporting = () => {
  return (
    <div className="absolute bottom-0 w-full flex flex-col p-4 bg-neutral-900/50 backdrop-blur-lg items-center text-center space-y-1 sr-">
      <div className="text-base font-semibold">Report Submitted</div>

      <div className="text-xs text-neutral-400">
        Thank you for reporting. Our team will review this shortly.
      </div>

      <div className="text-xs text-green-400 mt-1">
        Report successfully received
      </div>

      <div className="text-[10px] text-neutral-500">
        Report ID: #RP-3921
      </div>

      <div className="text-xs text-neutral-400 mt-1">
        Estimated review time: 24–48 hours
      </div>

      <button className="mt-3 text-xs text-blue-400 hover:underline">
        View report status
      </button>

      <button className="mt-2 text-xs text-neutral-300 hover:text-white">
        Close
      </button>
    </div>

  )
}

export default ThankYouForReporting