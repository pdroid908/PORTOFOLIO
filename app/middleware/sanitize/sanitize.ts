import validator from "validator";
import sanitizeHtml from "sanitize-html";
import he from "he";
export const runtime = 'edge'

const MAX_LENGTH = 5000;

export function sanitizeText(input: unknown): string {
  if (typeof input !== "string") {
    return "";
  }

  let text = input;

  // 1. Batasi panjang input
  text = text.slice(0, MAX_LENGTH);

  // 2. Normalisasi Unicode
  text = text.normalize("NFKC");

  // 3. Hilangkan NULL byte
  text = text.replace(/\0/g, "");

  // 4. Hilangkan karakter kontrol
  text = text.replace(/[\p{Cc}\p{Cf}]/gu, "");

  // 5. Decode HTML Entity
  text = he.decode(text);

  // 6. Hilangkan seluruh HTML
  text = sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  });

  // 7. Rapikan spasi
  text = validator.trim(text);
  text = text.replace(/\s+/g, " ");

  return text;
}