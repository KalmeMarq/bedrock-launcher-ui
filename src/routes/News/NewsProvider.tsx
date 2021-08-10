import { FC, useState, useEffect } from "react";
import { createContext } from "react";
import URls from "../../util/URLs";

export interface INews {
  id: string,
  title: string,
  readMoreLink: string,
  tag: string,
  category: 'Minecraft: Java Edition' | 'Minecraft Dungeons',
  date: string,
  newsType: ('News page' | 'Java' | 'Dungeons')[],
  newsPageImage: {
    url: string
  }
}

export const NewsContext = createContext([] as INews[])

const NewsProvider: FC = ({ children }) => {
  const [news, setNews] = useState([] as INews[])

  useEffect(() => {
    fetch(URls.news)
      .then(res => res.json())
      .then(data => {
        setNews((data.entries as INews[]))
      })
  }, [])

  return (
    <NewsContext.Provider value={news}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider