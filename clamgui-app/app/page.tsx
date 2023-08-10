import {Command} from '@tauri-apps/api/shell'
import { MouseEventHandler } from 'react'
import {scanFile} from './utils'

export default function Homepage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:mt-8 sm:mb-2 sm:px-6 lg:px-8">
        <form action="/api/scan/file" method="post" className="flex items-center space-x-6">
          <input type="file" className="w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
          " required/>
          <button className="rounded-full px-6 py-2 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" type="submit">Scan</button>
        </form>
      </div>
    </div>
  )
}
