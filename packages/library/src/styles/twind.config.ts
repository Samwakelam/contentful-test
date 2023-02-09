import { colours } from '@sam/theme';
import { content } from '@twind/content';
import { Configuration } from 'twind';

export const themeConfig: Configuration = {
  plugins: { content },
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    spacing: {
      0: '0',
      2: '0.125rem',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      80: '5rem',
      88: '5.5rem',
      96: '6rem',
      112: '7rem',
      144: '9rem',
      208: '13rem',
      304: '19rem',
      544: '34rem',
    },
    extend: {
      colors: {
        ...colours,
      },
      boxShadow: {
        card: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        drawer: '0px 4px 15px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  preflight: false,
  // preflight: (preflight: any) =>
  //   css({
  //     ...preflight,
  //     globalStyles,
  //   }),
};
