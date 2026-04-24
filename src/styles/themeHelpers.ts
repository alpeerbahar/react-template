import type { DefaultTheme } from "styled-components";

export const color =
  (key: keyof DefaultTheme["colors"]) =>
  ({ theme }: { theme?: DefaultTheme }) =>
    theme!.colors[key];

export const shadow =
  (key: keyof DefaultTheme["shadows"]) =>
  ({ theme }: { theme?: DefaultTheme }) =>
    theme!.shadows[key];