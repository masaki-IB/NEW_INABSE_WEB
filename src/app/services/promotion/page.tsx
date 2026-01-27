'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: 'ノベルティ制作',
        description: 'オリジナルグッズからプレミアムノベルティまで',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    },
    {
        title: 'SNSキャンペーン',
        description: '各プラットフォームに最適化したキャンペーン設計',
        image: '/sns-campaign.png',
    },
    {
        title: 'イベント企画・運営',
        description: 'ポップアップから大規模展示会まで',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    },
    {
        title: 'PR・パブリシティ',
        description: 'メディアリレーションからプレスリリースまで',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    },
];

export default function PromotionPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80)',
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
                        <span className="text-sky-400 text-sm tracking-[0.2em] uppercase">Service 01</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8">
                            Promotion
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl">
                            セールスプロモーション
                        </p>
                        <p className="text-slate-400 max-w-2xl mt-6 leading-relaxed text-lg">
                            ノベルティ、SNSキャンペーン、イベント、PRなど、あらゆる接点で消費者の心を動かす
                            統合型プロモーションを企画・実行します。
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
                            360度のプロモーション支援で、ブランドと消費者をつなぎます
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
                        プロモーション戦略のご相談はこちら
                    </h2>
                    <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                        貴社のビジネス課題に合わせた最適なプロモーションプランをご提案します。
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
        </div>
    );
}
