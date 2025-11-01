import { ThemeProvider as BaseThemeProvider } from '@emotion/react'
import { GlobalStyles } from './GlobalStyles'
import { Color } from 'src/models/color'

interface Props {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <BaseThemeProvider
        theme={{
          color: Color
        }}
      >
        {children}
      </BaseThemeProvider>
    </>
  )
}
