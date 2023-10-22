export type ANIMATE_SPEED = undefined | false | 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
export type ROUNDED = 'sm' | 'md' | 'lg' | 'xl' | 'full' | false | undefined
export type SHADOW = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | undefined
export type PRELOAD = 'hover' | 'tap' | undefined
export type TABLE_ROW = object | (object | string | string[])[] | undefined
export type BUTTON_SIZE = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0
export type INPUT_VARIANT = 'filled' | 'bordered' | 'flat'

export type SITE = {
  siteName          : string,
  slogan            ?: string,
  description       : string,
  keywords          ?: string,
  logoPath          ?: string,
  imgPath           ?: string,
  siteSchema        ?: string,
  businessSchema    ?: string,
  lang              ?: string,
  fbAppID           ?: string,
  pageType          ?: string,
  twitterCardType   ?: string,
  twitterID         ?: string,
  twitterCreatorID  ?: string,
  video             ?: string,
  gtmCode           ?: string
}

export type CORE = {
  isRounded   : boolean,
  toggleTheme : boolean | 'system',
  animate     : ANIMATE_SPEED,
  reset       : boolean,
}

export type TABLE_CONFIG = {
  animate?: ANIMATE_SPEED,  // true
  border?: 'x' | 'y' | 'both' | 'none',  // 'y'
  borderColor?: string,  // 'border-gray-200/80 dark:border-gray-800/80'
  hover?: boolean | string,  // false
  reset?: boolean,  // false
  space?: 'compact' | 'default' | 'comfortable',
  stripe?: boolean | string,  // false
  containerClass?: string,
  trClass?: string,
}