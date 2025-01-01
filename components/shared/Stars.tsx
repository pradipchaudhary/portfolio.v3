"use client";

import React, { useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Star properties
        const stars: Array<{
            x: number;
            y: number;
            size: number;
            speed: number;
            brightness: number;
        }> = [];

        // Create stars (decreasing the number of stars and slowing their speed)
        const createStars = () => {
            const numberOfStars = Math.floor(
                (canvas.width * canvas.height) / 20000 // Increase the divisor to reduce the number of stars
            );
            for (let i = 0; i < numberOfStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    speed: Math.random() * 0.2 + 0.05, // Slowing down the speed by reducing the speed range
                    brightness: Math.random() * 0.5 + 0.5,
                });
            }
        };
        createStars();

        // Animation
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update stars
            stars.forEach((star) => {
                // Update position (slowing down the movement further)
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }

                // Create gradient for glow effect
                const gradient = ctx.createRadialGradient(
                    star.x,
                    star.y,
                    0,
                    star.x,
                    star.y,
                    star.size * 2
                );
                gradient.addColorStop(
                    0,
                    `rgba(111, 73, 216, ${star.brightness})`
                );
                gradient.addColorStop(
                    0.1,
                    `rgba(111, 73, 216, ${star.brightness * 0.8})`
                );
                gradient.addColorStop(1, "rgba(111, 73, 216, 0)");

                // Draw star
                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Optional: Add twinkling effect
                star.brightness =
                    Math.sin(Date.now() * 0.001 + star.x) * 0.2 + 0.8;
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
};

export default Stars;
