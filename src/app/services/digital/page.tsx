'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: 'Web広告運用',
        description: 'Google、Meta、LINE等の広告をデータドリブンで最適化',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    },
    {
        title: 'SEO・コンテンツ',
        description: 'オーガニック流入を最大化する施策を実行',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    },
    {
        title: 'SNS運用',
        description: 'ファンを増やしエンゲージメントを高める戦略',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    },
    {
        title: 'MA・CRM',
        description: '顧客との長期的な関係構築を支援',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
];

export default function DigitalPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
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
                        <span className="text-sky-400 text-sm tracking-[0.2em] uppercase">Service 02</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8">
                            Digital
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl">
                            デジタルマーケティング
                        </p>
                        <p className="text-slate-400 max-w-2xl mt-6 leading-relaxed text-lg">
                            Web広告、SEO、SNS運用、MA/CRMなど、デジタル接点を活用した
                            統合的なマーケティング戦略で、ビジネスの成長を加速させます。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section - Image Grid */}
            <section className="py-32 bg-slate-950">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-40"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            サービス領域
                        </h2>
                        <p className="text-slate-400 text-lg">
                            データドリブンなアプローチで、デジタルマーケティングを最適化
                        </p>
                    </motion.div>

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

            {/* CTA Section */}
            <section className="mt-32 py-32 bg-gradient-to-r from-sky-600 to-violet-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        デジタルマーケティングのご相談はこちら
                    </h2>
                    <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                        データ分析に基づいた最適なデジタル戦略をご提案します。
                        まずは現状の課題をお聞かせください。
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
        </div>
    );
}
