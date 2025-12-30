"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Binary, ChevronRight } from "lucide-react";
import { landingData } from "@/data/landingData";
import DrivingFormulaDiagram from "./DrivingFormulaDiagram";

interface SkillHeroProps {
    locationName?: string;
    keyword?: string;
}

const SkillHero = ({ locationName, keyword }: SkillHeroProps) => {
    const titleContent = locationName
        ? `<span class="block text-2xl md:text-4xl font-bold text-gray-500 mb-4">${locationName} ${keyword || "운전면허"},</span>공식과 반복이 <span class="text-blue-600">합격의 지름길</span>입니다.`
        : landingData.skill.hero.title;

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-40 md:pb-32 overflow-hidden bg-white text-black">
            {/* Background Elements - Grid & Mathematical */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/50 skew-x-12 origin-top-right"></div>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-bold mb-8 font-mono text-sm">
                            <Binary size={16} />
                            <span>{landingData.skill.hero.badge}</span>
                        </div>

                        <h1
                            className="text-4xl md:text-7xl font-bold leading-tight mb-8 font-hakgyoansim tracking-tight break-keep"
                            dangerouslySetInnerHTML={{ __html: titleContent }}
                        />

                        <p
                            className="text-gray-600 text-xl md:text-2xl mb-10 leading-relaxed font-medium break-keep"
                            dangerouslySetInnerHTML={{ __html: landingData.skill.hero.subtitle }}
                        />

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href="#skill-cta"
                                className="group px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {landingData.skill.hero.ctaText} <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                href="#curriculum"
                                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold text-lg rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                커리큘럼 보기 <ChevronRight size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Visual Content - Blueprint Style */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative bg-blue-600 rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-white rounded-[22px] overflow-hidden relative h-[500px] flex flex-col">
                                {/* Blueprint Header */}
                                <div className="bg-blue-50 p-4 border-b border-blue-100 flex justify-between items-center z-20 relative">
                                    <span className="font-mono text-blue-800 font-bold">FIG 1.1 - T-PARKING FORMULA</span>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>

                                {/* Visual Component */}
                                <div className="flex-1 relative">
                                    <DrivingFormulaDiagram />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillHero;
