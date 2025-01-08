import React from 'react';
import { motion } from 'framer-motion';



const Razboi = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen p-8">

      {/* Titlu și descriere animată */}
      <motion.div
        className="text-center mb-12 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-lg">
          Războaiele daco-romane: O poveste de lupte și destin
        </h1>
        <motion.p
          className="text-xl mt-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Povestea Războaielor daco-romane este una de eroism, trădare și schimbări istorice fundamentale. Află cum Imperiul Roman și Dacia au devenit rivale în lupta pentru putere și resurse. Aceste conflicte nu doar că au remodelat harta regiunii, dar au avut o influență crucială asupra regiunilor învecinate și au lăsat o amprentă adâncă în cultura și limba română. Războaiele de la porțile Imperiului au fost doar începutul unei perioade de transformări istorice profunde.
        </motion.p>
      </motion.div>

      
      

      {/* Secțiunea 1: Începuturile unei mari confruntări */}
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
          Rădăcinile conflictului: Lumea daco-romană
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          La începutul erei noastre, Dacia era un teritoriu deosebit de bogat, cu resurse naturale valoroase, care atrăgeau atenția Imperiului Roman. Dacii, sub conducerea regelui Burebista, reușiseră să unească triburile din zonă, devenind o putere regională semnificativă. În această perioadă, Roma, dorind să-și asigure expansiunea și accesul la resurse strategice, își proiecta influența asupra regiunii. Lupta pentru controlul Daciei s-a transformat rapid într-un conflict militar complex, marcat de o serie de atacuri și alianțe fluctuante.
        </motion.p>
      </motion.div>

      {/* Secțiunea 2: Domitian și prima confruntare */}
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
          Prima ofensivă: O luptă pe viață și pe moarte
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Împăratul Domitian, dorind să pună capăt amenințării daco-romane și să asigure securitatea frontierelor Imperiului Roman, a lansat o primă ofensivă împotriva Daciei. Deși campania romană a fost susținută de un număr superior de trupe, dacii, sub conducerea lui Decebal, au demonstrat o apărare remarcabilă. Bătăliile din această perioadă au fost intense, cu pierderi mari de ambele părți, iar conflictul nu s-a încheiat cu o victorie decisivă pentru Roma, subliniind determinarea dacilor de a-și apăra libertatea.
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-yellow-400">
          Casca de război a unui dac
        </h2>
        <div className="sketchfab-embed-wrapper flex justify-center">
          <iframe
            title="Dacian helmet Trajan column"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/53da530d2c6f4941b668971ae13e7f7e/embed"
            className="w-4/5 h-[450px]"
          ></iframe>
        </div>
      </motion.div>

      {/* Secțiunea 3: Traian și cucerirea finală */}
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
          Cucerirea și transformarea regiunii
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          În anul 106 d.Hr., împăratul Traian a demarat o campanie de amploare, care a culminat cu victoria romană asupra dacilor. După un asediu prelungit și bătălii decisive, Dacia a fost cucerită, iar regele Decebal s-a sinucis pentru a evita capturarea. Cucerirea Daciei nu a marcat doar o victorie militară, ci și un început al romanizării regiunii, în care infrastructura romană, cum ar fi drumurile, orașele și sistemele administrative, au fost impuse cu forța. Aceasta a fost o perioadă de mari schimbări pentru regiunile Daciei.
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold mb-6 text-yellow-400">
          Împăratul Traian
        </h2>
        <div className="sketchfab-embed-wrapper flex justify-center">
          <iframe
            title="Roman Emperor Traianus"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/21003651c1e348339ba4d3ca4327ee22/embed"
            className="w-4/5 h-[450px]"
          ></iframe>
        </div>
      </motion.div>

      {/* Secțiunea 4: Moștenirea războaielor daco-romane */}
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
          O ereditate de neprețuit: Impactul asupra culturii și limbii
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Moștenirea războaielor daco-romane este profundă și continuă să modeleze identitatea națională a românilor. Romanizarea a adus limba latină, care a devenit fundamentul limbii române, dar și elemente de cultură romană, precum dreptul și organizarea militară. De asemenea, în ciuda integrării în Imperiul Roman, dacii au păstrat multe dintre tradițiile și obiceiurile lor, care au supraviețuit și s-au transformat de-a lungul secolelor. Războaiele daco-romane au fost nu doar un conflict militar, ci și o luptă culturală, iar urmele acestei istorii se regăsesc astăzi în istoria și cultura României.
        </motion.p>
      </motion.div>
      {/* Secțiune 3D Decebal */}
      <motion.div
        className="bg-gradient-to-r from-gray-700 to-gray-600 p-8 rounded-lg shadow-lg mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          <motion.h2
          className="text-4xl font-semibold mb-6 text-yellow-400 hover:text-yellow-500 transition-all"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >Decebal</motion.h2>
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="Decebal - The last king of Dacia"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/8d953229949742ed8cc09706ce127a5f/embed"
          className="w-full h-[600px] mt-6"
        ></iframe>
        <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
          <a
            href="https://sketchfab.com/3d-models/decebal-the-last-king-of-dacia-8d953229949742ed8cc09706ce127a5f?utm_medium=embed&utm_campaign=share-popup&utm_content=8d953229949742ed8cc09706ce127a5f"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Decebal - The last king of Dacia
          </a> by{' '}
          <a
            href="https://sketchfab.com/andreidrmb?utm_medium=embed&utm_campaign=share-popup&utm_content=8d953229949742ed8cc09706ce127a5f"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            andreidrmb
          </a> on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8d953229949742ed8cc09706ce127a5f"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p>
        
      </div>
      </motion.div>

      

    </div>
  );
};

export default Razboi;
