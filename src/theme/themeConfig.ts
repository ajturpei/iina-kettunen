import {color, spacing} from './.'

export const basic = {
  color,
  spacing,
  text: color.black,
  border: color.black,
  background: color.white,
}

export const lightTheme = {
  ...basic,
}

export const brownTheme = {
  ...basic,
  background: color.lightBrown,
}

export const darkTheme = {
  ...basic,
  text: color.white,
  border: color.white,
  background: color.black,
}

export const greenTheme = {
  ...basic,
  background: color.lightGreen,
}
