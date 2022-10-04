import { addParameters } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '803px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1013px',
    },
  },
  bigTablet: {
    name: 'Big Tablet',
    styles: {
      width: '1024px',
      height: '1013px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '800px',
    },
  },
}
addParameters({
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
})
