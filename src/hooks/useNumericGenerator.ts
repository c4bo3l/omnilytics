export const useNumericGenerator = () => {
  const multiplier = [1, 10, 100, 1000, 10000, 100000];

  const getRandomIntInRange = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomInteger = (length?: number) => {
    const selectedMultiplier = length ? Math.pow(10, length) : 
      multiplier[getRandomIntInRange(0, multiplier.length - 1)];
    const result = Math.random() * selectedMultiplier;
    return Math.ceil(result);
  };

  const generateIntegerStr = (length?: number) => {
    return getRandomInteger(length).toString();
  };

  const generateFloatStr = (length?: number) => {
    const selectedMultiplier = length ? Math.pow(10, length) : 
      multiplier[getRandomIntInRange(0, multiplier.length - 1)];
    const result = Math.random() * selectedMultiplier;
    return result;
  };

  const generateNumericStr = (length?: number) => {
    const selector = getRandomIntInRange(0, 1000) % 2;
    if (selector === 0) {
      return generateIntegerStr(length);
    }
    return generateFloatStr(length);
  };

  return {
    getRandomIntInRange,
    getRandomInteger,
    generateIntegerStr,
    generateFloatStr,
    generateNumericStr
  };
};
