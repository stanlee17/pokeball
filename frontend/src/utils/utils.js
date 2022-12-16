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
  { name: 'Normal', color: '#d9d9d9' },
  { name: 'Grass', color: '#a5ff8f' },
  { name: 'Fighting', color: '#ffd089' },
  { name: 'Flying', color: '#cde5ff' },
  { name: 'Poison', color: '#dc99ff' },
  { name: 'Ground', color: '#fec166' },
  { name: 'Rock', color: '#f9f3d0' },
  { name: 'Bug', color: '#f5fd90' },
  { name: 'Ghost', color: '#d6b3d3' },
  { name: 'Steel', color: '#cce4f5' },
  { name: 'Fire', color: '#ffad8c' },
  { name: 'Water', color: '#95ccff' },
  { name: 'Electric', color: '#fcdf65' },
  { name: 'Psychic', color: '#f7bdcd' },
  { name: 'Ice', color: '#c8f5ff' },
  { name: 'Dark', color: '#d6c7ca' },
  { name: 'Fairy', color: '#fad1f7' },
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
