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
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
  purge: {
    enabled: true,
    content: [
      '**/*.css',
      '**/*.html',
    ],
  },
}
