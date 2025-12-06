import React from 'react'
import { FaPlay } from 'react-icons/fa'

const VoiceNote = () => {
  return (
    <div className='Voicenote p-3  bg-gray-900 w-fit flex items-center rounded-2xl'>
       <FaPlay 
       /> |I|I|I||I|I|I||I|I|II|I|I|I||
       <audio src="https://aac.saavncdn.com/397/03202cd6238ff818728815fda7cd5cb0_160.mp4" ></audio>
    </div>
  )
}

export default VoiceNote