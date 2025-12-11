'use client';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}