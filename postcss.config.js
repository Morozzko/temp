const config = require('./tailwind.config')

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: { config },
    autoprefixer: {},
  },
}
