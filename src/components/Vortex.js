import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils.js";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
export const Vortex = (props) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const particleCount = props.particleCount || 700;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = props.rangeY || 100;
    const baseTTL = 50;
    const rangeTTL = 150;
    const baseSpeed = props.baseSpeed || 0.0;
    const rangeSpeed = props.rangeSpeed || 1.5;
    const baseRadius = props.baseRadius || 1;
    const rangeRadius = props.rangeRadius || 2;
    const baseHue = props.baseHue ?? 220;
    const rangeHue = props.rangeHue ?? 45;
    const noiseSteps = 3;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const backgroundColor = props.backgroundColor || "#000000";
    let tick = 0;
    const noise3D = createNoise3D();
    const particleProps = new Float32Array(particlePropsLength);
    const center = [0, 0];
    const TAU = 2 * Math.PI;
    const rand = (n) => n * Math.random();
    const randRange = (n) => n - rand(2 * n);
    const fadeInOut = (t, m) => {
        const hm = 0.5 * m;
        return Math.abs(((t + hm) % m) - hm) / hm;
    };
    const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;
    const setup = () => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
    };
    const initParticles = () => {
        tick = 0;
        // reset particleProps without reassigning
        for (let j = 0; j < particlePropsLength; j++)
            particleProps[j] = 0;
        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            initParticle(i);
        }
    };
    const initParticle = (i) => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const x = rand(canvas.width);
        const y = center[1] + randRange(rangeY);
        const vx = 0;
        const vy = 0;
        const life = 0;
        const ttl = baseTTL + rand(rangeTTL);
        const speed = baseSpeed + rand(rangeSpeed);
        const radius = baseRadius + rand(rangeRadius);
        const hue = baseHue + rand(rangeHue);
        particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };
    const draw = (canvas, ctx) => {
        tick++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawParticles(ctx);
        renderGlow(canvas, ctx);
        renderToScreen(canvas, ctx);
        requestAnimationFrame(() => draw(canvas, ctx));
    };
    const drawParticles = (ctx) => {
        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            updateParticle(i, ctx);
        }
    };
    const updateParticle = (i, ctx) => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const i2 = i + 1, i3 = i + 2, i4 = i + 3, i5 = i + 4, i6 = i + 5, i7 = i + 6, i8 = i + 7, i9 = i + 8;
        // Fixed: Add null checks with default values
        const x = particleProps[i] || 0;
        const y = particleProps[i2] || 0;
        const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
        const vx = lerp(particleProps[i3] || 0, Math.cos(n), 0.5);
        const vy = lerp(particleProps[i4] || 0, Math.sin(n), 0.5);
        let life = particleProps[i5] || 0;
        const ttl = particleProps[i6] || 0;
        const speed = particleProps[i7] || 0;
        const radius = particleProps[i8] || 0;
        const hue = particleProps[i9] || 0;
        const x2 = x + vx * speed;
        const y2 = y + vy * speed;
        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
        life++;
        particleProps[i] = x2;
        particleProps[i2] = y2;
        particleProps[i3] = vx;
        particleProps[i4] = vy;
        particleProps[i5] = life;
        if (checkBounds(x, y, canvas) || life > ttl) {
            initParticle(i);
        }
    };
    const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx) => {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineWidth = radius;
        ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
    const checkBounds = (x, y, canvas) => {
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    };
    const resize = (canvas) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };
    const renderGlow = (canvas, ctx) => {
        ctx.save();
        ctx.filter = "blur(8px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.filter = "blur(4px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    const renderToScreen = (canvas, ctx) => {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    useEffect(() => {
        setup();
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas)
                return;
            resize(canvas);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (_jsxs("div", { className: cn("relative h-full w-full", props.containerClassName), children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, ref: containerRef, className: "absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center", children: _jsx("canvas", { ref: canvasRef }) }), _jsx("div", { className: cn("relative z-10", props.className), children: props.children })] }));
};
//# sourceMappingURL=Vortex.js.map