import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";
import { AuthProvider } from "../hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

// Define custom colors for better dark mode support
const primaryColors: MantineColorsTuple = [
  "#e8f2ff",
  "#d1e6ff",
  "#a8d0ff",
  "#7ab5ff",
  "#4c99ff",
  "#187420",
  "#145f1a",
  "#104a14",
  "#0c350e",
  "#082008",
];

const secondaryColors: MantineColorsTuple = [
  "#fff8e1",
  "#fff1c4",
  "#ffe394",
  "#ffd654",
  "#ffca28",
  "#fcac0f",
  "#e89900",
  "#d48806",
  "#c07600",
  "#ad6600",
];

const accentColors: MantineColorsTuple = [
  "#e8f4f8",
  "#d1e9f0",
  "#a3d3e1",
  "#75bdd2",
  "#4b7d90",
  "#093569",
  "#072a54",
  "#051f3f",
  "#04142a",
  "#020915",
];

const theme = createTheme({
  primaryColor: "primary",
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
    accent: accentColors,
  },
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: inter.style.fontFamily,
  },
  // Better dark mode support
  autoContrast: true,
  luminanceThreshold: 0.3,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <title>Afterschola Kursus</title>
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Notifications />
          <AuthProvider>{children}</AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
