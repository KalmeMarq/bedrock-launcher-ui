import { useContext, useState } from "react"
import URls from "../../../../util/URLs"
import { NewsContext } from "../../NewsProvider"
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'
import { ReactComponent as CloseIcon } from '../../../../assets/icons/cancel.svg'
import { T, useTranslation } from '@mojang/t-component'
import { Checkbox } from "../../../Settings"
import moment from "moment"

const OfficialPage = () => {
  const { t } = useTranslation()
  const [showJava, setShowJava] = useState(true)
  const [showDungeons, setShowDungeons] = useState(true)
  
  const news = useContext(NewsContext).filter(n => n.newsType.includes('News page'))
  const [results, setResults] = useState(0)

  const [filterText, setFilterText] = useState('')
  const handleFilterTextChange = (value: string) => {
    setFilterText(value)
    if(value === '') setResults(0)
    if(value !== '') setResults(news.filter(v => v.title.includes(value)).length)
  }

  moment.locale()

  return (
    <>
      <form className='filter-form'>
        <div className='container'>
          <div className='form-side'>
            <h3><T>Search</T></h3>
            <div className='search-box'>
              <SearchIcon className='search-icon' />
              <input type="text" placeholder={t('News title')} value={filterText} onChange={(e) => handleFilterTextChange(e.target.value)} />
              {filterText !== '' && <button className="reset" onClick={() => {
                handleFilterTextChange('')
              }}><CloseIcon /></button>}
              {results !== 0 && <p className='results'>{results} <T>Results</T></p>}
            </div>
          </div>
          <div className='divider'></div>
          <div className='form-side'>
            <h3><T>Categories</T></h3>
            <div className='wrapper'>
              <Checkbox value={showJava} onChange={(v) => setShowJava(v)}>Minecraft: Java Edition</Checkbox>
              <Checkbox value={showDungeons} onChange={(v) => setShowDungeons(v)}>Minecraft Dungeons</Checkbox>
            </div>
          </div>
          </div>
        </form>
      <div className='line-h'></div>
      <div className='news-scroll'>
         <div className='news-inside'>
         {news.map(n => {
            return (
              <a
                className='news-item'
                href={n.readMoreLink}
                target='_blank'
                key={n.id}
                style={{
                  display: (((n.category === 'Minecraft: Java Edition' && showJava) || (n.category === 'Minecraft Dungeons' && showDungeons))
                       && (filterText === '' || n.title.toLowerCase().includes(filterText.toLowerCase()))  ? 'block'
                        : 'none') 
                }}
              >
                <div className='news-item-img'>
                  <img src={URls.baseUrl + n.newsPageImage.url} alt="" loading='lazy' />
                </div>
                <div className='news-item-cont'>
                  <h3>{n.title}</h3>
                  <div className='wrapper'>
                    <span className='cat'>{n.category}</span>
                    <span className='date'>{moment(n.date).format('LLL')}</span>
                  </div>
                </div>
              </a>
          )})}
         </div>
      </div>
    </>
  )
}

export default OfficialPage
