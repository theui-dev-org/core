export type ANIMATE_SPEED_TYPE = undefined | false | 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
export type ROUNDED_TYPE = 'sm' | 'md' | 'lg' | 'xl' | 'full' | false | undefined
export type SHADOW_TYPE = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | undefined
export type PRELOAD = 'hover' | 'tap' | undefined
export type TABLE_ROW = object | string[] | (object | string[])[] | null

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
  animate     : ANIMATE_SPEED_TYPE,
  reset       : boolean,
}

export type ACCORDION_CONFIG_TYPE = {
  animate               : ANIMATE_SPEED_TYPE, // fast
  containerClass        : string | undefined, // 'mb-4'
  containerActiveClass  : string | undefined, //'mb-4'
  contentClass          : string | undefined, // classes
  contentActiveClass    : string | undefined, // classes
  gap                   ?: 0 | 2 | 4 | 8 | 12 | 16
  rounded               ?: ROUNDED_TYPE,
  size                  ?: 'compact' | 'default' | 'large',
  titleClass            ?: string | undefined,
  titleActiveClass      ?: string | undefined,
  flush                 ?: boolean
}

export type BREADCRUMB_DATA_TYPE = {
  active  ?: boolean,
  text    : string,
  href    ?: string,
}

export type BUTTON_CONFIG_TYPE = {
  active          ?: true | false, // false
  btnClass        ?: string | undefined,  // 
  btnActiveClass  ?: string | undefined,  // 
  btnHoverClass   ?: string | undefined,  // 
  animate         ?: ANIMATE_SPEED_TYPE, // 
  outline         ?: boolean, // false
  rounded         ?: ROUNDED_TYPE,  // 
  shadow          ?: SHADOW_TYPE, // none
  size            ?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0 // md
}

export type DD_CONFIG_TYPE = {
  animate             ?: ANIMATE_SPEED_TYPE, // 'fast
  animation           ?: 'slide-left' | 'slide-up' | 'slide-right' | 'slide-down' | 'fade' | 'zoom-in' | 'zoom-out',
  alignToEnd          ?: boolean, // false
  backdrop            ?: boolean, // false
  closeOnClick        ?: boolean, // true
  closeOnOutsideClick ?: boolean, // true
  itemConfig          ?: DD_ITEM_CONFIG_TYPE,
  reset               ?: boolean, //false
  rounded             ?: ROUNDED_TYPE, // 
  size                ?: 'sm' | 'md' | 'lg' | 'full' | 'auto', // md
  standalone          ?: boolean, // true
}

export type DD_ITEM_CONFIG_TYPE = {
  activeClass   ?: string,
  class         ?: string,
  dividerClass  ?: string,
  headerClass   ?: string
}

export type DD_DATA = {
  active    ?: boolean,
  url       ?: string,
  text      ?: string,
  type      : 'link' | 'divider' | 'header',
  preload   : PRELOAD
}

export type MODAL_CONFIG_TYPE = {
  animate         : ANIMATE_SPEED_TYPE, // 'fast'
  animation       ?: 'slide-down' | 'slide-up' | 'fade' | 'zoom-in' | 'zoom-out',
  backdrop        : boolean, // true
  bodyClass       : string, // ' '
  closeBtn        : boolean, // true
  closeOnEsc      : boolean, // true
  contentClass    ?: string,
  position        ?: 'top' | 'center' | 'bottom',
  reset           : boolean, // false
  rounded         ?: ROUNDED_TYPE,
  size            ?: 'sm' | 'md' | 'lg' | 'full', // md
  staticBackdrop  : boolean // false
}

export type NAV_CONFIG_TYPE = {
  activeLinkStyle       ?: string, // 'p-3 text-default text-sm'
  animate               ?: ANIMATE_SPEED_TYPE, // fast'
  height                ?: 'sm' | 'md' | 'lg' | 'xl', // 'md'
  navInner              ?: string,
  linkStyle             ?: string, // 'p-3 text-gray-700 dark:text-gray-300 hover:text-default text-sm'
  responsive            ?: 'md' | 'lg' | 'xl' | false, // 'lg'
  rounded               ?: ROUNDED_TYPE, // true
  scrollAmountToShrink  ?: number, // 64
  scrollAmountToHide    ?: number, // 32
  scrollBehavior        ?: 'fixed' | 'default' | 'shrinkOnScrollDown' | 'hideOnScrollDown' | 'shrinkAndHide' // 'shrinkAndHide'
  scrollClass           ?: string, // 'bg-white dark:bg-secondary shadow-black/10 shadow-2xl md:px-4'
}

export type NOTIFY_CONFIG_TYPE = {
  removeAfter   ?: number,
  removeOnClick ?: boolean,
  rounded       : ROUNDED_TYPE,
  variant       : 'card' | 'flat'
}

export type OFFCANVAS_CONFIG_TYPE = {
  animate         ?: ANIMATE_SPEED_TYPE, // 'fast'
  backdrop        ?: boolean, // true
  closeOnEsc      ?: boolean, // true
  position        ?: 'top' | 'right' | 'bottom' | 'left',
  staticBackdrop  ?: boolean // false
}

export type POPUP_CONFIG_TYPE = {
  backdrop        ?: boolean, // true
  backdropClass   ?: string, // 'bg-black/50'
  containerClass  ?: string, // 'flex items-center justify-center'
  contentClass    ?: string, // 'bg-white dark:bg-gray-800 max-w-3xl max-h-screen p-8'
  rounded         ?: ROUNDED_TYPE, // 'xl'
  staticBackdrop  ?: boolean // false
}

export type PROGRESS_CONFIG_TYPE = {
  barClass?: string,
  height          ?: 'px' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  rounded         ?: ROUNDED_TYPE,
  trackClass      ?: string,
  roundedProgress ?: ROUNDED_TYPE,
}

export type TABLE_CONFIG_TYPE = {
  animate         ?: ANIMATE_SPEED_TYPE,  // true
  border          ?: 'x' | 'y' | 'both' | 'none',  // 'y'
  borderColor     ?: string,  // 'border-gray-200/80 dark:border-gray-800/80'
  hover           ?: boolean | string,  // false
  reset           ?: boolean,  // false
  space           ?: 'compact' | 'default' | 'comfortable',
  stripe          ?: boolean | string,  // false
  containerClass  ?: string,
  trClass         ?: string,
}

export type TAB_CONFIG_TYPE = {
  animate         ?: ANIMATE_SPEED_TYPE,  // true
  activeTabClass  ?: object | string, // variant === "pills" ? 'bg-brand text-white' : 'border-0 border-b-2 border-brand text-brand bg-primary'
  reset           ?: boolean,
  rounded         ?: ROUNDED_TYPE,
  shadow          ?: SHADOW_TYPE,
  tabClass        ?: object | string  // variant === "pills" ? 'bg-secondary hover:bg-brand' : 'border-0 border-b-2 border-secondary bg-primary'
}

export type TOOLTIP_CONFIG_TYPE = {
  animate   ?: ANIMATE_SPEED_TYPE,  // 'normal'
  animation ?: 'fade' | 'slide' | 'zoom-in' | 'zoom-out',
  bgColor   ?: string,  // '#1F2937'
  inline    ?: boolean,  // true
  position  ?: 'left' | 'top' | 'right' | 'bottom',
  reset     ?: boolean,  // true
  rounded   ?: ROUNDED_TYPE
}

// FORM CONTROLS AND DATA TYPES

export type INPUT_VARIANT_TYPE = 'filled' | 'bordered' | 'flat'

export type INPUT_CONFIG_TYPE = {
  animate     ?: ANIMATE_SPEED_TYPE,  // ''normal'
  inputGrow   ?: boolean,  // true
  labelStyle  ?: string,  // ''
  reset       ?: boolean,  // false
  rounded     ?: ROUNDED_TYPE,  // 'md'
  size        ?: 'none' | 'sm' | 'md' | 'lg' | 'xl',  // 'md'
  variant     ?: INPUT_VARIANT_TYPE,  // 'bordered'
}

export type SELECT_DATA_TYPE = {
  disabled  ?: boolean,
  selected  ?: boolean,
  text      : string,
  value     ?: any,
}



