// @ts-check
import starlightPlugin from "@astrojs/starlight-tailwind";

const gray = {
	100: "#f6f6f6",
	200: "#eeeeee",
	300: "#c2c2c2",
	400: "#8b8b8b",
	500: "#585858",
	700: "#383838",
	800: "#272727",
	900: "#181818",
};

const cl1 = {
	white: "#fff",
	black: "#000",
	red: {
		0: "#3c0501",
		1: "#5a0801",
		2: "#780a02",
		3: "#970d02",
		4: "#b20f03",
		5: "#e81403",
		6: "#fc574a",
		7: "#fe9f97",
		8: "#feccc8",
		9: "#ffefee",
	},
	orange: {
		0: "#361a02",
		1: "#482303",
		2: "#592b04",
		3: "#763905",
		4: "#8d4406",
		5: "#c05d08",
		6: "#ee730a",
		7: "#f8a054",
		8: "#fbcda5",
		9: "#fef1e6",
	},
	gold: {
		0: "#361a02",
		1: "#3e2d00",
		2: "#4c3700",
		3: "#644900",
		4: "#735400",
		5: "#a77a00",
		6: "#dda100",
		7: "#ffce4b",
		8: "#ffeab2",
		9: "#fff8e4",
	},
	green: {
		0: "#0a2614",
		1: "#0e381d",
		2: "#104122",
		3: "#15562d",
		4: "#196535",
		5: "#228b49",
		6: "#2db35e",
		7: "#55d584",
		8: "#a8e9c0",
		9: "#e3f8eb",
	},
	cyan: {
		0: "#061b20",
		1: "#0b333e",
		2: "#0d3e4b",
		3: "#115061",
		4: "#156074",
		5: "#1e89a5",
		6: "#30b6da",
		7: "#73cee6",
		8: "#ace2f0",
		9: "#e9f7fb",
	},
	blue: {
		0: "#001c43",
		1: "#002b67",
		2: "#003681",
		3: "#0045a6",
		4: "#0051c3",
		5: "#086fff",
		6: "#4693ff",
		7: "#82b6ff",
		8: "#b9d6ff",
		9: "#ecf4ff",
	},
	indigo: {
		0: "#170f58",
		1: "#221785",
		2: "#2c1ea9",
		3: "#3524cd",
		4: "#4b3bdc",
		5: "#7366e4",
		6: "#9d94ec",
		7: "#c2bdf3",
		8: "#dfdcf9",
		9: "#f1f0fc",
	},
	violet: {
		0: "#350b42",
		1: "#490f5c",
		2: "#5f1477",
		3: "#741892",
		4: "#8d1eb1",
		5: "#b73cdf",
		6: "#cf7ee9",
		7: "#dfa8f1",
		8: "#ebcaf6",
		9: "#f7eafb",
	},
	pink: {
		0: "#2d0210",
		1: "#4e031c",
		2: "#6a0426",
		3: "#8d0633",
		4: "#af0740",
		5: "#e80954",
		6: "#f85189",
		7: "#fb97b9",
		8: "#fdc9db",
		9: "#fef1f5",
	},
	gray: {
		0: "#1d1d1d",
		1: "#313131",
		2: "#3d3d3d",
		3: "#4a4a4a",
		4: "#595959",
		5: "#797979",
		6: "#999999",
		7: "#b6b6b6",
		8: "#d9d9d9",
		9: "#f2f2f2",
	},
	brand: {
		orange: "#f6821f",
	},
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: "var(--sl-color-white)",
				},
				accent: {
					DEFAULT: "var(--sl-color-accent)",
					high: "var(--tw-accent-200)",
					200: "var(--tw-accent-200)",
					600: "var(--tw-accent-600)",
					900: "var(--tw-accent-900)",
				},
				sl: {
					DEFAULT: "var(--sl-color-text)",
				},
				gray,
				cl1,
			},
		},
	},
	plugins: [starlightPlugin()],
};
