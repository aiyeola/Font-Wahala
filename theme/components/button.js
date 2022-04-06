export const buttonStyle = {
  // style object for base or default style
  baseStyle: {
    rounded: "15px",

    fontWeight: "600",
    _focus: {
      outline: 0,
      ring: "none",
    },
    _active: {
      outline: 0,
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: {
      w: "full",
      h: "66px",
    },
    xs: {
      px: "16px",
      py: "7px",
      fontSize: "15px",
    },
    icon: {
      w: "54px",
      h: "54px",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "app.primary",
      color: "white",
      _hover: {
        bg: "#81007Edd",
      },
      borderRadius: "15px",
    },
    sec: {
      bg: "#81007E33",
      color: "app.primary",
      _hover: {
        bg: "#81007E40",
      },
    },

    outline: {
      bg: "#00000000",
      color: "app.primary",
      borderWidth: "2px",
      borderColor: "app.primary",
      _hover: {
        bg: "#00000000",
        borderColor: "app.primary_hover",
        color: "app.primary_hover",
      },
    },
    red: {
      bg: "#00000000",
      color: "#DE0159",
      borderWidth: "2px",
      borderColor: "#DE015980",
      _hover: {
        bg: "#DE015922",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
    size: "lg",
  },
};
