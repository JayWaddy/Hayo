import { dictionary } from "../../data/data";

interface Word {
  eng: string;
  plc: string;
  pro: string;
  pos: string;
}

const checkForCharacterCase = (englishWord: string): boolean[] => {
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

const checkForPrefixes = (englishWord: string): string => {
  return englishWord;
};

const checkForSuffixes = (englishWord: string): string => {
  return englishWord;
};

const createPlancoWord = (plancoWord: string, englishWord: string): string => {
  let casedPlanco = "";

  plancoWord.split("").forEach((character: string, index: number): void => {
    if (checkForCharacterCase(englishWord)[index]) {
      casedPlanco += character.toUpperCase();
      return;
    }

    casedPlanco += character;
  });

  return casedPlanco;
};

const convertCompoundWords = (englishWord: string, word: Word): void => {
  // 1. Check if word contains sub strings that are in dictionary
  // 2. Compare string to dictionary/find matches ?
  // 3. Split match from string & compare remaining string to dictionary/find matches
  // 4. Add string to output
};

export const convertEngToPlc = (englishString: string): string => {
  let plancoString = "";

  englishString.split(/(\W+)/).forEach((englishWord: string): void => {
    const foundEntry = dictionary.find((word: Word) => {
      return word.eng.toLowerCase() === englishWord.toLowerCase();
    });

    if (foundEntry) {
      plancoString += createPlancoWord(foundEntry.plc, englishWord);
      return;
    }

    plancoString += englishWord;
  });

  return plancoString;
};
