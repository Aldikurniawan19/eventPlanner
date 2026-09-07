// components/ui/bento-gallery.tsx
"use client"

import React, { useRef, useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

// Defines the structure for each image item in the gallery
export type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string
  span: string // Tailwind CSS grid span classes (e.g., "md:col-span-2")
}

// Defines the props for the main gallery component
export interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[]
  title: string
  description: string
}

// Modal component for displaying the selected image
const ImageModal = ({
  item,
  onClose,
}: {
  item: ImageItem
  onClose: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-[94vw] max-h-[92vh] overflow-hidden rounded-2xl bg-[#111827] shadow-2xl border border-white/10 flex flex-col w-fit mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gambar pratinjau: ukuran kontainer mengikuti dimensi alami gambar tanpa kolom/aspect-ratio tetap */}
        <div className="relative flex items-center justify-center bg-black/40 overflow-hidden">
          <img
            src={item.url}
            alt={item.title}
            className="max-h-[74vh] max-w-[92vw] sm:max-w-[88vw] w-auto h-auto object-contain block mx-auto select-none"
          />
        </div>
        <div className="p-4 sm:p-5 bg-[#111827] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 w-full">
          <div className="min-w-0 pr-2">
            <h3 className="text-base sm:text-lg font-bold truncate">{item.title}</h3>
            <p className="mt-0.5 text-xs sm:text-sm text-white/70 line-clamp-2">{item.desc}</p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer shrink-0"
          >
            Tutup
          </button>
        </div>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute right-5 top-5 p-2 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
        aria-label="Tutup pratinjau gambar"
      >
        <X className="w-6 h-6" />
      </button>
    </motion.div>
  )
}

// Variants animasi untuk kartu galeri (efek teks masuk dan keluar yang bertingkat/staggered)
const cardOverlayVariants: Variants = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
}

const cardTextContainerVariants: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.06,
    },
  },
}

const cardTextItemVariants: Variants = {
  rest: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.18,
      ease: 'easeInOut',
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const imageZoomVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

interface BentoGalleryCardProps {
  item: ImageItem
  isTall: boolean
  onClick: () => void
}

const BentoGalleryCard: React.FC<BentoGalleryCardProps> = ({
  item,
  isTall,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      tabIndex={0}
      aria-label={`Lihat ${item.title}`}
      className={cn(
        "group relative flex cursor-pointer items-end overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#111827] p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary will-change-transform transform-gpu",
        isTall
          ? "row-span-2 h-full w-[20rem] sm:w-[25rem]"
          : "row-span-1 h-full w-[17rem] sm:w-[21rem]"
      )}
    >
      {/* Gambar dengan Animasi Zoom Lembut */}
      <motion.img
        src={item.url}
        alt={item.title}
        variants={imageZoomVariants}
        className="absolute inset-0 h-full w-full object-cover will-change-transform transform-gpu"
        loading="lazy"
        draggable={false}
      />

      {/* Gradient Dark Overlay dengan Animasi Masuk & Keluar */}
      <motion.div
        variants={cardOverlayVariants}
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent"
      />

      {/* Kontainer Teks dengan Animasi Stagger Masuk & Keluar */}
      <motion.div
        variants={cardTextContainerVariants}
        className="relative z-10 space-y-1.5 w-full pointer-events-none"
      >
        <motion.span
          variants={cardTextItemVariants}
          className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-primary text-white mb-0.5 shadow-xs"
        >
          DOKUMENTASI
        </motion.span>

        <motion.h3
          variants={cardTextItemVariants}
          className="text-base sm:text-lg font-bold text-white leading-snug"
        >
          {item.title}
        </motion.h3>

        <motion.p
          variants={cardTextItemVariants}
          className="text-xs sm:text-sm text-white/85 line-clamp-2 leading-relaxed"
        >
          {item.desc}
        </motion.p>

        <motion.div
          variants={cardTextItemVariants}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 pt-1"
        >
          <span>Klik untuk memperbesar</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Main gallery component with smooth left/right scrolling and mouse drag
export const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({ imageItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Drag to scroll states
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  // Scroll handler via navigation buttons
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const scrollAmount = direction === "left" ? -400 : 400
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsMouseDown(true)
    setHasMoved(false)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeftPos(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const distance = x - startX
    if (Math.abs(distance) > 5) {
      setHasMoved(true)
    }
    scrollContainerRef.current.scrollLeft = scrollLeftPos - distance * 1.3
  }

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false)
  }

  const handleCardClick = (item: ImageItem) => {
    // Only open modal if user clicked without dragging
    if (!hasMoved) {
      setSelectedItem(item)
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Seksi dengan Navigasi Panah Kiri & Kanan */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <span className="inline-block text-xs font-bold tracking-wider text-primary uppercase">
              PORTOFOLIO & DOKUMENTASI
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111827]">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tombol Kontrol Gulir Kiri & Kanan */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-[#e5e7eb] bg-white hover:bg-surface active:bg-[#f3f4f6] text-[#111827] flex items-center justify-center shadow-xs transition-all cursor-pointer hover:border-primary hover:text-primary"
              aria-label="Gulir galeri ke kiri"
              title="Gulir ke kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-[#e5e7eb] bg-white hover:bg-surface active:bg-[#f3f4f6] text-[#111827] flex items-center justify-center shadow-xs transition-all cursor-pointer hover:border-primary hover:text-primary"
              aria-label="Gulir galeri ke kanan"
              title="Gulir ke kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Kontainer Galeri yang Bisa Digulir Horizontal & Didrag */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={cn(
          "w-full overflow-x-auto overflow-y-hidden select-none px-4 sm:px-6 lg:px-8 pb-4",
          isMouseDown ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="grid grid-rows-2 grid-flow-col gap-4 sm:gap-5 h-[500px] w-max">
          {imageItems.map((item) => {
            const isTall = item.span?.includes("row-span-2");
            return (
              <BentoGalleryCard
                key={item.id}
                item={item}
                isTall={isTall}
                onClick={() => handleCardClick(item)}
              />
            );
          })}
        </div>
      </div>

      {/* Modal Popup Fullscreen */}
      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery
