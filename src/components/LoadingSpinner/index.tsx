import { FC } from 'react'
import './index.scss'

const LoadingSpinner: FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div style={Object.assign({ position: 'relative', height: '100%'}, style)}>
      <div className='loader'>
        <div className='loaders0'></div>
        <div className='loaders1'></div>
        <div className='loaders2'></div>
        <div className='loaders3'></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
