import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import daisyui from 'daisyui'

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: ['node_modules', '.git', 'excluded', 'dist', 'windi.config.{ts,js}', 'tailwind.config.{ts,js}'],
  },
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin, daisyui],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
})