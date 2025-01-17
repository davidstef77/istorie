import React from 'react';
import { motion } from 'framer-motion';

const Romanizarea = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen p-8">

      {/* Titlu și descriere animată */}
      <motion.div
        className="text-center mb-12 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-lg">
          Romanizarea și influența asupra limbii române
        </h1>
        <motion.p
          className="text-xl mt-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Romanizarea Daciei a avut un impact fundamental asupra limbii române, care a evoluat din latină, aducând influențe semnificative din limba și cultura romană. Aceasta perioadă a transformat nu doar limba, dar și structurile sociale, administrative și culturale, care au lăsat o amprentă adâncă asupra evoluției regiunii. De asemenea, romanizarea a influențat dezvoltarea orașelor și a infrastructurii, lăsând urme care se reflectă chiar și în peisajul urban contemporan.
        </motion.p>
      </motion.div>

      {/* Secțiunea 1: Procesul de romanizare */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 transition-all duration-300 hover:bg-gray-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-6 text-yellow-400 hover:text-yellow-500 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Impactul romanizării: O transformare culturală
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          După cucerirea Daciei, Imperiul Roman a impus un proces de romanizare care a transformat radical structura socială și culturală a regiunii. Limba latină, adusă de coloniști și soldați romani, a înlocuit treptat limbile locale și a devenit fundamentul limbii române. Acest proces a fost esențial în crearea unei identități comune, în ciuda diversității tribale și culturale a Daciei. Orașele romane, precum Ulpia Traiana Sarmizegetusa, au fost centre culturale și administrative, unde influențele romane s-au manifestat în arhitectură, educație și administrație.
        </motion.p>
      </motion.div>

      <div className="sketchfab-embed-wrapper">
      <iframe
        title="Trajans Column Cast"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/2a465a4265b54374ade9d9e69b6e67c8/embed"
        className="w-full h-[600px] mt-6"
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/trajans-column-cast-2a465a4265b54374ade9d9e69b6e67c8?utm_medium=embed&utm_campaign=share-popup&utm_content=2a465a4265b54374ade9d9e69b6e67c8"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Trajans Column Cast
        </a> by{' '}
        <a
          href="https://sketchfab.com/thinksee3d?utm_medium=embed&utm_campaign=share-popup&utm_content=2a465a4265b54374ade9d9e69b6e67c8"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          ThinkSee3D
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=2a465a4265b54374ade9d9e69b6e67c8"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
      </div>

      {/* Secțiunea 2: Limba română - o moștenire latină */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 transition-all duration-300 hover:bg-gray-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-6 text-yellow-400 hover:text-yellow-500 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Limba română: O moștenire latină
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Limba română este o limbă romanică, care derivă direct din latină. Romanizarea Daciei a fost un factor determinant în formarea limbii române, iar elementele latinești se regăsesc astăzi în structura lingvistică și vocabularul limbii. De la cuvinte fundamentale la termeni juridici și administrațivi, limba română poartă amprenta Romei antice. De exemplu, cuvinte precum „civis” (cetățean) sau „legis” (lege) sunt doar câteva dintre termenii esențiali care au trecut în limba română.
        </motion.p>
      </motion.div>

      {/* Secțiunea 3: Elemente de limbă română provenite din latină */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 transition-all duration-300 hover:bg-gray-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-6 text-yellow-400 hover:text-yellow-500 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Cuvinte de origine latină în limba română
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Multe cuvinte din limba română provin direct din latină, reflectând influențele Romei antice asupra regiunii. De exemplu, cuvintele „capitală” (din lat. „capitale”), „legislație” (din lat. „legislatio”), „administrare” (din lat. „administratio”) și multe altele demonstrează legătura strânsă dintre limba română și limba latină. De asemenea, multe expresii din limbajul cotidian sunt influențate de tradițiile romane, cum ar fi „a pune bazele” sau „a face lege”.
        </motion.p>
      </motion.div>

      {/* Secțiunea 4: Romanizarea și evoluția limbii române moderne */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 transition-all duration-300 hover:bg-gray-700 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-6 text-yellow-400 hover:text-yellow-500 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Limba română astăzi: O limbă latină cu influențe diverse
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Deși limba română își are rădăcinile în latină, influențele altor culturi și limbi au contribuit la formarea limbii moderne. Elementele slavone, grecești și turcești sunt vizibile în vocabularul românesc, ceea ce reflectă istoria tumultoasă a regiunii și contactele cu diverse civilizații. De exemplu, cuvintele „banca” (din turcescul „banka”), „școală” (din grecescul „scholē”) și „mănăstire” (din slavonă) sunt doar câteva exemple ale diversității influențelor.
        </motion.p>
      </motion.div>

      

    </div>
  );
};

export default Romanizarea;
