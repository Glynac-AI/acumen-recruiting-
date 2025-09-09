/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            colors: {
                ph: '#4F6BFF',
                'ph-dark': '#3A56E8',
                'ph-light': '#7B8FFF',
                foreground: '#0A2540',
                background: '#f8fafd',
                'muted-foreground': '#505c6e',
                border: '#e2e8f0',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}