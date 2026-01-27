'use client';

import { motion } from 'framer-motion';

const companyInfo = [
    { label: '会社名', value: '株式会社INBASE' },
    { label: '設立', value: '2023年6月' },
    { label: '事業内容', value: 'セールスプロモーション / デジタルマーケティング / クリエイティブ制作 / コンサルティング' },
    { label: '所在地', value: '東京都板橋区' },
];

const stats = [
    { number: '100+', label: 'Projects' },
    { number: '50+', label: 'Clients' },
    { number: '99%', label: 'Satisfaction' },
];

export default function Company() {
    return (
        <section id="company" className="pt-48 pb-48 bg-slate-950">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-400 text-sm tracking-[0.2em] uppercase mb-4">About Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        会社概要
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
                                alt="Office"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent"></div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="absolute -bottom-8 -right-4 md:right-8 bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                        >
                            <div className="flex gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-2xl md:text-3xl font-bold text-sky-400">{stat.number}</p>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                            クリエイティブと
                            <span className="text-sky-400">テクノロジー</span>で
                            <br />
                            ビジネスの課題を解決する
                            <br />
                            プロフェッショナル集団
                        </h3>

                        <p className="text-slate-400 mb-10 leading-relaxed">
                            私たちINBASEは、お客様のビジネス成長を支援するプロフェッショナルチームです。
                            セールスプロモーションからデジタルマーケティング、クリエイティブ制作まで、
                            ワンストップでソリューションを提供します。
                        </p>

                        {/* Company Info Table */}
                        <div className="space-y-4">
                            {companyInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row border-b border-slate-800 pb-4"
                                >
                                    <dt className="w-full sm:w-1/3 text-slate-500 text-sm mb-1 sm:mb-0">
                                        {item.label}
                                    </dt>
                                    <dd className="w-full sm:w-2/3 text-white">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
