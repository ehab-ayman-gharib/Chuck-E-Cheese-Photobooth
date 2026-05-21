import { EraData, EraId } from './types';

/**
 * IDENTITY_PRESERVATION_GUIDE:
 * These instructions ensure Gemini maintains the user's likeness 
 * while accurately rendering the US-Egypt 4th of July Embassy celebration scene with Chuck E. Cheese characters.
 */
export const IDENTITY_PRESERVATION_GUIDE = `STRICT VISUAL REQUIREMENTS (NO DEVIATIONS ALLOWED):
- CRITICAL IDENTITY LOCK: You MUST maintain the EXACT facial features, bone structure, and skin tone of ALL subjects in the reference image. DO NOT morph, beautify, or alter any faces. Every face must remain 100% identical, human, and photorealistic. No cartoonish distortion on human faces is allowed.
- COMPOSITION & CHARACTER FOCUS (MAIN FOCAL POINT): The entire generation MUST be a tight, intimate, close-up group portrait (mid-shot, chest-up composition) focusing completely on the human subject and the Chuck E. Cheese characters standing shoulder-to-shoulder as best friends. The characters must dominate the frame, taking up 70% of the composition.
  * TIGHT CLOSE-UP GROUP SHOT: The characters are standing extremely close, crowding in happily around the user to create a warm, friendly group photo. Chuck E. Cheese (the grey mouse) stands on the left, smiling warmly with his hand placed friendly on the subject's shoulder or standing right next to him. Helen Henny stands immediately behind them, framing the subject. Mr. Munch stands on the right foreground/shoulder-to-shoulder, making a friendly thumbs-up or happy gesture.
  * EXTREME BACKGROUND BOKEH / DEPTH OF FIELD: The background landmarks (the Pyramids of Giza, the Statue of Liberty, flags, and Manhattan skyline) MUST be rendered with a strong, artistic photographic soft-focus blur (dreamy bokeh). This ensures the background acts as a beautiful scenic framing element without distracting from the main subjects, making the highly detailed characters and human subject the absolute crisp, sharp, and high-fidelity focal point of the entire image.
- CHARACTER AESTHETIC & REALISM (PIXAR/DISNEY 3D CGI STYLE):
  * The characters MUST be rendered as high-fidelity, cinematic 3D CGI animated feature-film characters (like a high-budget Pixar, Disney, or DreamWorks movie, or an Unreal Engine 5 path-traced render). They MUST NOT look like cheap foam mascot costumes, walkaround theme park performers, mascot suits, or flat 2D cartoons.
  * CHUCK E. CHEESE: A cinematic, high-detail grey mouse character. He has extremely fine, realistic, short grey-brown fur with millions of individually-rendered, soft, organic hair strands that catch the light with soft specular highlights. Large, glossy, wet-looking green glass eyes with deep iris detail and realistic eyelid shadows. A friendly, smiling mouth showing his white front teeth. A soft pink inner-ear texture with realistic subsurface scattering (backlight glowing through the ears). He wears a high-quality fabric purple crewneck jersey t-shirt with a green collar, green sleeve bands, and an embroidered yellow-green "C" logo.
  * HELEN HENNY: A gorgeous, cinematic yellow chicken character. Her body is covered in beautifully layered, fluffy, highly detailed realistic yellow feathers with visible individual shafts and fine barbules (never a smooth or plastic look). She has expressive, glossy blue eyes, a short matte-textured orange beak, and a stylish tuft of blonde hair on her head tied with a premium purple bow. She wears a high-quality fabric purple top/dress.
  * MR. MUNCH: A highly detailed, shaggy purple monster character. He is covered in extremely realistic, shaggy, long, fluffy purple fur with organic clumping, draping, and soft physical highlights. He has large, expressive green-and-yellow eyes with glossy wet-looking depth, a rounded bulbous yellow nose with a soft-touch matte texture, and a happy open mouth showing realistic teeth and tongue detail. He wears a high-quality fabric bright orange t-shirt with a green "M" logo.
- PORTRAIT WARDROBE INTEGRATION:
  * The human subject and the characters MUST be wearing matching custom premium Chuck E. Cheese attire: high-quality fabric crewneck jerseys (deep purple body, vibrant green sleeve bands, green collar, large iconic yellow-green "C" logo embroidered on the chest) and classic blue jeans.
  * All clothing must be rendered with physically-based rendering (PBR) showing highly detailed woven textile patterns, realistic stitching on seams, and natural physical folds/draping.
- SPECTACULAR VOLUMETRIC DUAL-LIGHTING:
  * LEFT-SIDE GOLDEN GLOW: A warm, intense golden sunset hour light from the left side of the scene casts brilliant amber and gold rim highlights across the left side of the user's hair and the left side of all characters' fur, feathers, and clothes.
  * RIGHT-SIDE INDIGO & FIREWORK LIGHTING: Cool deep blue twilight and colorful firework explosions from the right cast beautiful blue, purple, and multi-colored rim highlights across their right sides.
  * MAGICAL SKY TRAIL GLOW: A beautiful, thin, glowing neon pink/magenta and purple energy path/trail arcing elegantly across the upper sky casts a soft ambient glow down onto their hair, shoulders, and heads.
  * WET REFLECTIVE GROUND: The characters stand on a wet, dark stone-paved walkway that glossy and beautifully reflects the colorful fireworks, sunset glow, and magical energy path.
- SCENIC ELEMENTS:
  * ZIPLINE SEPARATION: A highly visible, sleek metallic zipline arcs dramatically across the upper sky, acting as a symbolic cinematic divider connecting and separating the Egyptian world (left) and the New York world (right).
  * FLAGS POSITIONS (CRITICAL LOCATION MATCHING): Waving flags of both nations MUST be beautifully integrated in the background, gently softened by the soft bokeh. The Egyptian flag MUST be located strictly on the left side of the background next to the Pyramids of Giza, and the United States (US) flag MUST be located strictly on the right side of the background next to the Statue of Liberty and Manhattan skyline, matching each country's landmarks perfectly and never reversed.`;

/**
 * LIGHTING_STYLES:
 * Variations of the celebration atmosphere.
 */
export const LIGHTING_STYLES = [
  "A majestic golden hour glow from the Egyptian sunset blending into a deep blue evening sky filled with vibrant, colorful fireworks.",
  "Balanced cinematic lighting where warm golden sunlight from the left illuminates the subjects, and cool blue ambient light with colorful fireworks from the right provides beautiful rim highlights.",
  "Festive twilight lighting, with warm ambient glows from decorative lanterns and brilliant, colorful bursts of fireworks lighting up the sky and casting colorful highlights.",
  "Cinematic daytime-to-nighttime gradient lighting, with a dramatic, magical pink-and-golden light trail in the center casting a soft glow on the subjects' faces.",
  "A harmonious blend of warm sunset sunset rays and festive, glowing fireworks, creating a warm, premium, and magical atmosphere."
];

/**
 * MALE_WARDROBE_STYLES:
 * Custom celebratory Chuck E. Cheese attire for men.
 */
export const MALE_WARDROBE_STYLES = [
  "a modern, high-quality, custom Chuck E. Cheese purple crewneck jersey t-shirt (deep purple body, vibrant green sleeve bands, and a green collar, featuring a large, iconic yellow-green 'C' logo embroidered in the center of the chest) and classic blue jeans. The clothing features highly realistic stitching, folds, natural cloth simulation, and ultra-detailed tactile fabric texture response."
];

/**
 * FEMALE_WARDROBE_STYLES:
 * Custom celebratory Chuck E. Cheese attire for women.
 */
export const FEMALE_WARDROBE_STYLES = [
  "a modern, high-quality, custom Chuck E. Cheese purple crewneck jersey t-shirt (deep purple body, vibrant green sleeve bands, and a green collar, featuring a large, iconic yellow-green 'C' logo embroidered in the center of the chest) and classic blue jeans. The clothing features highly realistic stitching, folds, natural cloth simulation, and ultra-detailed tactile fabric texture response."
];

/**
 * ERAS:
 * Representing different background scenic configurations blending US and Egypt.
 */
export const ERAS: EraData[] = [
  {
    id: EraId.GUARDIAN, 
    name: 'Embassy Celebration',
    description: 'A cinematic 4th of July celebration at the US Embassy in Egypt, blending the Pyramids of Giza and the Statue of Liberty under fireworks.',
    promptInstructions: 'The scene is an epic, horizontal side-by-side transition blending the Great Pyramids of Giza under a warm golden sunset on the left with the Statue of Liberty and Manhattan skyline under a starry deep blue twilight sky with spectacular colorful Fourth of July fireworks on the right. Waving flags of both nations are proudly displayed in the background, gently softened by a professional depth-of-field bokeh blur: the waving Egyptian flag is positioned strictly on the left side next to the Pyramids, and the waving United States flag is positioned strictly on the right side next to the Statue of Liberty, matching each respective country\'s landmark and never reversed. A magical glowing magenta and purple neon light path arches dynamically across the center sky, linking the ancient pyramids and modern skyscrapers. A sleek metallic zipline arcs elegantly overhead as a dividing element. The ground is a wet, dark, glossy stone-paved walkway reflecting the sky colors, light trail, and firework flashes.'
  }
];