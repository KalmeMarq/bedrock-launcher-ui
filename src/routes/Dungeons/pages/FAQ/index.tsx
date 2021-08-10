import { useEffect, useState } from "react"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import './index.scss'

const FAQPage = () => {
  const [faq, setFaq] = useState([] as any)

  useEffect(() => {
    fetch('https://launchercontent.mojang.com/faq.json').then(res => res.json())
    .then(data => {
      setFaq([data.data.find((v: any) => v.context === 'Minecraft Dungeons')])
    })
  }, [])
  
  return (
    <div className='sub-page faq-page'>
      {faq.length === 0 && <LoadingSpinner />}
      <main>
        {faq.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className='faq-context' dangerouslySetInnerHTML={{
              __html: faq[0].description
            }}></div>
                      <div className='faq-qas'>
            {faq[0].qas.map((e: any) => (
              <div className='faq-qa' key={e.id}>
                <div className='faq-qa-question'>
                  <b>Q</b>
                  <div dangerouslySetInnerHTML={{__html: e.question}}></div>
                </div>
                <div className='faq-qa-answer'>
                  <b>A</b>
                  <div  dangerouslySetInnerHTML={{__html: e.answer}}></div>
                </div>
              </div>
            ))}
          </div>
          </>
        )}
      </main>
    </div>
  )
}

export default FAQPage
