import { ChangeEvent, FC, useState } from "react"
import SubMenu from "../../components/SubMenu"
import './index.scss'
import checkmark from '../../assets/icons/optionmark.png'
import { Switch, Route } from "react-router-dom"
import GeneralPage from "./pages/General"
import VersionsPage from "./pages/Accounts"
import AboutPage from "./pages/About"
import AccountsPage from "./pages/Accounts"

export const Checkbox: FC<{ value: boolean, onChange?: (value: boolean) => void }> = ({ value, children, onChange }) => {
  const [checked, setChecked] = useState(value)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if(onChange) onChange(e.target.checked)
  }

  return (
    <div className='checkbox'>
      <label>
        <div className='check-box'>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          <div className='check-fake'>
            <img src={checkmark} alt="" className="check" />
          </div>
        </div>
        <span>{children}</span>
      </label>
    </div>
  )
}

const SettingsRoute = () => {
  return (
    <div className='base-route settings-route'>
     <SubMenu>
        <SubMenu.Title text='Settings' />
        <SubMenu.Navbar>
          <SubMenu.Link to='/settings/general' text='General' />
          <SubMenu.Link to='/settings/versions' text='Versions' />
          <SubMenu.Link to='/settings/accounts' text='Accounts' />
          <SubMenu.Link to='/settings/about' text='About' />
        </SubMenu.Navbar>
      </SubMenu>
      <Switch>
        <Route path='/settings/general'>
          <GeneralPage />
        </Route>
        <Route path='/settings/versions'>
          <VersionsPage />
        </Route>
        <Route path='/settings/accounts'>
          <AccountsPage />
        </Route>
        <Route path='/settings/about'>
          <AboutPage />
        </Route>
      </Switch>
    </div>
  )
}

export default SettingsRoute
