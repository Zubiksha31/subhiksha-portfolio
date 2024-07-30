/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'green-shade': {
                    '50': '#f3faf8',
                    '100': '#d6f1e6',
                    '200': '#ade2cf',
                    '300': '#7cccb2',
                    '400': '#64b9a0',
                    '500': '#37957b',
                    '600': '#2a7763',
                    '700': '#256051',
                    '800': '#214e43',
                    '900': '#204139',
                    '950': '#0d2621',
                },
            },
            screens: {
                'sm': { 'max': '639px' },
                'md': { 'max': '767px' },
                'lg': { 'max': '1023px' },
                'xl': { 'max': '1279px' },
            },
        },
    },
    plugins: [],
};