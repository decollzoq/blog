import '@emotion/react'

export const Color = {
  primary0: '#000000',
  primary1: '#111111',
  primary2: '#FFFFFF',
  gray0: '#dee2e6',
  gray1: '#ced4da',
  gray2: '#adb5bd',
  gray3: '#495057',
  purple1: '#6214aa',
  blue1: '#3184ff',
  blue2: '#224b8f'
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
