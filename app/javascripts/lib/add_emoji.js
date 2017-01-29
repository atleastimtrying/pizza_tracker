const emoji = {
  cheese:    '🧀',
  tomato:    '🍅',
  pineapple: '🍍',
  ham:       '🐖',
  tuna:      '🐟',
  chicken:   '🐔',
  beef:      '🐄',
  pepper:    '🌶️',
  sausage:   '🌭',
  mushroom:  '🍄',
}

const lookup = (name)=> emoji[name] ? `(${emoji[name]})` : '';

export default (name)=> `${name}${lookup(name)}`
