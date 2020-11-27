export const THEME_NINEBARC = "ninebarcTheme"
export const THEME_DARK = "darkTheme"

const sharedTheme = {
  fontNormal: "20px",
  fontXL: "25px",
  fontXXL: "60px",
}

export const ninebarcTheme = {
  ...sharedTheme,
  body: "#fff",
  text: "#000",
  border: "#000",
  background: "#409469",
  backgroundHover: "#01723a",
  backgroundLight: "#E0EAE3",
  backgroundText: "#fff",
}

export const darkTheme = {
  ...sharedTheme,
  body: "#222222",
  text: "#fff",
  background: "#409469",
  backgroundHover: "#01723a",
  backgroundLight: "#545454",
  border: "#fff",
  backgroundText: "#fff",
}
