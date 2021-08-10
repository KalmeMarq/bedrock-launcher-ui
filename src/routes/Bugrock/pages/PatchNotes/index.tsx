import { T } from "@mojang/t-component"
import { useContext, useState } from "react"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import PatchNoteCard, { IPatchNote } from "../../../../components/PatchNoteCard"
import { PatchNotesContext } from "../../../../util/PatchNotesProvider"
import { Checkbox } from "../../../Settings"

const PatchNotesPage = () => {
  const [showReleases, setShowReleases] = useState(true)
  const [showBetas, setShowBetas] = useState(true)

  const { bugrock } = useContext(PatchNotesContext)

  return (
    <div className='sub-page patches-page'>
       <div className='top-nav'>
        <div className="container">
          <form>
            <h3><T>Versions</T></h3>
            <div className='wrapper'>
              <Checkbox value={showReleases} onChange={(v) => setShowReleases(v)}>
                <T>Releases</T>
              </Checkbox>
              <Checkbox value={showBetas} onChange={(v) => setShowBetas(v)}>
                <T>Betas</T>
              </Checkbox>
            </div>
          </form>
          <a href="https://feedback.minecraft.net/hc/en-us/sections/360001186971-Release-Changelogs" target='_blank' className='hyperlink'>
            <T>More patch notes</T>
          </a>
        </div>
      </div>
      <div className="line-h"></div>
      <div className="patches">
        {bugrock.length === 0 && <LoadingSpinner />}
          <div className="container">
            {bugrock.map(patch =>
              <PatchNoteCard
                patchNote={patch}
                key={patch.id}
                onPatchCardClick={() => {}}
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default PatchNotesPage
