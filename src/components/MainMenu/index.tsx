import MainMenuTab from "./components/MainMenuTab"
import './index.scss'
import newsIcon from '../../assets/icons/news_icon.png'
import javaIcon from '../../assets/icons/grass_icon.png'
import bugrockIcon from '../../assets/icons/bugrock_icon.png'
import dungeonsIcon from '../../assets/icons/dungeons_icon.png'
import storeIcon from '../../assets/icons/store.png'
import comIcon from '../../assets/icons/com_icon.png'
import settingsIcon from '../../assets/icons/settings_icon.png'
import { T } from '@mojang/t-component'
import UserDropdown from "../UserDropdown"

const MainMenu = () => {
  return (
    <div className='main-menu'>
      <UserDropdown />
      <MainMenuTab to='/news' tooltip='News' icon={newsIcon}>
        <T>News</T>
      </MainMenuTab>
      <MainMenuTab to='/java' tooltip='Java Edition' icon={javaIcon}>
        <i>Minecraft:</i>
        <span>Java Edition</span>
      </MainMenuTab>
      <MainMenuTab to='/bugrock' tooltip='Bugrock Edition' icon={bugrockIcon}>
        <i>Minecraft:</i>
        <span>Bugrock Edition</span>
      </MainMenuTab>
      <MainMenuTab to='/dungeons' tooltip='Dungeons Edition' icon={dungeonsIcon}>
        <i>Minecraft</i>
        <span>Dungeons</span>
      </MainMenuTab>
      <MainMenuTab to='/store' tooltip='Marketplace' icon={storeIcon}>
        <T>Store</T>
      </MainMenuTab>
      <MainMenuTab to='/community' tooltip='Community' icon={comIcon}>
        <T>Community</T>
      </MainMenuTab>
      <div className='filler'></div>
      <MainMenuTab to='/settings' tooltip='Settings' icon={settingsIcon}>
        <T>Settings</T>
      </MainMenuTab>
    </div>
  )
}

export default MainMenu
