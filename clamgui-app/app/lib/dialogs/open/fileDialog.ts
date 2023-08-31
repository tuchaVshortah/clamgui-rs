'use client'

import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import { FileEntry, readDir } from '@tauri-apps/api/fs';

export default async function fileDialog() {
    const selected = await open({
        directory: false,
        multiple: true,
        defaultPath: await downloadDir(),
    });

    if (Array.isArray(selected)) {
        console.log(selected)
      } else if (selected === null) {
        // user cancelled the selection
      } else {
        console.log(selected)
      }
}