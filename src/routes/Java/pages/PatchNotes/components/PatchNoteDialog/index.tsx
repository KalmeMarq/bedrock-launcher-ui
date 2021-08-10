import { ReactComponent as CloseIcon } from '../../../../../../assets/icons/cancel.svg'
import './index.scss'
import Modal from 'react-modal'
import { FC, useEffect, useState } from 'react'
import { IPatchNote } from '../../../../../../components/PatchNoteCard'
import { sanitize } from 'dompurify'
import LoadingSpinner from '../../../../../../components/LoadingSpinner'
import moment from 'moment'

interface IPatchNoteDialog {
  patchURL: string,
  isOpen: boolean,
  bottomFeedbackComponent?: JSX.Element,
  onClose: () => void
}

Modal.setAppElement('#root')

const PatchNoteDialog: FC<IPatchNoteDialog> = ({ bottomFeedbackComponent, patchURL, isOpen, onClose }) => {
  const [patch, setPatch] = useState({} as IPatchNote)

  useEffect(() => {
    let going = true
    setPatch({} as IPatchNote)
    
    fetch('https://launchercontent.mojang.com/' + patchURL)
      .then(res => {
        if(going) return res.json()
      })
      .then(data => {
        if(going) setPatch(data)
      })
    return () => {
      going = false
    }
  }, [patchURL])

  moment.locale()

  return (
    <Modal
      isOpen={isOpen}
      className="patch-modal"
      overlayClassName="Overlay"
      onRequestClose={onClose}
    >
      {Object.values(patch).length === 0 && <LoadingSpinner style={{ position: 'absolute', width: '100%' }} />}
      <header>
        <h2>Patch Notes {patch.version}</h2>
        <button className='close-btn' onClick={() => onClose()}>
          <CloseIcon className='close-icon'/>
        </button>
      </header>
      <main>
        {Object.values(patch).length !== 0 && (
          <div className="container">
            <span className='patch-date'>{moment(patch.date).format('LLLL')}</span>
          </div>
        )}
        <div
          className="container"
          dangerouslySetInnerHTML={{
            __html: sanitize(patch.body)
          }}
        >
        </div>
        {Object.values(patch).length !== 0 && (
          <div className="container" style={{ marginTop: 20 }}>
            {bottomFeedbackComponent}
          </div>
        )}
      </main>
    </Modal>
  )
}

export default PatchNoteDialog
