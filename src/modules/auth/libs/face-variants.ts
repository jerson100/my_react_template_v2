import {Variants} from 'motion/react';

export const CoverArmL: Variants = {
  hidden: {
    y: 220,
  }
}

export const TwoFingersVariants:Variants = {
  hidden: {
    transformOrigin: "bottom left",
    x: 0,
    y: 0,
    rotate:0,
    transition: {
      duration: 0.35,
      ease: "easeInOut"
    }
  },
  animate: {
    transformOrigin: "bottom left",
    rotate: 30,
    x: -5,
    y: 7,
    transition: {
      duration: 0.35,
      ease: "easeInOut"
    }
  }
}

export const CoverFaceVariants:Variants = {
  initialARML: {
    y: 220,
    x: -143,
    visibility: "hidden",
    rotate: 105,  
    transition: { 
      duration: 1.35, ease: "easeOut", 
      rotate: {
        delay: 0,
        duration: 1.35, ease: "easeOut"
      }  
    } 
  },
  initialARMR: { 
    y: 220,
    x: 0,
    visibility: "hidden",
    rotate: -105,  
    transition: { 
      duration: 1.35, ease: "easeOut", 
      rotate: {
        delay: 0,
        duration: 1.35, ease: "easeOut"
      }  
    } 
  },
  animateARML: { 
    visibility: "visible",
    y: 10,
    x: -93,
    rotate: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  animateARMR: {
    visibility: "visible",
    y: 10, 
    x: -93,
    rotate: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.1 },
  },
  initialbodyBgNormal: {
   d: "M200,122h-35h-14.9V72c0-27.6-22.4-50-50-50s-50,22.4-50,50v50H35.8H0l0,91h200L200,122z",
   transition: { duration: 0.45, ease: "easeOut"},
  },
  bodyBgNormalAnimate: {
    d: "M200,158.5c0-20.2-14.8-36.5-35-36.5h-14.9V72.8c0-27.4-21.7-50.4-49.1-50.8c-28-0.5-50.9,22.1-50.9,50v50 H35.8C16,122,0,138,0,157.8L0,213h200L200,158.5z",
    transition: { duration: 0.45, ease: "easeOut"},
  }
};