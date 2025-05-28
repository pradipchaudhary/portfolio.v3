"use client";

import React, { useEffect, useRef } from "react";

const Stars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size dynamically to fill the window
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Define the Star properties
        const stars: Array<{
            x: number;
            y: number;
            size: number;
            speed: number;
            brightness: number;
        }> = [];

        // Function to create stars
        const createStars = () => {
            // Adjust the divisor to control the density of stars.
            // A larger divisor means fewer stars.
            const numberOfStars = Math.floor(
                (canvas.width * canvas.height) / 30000
            ); // Increased divisor for fewer, more subtle stars
            for (let i = 0; i < numberOfStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5, // Slightly smaller stars
                    speed: Math.random() * 0.1 + 0.02, // Even slower speed for subtle movement
                    brightness: Math.random() * 0.2 + 0.1, // Lower initial brightness (0.1 to 0.3)
                });
            }
        };
        createStars();

        // Animation loop for stars
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redrawing

            // Draw and update each star
            stars.forEach((star) => {
                // Update position (moving upwards, simulating distant stars)
                star.y -= star.speed;
                // If a star goes off-screen, reset its position to the bottom
                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width; // Random X for new star
                }

                // Create a radial gradient for a subtle glow effect around each star
                const gradient = ctx.createRadialGradient(
                    star.x,
                    star.y,
                    0, // Inner circle radius
                    star.x,
                    star.y,
                    star.size * 2 // Outer circle radius
                );
                // Inner part of the glow (brighter white)
                gradient.addColorStop(
                    0,
                    `rgba(255, 255, 255, ${star.brightness})`
                );
                // Outer part of the glow (fading to transparent white)
                gradient.addColorStop(
                    0.1,
                    `rgba(255, 255, 255, ${star.brightness * 0.8})`
                );
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Fully transparent at the edge

                // Draw the star using the gradient
                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2); // Draw a circle
                ctx.fill();

                // Add a subtle twinkling effect by modulating brightness
                star.brightness =
                    Math.sin(Date.now() * 0.001 + star.x) * 0.1 + 0.2; // Twinkling between 0.1 and 0.3 opacity
            });

            // Request the next animation frame
            animationFrameId = requestAnimationFrame(animate);
        };
        animate(); // Start the animation

        // Cleanup function for useEffect
        return () => {
            window.removeEventListener("resize", setCanvasSize); // Remove resize listener
            cancelAnimationFrame(animationFrameId); // Cancel ongoing animation frame
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0" // Fixed position, no pointer events, behind other content
            style={{ background: "transparent" }} // Ensure canvas background is transparent to see the main background
        />
    );
};

export default Stars;
