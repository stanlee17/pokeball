// Pad number with leading zeroes up to 3 digits if value is lesser than 100. e.g. value 99 will return 099 to imitate
// national pokedex numbers
export const nationalDex = (number) => {
  let str = '' + number;
  while (str.length < 3) {
    str = '0' + str;
  }

  return str;
};
