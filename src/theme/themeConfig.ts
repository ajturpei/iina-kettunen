import {color, spacing} from './.'

export const basic = {
  color,
  spacing,
  text: color.black,
  border: color.black,
  background: color.white,
  invertFilter: '100%',
}

export const lightTheme = {
  ...basic,
  invertFilter: 0,
}

export const brownTheme = {
  ...basic,
  background: color.lightBrown,
  invertFilter: 0,
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
  invertFilter: 0,
}

export const whiteTheme = {
  ...basic,
  background: color.white,
  invertFilter: 0,
}
