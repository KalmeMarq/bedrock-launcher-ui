import { T } from "@mojang/t-component"
import { FC } from "react"
import './index.scss'

const PlayButtonText: FC<{ width: number, onClick?: () => void }> = ({ width, children, onClick }) => {
  return (
    <button className='play-btn-text' onClick={onClick}>
      {typeof children === 'string'
        ? <span><T>{children}</T></span>
        : children
      } 
    </button>
  )
}

export default PlayButtonText
