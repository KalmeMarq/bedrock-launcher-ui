import { useState, useEffect, useContext } from "react"
import LoadingSpinner from "../../../../components/LoadingSpinner"
import PatchNoteCard, { IPatchNote } from "../../../../components/PatchNoteCard"
import { PatchNotesContext } from "../../../../util/PatchNotesProvider"
import PatchNoteDialog from "../../../Java/pages/PatchNotes/components/PatchNoteDialog"
import PatchFeedback from "./components/PatchFeedback"

const PatchNotesPage = () => {
  const { dungeons } = useContext(PatchNotesContext)

  const [showPatchDialog, setShowPatchDialog] = useState(false)
  const [patchUsed, setPatchUsed] = useState(null as (null | IPatchNote))

  return (
    <div className='sub-page patches-page'>
       {(dungeons.length !== 0 && patchUsed !== null) && <PatchNoteDialog
        onClose={() => setShowPatchDialog(false)}
        isOpen={showPatchDialog}
        patchURL={patchUsed.contentPath}
        bottomFeedbackComponent={<PatchFeedback />}
      />}
      <div className="patches">
        {dungeons.length === 0 && <LoadingSpinner />}
          <div className="container">
            {dungeons.map(patch =>
              <PatchNoteCard
                patchNote={patch}
                key={patch.id}
                onPatchCardClick={(id: string) => {
                  setPatchUsed(dungeons.find(p => p.id === id) ?? null)
                  setShowPatchDialog(true)
                }}
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default PatchNotesPage
