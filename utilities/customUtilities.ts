const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, theme }: any) {
  addUtilities({
    // === FLEX UTILITIES ===
    ".flex-center": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".flex-between": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ".flex-start": {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    },

    // === BUTTONS ===
    ".cart-btn": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "9999px",
      backgroundColor: theme("colors.dark.100"),
    },

    ".text-primary": {
      color: theme("colors.primary.DEFAULT"),
    },

    ".cart-badge": {
      position: "absolute",
      top: "-8px",
      right: "-4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      borderRadius: "9999px",
      backgroundColor: theme("colors.primary"),
    },

    ".cart-item": {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "16px",
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "12px",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
    },

    ".cart-item__image": {
      width: "96px",
      height: "96px",
      backgroundColor: theme("colors.primary.DEFAULT") + "1A", // 10% opacity
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ".cart-item__actions": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      backgroundColor: theme("colors.primary.DEFAULT") + "1A",
      borderRadius: "6px",
    },

    ".custom-btn": {
      backgroundColor: theme("colors.primary.DEFAULT"),
      borderRadius: "9999px",
      padding: "12px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },

    ".custom-header": {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "40px",
    },

    ".label": {
      fontSize: "16px",
      textAlign: "left",
      width: "100%",
      fontFamily: "quicksand-medium",
      color: theme("colors.gray.500"),
      paddingLeft: "8px",
    },

    ".input": {
      borderRadius: "8px",
      padding: "12px",
      width: "100%",
      fontSize: "16px",
      fontFamily: "quicksand-semibold",
      color: theme("colors.dark.100"),
      borderBottomWidth: 1,
      lineHeight: "20px",
    },

    ".filter": {
      paddingHorizontal: "24px",
      paddingVertical: "12px",
      borderRadius: "9999px",
      marginRight: "8px",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },

    ".menu-card": {
      position: "relative",
      paddingTop: "96px",
      paddingBottom: "36px",
      paddingLeft: "14px",
      paddingRight: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: "white",
      borderRadius: "24px",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
    },

    ".profile-field": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: "16px",
    },

    ".profile-field__icon": {
      width: "48px",
      height: "48px",
      borderRadius: "9999px",
      backgroundColor: theme("colors.primary.DEFAULT") + "1A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "12px",
    },

    ".searchbar": {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: "white",
      borderRadius: "9999px",
      fontFamily: "quicksand-medium",
      color: theme("colors.dark.100"),
      gap: "20px",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 1,
    },

    ".tab-icon": {
      display: "flex",
      minWidth: "80px",
      minHeight: "100%",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
      marginTop: "48px",
    },

    ".offer-card": {
      width: "100%",
      height: "192px",
      marginTop: "12px",
      marginBottom: "12px",
      borderRadius: "12px",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },

    ".offer-card__info": {
      flex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "16px",
    },

    ".profile-avatar": {
      position: "relative",
      width: "112px",
      height: "112px",
      borderWidth: 2,
      borderColor: "white",
      borderRadius: "9999px",
    },

    ".profile-edit": {
      position: "absolute",
      bottom: "8px",
      right: "0",
      backgroundColor: theme("colors.primary.DEFAULT"),
      borderWidth: 2,
      borderColor: "white",
      width: "28px",
      height: "28px",
      padding: "8px",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // === TYPOGRAPHY ===
    ".h1-bold": {
      fontSize: "30px",
      fontFamily: "quicksand-bold",
    },
    ".h3-bold": {
      fontSize: "20px",
      fontFamily: "quicksand-bold",
    },
    ".base-bold": {
      fontSize: "18px",
      fontFamily: "quicksand-bold",
    },
    ".base-semibold": {
      fontSize: "18px",
      fontFamily: "quicksand-semibold",
    },
    ".base-regular": {
      fontSize: "18px",
      fontFamily: "quicksand",
    },
    ".paragraph-bold": {
      fontSize: "16px",
      fontFamily: "quicksand-bold",
    },
    ".paragraph-semibold": {
      fontSize: "16px",
      fontFamily: "quicksand-semibold",
    },
    ".paragraph-medium": {
      fontSize: "16px",
      fontFamily: "quicksand-medium",
    },
    ".body-medium": {
      fontSize: "14px",
      fontFamily: "quicksand-medium",
    },
    ".body-regular": {
      fontSize: "14px",
      fontFamily: "quicksand",
    },
    ".small-bold": {
      fontSize: "12px",
      fontFamily: "quicksand-bold",
    },
  });
});
