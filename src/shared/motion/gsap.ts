import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Single place where plugins are registered.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
