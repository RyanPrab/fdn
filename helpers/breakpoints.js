const breakpoints = {
  '4xs': '280px',
  '3xs': '375px',
  '2xs': '414px',
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '960px',
  xl: '1024px',
  '2xl': '1280px',
  '3xl': '1536px'
};

const mediaQuery = {
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xs: `(max-width: ${breakpoints.xs})`,
  '3xl': `(max-width: ${breakpoints['3xl']})`,
  '2xl': `(max-width: ${breakpoints['2xl']})`,
  '2xs': `(max-width: ${breakpoints['2xs']})`,
  '3xs': `(max-width: ${breakpoints['3xs']})`,
  '4xs': `(max-width: ${breakpoints['4xs']})`,
};

const responsiveBreakpoints = {
  '2xl': '1920px',
  xl: '1280px',
  lg: '1024px',
  md: '960px',
  sm: '768px',
  xs: '640px',
  '2xs': '480px',
  '3xs': '280px'
};

const minWidthQuery = {
  '2xl': `(min-width: ${responsiveBreakpoints['2xl']})`,
  xl: `(min-width: ${responsiveBreakpoints['xl']})`,
  lg: `(min-width: ${responsiveBreakpoints['lg']})`,
  md: `(min-width: ${responsiveBreakpoints['md']})`,
  sm: `(min-width: ${responsiveBreakpoints['sm']})`,
  xs: `(min-width: ${responsiveBreakpoints['xs']})`,
  '2xs': `(min-width: ${responsiveBreakpoints['2xs']})`,
  '3xs': `(min-width: ${responsiveBreakpoints['3xs']})`
};

export default {
  breakpoints,
  mediaQuery,
  minWidthQuery
};
