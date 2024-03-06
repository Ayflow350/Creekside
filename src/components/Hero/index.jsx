import React from 'react';
import parse from 'html-react-parser';
import VideoModal from '../VideoModal';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero({
 title,
 subTitle,
 bgUrl,
 imgUrl,
 videoBtnText,
 videoUrl,
 infoList,
 btnText,
 btnUrl,
}) {
 // Animation variants for the hero section and the hero text
 const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 10 } },
 };

 // Bouncing animation for the hero text
 const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
        mass: 1,
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: 'reverse', // Reverse the animation each time it repeats
      },
    },
 };

 return (
    <motion.section
      className="cs_hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="cs_hero_wrap cs_bg_filed"
        style={{ backgroundImage: `url(${bgUrl})`,  marginTop:'100px'}}
      >
        <div className="container">
          {/* Hero text with bouncing animation */}
          <motion.div
            className="cs_hero_text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="cs_hero_title cs_fs_94">{parse(title)}</h1>
            <p className="cs_hero_subtitle cs_fs_20 cs_heading_color">
              {parse(subTitle)}
            </p>
            <div className="cs_hero_btn_wrap">
              <VideoModal
                videoUrl={videoUrl}
                videoBtnText={videoBtnText}
                variant="cs_heading_color"
              />
            </div>
          </motion.div>
          {/* Other elements remain unchanged */}
        </div>
      </div>
    </motion.section>
 );
}



