"use client";

import { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
  direction: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    resizeCanvasToDisplaySize(canvas);
    const ctx = canvas.getContext("2d");
    if (ctx == null) return;
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const points: Point[] = [];
    const num_points = 70;
    const point_width = 5;
    const speed = 0.12;

    for (let i = 0; i < num_points; i++) {
      points.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        direction: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.fill();
      ctx.fillStyle = "rgb(100, 100, 100)";
      ctx.lineWidth = 2;

      const pairsSet = new Set(); // to stop duplicate lines

      for (let i = 0; i < num_points; i++) {
        const closest: Point[] = [
          { x: 0, y: 0, direction: 0 },
          { x: 0, y: 0, direction: 0 },
          { x: 0, y: 0, direction: 0 },
        ];
        const closestDist: number[] = [Infinity, Infinity, Infinity];
        // find closest 3, put them in a list
        for (let j = 0; j < num_points; j++) {
          if (i == j) continue;
          const dist = Math.hypot(
            points[i].x - points[j].x,
            points[i].y - points[j].y
          );
          const barrierIndex = closestDist.indexOf(Math.max(...closestDist));
          if (dist < closestDist[barrierIndex]) {
            closest[barrierIndex] = points[j];
            closestDist[barrierIndex] = dist;
          }
        }

        for (let j = 0; j < closest.length; j++) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          if (closestDist[j] > 150 || pairsSet.has(closestDist[j])) continue;
          // very simplistic hashing (just adding the coordinates together,
          // doesn't have different numbers 100% of the time but
          // close enough)
          pairsSet.add(closestDist[j]);
          const weight = 40;
          ctx.strokeStyle = `rgb(${weight}, ${weight}, ${weight})`;
          ctx.lineTo(closest[j].x, closest[j].y);
          ctx.stroke();
        }
      }
      for (let i = 0; i < num_points; i++) {
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, point_width, 0, 2 * Math.PI);
        ctx.fill();
        let xVel = Math.sin(points[i].direction) * speed;
        let yVel = Math.cos(points[i].direction) * speed;
        points[i].x += xVel;
        points[i].y += yVel;
        if (points[i].x < point_width || points[i].x > width - point_width) {
          xVel = -xVel;
        }
        if (points[i].y < point_width || points[i].y > height - point_width) {
          yVel = -yVel;
        }
        points[i].direction = Math.atan2(xVel, yVel);
      }
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }, []);

  function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;

      return true;
    }

    return false;
  }

  return <canvas ref={canvasRef} />;
}
