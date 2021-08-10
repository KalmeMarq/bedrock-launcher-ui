import { FC } from "react"
import './index.scss'
import infoIcon from '../../assets/icons/info.png'
import { ReactComponent as CloseIcon } from '../../assets/icons/cancel.svg'
import { sanitize } from "dompurify"

interface IAlertMessage {
  id: string,
  type: 'Info',
  message: string,
  clearable?: boolean
  onCloseAlert: (id: string) => void
}

const AlertMessage: FC<IAlertMessage> = ({ id,  type, message, clearable, onCloseAlert }) => {
  return (
    <div className='alert-message'>
      <img src={infoIcon} className='icon' />
      <div className='message' dangerouslySetInnerHTML={{ __html: sanitize(message) }} >
      </div>
      {clearable && (
        <button className='close-btn' onClick={() => onCloseAlert(id)}>
          <CloseIcon className='close-icon' />
        </button>
      )}
    </div>
  )
}

export default AlertMessage
