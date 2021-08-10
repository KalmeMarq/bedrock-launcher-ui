import './index.scss'
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo.png'
import ForumPage from './pages/Forum'
import OfficialPage from './pages/Official'
import { useTranslation, T } from '@mojang/t-component'

const NewsRoute = () => {
  const { path } = useRouteMatch()
  const { t } = useTranslation()
  
  return (
    <div className='news-route'>
      <header>
        <img src={logo} alt='logo' />
      </header>
      <nav className='subnavbar'>
        <ul>
          <li><NavLink activeClassName='active' title={t('Official')} exact to={`${path}`}><T>Official</T></NavLink></li>
          <li><NavLink activeClassName='active' title={t('Minecraft Forum')} to={`${path}/forum`}><T>Minecraft Forum</T></NavLink></li>
        </ul>
      </nav>
      <div className='line-h'></div>
      <Switch>
        <Route exact path={`${path}`}>
          <OfficialPage />
        </Route>
        <Route path={`${path}/forum`}>
          <ForumPage />
        </Route>
      </Switch>
    </div>
  )
}

export default NewsRoute
