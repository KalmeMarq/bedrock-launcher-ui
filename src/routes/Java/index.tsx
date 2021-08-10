import { T } from '@mojang/t-component'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import SubMenu from '../../components/SubMenu'
import ConfigurationsPage from './pages/Configurations'
import PatchNotesPage from './pages/PatchNotes'
import PlayPage from './pages/Play'
import SkinsPage from './pages/Skins'

const JavaRoute = () => {
  const [showPlay, setShowPlay] = useState(true)
  
  return (
    <div className='base-route'>
      {!showPlay && <button
        className='generic-btn'
        style={{
          position: 'absolute',
          zIndex: 200,
          minWidth: 52,
          top: 32,
          right: 20
        }}
        ><T>Play</T></button>}
      <SubMenu>
        <SubMenu.Title text='Minecraft: Java Edition' />
        <SubMenu.Navbar>
          <SubMenu.Link to='/java/play' text='Play' />
          <SubMenu.Link to='/java/configurations' text='Installations' />
          <SubMenu.Link to='/java/skins' text='Skins' />
          <SubMenu.Link to='/java/patchnotes' text='Patch notes' />
        </SubMenu.Navbar>
      </SubMenu>
      <Switch>
        <Route path='/java/play'>
          <PlayPage showPlayUpdate={(v) => setShowPlay(v)} />
        </Route>
        <Route path='/java/configurations'>
          <ConfigurationsPage />
        </Route>
        <Route path='/java/skins'>
          <SkinsPage />
        </Route>
        <Route path='/java/patchnotes'>
          <PatchNotesPage />
        </Route>
      </Switch>
    </div>
  )
}

export default JavaRoute
