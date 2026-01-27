'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: '01',
        title: 'Promotion',
        jpTitle: 'セールスプロモーション',
        description: 'イベント企画・運営から店頭キャンペーンまで、ターゲットに響くリアルな体験を創出します。',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        href: '/services/promotion',
    },
    {
        id: '02',
        title: 'Digital',
        jpTitle: 'デジタルマーケティング',
        description: 'SNS運用、Web広告、SEO対策など、データに基づいたデジタル戦略で集客を最大化します。',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        href: '/services/digital',
    },
    {
        id: '03',
        title: 'Creative',
        jpTitle: 'クリエイティブ制作',
        description: 'Webサイト、LP、販促ツールなど、ブランド価値を高める洗練されたデザインを提供します。',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
        href: '/services/creative',
    },
    {
        id: '04',
        title: 'Consulting',
        jpTitle: 'コンサルティング',
        description: '現状分析から課題抽出、戦略立案まで、ビジネスの成長をトータルでサポートします。',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
        href: '/services/consulting',
    },
];

export default function Services() {
    return (
        <section id="services" className="pt-24 pb-48 bg-slate-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-400 text-sm tracking-[0.2em] uppercase mb-4">Our Services</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        サービス紹介
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        ビジネスの課題に合わせた最適なソリューションを提供します
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <Link key={service.id} href={service.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${service.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent group-hover:via-slate-900/70 transition-all duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    {/* Number Badge */}
                                    <span className="absolute top-6 left-6 text-sky-400 font-mono text-sm tracking-wider">
                                        {service.id}
                                    </span>

                                    {/* Arrow */}
                                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sky-400 text-sm mb-4">{service.jpTitle}</p>

                                    {/* Description - shows on hover */}
                                    <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
