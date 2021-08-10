import LoadingSpinner from "../../../../components/LoadingSpinner"
import { T } from '@mojang/t-component'
import { Checkbox } from "../../../Settings"
import { useEffect, useState } from "react"
import './index.scss'
import PatchNoteCard, { IPatchNote } from "../../../../components/PatchNoteCard"
import { useContext } from "react"
import { PatchNotesContext } from "../../../../util/PatchNotesProvider"
import PatchNoteDialog from "./components/PatchNoteDialog"
import PatchFeedback from "./components/PatchFeedback"

const PatchNotesPage = () => {
  const [showReleases, setShowReleases] = useState(true)
  const [showSnapshots, setShowSnapshots] = useState(true)

  const { java } = useContext(PatchNotesContext)

  const [showPatchDialog, setShowPatchDialog] = useState(false)
  const [patchUsed, setPatchUsed] = useState(null as (null | IPatchNote))
  
  return (
    <div className='sub-page patches-page'>
      {(java.length !== 0 && patchUsed !== null) && <PatchNoteDialog
        onClose={() => setShowPatchDialog(false)}
        isOpen={showPatchDialog}
        patchURL={patchUsed.contentPath}
        bottomFeedbackComponent={<PatchFeedback />}
      />}
      <div className='top-nav'>
        <div className="container">
          <form>
            <h3><T>Versions</T></h3>
            <div className='wrapper'>
              <Checkbox value={showReleases} onChange={(v) => setShowReleases(v)}>
                <T>Releases</T>
              </Checkbox>
              <Checkbox value={showSnapshots} onChange={(v) => setShowSnapshots(v)}>
                <T>Snapshots</T>
              </Checkbox>
            </div>
          </form>
          <a href="https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs" target='_blank' className='hyperlink'>
            <T>More patch notes</T>
          </a>
        </div>
      </div>
      <div className="line-h"></div>
      <div className='patches'>
        {java.length === 0 && <LoadingSpinner />}
        <div className="container">
          {java.map(patch =>
            <PatchNoteCard
              patchNote={patch}
              key={patch.id}
              onPatchCardClick={(id: string) => {
                setPatchUsed(java.find(p => p.id === id) ?? null)
                setShowPatchDialog(true)
              }}
              style={{
                display: ((patch.type === 'release' && showReleases) || (patch.type === 'snapshot' && showSnapshots) ? 'block' : 'none')
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PatchNotesPage
