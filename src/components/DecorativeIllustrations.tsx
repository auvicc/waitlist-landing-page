/**
 * Abstract decorative illustration shapes positioned around the hero.
 * These replicate the layered abstract blobs/shapes visible in the Soonix template.
 */
export function DecorativeIllustrations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-left blob - green */}
      <svg
        className="absolute -top-16 -left-24 w-[400px] h-[400px] opacity-60 animate-float"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "0s" }}
      >
        <path
          d="M180 60C240 20 340 40 370 100C400 160 380 260 320 310C260 360 140 370 90 310C40 250 30 140 80 90C105 65 140 85 180 60Z"
          fill="#8b3a2a"
          opacity="0.15"
        />
        <path
          d="M200 80C250 50 330 65 355 120C380 175 360 265 305 305C250 345 145 350 100 295C55 240 60 145 105 105C128 85 162 105 200 80Z"
          fill="#8b3a2a"
          opacity="0.2"
        />
      </svg>

      {/* Top-right blob - blue */}
      <svg
        className="absolute -top-20 -right-20 w-[380px] h-[380px] opacity-50 animate-float"
        viewBox="0 0 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "2s" }}
      >
        <path
          d="M220 50C280 10 360 50 370 120C380 190 330 290 260 330C190 370 90 350 50 280C10 210 40 110 100 75C130 57 165 85 220 50Z"
          fill="#8b3a2a"
          opacity="0.12"
        />
        <path
          d="M210 70C265 35 340 70 350 135C360 200 315 285 250 320C185 355 95 335 60 270C25 205 55 115 110 83C138 67 168 100 210 70Z"
          fill="#8b3a2a"
          opacity="0.18"
        />
      </svg>

      {/* Bottom-left geometric shape */}
      <svg
        className="absolute bottom-0 -left-16 w-[320px] h-[320px] opacity-40 animate-float"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "4s" }}
      >
        <ellipse
          cx="160"
          cy="200"
          rx="140"
          ry="100"
          fill="#262424"
          opacity="0.06"
        />
        <ellipse
          cx="150"
          cy="180"
          rx="110"
          ry="80"
          fill="#8b3a2a"
          opacity="0.1"
        />
      </svg>

      {/* Bottom-right blob */}
      <svg
        className="absolute -bottom-10 -right-10 w-[350px] h-[350px] opacity-45 animate-float"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "1.5s" }}
      >
        <path
          d="M200 30C270 5 350 60 345 140C340 220 280 310 200 330C120 350 40 295 20 215C0 135 50 55 130 35C155 28 175 38 200 30Z"
          fill="#8b3a2a"
          opacity="0.08"
        />
        <path
          d="M195 55C255 32 325 82 320 155C315 228 260 305 185 322C110 339 40 288 22 212C4 136 52 68 125 52C148 47 170 62 195 55Z"
          fill="#8b3a2a"
          opacity="0.12"
        />
      </svg>

      {/* Center-left small accent */}
      <svg
        className="absolute top-1/3 -left-8 w-[180px] h-[180px] opacity-30 animate-float"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "3s" }}
      >
        <circle cx="90" cy="90" r="70" fill="#8b3a2a" opacity="0.2" />
        <circle cx="90" cy="90" r="50" fill="#8b3a2a" opacity="0.15" />
      </svg>

      {/* Center-right small accent */}
      <svg
        className="absolute top-1/2 -right-6 w-[160px] h-[160px] opacity-25 animate-float"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: "0.8s" }}
      >
        <rect
          x="20"
          y="20"
          width="120"
          height="120"
          rx="30"
          fill="#8b3a2a"
          opacity="0.15"
          transform="rotate(15 80 80)"
        />
      </svg>
    </div>
  )
}
