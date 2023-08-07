//allow dead code and unused imports in debug mode
#![cfg_attr(debug_assertions, allow(dead_code, unused_imports))]

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
