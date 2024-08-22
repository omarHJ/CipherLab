import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../public/Logo.png'
import Cards from './Cards';
import CeasarPic from './assets/ceasar.png'
import VigPic from './assets/vig.png'
import playfairPic from './assets/playfair.png'
import AESPic from './assets/AESPic.png'
import HillPic from './assets/Hill .png'
import lock from './assets/CipherLab.png'

const sectionVariants = {
  hidden: { opacity: 0, x: -50 }, // Start from left
  visible: { opacity: 1, x: 0 }, // End at original position
};

const articleVariants = {
  hidden: { opacity: 0, x: 50 }, // Start from right
  visible: { opacity: 1, x: 0 }, // End at original position
};

const transitionConfig = {
  type: "spring",
  stiffness: 60,  // Adjust for bounce effect
  damping: 7,    // Adjust for smoothness
  duration: 0.5     // Duration of the transition
};


const lineAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,  // Adjust delay for each line
      type: "spring",
      duration: 0.5,
      bounce: 0
    }
  })
};

const AnimatedArticle = ({ text }) => {
  // Split the text into lines based on new line characters
  const lines = text.split('\n').filter(line => line.trim() !== '');

  return (
    <motion.article initial="hidden" animate="visible" className="article-container"  style={{ width: '90%'}}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          variants={lineAnimation}
          custom={index}
          className="article-line"
          style={{width: '100%', marginLeft:'50px'}}
        >
          {line}
        </motion.div>
      ))}
    </motion.article>
  );
};

function App() {
  return (
    <>
      <div className='firstdiv'>
        <div className='headerdiv'>
          <img src={Logo} />
          <p>CipherLab</p>
        </div>
        <br />
        <div className='maindiv'>
          <section>
            <div className='app'>
              <AnimatedArticle
                text={`
                  CipherLab is a place where you can 
                  learn about different cryptographic 
                  algorithmsand how they work in 
                  a fun and interactive way`}
              />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                <img src={lock} />
              </motion.div>
            </div>
          </section>
          <div className="scroll-down2">
            <a href="#ciphers" >
              <span>&darr;</span>
            </a>
          </div>
        </div>
      </div>
      <div className='AppDiv' id='ciphers'>
        <br />
        <br />
        <section>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={sectionVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <Cards link={'src/CeaserCipher.html'} name={'Ceasar Cipher'} Pic={CeasarPic} />
          </motion.span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={articleVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <div>
              <article>
                The Caesar cipher is a classic encryption <br />
                method where each letter in the text is <br />
                shifted by a fixed number of places. <br />
                Named after Julius Caesar, who used <br />
                this technique, it’s simple and easy to <br />
                understand but offers minimal security <br />
                due to its limited number of possible shifts. <br />
              </article>
            </div>
          </motion.div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={sectionVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <div>
              <article >
                The Playfair cipher uses a 6x6 grid with <br />
                letters and numbers to encrypt pairs of characters.<br />
                Characters in the same row shift right,<br />
                and those in the same column shift down.<br />
                Developed by Charles Wheatstone <br />
                and named after Lord Playfair, <br />
                this method enhances security by <br />
                encoding pairs instead of single characters.<br />
              </article>
            </div>
          </motion.span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={articleVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <Cards link={'src/PlayFairCipher.html'} name={'PlayFair Cipher'} Pic={playfairPic} />
          </motion.div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={sectionVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <Cards link={'src/VigenereCipher.html'} name={'Vigenere Cipher'} Pic={VigPic} />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={articleVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <div>
              <article >
                The Vigenère cipher uses a keyword to  <br />
                encrypt text by shifting each letter based  <br />
                on the corresponding letter in the keyword.  <br />
                Each letter of the plaintext is shifted according  <br />
                to the letter of the keyword in a repeating cycle.  <br />
                This method, introduced by Blaise de Vigenère,  <br />
                offers stronger security than   <br />
                the Caesar cipher by using multiple shifting values.  <br />
              </article>
            </div>
          </motion.div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={sectionVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <div>
              <article>
                The Hill cipher encrypts text using linear <br />
                algebra. It involves converting the plaintext <br />
                into numerical vectors and applying <br />
                matrix multiplication with a key matrix.<br />
                The resulting vectors are then converted <br />
                back to text. Developed by Lester Hill, <br />
                this method provides more security than <br />
                simple ciphers by using matrix  <br />
                transformations for encryption.  <br />
              </article>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={articleVariants}
            transition={transitionConfig}
            className="animated-container"
          >
            <Cards link={'src/HillCipher.html'} name={'HILL Cipher'} Pic={HillPic} />
          </motion.div>
        </section>
        <br />
        <br />
      </div>
      <footer>
        ©{new Date().getFullYear()} Omar Jaber
      </footer>
    </>
  );
}

export default App;