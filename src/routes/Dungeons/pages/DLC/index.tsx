import { useEffect, useState } from "react"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import './index.scss'
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'
import { ReactComponent as CloseIcon } from '../../../../assets/icons/cancel.svg'
import { Checkbox } from "../../../Settings"
import { T, useTranslation } from "@mojang/t-component"

interface IDLC {
  title: string,
  tag: string,
  description: string,
  features: any[],
  purchaseUrl: string,
  heroImage: {
    crop: {
      url: string
    }
  },
  logotype: {
    url: string
  }
}

const DLCPage = () => {
  const { t } = useTranslation()

  const [showBundles, setShowBundles] = useState(true)
  const [showDLCs, setShowDLCs] = useState(true)

  const [dlcs, setDLCs] = useState([] as IDLC[])
  const [results, setResults] = useState(0)

  const [filterText, setFilterText] = useState('')
  const handleFilterTextChange = (value: string) => {
    setFilterText(value)
    if(value === '') setResults(0)
    if(value !== '') setResults(dlcs.filter(v => v.title.includes(value)).length)
  }

  useEffect(() => {
    fetch('https://launchercontent.mojang.com/dungeonsDLC/en-US.json?t=' + Date.now())
    .then(res => res.json())
    .then((data: any) => {
      setDLCs(data.entries)
    })
  }, [])
  
  return (
    <div className='sub-page dlc-page'>
      <form className='filter-form'>
        <div className='container'>
          <div className='form-side'>
            <h3><T>Search</T></h3>
            <div className='search-box'>
              <SearchIcon className='search-icon' />
              <input type="text" placeholder={t('DLC or bundle name')} value={filterText} onChange={(e) => handleFilterTextChange(e.target.value)} />
              {filterText !== '' && <button className="reset" onClick={() => {
                handleFilterTextChange('')
              }}><CloseIcon /></button>}
              {results !== 0 && <p className='results'>{results} <T>Results</T></p>}
            </div>
          </div>
          <div className='divider'></div>
          <div className='form-side'>
            <h3><T>Content</T></h3>
            <div className='wrapper'>
              <Checkbox value={showBundles} onChange={(v) => setShowBundles(v)}>Bundles</Checkbox>
              <Checkbox value={showDLCs} onChange={(v) => setShowDLCs(v)}>DLCs</Checkbox>
            </div>
          </div>
          </div>
        </form>
      <div className='line-h'></div>
      <main>
      {dlcs.length === 0 && <LoadingSpinner />}
      {dlcs.map((e, i) => {
        return (
          <div
            key={i}
            className='dlc-card'
            style={{
              display:
                ((e.tag === 'Bundle' && showBundles) || (e.tag === 'DLC' && showDLCs))
                && (filterText === '' || e.title.toLowerCase().includes(filterText.toLowerCase())) 
                ? 'block'
                : 'none'
            }}
          >
            <div className='dlccard-border'></div>
            <div className='dlc-item'>
              <div className='dlc-item-inside'>
                <div className='dlc-item-cont'>
                  <span>{e.tag}</span>
                  <h3>{e.title}</h3>
                  <a href={e.purchaseUrl} target='_blank' className='generic-btn'>Buy now</a>
                  <p>{e.description}</p>
                  <ul>
                    {e.features.map((f: any, i: number) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className='dlc-card-imgs'>
                <img src={'https://launchercontent.mojang.com/' + e.heroImage.crop.url} alt="" />
                <img className='dlc-logo' src={'https://launchercontent.mojang.com/' + e.logotype.url} alt="" />
              </div>
            </div>
          </div>
          )
        })}
      </main>
    </div>
  )
}

export default DLCPage
