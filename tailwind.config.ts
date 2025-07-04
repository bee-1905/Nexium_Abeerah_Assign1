import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // @ts-expect-error: DaisyUI adds this property dynamically
  daisyui: {
    themes: ["synthwave"],
  },
};

export default config;