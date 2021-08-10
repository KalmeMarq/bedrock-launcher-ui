import './index.scss'
import { T, useTranslation } from '@mojang/t-component'

const CommunityRoute = () => {
  const { t } = useTranslation()

  return (
    <div className='com-route'>
      <h1><T>Coming Soon!</T></h1>
      <p><T>Check back here later for something SUPER DUPER AWESOME!</T></p>

      <div className='donate-panel'>
        <p><T>❤ Support Development ❤</T></p>
        <form action="https://www.paypal.com/donate" method="post" target="_blank">
          <input type="hidden" name="business" value="RNZMRCMNX3SJY" />
          <input type="hidden" name="item_name" value="Support the Launcher's Development" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" title={t("PayPal - The safer, easier way to pay online!")} alt={t("Donate with PayPal button")} />
        </form>
      </div>
    </div>
  )
}

export default CommunityRoute
