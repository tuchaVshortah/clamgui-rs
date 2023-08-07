export function scanFile(): undefined {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const file = fileInput.files?.[0];
    console.log(file);
    console.log(file?.name);
    console.log(file?.size);
  
    //const command = new Command('run-clamscan-on-file', [])
  
  }