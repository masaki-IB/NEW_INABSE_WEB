'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsError(false);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mnjdyngk', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                setIsError(true);
            }
        } catch {
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative pt-48 pb-48 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-slate-900/90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-400 text-sm tracking-[0.2em] uppercase mb-4">Contact Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        お問い合わせ
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">
                            共に未来を創る
                            <br />
                            <span className="text-sky-400">パートナー</span>として
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-sky-400" />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Address</p>
                                    <p className="text-white">東京都板橋区</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-sky-400" />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">Email</p>
                                    <p className="text-white">info@in-base.jp</p>
                                </div>
                            </div>


                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {isSuccess ? (
                            <div className="bg-green-500/10 border border-green-500 rounded-lg p-8 text-center">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">送信完了</h3>
                                <p className="text-slate-400">
                                    お問い合わせありがとうございます。<br />
                                    担当者より折り返しご連絡いたします。
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-sky-400 hover:text-sky-300 transition-colors"
                                >
                                    新しいお問い合わせを送信
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {isError && (
                                    <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                        <p className="text-red-400 text-sm">
                                            送信に失敗しました。もう一度お試しください。
                                        </p>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                                            お名前
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                                            placeholder="山田 太郎"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                                            メールアドレス
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                                            placeholder="email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm text-slate-400 mb-2">
                                        会社名
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                                        placeholder="株式会社○○"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                                        メッセージ
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                                        placeholder="お問い合わせ内容をご記入ください"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            送信中...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            送信する
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

