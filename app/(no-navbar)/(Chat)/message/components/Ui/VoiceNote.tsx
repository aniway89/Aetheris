import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Visiluaser from './Visiluaser'

const VoiceNote = () => {
  return (
    <div className='Voicenote px-4 py-3  bg-gray-900 w-fit flex items-center rounded-4xl gap-2'>
       <FaPlay 
       />
       <Visiluaser/>
       <audio src="https://aac.saavncdn.com/397/03202cd6238ff818728815fda7cd5cb0_160.mp4" ></audio>
       <div className="time text-xs text-gray-500">
        3:23
       </div>
    </div>
  )
}

export default VoiceNote