import palette from "./palette";

const colors = {
  background: {
    light: palette.color1.value,
    dark: palette.color2.value,
  },
  text: { light: palette.color2.value, dark: palette.color1.value },
  action: { light: palette.color3.value, dark: palette.color1.value },
  mdScreenMenu: {
    light: palette.color2.value,
    dark: palette.color1.value,
  },
  xsScreenMenu: {
    light: palette.color2.value,
    dark: palette.color2.value,
  },
  cardBackground: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  cardBorder: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  boxBackground: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  avatarBackground: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  carouselActive: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  carouselInactive: {
    light: palette.color3.value + "80",
    dark: palette.color3.value + "80",
  },
  buttonHover: {
    light: palette.color2.value,
    dark: palette.color1.value,
  },
  buttonHoverText: {
    light: palette.color1.value,
    dark: palette.color2.value,
  },
  containedButton: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  containedButtonText: {
    light: palette.color1.value,
    dark: palette.color1.value,
  },
  outlinedButton: {
    light: palette.color3.value + "80",
    dark: palette.color1.value + "80",
  },
  outlinedButtonText: {
    light: palette.color3.value,
    dark: palette.color1.value,
  },
  outlinedButtonHover: {
    light: palette.color2.value,
    dark: palette.color1.value,
  },
  outlinedButtonBorderHover: {
    light: palette.color3.value,
    dark: palette.color3.value,
  },
  outlinedButtonHoverText: {
    light: palette.color1.value,
    dark: palette.color2.value,
  },
  sendButton: {
    light: palette.color1.value,
    dark: palette.color1.value,
  },
  sendButtonText: {
    light: palette.color2.value,
    dark: palette.color2.value,
  },
  circularProgress: {
    light: palette.color2.value,
    dark: palette.color2.value,
  },
  textField: {
    light: palette.color1.value,
    dark: palette.color1.value,
  },
};

export default colors;
