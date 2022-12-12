// Pad number with leading zeroes up to 3 digits if value is lesser than 100. e.g. value 99 will return 099 to imitate
// national pokedex numbers
export const nationalDex = (number) => {
  let str = '' + number;
  while (str.length < 3) {
    str = '0' + str;
  }

  return str;
};

export const typeOptions = [
  { name: 'Normal', bgColor: '#d9d9d9', textColor: '#505050' },
  { name: 'Grass', bgColor: '#a5ff8f', textColor: '#197902' },
  { name: 'Fighting', bgColor: '#ffd089', textColor: '#cf830e' },
  { name: 'Flying', bgColor: '#cde5ff', textColor: '#5fa3ea' },
  { name: 'Poison', bgColor: '#dc99ff', textColor: '#640795' },
  { name: 'Ground', bgColor: '#92400e', textColor: '#fec166' },
  { name: 'Rock', bgColor: '#f9f3d0', textColor: '#92874b' },
  { name: 'Bug', bgColor: '#f5fd90', textColor: '#838d09' },
  { name: 'Ghost', bgColor: '#d6b3d3', textColor: '#4e1649' },
  { name: 'Steel', bgColor: '#cce4f5', textColor: '#32739f' },
  { name: 'Fire', bgColor: '#ffad8c', textColor: '#c03800' },
  { name: 'Water', bgColor: '#95ccff', textColor: '#08579e' },
  { name: 'Electric', bgColor: '#fcdf65', textColor: '#f28b00' },
  { name: 'Psychic', bgColor: '#f7bdcd', textColor: '#bd5270' },
  { name: 'Ice', bgColor: '#c8f5ff', textColor: '#05b0d7' },
  { name: 'Dark', bgColor: '#d6c7ca', textColor: '#341C21' },
  { name: 'Fairy', bgColor: '#fad1f7', textColor: '#c147b7' },
];

// react-select options
export const options = [
  { value: 'Normal', label: 'Normal' },
  { value: 'Grass', label: 'Grass' },
  { value: 'Fighting', label: 'Fighting' },
  { value: 'Flying', label: 'Flying' },
  { value: 'Poison', label: 'Poison' },
  { value: 'Ground', label: 'Ground' },
  { value: 'Rock', label: 'Rock' },
  { value: 'Bug', label: 'Bug' },
  { value: 'Ghost', label: 'Ghost' },
  { value: 'Steel', label: 'Steel' },
  { value: 'Fire', label: 'Fire' },
  { value: 'Water', label: 'Water' },
  { value: 'Electric', label: 'Electric' },
  { value: 'Psychic', label: 'Psychic' },
  { value: 'Ice', label: 'Ice' },
  { value: 'Dark', label: 'Dark' },
  { value: 'Fairy', label: 'Fairy' },
];

/* 
  Converts from an array of items to an array of objects with the names of "value" and "label" in order to allow react-select
  default value to work properly as it does not accept just an array of items

  e.g. ['Fighting', 'Normal'] -> [{ value: 'Fighting', label: 'Fighting'}, { value: 'Normal', label: 'Normal}]
*/
export const selectDefaultValue = (items) => {
  return items.map((item) => ({
    value: item,
    label: item,
  }));
};

// react-select input styles
export const colorStyles = {
  option: (styles, { isFocused }) => ({
    ...styles,
    color: 'var(--text-black)',
    backgroundColor: isFocused && 'null',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'var(--brand-300)',
    },
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: '5px',
    backgroundColor: 'var(--text-input)',
    border: 'none',
    color: '#fff',
    padding: '0.3rem .5rem',
    boxShadow: 'none',
    outline: 'none',
  }),
  input: (styles) => ({
    ...styles,
    color: '#fff',
  }),
  menuList: (styles) => ({
    ...styles,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: '.24rem',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    cursor: 'pointer',
    color: '#fff',
    ':hover': {
      color: 'var(--brand-300)',
    },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    cursor: 'pointer',
    color: '#fff',
    ':hover': {
      color: 'var(--brand-300)',
    },
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: 'grey',
    padding: '.0 .5rem',
    borderRadius: '5px',
    color: '#fff',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#fff',
    cursor: 'pointer',
    ':hover': {
      color: '#fff',
    },
  }),
};
