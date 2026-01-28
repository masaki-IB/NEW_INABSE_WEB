'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { newsItems } from '@/data/news';

export default function NewsDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const newsItem = newsItems.find(item => item.id === id);

    if (!newsItem) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">お知らせが見つかりません</h1>
                    <Link href="/news" className="text-sky-400 hover:text-sky-300">
                        お知らせ一覧に戻る
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center py-24">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-2xl text-center"
                >
                    {/* Back Link */}
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        お知らせ一覧に戻る
                    </Link>

                    {/* Date */}
                    <div className="flex items-center justify-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <time className="text-sm font-mono">{newsItem.date}</time>
                    </div>

                    {/* Title with spacing */}
                    <div className="py-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            {newsItem.title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="text-slate-300 leading-relaxed text-lg">
                        {newsItem.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Image if available */}
                    {newsItem.hasImage && newsItem.imageUrl && (
                        <div className="mt-20 flex justify-center">
                            <img
                                src={newsItem.imageUrl}
                                alt={newsItem.title}
                                className="max-w-full rounded-xl shadow-2xl"
                            />
                        </div>
                    )}

                    {/* Back to Top */}
                    <div className="mt-16 pt-8 border-t border-slate-800">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            トップページに戻る
                        </Link>
                    </div>
                </motion.article>
            </div>
        </div>
    );
}

