interface ThemeObject {
  "--background": string;
  "--foreground": string;

  "--muted": string;
  "--muted-foreground": string;

  "--popover": string;
  "--popover-foreground": string;

  "--card": string;
  "--card-foreground": string;

  "--border": string;
  "--input": string;

  "--primary": string;
  "--primary-foreground": string;

  "--secondary": string;
  "--secondary-foreground": string;

  "--accent": string;
  "--accent-foreground": string;

  "--destructive": string;
  "--destructive-foreground": string;

  "--ring": string;

  "--radius": string;
}

export interface Theme {
  light: ThemeObject;
  dark: ThemeObject;
}

export const themes: Record<string, Theme> = {
  default: {
    light: {
      "--background": "0 0% 100%",
      "--foreground": "240 10% 3.9%",

      "--muted": " 240 4.8% 95.9%",
      "--muted-foreground": "240 3.8% 46.1%",

      "--popover": "0 0% 100%",
      "--popover-foreground": "240 10% 3.9%",

      "--card": "0 0% 100%",
      "--card-foreground": "240 10% 3.9%",

      "--border": "240 5.9% 90%",
      "--input": "240 5.9% 90%",

      "--primary": "240 5.9% 10%",
      "--primary-foreground": "0 0% 98%",

      "--secondary": "240 4.8% 95.9%",
      "--secondary-foreground": "240 5.9% 10%",

      "--accent": "240 4.8% 95.9%",
      "--accent-foreground": "240 5.9% 10%",

      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",

      "--ring": "240 5% 64.9%",

      "--radius": "0.5rem",
    },

    dark: {
      "--background": "240 10% 3.9%",
      "--foreground": "0 0% 98%",

      "--muted": "240 3.7% 15.9%",
      "--muted-foreground": "240 5% 64.9%",

      "--popover": "240 10% 3.9%",
      "--popover-foreground": "0 0% 98%",

      "--card": "240 10% 3.9%",
      "--card-foreground": "0 0% 98%",

      "--border": "240 3.7% 15.9%",
      "--input": "240 3.7% 15.9%",

      "--primary": "0 0% 98%",
      "--primary-foreground": "240 5.9% 10%",

      "--secondary": "240 3.7% 15.9%",
      "--secondary-foreground": "0 0% 98%",

      "--accent": "240 3.7% 15.9%",
      "--accent-foreground": "0 0% 98%",

      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "0 85.7% 97.3%",

      "--ring": "240 3.7% 15.9%",
      "--radius": "0.5rem",
    },
  },
  twitter: {
    light: {
      "--background": "240 0% 100%",
      "--foreground": "240 10% 3.9%",

      "--muted": " 240 4.8% 95.9%",
      "--muted-foreground": "240 3.8% 46.1%",

      "--popover": "0 0% 100%",
      "--popover-foreground": "240 10% 3.9%",

      "--card": "240 0% 100%",
      "--card-foreground": "240 10% 3.9%",

      "--border": "240 5.9% 90%",
      "--input": "240 5.9% 90%",

      "--primary": "204.17 87.55% 52.75%",
      "--primary-foreground": "0 0% 100%",

      "--secondary": "240 10% 3.9%",
      "--secondary-foreground": "240 0% 100%",

      "--accent": "240 4.8% 95.9%",
      "--accent-foreground": "240 5.9% 10%",

      "--destructive": "0 84.2% 60.2%",
      "--destructive-foreground": "0 0% 98%",

      "--ring": "240 5% 64.9%",

      "--radius": "1.5rem",
    },

    dark: {
      "--background": "240 10% 3.9%",
      "--foreground": "0 0% 98%",

      "--muted": "240 3.7% 15.9%",
      "--muted-foreground": "240 5% 64.9%",

      "--popover": "240 10% 3.9%",
      "--popover-foreground": "0 0% 98%",

      "--card": "240 10% 3.9%",
      "--card-foreground": "0 0% 98%",

      "--border": "240 3.7% 15.9%",
      "--input": "240 3.7% 15.9%",

      "--primary": "204.17 87.55% 52.75%",
      "--primary-foreground": "0 0% 100%",

      "--secondary": "240 0% 100%",
      "--secondary-foreground": "240 10% 3.9%",

      "--accent": "240 3.7% 15.9%",
      "--accent-foreground": "0 0% 98%",

      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "0 85.7% 97.3%",

      "--ring": "240 3.7% 15.9%",
      "--radius": "1.5rem",
    },
  },
} as const;

export const generateCss = (theme: (typeof themes)[keyof typeof themes]) => {
  const light = theme.light;
  const dark = theme.dark;

  const css = `.light {\n${Object.entries(light)
    .map(([key, value]) => `\t${key}: ${value};`)
    .join("\n")}\n}\n\n.dark {\n${Object.entries(dark)
    .map(([key, value]) => `\t ${key}: ${value};`)
    .join("\n")}\n}`;

  return css;
};

export const twToHSLA = (val: string) => {
  return `hsla(${val.replaceAll(" ", ", ")}, 1)`;
};

