'use client'

import { directoryDialog, fileDialog } from "@/app/lib/dialogs/open"
import { useState } from "react"

export default function UploadForm() {

    const [fileDialogEnabled, setfileDialogEnabled] = useState(true);
    const [recursionEnabled, setrecursionEnabled] = useState(false);

    function recursionToggle() {
        setfileDialogEnabled(!fileDialogEnabled);
        setrecursionEnabled(!recursionEnabled);
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between px-2">
                <button disabled={fileDialogEnabled} className="px-3 disabled:opacity-50 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Choose files</button>
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => directoryDialog({recursive: recursionEnabled})}>Choose Directory</button>
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => directoryDialog({multiple: true, recursive: recursionEnabled})}>Choose Directories</button>
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Scan</button>
            </div>
            <div className="flex flex-row justify-center">
            <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => recursionToggle()}>Recursive</button>
            </div>
        </div>
    )
}