import { EraData, EraId } from './types';

/**
 * IDENTITY_PRESERVATION_GUIDE:
 * These instructions ensure Gemini 3 Flash Image maintains the user's likeness 
 * while accurately rendering the mystical Samurai aesthetic.
 */
export const IDENTITY_PRESERVATION_GUIDE = `STRICT VISUAL REQUIREMENTS (NO DEVIATIONS ALLOWED):
- CRITICAL IDENTITY LOCK: You MUST maintain the EXACT facial features, bone structure, and skin tone of ALL subjects in the reference image. DO NOT morph, beautify, or alter any faces. Every face must remain 100% identical and recognizable as the people in the original photo.
- THE FEATHER BLADE: The weapon is a single, large, magnificent CYAN FEATHER (not metal). It has a vibrant electric blue glowing spine (rachis) that emits intense mystical light. A realistic Japanese Katana hilt (tsuka) with traditional wrap (ito) is attached to the base of the feather.
- WARDROBE: ABSOLUTE MANDATORY COMPLETE REPLACEMENT. All subjects must wear high-quality, weighted, traditional black or dark indigo samurai robes (kimono and hakama). NO TRACE of the original garment should remain.
- LIGHTING: Balanced cinematic daytime. The scene should be well-lit but with soft, natural shadows to provide depth. Use a mix of soft window light and warm ambient glow. The glowing blade should cast a beautiful cyan light on all subjects without washing out the environment.
- STYLE: High-fidelity professional portrait photography, cinematic but clear, photorealistic execution, 8k resolution, masterful composition.`;

/**
 * LIGHTING_STYLES:
 * Variations of the Dojo atmosphere.
 */
export const LIGHTING_STYLES = [
  "Soft afternoon light filtered through shoji screens, creating a balanced Dojo atmosphere with gentle shadows for depth.",
  "Atmospheric daytime lighting with a warm ambient glow from paper lanterns, complemented by the vibrant cyan light of the feather blade.",
  "Cinematic indoor lighting with soft natural fill light, ensuring the subject is clear while maintaining a moody, professional feel.",
  "Balanced portrait lighting with soft rim highlights and a clean, but not overly bright, Dojo environment.",
  "A mix of soft daylight and warm interior light, where the cool blue glow of the weapon adds a mystical but grounded touch."
];

/**
 * MALE_WARDROBE_STYLES:
 * Traditional Samurai attire for men.
 */
export const MALE_WARDROBE_STYLES = [
  "traditional weighted black samurai kimono and hakama with a silver-threaded obi belt.",
  "dark indigo formal samurai robes with subtle textured embroidery on the shoulders.",
  "a charcoal-grey Ronin-style kimono with tattered edges and weighted hakama pants.",
  "deep black samurai armor-layered kimono with a focus on heavy fabric folds.",
  "midnight blue traditional martial arts gi with weighted hakama and silk wraps."
];

/**
 * FEMALE_WARDROBE_STYLES:
 * Traditional Samurai attire for women.
 */
export const FEMALE_WARDROBE_STYLES = [
  "an elegant weighted black silk kimono with indigo hakama and a decorative obi.",
  "dark indigo traditional female samurai robes, featuring layered sleeves and a high collar.",
  "a midnight black combat-ready kimono with a simple indigo hakama for fluid movement.",
  "deep charcoal female samurai attire with subtle floral patterns etched into the dark fabric.",
  "a sleek, dark navy silk kimono with a contrasting cyan-threaded belt."
];

/**
 * STANCES:
 * Representing different Combat Stances and Dojo Settings.
 */
export const ERAS: EraData[] = [
  {
    id: EraId.GUARDIAN, 
    name: 'The Focused Guardian',
    description: 'A firm, forward-facing ready stance.',
    promptInstructions: 'The character is standing in a firm, forward-facing stance, looking directly at the camera. They are holding the glowing cyan feather blade horizontally in front of them. Atmospheric daytime Dojo with soft shadows.'
  },
  {
    id: EraId.LOTUS,
    name: 'The Serene Lotus',
    description: 'A centered, graceful samurai pose.',
    promptInstructions: 'The character is standing tall and facing forward, looking directly at the camera. They are holding the glowing feather blade diagonally across their chest. Balanced cinematic light and soft Dojo background.'
  },
  {
    id: EraId.SHADOW,
    name: 'The Direct Dualist',
    description: 'A centered, camera-focused combat pose.',
    promptInstructions: 'The character is in a centered, forward-facing pose, looking directly at the camera. They are holding the glowing cyan feather blade ready for action. Soft, professional indoor lighting.'
  },
  {
    id: EraId.SILENT,
    name: 'The Silent Watcher',
    description: 'A calm, centered portrait pose.',
    promptInstructions: 'The character is standing in a calm, centered pose, facing forward and looking directly at the camera. They are holding the glowing feather blade vertically. Warm, clear glow from the Dojo environment.'
  },
  {
    id: EraId.ASCENDANT,
    name: 'The Heroic Front',
    description: 'A heroic, forward-facing portrait.',
    promptInstructions: 'A heroic, forward-facing portrait of the warrior looking directly at the camera. They are holding the glowing feather blade heroically in a centered position. Balanced cinematic lighting.'
  }
];