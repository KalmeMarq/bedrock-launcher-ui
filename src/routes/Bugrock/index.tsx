import { T } from "@mojang/t-component"
import { useState } from "react"
import { Switch, Route } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner"
import SubMenu from "../../components/SubMenu"
import ConfigurationsPage from "./pages/Configurations"
import PatchNotesPage from "./pages/PatchNotes"
import PlayPage from "./pages/Play"
import SkinsPage from "./pages/Skins"

const BugrockRoute = () => {
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
        <SubMenu.Title text='Minecraft: Bugrock Edition'/>
        <SubMenu.Navbar>
          <SubMenu.Link to='/bugrock/play' text='Play' />
          <SubMenu.Link to='/bugrock/configurations' text='Installations' />
          <SubMenu.Link to='/bugrock/skins' text='Skins' />
          <SubMenu.Link to='/bugrock/patchnotes' text='Patch notes' />
        </SubMenu.Navbar>
      </SubMenu>
      <Switch>
        <Route path='/bugrock/play'>
          <PlayPage showPlayUpdate={(v) => setShowPlay(v)} />
        </Route>
        <Route path='/bugrock/configurations'>
          <ConfigurationsPage />
        </Route>
        <Route path='/bugrock/skins'>
          <SkinsPage />
        </Route>
        <Route path='/bugrock/patchnotes'>
          <PatchNotesPage />
        </Route>
      </Switch>
    </div>
  )
}

export default BugrockRoute
