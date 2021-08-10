import { useContext, useEffect, useState } from "react"
import HighlightedNewsItem from "../../../../components/HighlightedNewsItem"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import PlayButtonText from "../../../../components/PlayButtonText"
import { NewsContext } from "../../../News/NewsProvider"
import './index.scss'

const PlayPage = () => {
  const news = useContext(NewsContext).filter((v) => v.newsType.includes('Dungeons'))
  const [cover, setCover] = useState('')
  const [logo, setLogo] = useState('')

  useEffect(() => {
    let going = true

    fetch('https://launchercontent.mojang.com/dungeonsDLC/en-US.json?t=' + Date.now())
      .then(res => {
        if(going) return res.json() 
      })
      .then(data => {
        if(going) {
          setCover(data.entries[0].heroImage.fullSize.url)
          setLogo(data.entries[0].logotype.url)
        }
      })

    return () => {
      going = false
    }
  }, [])

  return (
    <div className='sub-page dungeons-play-page'>
      <section
        className='dungeons-banner'
        style={cover !== ''
          ? { background: 'url(https://launchercontent.mojang.com' + cover + ')', backgroundSize: 'cover' }
          : {}
        }>
        {logo !== '' && <img src={'https://launchercontent.mojang.com' + logo} className='animlogo' alt="logo" />}
      </section>
      <section className='play-bar'>
        <PlayButtonText width={238} onClick={() => {
          window.open('https://www.minecraftdungeons.net/en-us/?ref=launcher', '_blank')
        }}>Buy now</PlayButtonText>
      </section>
      <section className='news-dungeons'>
        {news.length === 0 && <LoadingSpinner />}
        {news.slice(0, 10).map((b) => <HighlightedNewsItem data={b} key={b.id}/> )}
      </section>
    </div>
  )
}

export default PlayPage
