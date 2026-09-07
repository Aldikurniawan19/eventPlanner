// components/ui/card-21.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Define the props for the DestinationCard component
export interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  badge?: string;
  stats: string;
  href?: string;
  themeColor?: string; // e.g., "160 55% 20%" for deep forest green
  onActionClick?: () => void;
  actionText?: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      badge,
      stats,
      href = "#",
      themeColor = "160 55% 20%",
      onActionClick,
      actionText = "Detail Sewa",
      ...props
    },
    ref
  ) => {
    const handleCardClick = (e: React.MouseEvent) => {
      if (onActionClick) {
        e.preventDefault();
        onActionClick();
      }
    };

    return (
      <div
        ref={ref}
        style={
          {
            // CSS custom properties for dynamic theme coloring
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group w-full h-full cursor-pointer", className)}
        onClick={handleCardClick}
        {...props}
      >
        <div
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg 
                     transition-transform duration-300 ease-out 
                     group-hover:scale-[1.02] group-hover:shadow-xl will-change-transform transform-gpu"
          style={{
            boxShadow: `0 0 35px -15px hsl(var(--theme-color) / 0.45)`,
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.65) 40%, transparent 75%)`,
            }}
          />

          {/* Top Badges (Category & Availability) */}
          <div className="relative z-10 p-5 flex items-center justify-between">
            {badge && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/40 backdrop-blur-md text-white border border-white/15">
                {badge}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-black/40 backdrop-blur-md text-white border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Tersedia
            </span>
          </div>

          {/* Content dengan Animasi Teks Masuk & Keluar */}
          <div className="relative flex flex-col justify-end h-[calc(100%-4rem)] p-6 text-white z-10">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug transition-transform duration-300 ease-out group-hover:-translate-y-1">
              {location}
              {flag && <span className="text-lg ml-1.5">{flag}</span>}
            </h3>
            <p className="text-sm text-white/85 mt-1.5 font-medium transition-transform duration-300 ease-out group-hover:-translate-y-0.5">{stats}</p>

            {/* Explore / Detail Button with Glassmorphism */}
            <div
              className="mt-6 flex items-center justify-between bg-[hsl(var(--theme-color)/0.3)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.45)] 
                           rounded-xl px-4 py-3 
                           transition-all duration-300 ease-out
                           group-hover:bg-[hsl(var(--theme-color)/0.55)] group-hover:border-[hsl(var(--theme-color)/0.7)] group-hover:shadow-md group-hover:-translate-y-1"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {actionText}
              </span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
export default DestinationCard;
