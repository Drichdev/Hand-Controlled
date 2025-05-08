# Hand-Controlled 3D Globe

This project is a web-based interactive interface where users can control a 3D globe (rendered as a wireframe sphere) using hand gestures detected via their webcam. It uses **HTML/CSS/JavaScript**, **Three.js** for 3D rendering, and **MediaPipe Hands** for real-time gesture recognition.

Game website link: [Hand-Controlled 3D Globe](https://drichdev.github.io/Hand-Controlled/)

## Technologies Used
- **Three.js**: to render the interactive 3D wireframe globe.
- **MediaPipe Hands**: to detect hand landmarks and recognize gestures.
- **JavaScript (ES Modules)**: for application logic and module separation.
- **HTML/CSS**: responsive layout styled with the `Space Mono` font.

## Supported Gestures
- ✋ **Zoom In**: move your hand closer to the camera → globe scales up and turns **blue**.
- 🤏 **Zoom Out**: pinch index and thumb together → globe scales down and turns **green**.
- 🤚➡️ **Rotate Left/Right**: move your hand left or right → globe rotates and turns **red**.