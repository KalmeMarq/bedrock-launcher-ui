import { Switch, Route } from "react-router-dom"
import SubMenu from "../../components/SubMenu"
import ConfigurationPage from "./pages/Configuration"
import DLCPage from "./pages/DLC"
import FAQPage from "./pages/FAQ"
import ModsPage from "./pages/Mods"
import PatchNotesPage from "./pages/PatchNotes"
import PlayPage from "./pages/Play"

const DungeonsRoute = () => {
  return (
    <div className='base-route'>
      <SubMenu>
        <SubMenu.Title text='Minecraft: Dungeons' />
        <SubMenu.Navbar>
          <SubMenu.Link to='/dungeons/play' text='Play' />
          <SubMenu.Link to='/dungeons/dlc' text='DLC' />
          <SubMenu.Link to='/dungeons/faq' text='FAQ' />
          <SubMenu.Link to='/dungeons/configuration' text='Installation' />
          <SubMenu.Link to='/dungeons/mods' text='Mods' />
          <SubMenu.Link to='/dungeons/patchnotes' text='Patch notes' />
        </SubMenu.Navbar>
      </SubMenu>
      <Switch>
        <Route path='/dungeons/play'>
          <PlayPage />
        </Route>
        <Route path='/dungeons/dlc'>
          <DLCPage />
        </Route>
        <Route path='/dungeons/faq'>
          <FAQPage />
        </Route>
        <Route path='/dungeons/configuration'>
          <ConfigurationPage />
        </Route>
        <Route path='/dungeons/mods'>
          <ModsPage />
        </Route>
        <Route path='/dungeons/patchnotes'>
          <PatchNotesPage />
        </Route>
      </Switch>
    </div>
  )
}

export default DungeonsRoute
