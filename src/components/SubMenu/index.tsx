import { FC } from "react"
import { NavLink } from "react-router-dom"
import './index.scss'
import { useTranslation } from '@mojang/t-component'

const SubMenuLink: FC<{ to: string, title?: string, text: string }> = ({ to, text, title }) => {
  const { t } = useTranslation()
  return (
    <li><NavLink activeClassName='active' title={t(title ?? text)} to={to}>{t(text)}</NavLink></li>
  )
}

const SubMenuTitle: FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation()
  return (
    <h2>{ t(text) }</h2>
  )
}

const SubMenuNavbar: FC = ({ children }) => {
  return (
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  )
}

const SubMenu: FC = ({ children }) => {
  return (
    <header className='java-subnavbar'>
      { children }
    </header>
  )
}

export default Object.assign(SubMenu, {
  Navbar: SubMenuNavbar,
  Link: SubMenuLink,
  Title: SubMenuTitle
})