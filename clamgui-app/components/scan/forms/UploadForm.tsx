'use client'

import { directoryDialog, fileDialog } from "@/app/lib/dialogs/open"
import { useState } from "react"

export default function UploadForm() {
    
    var paths: string[] = [];

    const callDirectoryDialog = async ({multiple = false, recursive = false}) => {
        const result = await directoryDialog({multiple, recursive});
        if (result) {
            paths = result;
            console.log("PATHS:")
            console.log(paths)
        }
    }

    const callFileDialog = async () => {
        const result = await fileDialog();
        if (result) {
            paths = result;
            console.log("PATHS:")
            console.log(paths)
        }
    }

    const uploadPaths = (paths: string[]) => {
        
        const jsonObject = {
            Paths: paths,
        }
        const jsonString = JSON.stringify(jsonObject);
        console.log(jsonString);

        const response = fetch("http://localhost:3000/api/scan/file", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: jsonString,
        });
    }

    const [fileDialogEnabled, setFileDialogEnabled] = useState(true);
    const [recursionEnabled, setRecursionEnabled] = useState(false);

    function recursionToggle() {
        setFileDialogEnabled(!fileDialogEnabled);
        setRecursionEnabled(!recursionEnabled);
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between px-2">
                <button disabled={!fileDialogEnabled} className="px-3 disabled:opacity-50 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => callFileDialog()}>Choose files</button>
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => callDirectoryDialog({recursive: recursionEnabled})}>Choose Directory</button>
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => callDirectoryDialog({multiple: true, recursive: recursionEnabled})}>Choose Directories</button>
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => uploadPaths(paths)}>Scan</button>
            </div>
            <div className="flex flex-row justify-center">
                <button className="px-3 rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" onClick={() => recursionToggle()}>Recursive</button>
            </div>
        </div>
    )
}