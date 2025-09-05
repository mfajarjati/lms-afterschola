export const theme = {
  colors: {
    // Brand utama: biru keabu (#F8F6F0 → #1E386A)
    primary: {
      50: "#F8F6F0", // paling terang (dari list)
      100: "#EEF1F6",
      200: "#D3D8E2", // dari list
      300: "#AEB9CC",
      400: "#7988A6", // dari list
      500: "#627495",
      600: "#4B6087", // dari list
      700: "#3C4E77",
      800: "#2B406E",
      900: "#1E386A", // dari list (paling gelap)
    },

    // Aksen Kuning: turunan dari #F6D457
    secondary: {
      50: "#FFF9E6",
      100: "#FEF2CC",
      200: "#FCE8A3",
      300: "#F9DD75",
      400: "#F7D754",
      500: "#F6D457", // kuning brand
      600: "#E0BF49",
      700: "#C8A83B",
      800: "#A98C2E",
      900: "#876D22",
    },

    // Aksen Biru (kontras): berdasarkan #1E3769 + #DDECF9
    accent: {
      50: "#DDECF9", // very light
      100: "#C9DDF3",
      200: "#9DBDE3",
      300: "#739ECC",
      400: "#4E7FB0",
      500: "#2E5F93",
      600: "#234B7B",
      700: "#1E3769", // dari list
      800: "#172B52",
      900: "#0F1E39",
    },

    // Netral/abu: dari #EFF1F4 → #1F2121
    gray: {
      50: "#F7F8FA",
      100: "#EFF1F4", // dari list
      200: "#E3E6EA",
      300: "#CBD1D9",
      400: "#9DA4AE",
      500: "#707780",
      600: "#4E545B",
      700: "#36393D",
      800: "#26282A",
      900: "#1F2121", // dari list
    },
  },

  // Gradien disesuaikan ke brand baru
  gradients: {
    primary: "linear-gradient(135deg, #D3D8E2 0%, #1E386A 100%)",
    secondary: "linear-gradient(135deg, #F6D457 0%, #1E3769 100%)",
    accent: "linear-gradient(135deg, #1E3769 0%, #4B6087 50%, #F6D457 100%)",
  },

  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // Balik urutan gray buat dark mode (tetap pakai skala abu yang baru)
    gray: {
      50: "#1F2121",
      100: "#26282A",
      200: "#36393D",
      300: "#4E545B",
      400: "#707780",
      500: "#9DA4AE",
      600: "#CBD1D9",
      700: "#E3E6EA",
      800: "#EFF1F4",
      900: "#F7F8FA",
    },
  },
};
