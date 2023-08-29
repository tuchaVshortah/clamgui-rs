'use client'

import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';

export default async function directoryDialog(multiple: boolean = false) {

    // Open a selection dialog for directories
    const selected = await open({
        directory: true,
        multiple: multiple,
        defaultPath: await downloadDir(),
    });


    if (Array.isArray(selected)) {
        console.log(selected);
    } else if (selected === null) {
        console.log('user cancelled');
    } else {
        console.log(selected);
    }
}

