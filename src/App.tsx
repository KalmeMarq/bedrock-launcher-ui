import { useEffect, useState } from "react";
import AlertMessage from "./components/AlertMessage";
import MainMenu from "./components/MainMenu";
import URls from "./util/URLs"
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NewsRoute from "./routes/News";
import JavaRoute from "./routes/Java";
import BugrockRoute from "./routes/Bugrock";
import DungeonsRoute from "./routes/Dungeons";
import SettingsRoute from "./routes/Settings";
import StoreRoute from "./routes/Store";
import CommunityRoute from "./routes/Community";
import NewsProvider from "./routes/News/NewsProvider";
import VersionManifestProvider from "./util/VersionManifestProvider";
import PatchNotesProvider from "./util/PatchNotesProvider";

interface IAlert {
  launcher: string[],
  message: string
  severity: 'Info',
  clearable: true,
  id: string
}

const App = () => {
  const [alerts, setAlerts] = useState([] as IAlert[])

  useEffect(() => {
    fetch(URls.alertMessaging)
      .then(res => res.json())
      .then(data => {
        setAlerts(data.entries)
      })
  }, [])

  return (
    <VersionManifestProvider>
      <PatchNotesProvider>
        <NewsProvider>
          <div className='main-app'>
            <Router>
              <MainMenu />
              <div className='routes'>
                <Switch>
                  <Route path='/news'>
                    <NewsRoute />
                  </Route>
                  <Route path='/java'>
                    <JavaRoute />
                    <Redirect to='/java/play' />
                  </Route>
                  <Route path='/bugrock'>
                    <BugrockRoute />
                    <Redirect to='/bugrock/play' />
                  </Route>
                  <Route path='/dungeons'>
                    <DungeonsRoute />
                    <Redirect to='/dungeons/play' />
                  </Route>
                  <Route path='/store'>
                    <StoreRoute />
                  </Route>
                  <Route path='/community'>
                    <CommunityRoute />
                  </Route>
                  <Route path='/settings'>
                    <SettingsRoute />
                    <Redirect to='/settings/general' />
                  </Route>
                  <Redirect from='/' to='/news' />
                </Switch>
              </div>
            </Router>
          </div>
          <div className='alert-messaging'>
            {alerts.map(alert =>
              <AlertMessage
                key={alert.id}
                id={alert.id}
                type={alert.severity}
                clearable={alert.clearable}
                message={alert.message}
                onCloseAlert={(id: string) => {
                  setAlerts(alerts.filter(al => al.id !== id))
                }}
              />
            )}
          </div>
        </NewsProvider>
      </PatchNotesProvider>
    </VersionManifestProvider>
  )
}

export default App;
