import LoadingSpinner from "../../../../components/LoadingSpinner"
import logoIcon from '../../../../assets/logos/MinecraftBugrockEdition.png';
import './index.scss'
import PlayButtonText from "../../../../components/PlayButtonText";
import { FC, useState } from "react";

const PlayPage: FC<{ showPlayUpdate: (value: boolean) => void }> = ({ showPlayUpdate }) => {
  const [showPlay, setShowPlay] = useState(true)

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    let a = (e.currentTarget.querySelector('.play-bar') as HTMLDivElement).getBoundingClientRect().top
    if(a <= 83) {
      setShowPlay(false)
      showPlayUpdate(false)
    }
    else {
      setShowPlay(true)
      showPlayUpdate(true)
    }
  }

  return (
    <div className='sub-page bug-play-page' onScroll={handleScroll}>
      <section className='bug-banner'>
        <img src={logoIcon} className='animlogo' alt="" />
      </section>
      <section className='play-bar'>
        <PlayButtonText width={238}>Play</PlayButtonText>
        <span className='userName'>Player</span>
      </section>
    </div>
  )
}

export default PlayPage
