import { GoogleGenAI, Chat } from "@google/genai";
import { ConfiguratorData } from "../types";

const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction for the Chat Assistant
const CHAT_SYSTEM_INSTRUCTION = `
Jsi virtuální asistent firmy FLACH. Firma sídlí v Litomyšli a specializuje se na:
1. Návrhy a realizace koupelen na klíč (včetně 3D vizualizací).
2. Výstavbu a prodej rodinných domů.
3. Instalatérské práce (voda, plyn, topení) a servis.

Ton komunikace: Přátelský, profesionální, tykání/vykání dle uživatele (defaultně vykat).
Cíle:
- Odpovídat na dotazy ohledně služeb.
- Směrovat uživatele na kontaktní formulář nebo AI konfigurátor koupelny.
- Pokud se uživatel ptá na cenu, uváděj pouze orientační rozpětí a vysvětli, že přesná cena závisí na zaměření.
- Buď stručný a nápomocný.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: CHAT_SYSTEM_INSTRUCTION,
    },
  });
};

export const generateBathroomProposal = async (data: ConfiguratorData): Promise<string> => {
  const prompt = `
    Jako expert na design koupelen z firmy FLACH vytvoř stručný, lákavý koncept návrhu koupelny na základě těchto údajů:
    
    - Typ realizace: ${data.type}
    - Rozměry/Dispozice: ${data.dimensions}
    - Preferovaný styl: ${data.style}
    - Vybavení (vana/sprcha atd.): ${data.features.join(', ')}
    - Rozpočet: ${data.budget}

    Výstup formátuj pomocí Markdown.
    Obsah výstupu:
    1. **Shrnutí vize**: Krátký popis atmosféry a designového směru.
    2. **Doporučené materiály**: Co by se hodilo k vybranému stylu.
    3. **Odhad náročnosti**: Velmi hrubý odhad času realizace.
    4. **Další krok**: Vyzvi uživatele (jménem, pokud je v kontaktu, jinak obecně), aby si domluvil nezávazné zaměření pro přesnou kalkulaci.
    
    Nepiš přesnou cenu, jen potvrď, že se s rozpočtem dá pracovat, nebo upozorni, pokud je nereálný.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Omlouváme se, nepodařilo se vygenerovat návrh. Kontaktujte nás prosím telefonicky.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Došlo k chybě při komunikaci s AI asistentem. Zkuste to prosím později.";
  }
};
