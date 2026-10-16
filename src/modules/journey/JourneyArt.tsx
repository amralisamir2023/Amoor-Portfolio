import Image from "next/image";
import type { JourneyStage } from "@/core/entities/portfolio";

// Illustrations are inline SVG in the brand colors. Elements marked
// data-journey-draw get their stroke drawn; data-journey-pop scale/fade in
// (see motion/effects/journey.ts). pathLength="1" lets GSAP animate dashoffset 1 → 0.
const draw = { "data-journey-draw": "", pathLength: 1 } as const;
const pop = "[transform-box:fill-box] origin-center";

function Design() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full" role="img" aria-label="Bezier curve and color swatches">
      <g className="stroke-charcoal/30" strokeWidth="1.5">
        <line x1="40" y1="220" x2="110" y2="60" />
        <line x1="360" y1="200" x2="290" y2="60" />
      </g>
      <path {...draw} d="M40 220 C110 60 290 60 360 200" className="stroke-saffron" strokeWidth="7" strokeLinecap="round" />
      <circle cx="40" cy="220" r="8" className="fill-bone stroke-charcoal" strokeWidth="3" />
      <circle cx="360" cy="200" r="8" className="fill-bone stroke-charcoal" strokeWidth="3" />
      <rect data-journey-pop="" x="104" y="54" width="12" height="12" className={`fill-charcoal ${pop}`} />
      <rect data-journey-pop="" x="284" y="54" width="12" height="12" className={`fill-charcoal ${pop}`} />
      <rect data-journey-pop="" x="40" y="250" width="44" height="30" rx="7" className={`fill-saffron ${pop}`} />
      <rect data-journey-pop="" x="94" y="250" width="44" height="30" rx="7" className={`fill-charcoal ${pop}`} />
      <rect data-journey-pop="" x="148" y="250" width="44" height="30" rx="7" className={`fill-clay ${pop}`} />
    </svg>
  );
}

function University() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full" role="img" aria-label="Graduation cap">
      <path {...draw} d="M200 70 L340 125 L200 180 L60 125 Z" className="stroke-saffron" strokeWidth="7" strokeLinejoin="round" />
      <path {...draw} d="M112 152 V208 C150 238 250 238 288 208 V152" className="stroke-charcoal" strokeWidth="6" strokeLinecap="round" />
      <path {...draw} d="M340 125 V214" className="stroke-charcoal" strokeWidth="6" strokeLinecap="round" />
      <circle data-journey-pop="" cx="340" cy="224" r="10" className={`fill-saffron ${pop}`} />
    </svg>
  );
}

function Frontend() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full" role="img" aria-label="Code editor window">
      <rect {...draw} x="40" y="50" width="320" height="200" rx="18" className="stroke-charcoal" strokeWidth="6" />
      <line x1="40" y1="92" x2="360" y2="92" className="stroke-charcoal/25" strokeWidth="2" />
      <circle data-journey-pop="" cx="68" cy="71" r="6" className={`fill-saffron ${pop}`} />
      <circle data-journey-pop="" cx="90" cy="71" r="6" className={`fill-clay ${pop}`} />
      <circle data-journey-pop="" cx="112" cy="71" r="6" className={`fill-charcoal/40 ${pop}`} />
      <text data-journey-pop="" x="70" y="150" fontSize="34" fontWeight="700" className={`fill-saffron font-mono ${pop}`}>
        {"</>"}
      </text>
      <path {...draw} d="M70 184 H260" className="stroke-charcoal/40" strokeWidth="6" strokeLinecap="round" />
      <path {...draw} d="M70 214 H190" className="stroke-charcoal/40" strokeWidth="6" strokeLinecap="round" />
      <rect data-journey-pop="" x="206" y="200" width="12" height="28" className={`fill-saffron ${pop}`} />
    </svg>
  );
}

function UiUx() {
  const wire = "stroke-charcoal";
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full" role="img" aria-label="Wireframe becoming an interface">
      <rect data-journey-pop="" x="40" y="90" width="320" height="100" rx="14" className={`fill-saffron/80 ${pop}`} />
      <rect data-journey-pop="" x="155" y="206" width="90" height="60" rx="10" className={`fill-charcoal ${pop}`} />
      <rect {...draw} x="40" y="40" width="320" height="34" rx="9" className={wire} strokeWidth="4" strokeDasharray="1" />
      <rect {...draw} x="40" y="90" width="320" height="100" rx="14" className={wire} strokeWidth="4" />
      <rect {...draw} x="40" y="206" width="90" height="60" rx="10" className={wire} strokeWidth="4" />
      <rect {...draw} x="155" y="206" width="90" height="60" rx="10" className={wire} strokeWidth="4" />
      <rect {...draw} x="270" y="206" width="90" height="60" rx="10" className={wire} strokeWidth="4" />
    </svg>
  );
}

function Merge() {
  return (
    <svg viewBox="0 0 400 300" fill="none" className="w-full" role="img" aria-label="Design and code merging into one">
      <circle data-journey-pop="" cx="160" cy="150" r="82" className={`fill-saffron/35 ${pop}`} />
      <circle data-journey-pop="" cx="240" cy="150" r="82" className={`fill-charcoal/25 ${pop}`} />
      <circle {...draw} cx="160" cy="150" r="82" className="stroke-saffron" strokeWidth="7" />
      <circle {...draw} cx="240" cy="150" r="82" className="stroke-charcoal" strokeWidth="7" />
      <text
        data-journey-pop=""
        x="200"
        y="158"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        className={`fill-charcoal font-mono ${pop}`}
      >
        {"UI + </>"}
      </text>
    </svg>
  );
}

function Projects({ images = [] }: { images?: JourneyStage["images"] }) {
  const layout = [
    "left-0 top-0 w-[62%] -rotate-3",
    "right-0 top-[18%] w-[58%] rotate-3",
    "bottom-0 left-[16%] w-[56%] -rotate-1",
  ];
  return (
    <div className="relative aspect-[4/3] w-full" aria-hidden={images.length === 0}>
      {images.slice(0, 3).map((image, i) => (
        <div
          key={image.src}
          data-journey-pop=""
          className={`absolute aspect-[16/10] overflow-hidden rounded-xl border border-charcoal/20 bg-bone shadow-xl ${layout[i]}`}
        >
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 22vw, 60vw" className="object-cover object-top" />
        </div>
      ))}
    </div>
  );
}

export function JourneyArt({ stage }: { stage: JourneyStage }) {
  switch (stage.visual) {
    case "design":
      return <Design />;
    case "university":
      return <University />;
    case "frontend":
      return <Frontend />;
    case "projects":
      return <Projects images={stage.images} />;
    case "uiux":
      return <UiUx />;
    case "merge":
      return <Merge />;
  }
}
