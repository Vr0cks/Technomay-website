'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl'; // 👈 Import
import { 
  FaRocket, FaGlobe, FaLeaf, 
  FaShieldAlt, FaLightbulb, FaLayerGroup 
} from 'react-icons/fa';

export default function Features() {
  const t = useTranslations('Features'); // 👈 JSON Bağlantısı

  // Listeyi component içinde oluşturuyoruz ki çevirileri alabilsin
  const features = [
    {
      title: t('items.item1_title'),
      desc: t('items.item1_desc'),
      icon: <FaRocket />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: t('items.item2_title'),
      desc: t('items.item2_desc'),
      icon: <FaLayerGroup />,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: t('items.item3_title'),
      desc: t('items.item3_desc'),
      icon: <FaGlobe />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: t('items.item4_title'),
      desc: t('items.item4_desc'),
      icon: <FaLeaf />,
      color: "from-teal-500 to-lime-400"
    },
    {
      title: t('items.item5_title'),
      desc: t('items.item5_desc'),
      icon: <FaShieldAlt />,
      color: "from-yellow-500 to-orange-400"
    },
    {
      title: t('items.item6_title'),
      desc: t('items.item6_desc'),
      icon: <FaLightbulb />,
      color: "from-red-500 to-rose-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg dark:shadow-none transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-800/80 transition-colors`}>
                <div className={`text-2xl bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}