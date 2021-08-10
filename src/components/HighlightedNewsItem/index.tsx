import moment from 'moment'
import { FC } from 'react'
import './index.scss'

const HighlightedNewsItem: FC<{
  data: any
}> = ({ data }) => {
  moment.locale()
  return (
    <div>
      <div className='hl-news-item'>
        {data.cardBorder && <div className='hlcard-border'></div>}
        <img src={'https://launchercontent.mojang.com' + data.playPageImage.url}  alt="" />
        <div className='hl-news-item-cont'>
          <div>
            <h3>{data.title}</h3>
            <div className='hlnews-tag-date'>
              <span className='hlnews-tag'>{data.tag}</span>
              <span className='hlnews-date'>{moment(data.date).format('LL')}</span>
            </div>
            <p>{data.text}</p>
          </div>
          <div className='wrapper'>
            <a className='generic-btn' href={data.readMoreLink} target='_blank'>Read more</a>
            {data.linkButton && (
              <a className='generic-btn' href={data.linkButton.url} target='_blank'>{data.linkButton.label}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightedNewsItem
