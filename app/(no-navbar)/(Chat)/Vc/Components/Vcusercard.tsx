const Vcusercard = () => {
  return (
    <div className="relative Usercard  aspect-[4/3] rounded-xl border border-neutral-700 overflow-hidden">
      
      {/* Background / video */}
      <img 
        src="https://i.pinimg.com/originals/7f/f9/a2/7ff9a27da311166cc40ccfd331d1c7e5.gif"
        alt="" 
        className="object-cover w-full h-full" 
      />

      {/* Avatar centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://wallpapers-clan.com/wp-content/uploads/2023/06/cool-pfp-29.jpg"
          alt="" 
          className="w-20 h-20 rounded-full "
        />
      </div>

      {/* Username pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full text-center pb-1 ">
        <span className="text-xs text-white truncate px-2 py-0.5 bg-neutral-800/60 backdrop-blur-2xl border border-neutral-800 rounded-sm">Yoru.ayan</span>
      </div>

    </div>
  )
}

export default Vcusercard;
