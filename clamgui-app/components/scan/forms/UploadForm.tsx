export default function FileUploadForm() {
    return (
        <div className="flex flex-row justify-between px-2">
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Choose files</button>
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Choose Directory</button>
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Choose Directories</button>
            <button className="rounded-full font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100">Scan</button>
        </div>
    )
}