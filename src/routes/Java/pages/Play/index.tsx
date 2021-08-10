import LoadingSpinner from "../../../../components/LoadingSpinner"
import logoIcon from '../../../../assets/logos/Minecraft_Java_Edition.png';
import './index.scss'
import { FC, useContext, useState } from "react";
import { NewsContext } from "../../../News/NewsProvider";
import HighlightedNewsItem from "../../../../components/HighlightedNewsItem";
import PlayButtonText from "../../../../components/PlayButtonText";

const PlayPage: FC<{ showPlayUpdate: (value: boolean) => void }> = ({ showPlayUpdate }) => {
  const [showPlay, setShowPlay] = useState(true)
  const news = useContext(NewsContext).filter((v) => v.newsType.includes('Java'))

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
    <div className='sub-page java-play-page' onScroll={handleScroll}>
      <section className='java-banner'>
        <img src={logoIcon} className='animlogo' alt="" />
      </section>
      <section className='play-bar'>
        {showPlay && <PlayButtonText width={234}>Play</PlayButtonText>}
        <span className='userName'>Player</span>
      </section>
      <section className='news-java'>
        {news.length === 0 && <LoadingSpinner />}
        {news.slice(0, 10).map((b) => <HighlightedNewsItem data={b} key={b.id}/> )}
      </section>
    </div>
  )
}

export default PlayPage
