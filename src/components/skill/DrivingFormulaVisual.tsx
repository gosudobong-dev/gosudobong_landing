"use client";

import React from "react";
import { motion } from "framer-motion";

const DrivingFormulaVisual = () => {
    return (
        <div className="relative w-full h-full bg-blue-50/50 flex items-center justify-center overflow-hidden rounded-[22px]">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-30"
                style={{
                    backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="relative z-10 w-full max-w-[400px] aspect-square">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl">
                    {/* Parking Spot */}
                    <rect x="150" y="50" width="100" height="180" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 5" rx="8" />
                    <text x="200" y="140" textAnchor="middle" fill="#3B82F6" fontSize="16" fontWeight="bold" fontFamily="monospace" style={{ opacity: 0.5 }}>PERFECT ZONE</text>

                    {/* Trajectory Line */}
                    <motion.path
                        d="M 0 350 L 150 350 Q 200 350 200 300 L 200 140"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
                    />

                    {/* Angle Marker */}
                    <motion.path
                        d="M 150 350 A 50 50 0 0 0 200 300"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    />
                    <motion.text
                        x="140"
                        y="330"
                        fill="#EF4444"
                        fontSize="12"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        Turning Point
                    </motion.text>

                    {/* Car (Animated) */}
                    <motion.g
                        initial={{ x: 0, y: 350, rotate: 0 }}
                        animate={{
                            x: [0, 150, 200, 200],
                            y: [350, 350, 300, 140],
                            rotate: [0, 0, -90, -90]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.7, 1],
                            repeat: Infinity,
                            repeatDelay: 1.5
                        }}
                    >
                        {/* Car Body */}
                        <rect x="-40" y="-20" width="80" height="40" rx="8" fill="#2563EB" stroke="#1E40AF" strokeWidth="2" />
                        {/* Windows */}
                        <rect x="-25" y="-15" width="50" height="30" rx="4" fill="#93C5FD" />
                        {/* Roof/Top view detail */}
                        <rect x="-10" y="-12" width="20" height="24" rx="2" fill="#1E40AF" opacity="0.3" />
                        {/* Headlights */}
                        <path d="M 35 -15 L 40 -10 L 40 10 L 35 15 Z" fill="#FEF08A" />
                        {/* Taillights */}
                        <path d="M -35 -15 L -40 -10 L -40 10 L -35 15 Z" fill="#EF4444" />
                    </motion.g>
                </svg>

                {/* Floating Labels */}
                <motion.div
                    className="absolute top-20 right-0 bg-white px-3 py-2 rounded-lg shadow-lg border border-blue-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-[10px] text-gray-400 font-mono">FORMULA 01</div>
                    <div className="text-sm font-bold text-blue-900">어깨선 맞춤</div>
                </motion.div>

                <motion.div
                    className="absolute bottom-20 left-0 bg-white px-3 py-2 rounded-lg shadow-lg border border-blue-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="text-[10px] text-gray-400 font-mono">FORMULA 02</div>
                    <div className="text-sm font-bold text-blue-900">핸들 끝까지</div>
                </motion.div>
            </div>
        </div>
    );
};

export default DrivingFormulaVisual;
