import React, { useRef, useEffect } from 'react';

function GraphTab({
  data, width, height, color,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear canvas
    context.clearRect(0, 0, width, height);

    // Set line color
    context.strokeStyle = color;

    // Draw data points
    context.beginPath();
    for (let i = 0; i < data.length; i++) {
      const x = (i / (data.length - 1)) * width;
      const y = (1 - data[i]) * height;
      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }

    // Draw line
    context.stroke();
  }, [data, width, height, color]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default GraphTab;
