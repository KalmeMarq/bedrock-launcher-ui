import { createContext, FC, useEffect, useState } from "react";
import { IPatchNote } from "../components/PatchNoteCard";

export const PatchNotesContext = createContext({ java: [], bugrock: [], dungeons: [] } as { java: IPatchNote[], dungeons: IPatchNote[], bugrock: IPatchNote[] })

const PatchNotesProvider: FC = ({ children }) => {
  const [javaPatches, setJavaPatches] = useState([] as IPatchNote[])
  const [dungeonsPatches, setDungeonsPatches] = useState([] as IPatchNote[])
  const [bugrockPatches, setBugrockPatches] = useState([] as IPatchNote[])

  useEffect(() => {
    fetch('https://launchercontent.mojang.com/dungeonsPatchNotes.json')
      .then(res => res.json())
      .then(data => {
        setDungeonsPatches(data.entries)
      })

    fetch('https://launchercontent.mojang.com/javaPatchNotes.json')
      .then(res => res.json())
      .then(data => {
        setJavaPatches(data.entries)
      })
  }, [])

  return (
    <PatchNotesContext.Provider value={{ java: javaPatches, dungeons: dungeonsPatches, bugrock: bugrockPatches }}>
      {children}
    </PatchNotesContext.Provider>
  )
}

export default PatchNotesProvider