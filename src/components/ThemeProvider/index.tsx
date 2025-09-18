import { GlobalStyles } from './GlobalStyles'

interface Props {
  children: React.ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
