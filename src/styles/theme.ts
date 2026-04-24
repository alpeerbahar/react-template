export const lightTheme = {
  colors: {
    brandPrimary: "#00A994",
    brandSecondary: "#00483C",

    backgroundMain: "#F8F8F8",
    backgroundSurface: "#EEE",
    backgroundElevated: "#DEDEDE",
    backgroundInverse: "#0B0B0B",

    textPrimary: "#0B0B0B",
    textSecondary: "#3A3A3A",
    textMuted: "#717171",
    textInverse: "#0B0B0B",

    actionDefault: "#00A994",
    actionHover: "#008A76",
    actionActive: "#007A68",
    actionSecondary: "#DEDEDE",
    actionSecondaryHover: "#CECECE",

    borderSubtle: "#EEE",
    borderDefault: "#CECECE",
    borderHover: "#AEAEAE",
    borderFocus: "#00A994",

    selectedSurface: "#D9E9E5",
    selectedBorder: "#00A994",
    selectedText: "#00483C",

    statusSuccess: "#006A20",
    statusSuccessText: "#002D02",
    statusWarning: "#905300",
    statusWarningText: "#592F00",
    statusError: "#A9000C",
    statusErrorText: "#620000",
    statusInfo: "#0056A4",
    statusInfoText: "#002E5D",

    statusSuccessSurface: "#006A2026",
    statusWarningSurface: "#90530026",
    statusErrorSurface: "#A9000C26",
    statusInfoSurface: "#0056A426",

    actionDisabled: "#E4E4E4",
    textDisabled: "#8F8F8F",
    borderDisabled: "#D7D7D7",

    backgroundOverlay: "#F8F8F8CC",
    ringFocus: "#00A99433",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme = {
  colors: {
    brandPrimary: "#00A994",
    brandSecondary: "#39ECD0",

    backgroundMain: "#121212",
    backgroundSurface: "#1B1B1B",
    backgroundElevated: "#292929",
    backgroundInverse: "#F8F8F8",

    textPrimary: "#F8F8F8",
    textSecondary: "#CECECE",
    textMuted: "#8F8F8F",
    textInverse: "#0B0B0B",

    actionDefault: "#00A994",
    actionHover: "#008A76",
    actionActive: "#007A68",
    actionSecondary: "#292929",
    actionSecondaryHover: "#353535",

    borderSubtle: "#1B1B1B",
    borderDefault: "#3A3A3A",
    borderHover: "#555",
    borderFocus: "#00A994",

    selectedSurface: "#182522",
    selectedBorder: "#00A994",
    selectedText: "#39ECD0",

    statusSuccess: "#5DC879",
    statusSuccessText: "#AEF1BB",
    statusWarning: "#E99B2A",
    statusWarningText: "#F8C384",
    statusError: "#F14D4C",
    statusErrorText: "#FFB3AB",
    statusInfo: "#4BA3F7",
    statusInfoText: "#9CD3FF",

    statusSuccessSurface: "#5DC87926",
    statusWarningSurface: "#E99B2A26",
    statusErrorSurface: "#F14D4C26",
    statusInfoSurface: "#4BA3F726",

    actionDisabled: "#222",
    textDisabled: "#555",
    borderDisabled: "#2E2E2E",

    backgroundOverlay: "#121212CC",
    ringFocus: "#00A99433",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.2)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
  },
};

export type ThemeType = typeof lightTheme;
