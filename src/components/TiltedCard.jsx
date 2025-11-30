import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  
  containerHeight = 'auto',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '100%',
  
  mobileHeight = '250px',
  tabletHeight = '280px',
  desktopHeight = '300px',
  mobileWidth = '100%',
  tabletWidth = '300px',
  desktopWidth = '300px',
  
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  
  disableTiltOnMobile = true
}) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: mobileWidth,
    height: mobileHeight
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });
  const [lastY, setLastY] = useState(0);

  
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      
      if (width < 640) {
       
        setIsMobile(true);
        setDimensions({
          width: mobileWidth,
          height: mobileHeight
        });
      } else if (width < 1024) {
        
        setIsMobile(false);
        setDimensions({
          width: tabletWidth,
          height: tabletHeight
        });
      } else {
        
        setIsMobile(false);
        setDimensions({
          width: desktopWidth,
          height: desktopHeight
        });
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileWidth, mobileHeight, tabletWidth, tabletHeight, desktopWidth, desktopHeight]);

  function handleMouse(e) {
    
    if (isMobile && disableTiltOnMobile) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    
    rotateX.set(rotationX);
    rotateY.set(rotationY);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    
    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (isMobile && disableTiltOnMobile) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  
  function handleTouchStart() {
    if (!disableTiltOnMobile) {
      scale.set(scaleOnHover * 0.98);
    }
  }

  function handleTouchEnd() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="
        relative 
        w-full 
        h-full 
        [perspective:800px] 
        flex 
        flex-col 
        items-center 
        justify-center
        touch-manipulation
        px-4
        sm:px-0
      "
      style={{
        height: containerHeight === 'auto' ? dimensions.height : containerHeight,
        width: containerWidth,
        maxWidth: '100%'
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {}
      {showMobileWarning && (
        <div 
          className="
            absolute 
            top-2
            sm:top-4 
            left-1/2 
            -translate-x-1/2
            text-center 
            text-xs
            sm:text-sm 
            text-gray-500 
            dark:text-gray-400
            bg-white/80 
            dark:bg-gray-800/80
            backdrop-blur-sm
            px-3 
            py-1.5
            rounded-full
            block 
            sm:hidden
            whitespace-nowrap
            shadow-sm
          "
        >
          Este efecto se ve mejor en escritorio
        </div>
      )}

      {}
      <motion.div
        className="
          relative 
          [transform-style:preserve-3d]
          w-full
          max-w-[280px]
          sm:max-w-[300px]
          lg:max-w-none
        "
        style={{
          width: imageWidth === '100%' ? '100%' : dimensions.width,
          height: imageHeight === '100%' ? dimensions.height : imageHeight,
          rotateX,
          rotateY,
          scale
        }}
      >
        {}
        <motion.img
          src={imageSrc}
          alt={altText}
          className="
            absolute 
            top-0 
            left-0 
            w-full
            h-full
            object-cover 
            rounded-xl
            sm:rounded-[15px]
            will-change-transform 
            [transform:translateZ(0)]
            shadow-lg
            sm:shadow-xl
          "
          style={{
            width: '100%',
            height: '100%'
          }}
          loading="lazy"
        />

        {}
        {displayOverlayContent && overlayContent && (
          <motion.div 
            className="
              absolute 
              top-0 
              left-0 
              z-[2] 
              will-change-transform 
              [transform:translateZ(30px)]
              w-full
              h-full
              p-3
              sm:p-4
            "
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {}
      {showTooltip && captionText && (
        <motion.figcaption
          className="
            pointer-events-none 
            absolute 
            left-0 
            top-0 
            rounded
            sm:rounded-[4px] 
            bg-white 
            dark:bg-gray-800 
            px-2.5
            sm:px-[10px] 
            py-1
            sm:py-[4px] 
            text-[9px]
            sm:text-[10px] 
            text-gray-900 
            dark:text-white 
            opacity-0 
            z-[3] 
            hidden 
            sm:block 
            shadow-lg
            font-medium
          "
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}

      {}
      {captionText && (
        <p 
          className="
            mt-3
            text-xs
            text-gray-600
            dark:text-gray-400
            text-center
            sm:hidden
          "
        >
          {captionText}
        </p>
      )}
    </figure>
  );
}