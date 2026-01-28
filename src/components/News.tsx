'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { newsItems } from '@/data/news';

export default function News() {
    // 最新3件のみ表示
    const displayItems = newsItems.slice(0, 3);

    return (
        <section id="news" className="py-32 bg-slate-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-400 text-sm tracking-[0.2em] uppercase mb-4">News</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        お知らせ
                    </h2>
                </motion.div>

                {/* News List */}
                <div className="max-w-4xl mx-auto space-y-5">
                    {displayItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={`/news/${item.id}`}
                                className="block border-b border-slate-700 py-6 hover:bg-slate-800/50 transition-colors px-4 -mx-4 rounded-lg"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Calendar className="w-4 h-4" />
                                        <time className="text-sm font-mono">{item.date}</time>
                                    </div>
                                    <h3 className="text-white text-lg hover:text-sky-400 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-sky-500 text-sky-400 font-semibold rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300"
                    >
                        もっと見る
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
