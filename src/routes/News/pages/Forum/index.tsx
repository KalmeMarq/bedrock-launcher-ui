import { useState } from "react"
import RSSFeed from "../../../../util/RSSFeed"
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'
import { ReactComponent as CloseIcon } from '../../../../assets/icons/cancel.svg'
import { T } from '@mojang/t-component'

const ForumPage = () => {
  const [feeds] = useState(RSSFeed)
  const [results, setResults] = useState(0)

  const [filterText, setFilterText] = useState('')
  const handleFilterTextChange = (value: string) => {
    setFilterText(value)
    if(value === '') setResults(0)
    if(value !== '') setResults(feeds.filter(v => v.title.includes(value)).length)
  }

  return (
    <>
      <form className='filter-form'>
        <div className='container'>
          <div className='form-side' style={{ width: '100%' }}>
            <h3><T>Search</T></h3>
            <div className='search-box'>
              <SearchIcon className='search-icon' />
              <input type="text" placeholder={'Search'} value={filterText} onChange={(e) => handleFilterTextChange(e.target.value)} />
              {filterText !== '' && <button className="reset" onClick={() => {
                handleFilterTextChange('')
              }}><CloseIcon /></button>}
              {results !== 0 && <p className='results'>{results} Results</p>}
            </div>
          </div>
        </div>
      </form>
      <div className='line-h'></div>
      <div className="news-scroll">
        <div className="news-inside">
          {feeds.map(feed => (
            <div
              key={feed.id}
              style={{
              display: (filterText === '' || feed.title.toLowerCase().includes(filterText) ? 'block' : 'none') 
            }}>
              <img src={'https://minecraft.net' + feed.image} alt="" />
              <h3>{feed.title}</h3>
              <p>{feed.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ForumPage
function useTranslation(): { t: any } {
  throw new Error("Function not implemented.")
}

