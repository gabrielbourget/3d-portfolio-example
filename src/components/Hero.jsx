import { motion } from 'framer-motion';

import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="2-5 h-5 rounded-full bg-[#915eff]"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero