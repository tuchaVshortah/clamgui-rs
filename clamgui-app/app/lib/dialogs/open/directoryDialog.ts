'use client'

import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import { FileEntry, readDir } from '@tauri-apps/api/fs';

interface DirectoryDialogOptions {
    multiple?: boolean;
    recursive?: boolean;
}

function getPaths(entries: FileEntry[]) : string[] {
    
    const paths: string[] = [];

    for (const entry of entries) {
        if (entry.children) {
            const children = entry.children;
            for (const child of children) {
                paths.push(child.path);
            }
        } else {
            paths.push(entry.path);
        }
    }

    return paths;
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

        const entries: FileEntry[] = [];
        for (const s of selected) {
            const sentries = await readDir(s, { recursive: recursive });
            entries.push(...sentries)
        }

        console.log('Entries of the selected directories:');
        console.log(entries);

        console.log('Paths of the selected directory:');
        console.log(getPaths(entries));

    } else if (selected === null) {
        console.log('user cancelled');
    } else {
        console.log(selected);

        const entries = await readDir(selected, { recursive: recursive });
        console.log('Entries of the selected directory:');

        console.log(entries);
        console.log('Paths of the selected directory:');

        console.log(getPaths(entries));
    }
}