'use client'

import { directoryDialog, fileDialog } from "@/app/lib/dialogs/open"

export default function UploadForm() {
    return (
        <div className="flex flex-row justify-between px-2">
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Choose files</button>
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => directoryDialog()}>Choose Directory</button>
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => directoryDialog(true)}>Choose Directories</button>
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Scan</button>
        </div>
    )
}