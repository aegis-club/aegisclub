import { useState, useEffect } from "react";
import LetterGlitch from "../components/LetterGlitch";
import DecryptedText from "../components/DecryptedText";
import { Footer } from "../components/layout/Footer"; // Corrected import

const Home = () => {
  const [animationPhase, setAnimationPhase] = useState<'welcome' | 'aegis' | 'complete'>('welcome');
  const [showNeonGlow, setShowNeonGlow] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  // Handle the initial welcome animation
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setAnimationPhase('aegis');
    }, 2000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  // Handle AEGIS neon glow and tagline
  useEffect(() => {
    if (animationPhase === 'aegis') {
      const neonTimer = setTimeout(() => {
        setShowNeonGlow(true);
        setShowTagline(true);
        setAnimationPhase('complete');
      }, 0);

      return () => clearTimeout(neonTimer);
    }
  }, [animationPhase]);

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-20 md:pt-24 overflow-hidden">
        {/* LetterGlitch Background */}
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchColors={["#5110b2", "#e2e1e5", "#09196d"]}
            glitchSpeed={30}
            centerVignette
            outerVignette
            smooth
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09196d]/40 to-[#0a0a0f]" />
        </div>

        {/* Animated Headings */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
          <div className="relative flex items-center justify-center w-full" style={{ height: '200px' }}>
            {animationPhase === 'welcome' && (
              <h1
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide text-gray-300 text-center breathe-animation whitespace-nowrap"
                style={{ fontFamily: '"ikaros2", sans-serif', fontWeight: 100 }}
              >
                Welcome to
              </h1>
            )}

            {(animationPhase === 'aegis' || animationPhase === 'complete') && (
              <h1
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem] font-black tracking-tighter text-white text-center leading-none transition-all duration-1000 drop-shadow-[0_0_2px_rgba(255,255,255,0.2)] fade-in-blur ${showNeonGlow ? 'neon-glow-active' : ''}`}
                style={{ fontFamily: '"ikaros2", sans-serif', fontWeight: 300, WebkitTextStroke: '1px #000' }}
              >
                AEGIS
              </h1>
            )}
          </div>

          {/* Tagline */}
          <div
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-white text-center mt-6 sm:mt-8 md:mt-10 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] transition-opacity duration-300 ${showTagline ? 'opacity-100' : 'opacity-0'}`}
            style={{ fontFamily: '"Proza Libre9", sans-serif' }}
          >
            {showTagline && (
              <DecryptedText
                key="tagline-decrypt"
                text="Decrypt . Decode . Decipher"
                animateOn="view"
                revealDirection="center"
                speed={35}
                scrambleSpeed={15}
                className="drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
