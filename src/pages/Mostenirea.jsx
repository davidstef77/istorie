import React from 'react';
import { motion } from 'framer-motion';

const Mostenirea = () => {
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
          Moștenirea culturală și identitatea națională a românilor
        </h1>
        <motion.p
          className="text-xl mt-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Moștenirea culturală a românilor este rezultatul unui amestec unic de influențe, de la strămoșii daci, până la imperiile care au dominat regiunile noastre de-a lungul istoriei. Aceste moșteniri nu sunt doar un tezaur istoric, ci un element definitoriu al identității noastre naționale. Fiecare război, fiecare invazie, și fiecare schimb cultural a lăsat o amprentă adâncă asupra limbii, tradițiilor și valorilor românilor. În această lecție, vom explora cum moștenirea daco-romană a contribuit la formarea limbii și culturii românești.
        </motion.p>
      </motion.div>

      {/* Secțiunea 1: Romanizarea și influența asupra limbii române */}
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
          Romanizarea: Limbajul și Cultura
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Romanizarea Daciei a avut un impact fundamental asupra limbii și culturii românești. După cucerirea Daciei de către Imperiul Roman în anul 106 d.Hr., limba latină a devenit fundamentul pentru formarea limbii române. Aceasta a înlocuit limbile și dialectele vechi ale regiunii, iar influențele latine au modelat profund vocabularul și structura gramaticală a limbii române. Pe lângă limbă, romanizarea a adus și alte elemente culturale, cum ar fi tradițiile, obiceiurile și organizarea administrativă.
        </motion.p>
      </motion.div>

      {/* Secțiunea 2: Moștenirea arhitecturală și infrastructura romană */}
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
          Moștenirea arhitecturală: Drumuri și orașe romane
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Imperiul Roman a lăsat o moștenire importantă în infrastructura Daciei cucerite. Drumurile romane construite pentru a facilita deplasarea legiunilor romane au rămas esențiale pentru dezvoltarea regiunilor și după retragerea Imperiului Roman. De asemenea, orașele romane, cum ar fi Ulpia Traiana Sarmizegetusa, au reprezentat centre economice și culturale care au influențat dezvoltarea regiunii pe termen lung. Aceste construcții, multe dintre ele vizibile și astăzi, sunt dovezi ale abilității romanilor de a integra regiunile cucerite într-o structură coerentă și eficientă.
        </motion.p>
      </motion.div>

      {/* Secțiunea 3: Moștenirea religioasă și națională */}
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
          Religia și formarea identității naționale
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Religia a avut un rol important în formarea identității naționale a românilor. Creștinismul, adus de romani, a fost adoptat treptat de populația locală și a devenit un element central în definirea culturii și valorilor românești. În această perioadă, Biserica a fost un pilon al unității și continuității culturale, iar tradițiile religioase au fost integrale în viața cotidiană a românilor, influențând atât obiceiurile, cât și arta și literatura ulterioare.
        </motion.p>
      </motion.div>

      {/* Secțiunea 4: Concluzii */}
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
          Moștenirea daco-romană în România de azi
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Moștenirea daco-romană este o componentă esențială a identității naționale a românilor. Tradițiile, limba și cultura noastră sunt un amestec de influențe dacice și romane, care au dat naștere unui patrimoniu cultural unic. Înțelegerea acestui trecut istoric este esențială pentru a aprecia adevărata valoare a tradițiilor noastre și pentru a înțelege modul în care acestea continuă să modeleze România modernă.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Mostenirea;
