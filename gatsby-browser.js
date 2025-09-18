/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import { ThemeProvider } from './src/components/ThemeProvider'
import { RootLayout } from './src/components/RootLayout'

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>
}

export function wrapPageElement({ element }) {
  return <RootLayout>{element}</RootLayout>
}
