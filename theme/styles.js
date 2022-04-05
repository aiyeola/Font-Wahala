// Global style overrides
const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      fontSmoothing: "antialiased",
    },
    // ".active": {
    //   color: "brand.primary",
    // },

    /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
    ".js-focus-visible :focus:not([data-focus-visible-added])": {
      outline: "none",
      boxShadow: "none",
    },
  },
};

export default styles;
