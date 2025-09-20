import '@emotion/react'

export const Color = {
  primary0: '#000000',
  primary1: '#111111',
  primary2: '#FFFFFF',
  gray100: '#2B2B2B',
  gray200: '#535353',
  gray300: '#7B7B7B',
  gray400: '#A3A3A3',
  gray500: '#CBCBCB',
  gray600: '#F3F3F3',
  blue1: '#0B60FF'
}

export type ColorType = typeof Color
export type AvailableColorType = keyof ColorType

export interface BaseTheme {
  color: ColorType
}

// 개발시 편의를 위해 theme를 선택했을 때 타입 추론이 가능하게끔 emotion Theme 인터페이스에 BaseTheme를 확장
declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
