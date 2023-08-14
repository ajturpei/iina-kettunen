export const numericSize = {
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
}

export const size = {
  tablet: `${numericSize.tablet}px`,
  laptop: `${numericSize.laptop}px`,
  laptopL: `${numericSize.laptopL}px`,
}

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
}
