// Siam On Cloud Notification Script (CommonJS)
// Plays notify.mp3 when called. Replace notify.mp3 with your preferred sound.
// Windows compatible. Fails gracefully if sound cannot play.

const path = require("path");
const fs = require("fs");

const soundFile = path.join(__dirname, "notify.wav");

function playSound() {
  try {
    if (!fs.existsSync(soundFile)) {
      console.error("Sound file not found:", soundFile);
      return;
    }
    // Windows: use PowerShell to play sound
    const { exec } = require("child_process");
    const command = `powershell -c (New-Object Media.SoundPlayer '${soundFile}').PlaySync();`;
    exec(command, (err) => {
      if (err) {
        console.error("Failed to play sound:", err.message);
      }
    });
  } catch (e) {
    console.error("Notification error:", e.message);
  }
}

playSound();
