module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
            'h1, h2, h3, h4': {
              color: '#111827',
              fontWeight: '700',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before, code::after': {
              content: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}