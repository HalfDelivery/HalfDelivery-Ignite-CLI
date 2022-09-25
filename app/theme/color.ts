import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.orange,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,

  p: {
    50: "#e8eaf6",
    100: "#c4cae8",
    200: "#9da9d9",
    300: "#7687c9",
    400: "#576dbe",
    500: "#3753b3",
    600: "#314ba9",
    700: "#27419d",
    800: "#1e3791",
    900: "#0E257C",
  },
  s: {
    50: "#FFF3F4",
    100: "#FFE8E9",
    200: "#FFDDDF",
    300: "#FFD5D7",
    400: "#FFCDCF",
    500: "#FFC2C3",
    600: "#FFB6B6",
    700: "#FF9FA1",
    800: "#FF888C",
    900: "#FF7177",
  },
}
