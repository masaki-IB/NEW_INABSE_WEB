'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: 'マーケット調査・分析',
        description: '市場動向と消費者インサイトを徹底分析',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
        title: '戦略立案',
        description: 'データに基づく最適なマーケティング戦略',
        image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&q=80',
    },
    {
        title: '事業開発支援',
        description: '新規事業の企画から市場投入まで一貫サポート',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    },
    {
        title: '効果測定・改善',
        description: 'KPI設計からPDCAサイクルの継続的運用',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
];

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sky-400 text-sm tracking-[0.2em] uppercase">Service 04</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8">
                            Consulting
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl">
                            コンサルティング
                        </p>
                        <p className="text-slate-400 max-w-2xl mt-6 leading-relaxed text-lg">
                            市場調査から戦略立案、事業開発支援まで、ビジネスの成長を
                            トータルでサポートするコンサルティングサービスを提供します。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section - Image Grid */}
            <section className="pb-32 bg-slate-950">
                <div className="container mx-auto px-6">
                    {/* Spacer above heading */}
                    <div className="h-[200px]"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            サービス領域
                        </h2>
                        <p className="text-slate-400 text-lg">
                            経験豊富なコンサルタントが、ビジネス課題の解決をサポート
                        </p>
                    </motion.div>

                    {/* Spacer below heading */}
                    <div className="h-[40px]"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[350px] rounded-2xl overflow-hidden"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${feature.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent group-hover:via-slate-900/60 transition-all duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-300 opacity-80">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 bg-slate-900">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            プロジェクトの進め方
                        </h2>
                        <p className="text-slate-400 text-lg">
                            段階的なアプローチで、確実な成果を実現
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {['01 ヒアリング', '02 調査・分析', '03 戦略立案', '04 実行支援'].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-xl p-8 border border-slate-700 text-center">
                                    <p className="text-lg font-bold text-white">{step}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-6 h-6 text-slate-600" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spacer above CTA */}
            <div className="h-[120px] bg-slate-900"></div>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-r from-sky-600 to-violet-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        コンサルティングのご相談はこちら
                    </h2>
                    <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                        ビジネスの課題解決に向けた最適なアプローチをご提案します。
                        まずはお気軽にご相談ください。
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors text-lg"
                    >
                        お問い合わせ
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Spacer below CTA */}
            <div className="h-[20px] bg-slate-900"></div>
        </div>
    );
}
