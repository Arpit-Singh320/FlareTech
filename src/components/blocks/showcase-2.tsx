"use client";

import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { useRef, useState, useEffect } from "react";

const SHOWCASE_ITEMS = [
  { id: 1, src: "/showcase/video-1.mp4", type: "video", height: "h-[420px]" },
  { id: 4, src: "/showcase/image-1.jpg", type: "image", height: "h-[380px]" },
  { id: 2, src: "/showcase/video-2.mp4", type: "video", height: "h-[460px]" },
  { id: 5, src: "/showcase/image-2.jpg", type: "image", height: "h-[400px]" },
  { id: 3, src: "/showcase/video-3.mp4", type: "video", height: "h-[420px]" },
  { id: 6, src: "/showcase/video-4.mp4", type: "video", height: "h-[420px]" },
  { id: 7, src: "/showcase/video-5.mp4", type: "video", height: "h-[440px]" },
];

export function Showcase2() {
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [oneSetWidth, setOneSetWidth] = useState(0);

  const baseVelocity = -20;
  const baseX = useMotionValue(0);
  const scrollVelocity = useRef(baseVelocity);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const items = Array(4).fill(SHOWCASE_ITEMS).flat();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      const itemWidth = isMobile ? 280 : 320;
      const gap = 24;
      const width = (itemWidth + gap) * SHOWCASE_ITEMS.length;
      setOneSetWidth(width);

      baseX.set(-width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseX]);

  useAnimationFrame((_, delta) => {
    if (!oneSetWidth) return;

    if (!isDragging) {
      scrollVelocity.current =
        scrollVelocity.current * 0.9 + baseVelocity * 0.1;

      const moveBy = scrollVelocity.current * (delta / 1000);
      baseX.set(baseX.get() + moveBy);

      const x = baseX.get();
      if (x <= -oneSetWidth * 2) {
        baseX.set(x + oneSetWidth);
      } else if (x > 0) {
        baseX.set(x - oneSetWidth);
      }
    }
  });

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              The build in motion
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15] mb-8 sm:mb-10">
              Prototypes becoming real.
            </h2>
            <motion.a
              href="https://x.com/Flaretechxyz"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors duration-200"
            >
              Follow on X
            </motion.a>
          </div>
        </motion.div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-20">
          <motion.div
            ref={scrollerRef}
            className="flex items-end gap-6 cursor-grab active:cursor-grabbing"
            style={{ x: baseX }}
            drag="x"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              scrollVelocity.current = info.velocity.x;
            }}
            dragElastic={0.05}
            dragMomentum={false}
          >
            {items.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className={`shrink-0 w-[280px] sm:w-[320px] ${item.height} rounded-2xl overflow-hidden select-none relative pointer-events-auto bg-card border border-border`}
                initial={{ rotateX: 0, opacity: 1 }}
                animate={
                  hoveredId === index
                    ? {
                        scale: 1.05,
                        rotateX: -15,
                        y: -25,
                        zIndex: 50,
                      }
                    : {
                        scale: 1,
                        rotateX: 0,
                        y: 0,
                        zIndex: 1,
                      }
                }
                transition={{
                  duration: 0.3,
                  ease: "backOut",
                  zIndex: { delay: hoveredId === index ? 0 : 0.4 },
                }}
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ transformPerspective: 1000 }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    autoPlay
                    loop
                    className="w-full h-full object-cover object-top pointer-events-none"
                    draggable="false"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt="Flaretech build"
                    className="w-full h-full object-cover object-top pointer-events-none"
                    draggable="false"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Showcase2;
