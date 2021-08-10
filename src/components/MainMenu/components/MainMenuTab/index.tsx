import { FC } from "react"
import './index.scss'
import { NavLink } from 'react-router-dom'

interface IMainMenuTab {
  to: string,
  tooltip: string,
  icon: string
}

const MainMenuTab: FC<IMainMenuTab> = ({ to, tooltip, icon, children }) => {
  return (
    <div className='mainmenu-tab'>
      <NavLink title={tooltip} to={to} activeClassName='active'>
        <div className='mainmenu-tab-icon'>
          <img src={icon} alt={icon} />
        </div>
        <div className='mainmenu-tab-cont'>
          {children}
        </div>
      </NavLink>
    </div>
  )
}

export default MainMenuTab
