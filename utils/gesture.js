export function detectGesture(landmarks) {
    const wrist = landmarks[0];
    const indexTip = landmarks[8];
    const thumbTip = landmarks[4];
  
    const zDistance = wrist.z - indexTip.z;
    const xDistance = indexTip.x - wrist.x;
  
    const pinchDistance = Math.hypot(
      indexTip.x - thumbTip.x,
      indexTip.y - thumbTip.y
    );
  
    if (pinchDistance < 0.03) return 'zoom_out';
    if (zDistance > 0.1) return 'zoom_in';
    if (xDistance < -0.08) return 'rotate_left';
    if (xDistance > 0.08) return 'rotate_right';
  
    return null;
  }
  