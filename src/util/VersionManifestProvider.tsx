import { createContext, FC, useEffect, useState } from "react";

export interface IVersionManifest {
  lastest: {
    release: string,
    snapshot: string
  },
  versions: {
    id: string,
    type: 'releases' | 'snapshot',
    url: string,
    time: string,
    releaseTime: string,
    sha1: string,
    complianceLevel: number
  }[]
}

export const VersionContext = createContext({} as IVersionManifest)

const VersionManifestProvider: FC = ({ children }) => {
  const [manifest, setManifest] = useState({} as IVersionManifest)

  useEffect(() => {
    fetch('https://launchermeta.mojang.com/mc/game/version_manifest_v2.json')
      .then(res => res.json())
      .then(data => {
        setManifest(data)
      })
  }, [])

  return (
    <VersionContext.Provider value={manifest}>
      {children}
    </VersionContext.Provider>
  )
}

export default VersionManifestProvider