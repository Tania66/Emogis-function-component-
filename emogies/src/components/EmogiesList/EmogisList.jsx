import React from 'react'

export default function EmogisList ({list,handleClickVoice}) {
  
  return (
    <ul className='container-emogi-list'>
    {list.map((emogi) => (
      <li key={emogi.id} >
        <button className='btn_emogi' type='button'  onClick={() => handleClickVoice(emogi.id)}>
{emogi.smile}
        </button>
        <span className='emogi_span'>{emogi.voice}</span>
      </li>
    ))}
</ul>
  )
}


