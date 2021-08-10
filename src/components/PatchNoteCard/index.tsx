import React, { FC } from "react"
import './index.scss'

export interface IPatchNote {
  id: string,
  type: 'release' | 'snapshot',
  title: string,
  version: string,
  body: string,
  contentPath: string,
  date: string,
  image: {
    title: string,
    url: string
  }
}

const PatchNoteCard: FC<{ style?: React.CSSProperties, patchNote: IPatchNote, onPatchCardClick: (id: string) => void }> = ({ style, patchNote, onPatchCardClick }) =>  {  
  return (
    <button className={'patch-item' + ' ' + patchNote.type} onClick={() => onPatchCardClick(patchNote.id)} style={style}>
      <div className='patch-item-inside'>
        <img src={'https://launchercontent.mojang.com' + patchNote.image.url} alt={patchNote.image.title} />
        <div className='patch-cont'>
          <p>{patchNote.title}</p>
        </div>
      </div>
    </button>
  )
}

export default PatchNoteCard
