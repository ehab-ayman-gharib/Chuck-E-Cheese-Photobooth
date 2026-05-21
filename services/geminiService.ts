import { GoogleGenAI } from "@google/genai";
import { EraData, FaceDetectionResult } from '../types';
import { MALE_WARDROBE_STYLES, FEMALE_WARDROBE_STYLES, IDENTITY_PRESERVATION_GUIDE, LIGHTING_STYLES } from '../constants';

let lastMaleWardrobeIndex = -1;
let lastFemaleWardrobeIndex = -1;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

const DASHBOARD_API_URL = "https://ai-photobooth-dashboard.vercel.app/api/projects/0f71cbcd-ef2d-4213-a3db-94fe7da6a805/generate";

/**
 * Increments the generated images count on the dashboard
 */
const incrementGeneratedCount = async () => {
  try {
    const response = await fetch(DASHBOARD_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      console.warn(`[Dashboard] Failed to increment count: ${response.status} ${response.statusText}`);
    } else {
      console.log('[Dashboard] Successfully incremented generation count');
    }
  } catch (error) {
    console.error('[Dashboard] Error calling increment API:', error);
  }
};

export interface GenerationResult {
  image: string;
  prompt: string;
}

export const generateHistoricalImage = async (
  base64Image: string,
  era: EraData,
  faceData: FaceDetectionResult
): Promise<GenerationResult> => {
  const ai = getAiClient();
  const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

  // 1. Calculate Detailed Subject & Gender Reflection
  let subjectDescription = "";
  const parts = [];
  if (faceData.maleCount > 0) parts.push(`${faceData.maleCount} ${faceData.maleCount > 1 ? 'men' : 'man'}`);
  if (faceData.femaleCount > 0) parts.push(`${faceData.femaleCount} ${faceData.femaleCount > 1 ? 'women' : 'woman'}`);
  if (faceData.childCount > 0) parts.push(`${faceData.childCount} ${faceData.childCount > 1 ? 'children' : 'child'}`);

  if (parts.length === 0) {
    subjectDescription = faceData.totalPeople > 1 ? `a group of ${faceData.totalPeople} people` : "a person";
  } else if (faceData.totalPeople === 1) {
    subjectDescription = parts[0];
  } else {
    subjectDescription = "a group of " + parts.join(', ').replace(/, ([^,]*)$/, ' and $1');
  }

  // 2. Select Wardrobe per subject type for variety with anti-consecutive repetition
  const clothingParts: string[] = [];

  if (faceData.maleCount > 0) {
    let maleIndex;
    do {
      maleIndex = Math.floor(Math.random() * MALE_WARDROBE_STYLES.length);
    } while (maleIndex === lastMaleWardrobeIndex && MALE_WARDROBE_STYLES.length > 1);
    lastMaleWardrobeIndex = maleIndex;
    clothingParts.push(`the ${faceData.maleCount > 1 ? 'men' : 'man'} MUST ONLY wear ${MALE_WARDROBE_STYLES[maleIndex]}`);
  }

  if (faceData.femaleCount > 0) {
    let femaleIndex;
    do {
      femaleIndex = Math.floor(Math.random() * FEMALE_WARDROBE_STYLES.length);
    } while (femaleIndex === lastFemaleWardrobeIndex && FEMALE_WARDROBE_STYLES.length > 1);
    lastFemaleWardrobeIndex = femaleIndex;
    clothingParts.push(`the ${faceData.femaleCount > 1 ? 'women' : 'woman'} MUST ONLY wear ${FEMALE_WARDROBE_STYLES[femaleIndex]}`);
  }

  if (faceData.childCount > 0) {
    clothingParts.push(`the ${faceData.childCount > 1 ? 'children' : 'child'} MUST ONLY wear a modern, custom Chuck E. Cheese t-shirt (deep purple body, vibrant green sleeve bands, and a green collar, with a large, iconic yellow-green 'C' logo in the center) and classic blue jeans`);
  }
  const clothingDescription = clothingParts.join(", ");

  // 3. Select Lighting Variant
  const randomLighting = LIGHTING_STYLES[Math.floor(Math.random() * LIGHTING_STYLES.length)];

  // 4. Construct Unified Prompt
  // 4. Construct Unified Prompt
  const prompt = `Create an ultra-high detail, professional, premium cinematic 3D CGI group portrait. The absolute primary focus and dominant subject of the entire image MUST be ${subjectDescription} standing happily shoulder-to-shoulder with 2-3 iconic Chuck E. Cheese characters, formatted as an intimate, close-up friendly group photo.

  CORE PORTRAIT COMPOSITION (MAIN FOCUS):
  - COMPOSITION: A tight, intimate, mid-shot close-up group portrait where the human subject and the characters stand extremely close as best friends. The characters must dominate the frame, occupying approximately 70% of the visual space, framing the human subject who is the central focus.
  - POSES & INTERACTION: Chuck E. Cheese (the grey mouse) stands on the left, smiling happily with a hand resting friendly on the user's shoulder or standing right beside him. Helen Henny stands immediately behind him, beautifully framing him. Mr. Munch stands on the right foreground/shoulder-to-shoulder, making a friendly thumbs-up or happy gesture.
  - CINEMATIC BOKEH FRAMING: The entire background environment must be rendered in a deep, beautiful, artistic photographic soft-focus blur (dreamy background depth of field / bokeh). The background elements must serve strictly as secondary scenic framing so that the hyper-detailed characters and human subject POP in sharp, high-fidelity, crystal-clear focus.

  SCENIC BACKGROUND BLEND (SOFT-FOCUS FRAME):
  - BACKGROUND SCENE: ${era.name}. ${era.promptInstructions}. ${era.description}.
  - US FLAG & ZIPLINE: The United States (US) flag and the metallic zipline arcing overhead should be beautifully integrated into the background, gently softened by the photographic bokeh blur.
  - SKY & GROUND: A seamless horizontal transition from the warm golden sunset Giza plateau on the left to the deep blue night Manhattan skyline on the right. The stone pavement ground is wet, dark, and glossy, reflecting the colorful sky lighting, sunset, and fireworks.

  CHARACTERS & SUBJECTS STYLE (PIXAR 3D CGI REALISM):
  - CHUCK E. CHEESE MASCOTS (CRITICAL BRAND LOCK): You MUST include the three official characters (Chuck E. Cheese, Helen Henny, Mr. Munch). They MUST be rendered as high-fidelity, cinematic 3D CGI animated feature-film characters (Pixar, Disney, or Unreal Engine 5 level path-traced renders) with realistic, hyper-detailed organic shaders and micro-textures.
    * Chuck E. Cheese: Ultra-fine, short grey fur made of millions of individually-rendered hair strands that catch the light, large glossy green glass eyes with deep iris patterns, realistic whiskers, and a friendly smile. Wears a detailed purple fabric crewneck shirt with green trim and a yellow-green "C" logo.
    * Helen Henny: Covered in layered, soft, highly-detailed realistic yellow feathers with visible individual feather shafts and fine barbules. Short orange beak with organic matte texture, stylish blonde feathered hair tied with a purple bow, and expressive blue eyes. Wears a high-quality purple dress.
    * Mr. Munch: Covered in long, shaggy, fluffy purple fur with realistic organic clumping. Big bulbous yellow nose with a soft-touch matte texture, large glossy green-yellow eyes, and an open happy mouth. Wears an orange fabric t-shirt with a green "M" logo.
  - CLOTHING & TRANSFORMATION: You MUST ABSOLUTELY ERASE and DISCARD all original clothing from the source image. COMPLETELY REPLACE the subjects' outfits. Every human subject MUST ONLY wear: ${clothingDescription} and blue jeans. Ensure clothing fabric shows a distinct, high-resolution woven PBR textile pattern, detailed stitching on seams, and natural physical folds.
  - CRITICAL IDENTITY LOCK: Maintain the EXACT facial features, bone structure, and skin tone of ALL persons in the reference image. NO facial morphing or alterations allowed. Each person's face must be human, photorealistic, and 100% identical to the source, perfectly integrated into the volumetric lighting of the scene.

  LIGHTING & ATMOSPHERE:
  - LIGHTING STYLE: ${randomLighting}
  - DRAMATIC DUAL-LIGHTING: A warm, intense golden sunset hour light from the left side of the scene casts brilliant amber and gold rim highlights across the left side of the user's hair and the left side of all characters' fur, feathers, and clothes. Cool deep blue twilight and colorful firework explosions from the right cast beautiful blue, purple, and multi-colored rim highlights across their right sides.
  - MAGICAL LIGHT PATH: A thin, glowing magenta and purple neon energy trail arcing overhead casts a soft ambient glow down onto their hair, shoulders, and heads.

  ${IDENTITY_PRESERVATION_GUIDE}

  MANDATORY NEGATIVE RULES (DO NOT GENERATE):
  * no cheap foam mascot costume, no cosplay, no humans in animal suits, no theme park actors, no physical mascot performers
  * no flat cartoon, no 2D illustration, no anime style, no cel shading, no low-poly rendering, no plastic-like skin, no vinyl skin
  * no altered facial structure, no distorted anatomy, no hairstyle changes, no warped eyes
  * no characters riding the zipline`;

  console.log("------------------- GENERATED PROMPT -------------------");
  console.log(prompt);
  console.log("--------------------------------------------------------");

  // Using raw object structure to bypass potential TS mismatches with the SDK
  const safetySettings: any[] = [
    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
    { category: 'HARM_CATEGORY_CIVIC_INTEGRITY', threshold: 'BLOCK_NONE' }
  ];

  const requestConfig: any = {
    temperature: 0.5,
    // @ts-ignore
    imageConfig: {
      aspectRatio: "2:3",
      resolution: '1K'
    },
    safetySettings: safetySettings
  };

  try {
    // 4. Send to Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      config: requestConfig,
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: cleanBase64
              }
            },
            { text: prompt }
          ]
        }
      ]
    });

    // Extract image from response
    const candidate = response.candidates?.[0];
    if (candidate) {
      if (candidate.finishReason !== 'STOP') {
        console.warn('Gemini Generation Warning: Finish Reason:', candidate.finishReason);
      }

      for (const part of candidate.content?.parts || []) {
        if (part.inlineData) {
          // Increment dashboard count after successful generation
          incrementGeneratedCount();

          return {
            image: `data:image/jpeg;base64,${part.inlineData.data}`,
            prompt: prompt
          };
        }
      }
    }

    console.error('Gemini No Image Generated. Response:', JSON.stringify(response, null, 2));
    throw new Error("No image generated");
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};
