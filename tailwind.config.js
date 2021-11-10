module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: [
      '**/*.css',
      '**/*.html',
    ],
  },
}
