import { useState } from "react";
import { useAlphaNumericGenerator } from "./useAlphaNumericGenerator";
import { useNumericGenerator } from "./useNumericGenerator";

export const useGenerateRandomObjects = (fileSize?: number) => {
  const { generateString } = useAlphaNumericGenerator();
  const { generateNumericStr, getRandomIntInRange } = useNumericGenerator();

  const defaultFileSize = 1024 * 1024 * 2; // 2 Megabytes
  const [requiredSize] = useState(fileSize || defaultFileSize)
  const threshold: number = 512;

  const generateData = () => {
    let content = '';

    while (content.length < requiredSize) {
      const requiredCharacters = requiredSize - content.length;
      if (requiredCharacters <= threshold) {
        content = `${content},${generateString(requiredCharacters)}`;
      }
      let addedContent = '';
      if (getRandomIntInRange(0, 1000) % 2) {
        addedContent = generateString();
      } else {
        addedContent = generateNumericStr();
      }
      content = `${content.length > 0 ? `${content},` : ''}${addedContent}`;
    }
    return content;
  }

  const generateFile = () => {
    const content = generateData();
    if (!content || content.length <= 0) {
      return undefined;
    }

    const blob = new Blob([content], {
      type: 'text/plain'
    });

    return {
      url: window.URL.createObjectURL(blob),
      content
    };
  };

  return {
    generateFile
  };
};
