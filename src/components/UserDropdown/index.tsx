import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import HelpDialog from "../HelpDialog"
import './index.scss'
import mojangIcon from '../../assets/logos/mojang-icon.png'

const UserDropdown = () => {
  const [open, setOpen] = useState(false)
  const [showHelpDialog, setShowHelpDialog] = useState(false)
  
  const ref = useRef(null)

  // useEffect(() => {
  //   function handleClick(e: any) {
  //     // @ts-ignore
  //     if(a.current && !a.current.contains(e.target)) {
  //       setOpen(false)
  //     }
  //   }

  //   window.addEventListener('click', handleClick)
  //   return () => {
  //     window.removeEventListener('click', handleClick)
  //   }
  // }, [])

  return (
    <div>
      <HelpDialog onClose={() => setShowHelpDialog(false)} isOpen={showHelpDialog} />
      <div className='user-dropdown'>
        <div className='user-main' onClick={() => setOpen(!open)} ref={ref} tabIndex={0}>
          <img src={mojangIcon} alt="" className='mojang-icon' />
          <div className='user-cont'>
            <span>Player</span>
            <i>Mojang Account</i>
          </div>
        </div>
        <div className={'user-dropdown-cont' + (open ? ' open' : '')}>
          <div className='user-dropdown-item' onClick={() => {
            setOpen(false)
            setShowHelpDialog(true)
          }}>Help</div>
          <hr />
          <Link to='/settings/general' className='user-dropdown-item' onClick={() => {
            setOpen(false)
          }}>View all accounts</Link>
        </div>
      </div> 
    </div>
  )
}

export default UserDropdown
