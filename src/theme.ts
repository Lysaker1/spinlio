import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  components: {
    Button: {
      styles: {
        root: {
          background: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.4)',
          },
        },
      },
    },
  },
};