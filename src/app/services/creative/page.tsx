'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const features = [
    {
        title: 'Webサイト制作',
        description: 'コーポレートからECまで、成果につながるWeb構築',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    },
    {
        title: 'LP・バナー制作',
        description: 'CVRを最大化するランディングページ設計',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
        title: 'グラフィックデザイン',
        description: 'ブランド価値を高めるビジュアルアイデンティティ',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    },
    {
        title: '動画・映像制作',
        description: 'ブランドムービーからショート動画まで',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    },
];

export default function CreativePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80)',
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
                        <span className="text-sky-400 text-sm tracking-[0.2em] uppercase">Service 03</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-8">
                            Creative
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl">
                            クリエイティブ制作
                        </p>
                        <p className="text-slate-400 max-w-2xl mt-6 leading-relaxed text-lg">
                            Webサイト、LP、グラフィック、動画など、あらゆるタッチポイントで
                            ブランドの価値を最大限に伝えるクリエイティブを制作します。
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
                            戦略に基づいたクリエイティブで、ビジネス成果を創出
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

            {/* Spacer above CTA */}
            <div className="h-[120px] bg-slate-950"></div>

            {/* CTA Section */}
            <section className="py-32 bg-gradient-to-r from-sky-600 to-violet-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        クリエイティブ制作のご相談はこちら
                    </h2>
                    <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                        ブランドの魅力を最大限に引き出すクリエイティブをご提案します。
                        お気軽にご相談ください。
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
            <div className="h-[20px] bg-slate-950"></div>
        </div>
    );
}
