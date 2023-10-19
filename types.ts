export type ANIMATE_SPEED = undefined | false | 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
export type ROUNDED = 'sm' | 'md' | 'lg' | 'xl' | 'full' | false | undefined
export type SHADOW = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | undefined
export type PRELOAD = 'hover' | 'tap' | undefined
export type TABLE_ROW = object | string[] | (object | string[])[] | null
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

export type BREADCRUMB_DATA = {
  active?: boolean,
  text: string,
  href?: string,
}

export type DD_DATA = {
  active    ?: boolean,
  url       ?: string,
  text      ?: string,
  type      : 'link' | 'divider' | 'header',
  preload   : PRELOAD
}

export type NAV_CONFIG = {
  activeLinkStyle       ?: string, // 'p-3 text-default text-sm'
  animate               ?: ANIMATE_SPEED, // fast'
  height                ?: 'sm' | 'md' | 'lg' | 'xl', // 'md'
  navInner              ?: string,
  linkStyle             ?: string, // 'p-3 text-gray-700 dark:text-gray-300 hover:text-default text-sm'
  responsive            ?: 'md' | 'lg' | 'xl' | false, // 'lg'
  rounded               ?: ROUNDED, // true
  scrollAmountToShrink  ?: number, // 64
  scrollAmountToHide    ?: number, // 32
  scrollBehavior        ?: 'fixed' | 'default' | 'shrinkOnScrollDown' | 'hideOnScrollDown' | 'shrinkAndHide' // 'shrinkAndHide'
  scrollClass           ?: string, // 'bg-white dark:bg-secondary shadow-black/10 shadow-2xl md:px-4'
}

export type PAGINATION_DATA = {
  url: string, // true
  active?: boolean, // true
}

export type TABLE_CONFIG = {
  animate         ?: ANIMATE_SPEED,  // true
  border          ?: 'x' | 'y' | 'both' | 'none',  // 'y'
  borderColor     ?: string,  // 'border-gray-200/80 dark:border-gray-800/80'
  hover           ?: boolean | string,  // false
  reset           ?: boolean,  // false
  space           ?: 'compact' | 'default' | 'comfortable',
  stripe          ?: boolean | string,  // false
  containerClass  ?: string,
  trClass         ?: string,
}

export type TAB_CONFIG = {
  animate         ?: ANIMATE_SPEED,  // true
  activeTabClass  ?: object | string, // variant === "pills" ? 'bg-brand text-white' : 'border-0 border-b-2 border-brand text-brand bg-primary'
  reset           ?: boolean,
  rounded         ?: ROUNDED,
  shadow          ?: SHADOW,
  tabClass        ?: object | string  // variant === "pills" ? 'bg-secondary hover:bg-brand' : 'border-0 border-b-2 border-secondary bg-primary'
}

// FORM CONTROLS AND DATA TYPES

export type INPUT_CONFIG = {
  animate     ?: ANIMATE_SPEED,  // ''normal'
  inputGrow   ?: boolean,  // true
  labelStyle  ?: string,  // ''
  reset       ?: boolean,  // false
  rounded     ?: ROUNDED,  // 'md'
  size        ?: 'none' | 'sm' | 'md' | 'lg' | 'xl',  // 'md'
  variant     ?: INPUT_VARIANT,  // 'bordered'
}

export type SELECT_DATA = {
  disabled  ?: boolean,
  selected  ?: boolean,
  text      : string,
  value     ?: any,
}