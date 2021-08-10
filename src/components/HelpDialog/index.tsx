import { FC } from 'react'
import Modal from 'react-modal'
import { ReactComponent as CloseIcon } from '../../assets/icons/cancel.svg'
import './index.scss'

interface IHelpDialog {
  isOpen: boolean,
  onClose: () => void
}

const UrlKnown = {
  howToPlayMC: 'https://help.minecraft.net/hc/en-us/articles/360034635372-How-Do-I-Play-Minecraft-',
  faqSupportCenter: 'https://help.minecraft.net/?ref=launcher',
  mojangSupport: 'https://twitter.com/mojangsupport/',
  dungeonsFeedback: 'https://feedback.minecraft.net/hc/en-us/community/topics/360001661211-Minecraft-Dungeons?ref=launcher',
  javaFeedback: 'https://feedback.minecraft.net/hc/en-us/community/topics/360001692331-Minecraft-Java-Edition-Snapshots?ref=launcher',
  twitter: 'https://redsto.ne/twlaunch',
  facebook: 'https://redsto.ne/fblaunch',
  instagram: 'https://redsto.ne/minecraftig',
  youtube: 'https://www.youtube.com/Minecraft',
  wiki: 'https://minecraft.gamepedia.com/Minecraft_Wiki',
  bugrockWiki: 'https://wiki.bedrock.dev/',
  planetMC: 'https://www.planetminecraft.com/forums/'
}

const HelpDialog: FC<IHelpDialog> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        className="help-modal"
        overlayClassName="Overlay"
        onRequestClose={onClose}
      >
        <header>
          <h2>Help</h2>
          <button className='close-btn' onClick={() => onClose()}>
            <CloseIcon className='close-icon'/>
          </button>
        </header>
        <main>
        <div className='help-dialog-container'>
            <h2>Official Mojang Support</h2>
            <ul>
              <li><div className='help-item' onClick={() => {/* setShowFAQDialog(true) */}}>Account Migration FAQ</div></li>
              <li><a target='_blank' href={UrlKnown.howToPlayMC} rel="noopener noreferrer">How do I play Minecraft?</a></li>
              <li><a target='_blank' href={UrlKnown.faqSupportCenter} rel="noopener noreferrer">FAQ/Support Center</a></li>
              <li><a target='_blank' href={UrlKnown.mojangSupport} rel="noopener noreferrer">Mojang Support on Twitter</a></li>
              <li><a target='_blank' href={UrlKnown.dungeonsFeedback} rel="noopener noreferrer">Give feedback: Minecraft Dungeons</a></li>
              <li><a target='_blank' href={UrlKnown.javaFeedback} rel="noopener noreferrer">Give feedback: Minecraft: Java Edition Snapshots</a></li>
            </ul>
            <h2>Social Media</h2>
            <ul>
              <li><a target='_blank' href={UrlKnown.twitter} rel="noopener noreferrer">Twitter</a></li>
              <li><a target='_blank' href={UrlKnown.facebook} rel="noopener noreferrer">Facebook</a></li>
              <li><a target='_blank' href={UrlKnown.instagram} rel="noopener noreferrer">Instagram</a></li>
              <li><a target='_blank' href={UrlKnown.youtube} rel="noopener noreferrer">Youtube</a></li>
            </ul>
            <h2>Community Driven Sites</h2>
            <ul>
              <li><a target='_blank' href={UrlKnown.wiki} rel="noopener noreferrer">Minecraft Wiki</a></li>
              <li><a target='_blank' href={UrlKnown.bugrockWiki} rel="noopener noreferrer">Bugrock Wiki</a></li>
              <li><a target='_blank' href={UrlKnown.planetMC} rel="noopener noreferrer">Planet Minecraft</a></li>
            </ul>
          </div>
        </main>
      </Modal> 
    </>
  )
}

export default HelpDialog
