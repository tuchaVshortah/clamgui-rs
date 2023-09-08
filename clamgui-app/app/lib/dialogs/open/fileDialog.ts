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

    var paths: string[] = [];

    if (Array.isArray(selected)) {
        paths = selected;
        console.log(selected)
      } else if (selected === null) {
        // user cancelled the selection
      } else {
        paths = [selected];
        console.log(selected)
      }

    return paths;
}