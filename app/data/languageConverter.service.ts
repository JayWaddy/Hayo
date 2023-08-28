import { dictionary } from "./data";

const calcCharacterCase = (englishWord: string): boolean[] => {
  let characterCasses: boolean[] = [];

  englishWord.split("").forEach((character: string): void => {
    const isCharUppercase = character === character.toUpperCase();

    if (isCharUppercase) {
      characterCasses.push(true);
      return;
    }
    characterCasses.push(false);
  });

  return characterCasses;
};

const createPlancoWord = (plancoWord: string, englishWord: string): string => {
  let casedPlanco = "";

  plancoWord.split("").forEach((character: string, index: number): void => {
    if (calcCharacterCase(englishWord)[index]) {
      casedPlanco += character.toUpperCase();
      return;
    }
    casedPlanco += character;
  });

  return casedPlanco;
};

// TODO: Determine plurals, compound words, & tenses
export const convertEngToPlc = (englishString: string): string => {
  let plancoString = "";

  englishString.split(/(\W+)/).forEach((englishWord: string): void => {
    const entryFound = dictionary.find((word) => {
      return word.eng.toLowerCase() === englishWord.toLowerCase();
    });

    if (entryFound) {
      plancoString += createPlancoWord(entryFound.plc, englishWord);
      return;
    }

    plancoString += englishWord;
  });

  return plancoString;
};
