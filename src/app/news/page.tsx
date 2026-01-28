'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { newsItems } from '@/data/news';

export default function NewsListPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center py-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-400 text-sm tracking-[0.2em] uppercase mb-4">News</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        お知らせ一覧
                    </h1>
                </motion.div>

                {/* News List */}
                <div className="max-w-4xl mx-auto space-y-5">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={`/news/${item.id}`}
                                className="block border-b border-slate-700 py-6 hover:bg-slate-800/50 transition-colors px-4 -mx-4 rounded-lg"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center">
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

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        トップページに戻る
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

