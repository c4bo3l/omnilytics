import { useNumericGenerator } from "./useNumericGenerator";

export const useAlphaNumericGenerator = () => {
  const { getRandomIntInRange } = useNumericGenerator();
  
  const alphaNumerics = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const generateAlphaNumeric = (length?: number) => {
    if (!length) {
      length = getRandomIntInRange(5, 100);
    }
    const result: string[] = Array.apply([], Array(length)).map(() => {
      return alphaNumerics.charAt(Math.floor(Math.random() * alphaNumerics.length));
    });
    return result.join('');
  };

  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const generateAlphabets = (length?: number) => {
    if (!length) {
      length = getRandomIntInRange(5, 100);
    }
    const result: string[] = Array.apply([], Array(length)).map(() => {
      return alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    });
    return result.join('');
  };

  const generateString = (length?: number) => {
    const selector = getRandomIntInRange(0, 1000) % 2;
    if (selector === 0) {
      return generateAlphaNumeric(length);
    }
    return generateAlphabets(length);
  };

  return {
    generateAlphaNumeric,
    generateAlphabets,
    generateString
  };
};
