'use client'

import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import { readDir } from '@tauri-apps/api/fs';

interface DirectoryDialogOptions {
    multiple?: boolean;
    recursive?: boolean;
}

export default async function directoryDialog({multiple, recursive}: DirectoryDialogOptions = {multiple: false, recursive: false}) {

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
        const entries = await readDir(selected, { recursive: recursive });
        console.log('Entries of the selected directory:');
        console.log(entries);
    }
}