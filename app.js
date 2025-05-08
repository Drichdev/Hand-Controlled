import { detectGesture } from './utils/gesture.js';
import { initSphere, updateSphere } from './utils/sphere.js';

const video = document.getElementById('input-video');
const handCanvas = document.querySelector('.hand-canvas');
const handCtx = handCanvas.getContext('2d');

handCanvas.width = 320;
handCanvas.height = 240;

const hands = new Hands({
  locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.6
});

hands.onResults(onResults);

const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 320,
  height: 240
});
camera.start();

initSphere(); // démarrer la planète

function onResults(results) {
  handCtx.clearRect(0, 0, handCanvas.width, handCanvas.height);

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];
    drawConnectors(handCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 2 });
    drawLandmarks(handCtx, landmarks, { color: '#FF0000', lineWidth: 1 });

    const gesture = detectGesture(landmarks);
    updateSphere(gesture);
  }
}