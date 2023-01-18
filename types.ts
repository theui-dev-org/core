export type ANIMATE_SPEED_TYPE  = boolean | 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
export type ROUNDED_TYPE        = 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none'
export type SHADOW_TYPE         = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'

export interface SITE {
  siteName          : string,
  slogan           ?: string,
  description       : string,
  keywords         ?: string,
  logoPath         ?: string,
  imgPath          ?: string,
  siteSchema       ?: string,
  businessSchema   ?: string,
  lang             ?: string,
  fbAppID          ?: string,
  pageType         ?: string,
  twitterCardType  ?: string,
  twitterID        ?: string,
  twitterCreatorID ?: string,
  video            ?: string,
  gtmCode          ?: string,
}

export interface CORE {
  isRounded   : boolean,
  toggleTheme : boolean|'system',
  animate     : ANIMATE_SPEED_TYPE,
  reset       : boolean,
}

export interface ACCORDION_CONFIG_TYPE {
  animate               ?: ANIMATE_SPEED_TYPE,
  containerActiveClass  ?: Object|string,
  containerClass        ?: Object|string,
  contentActiveClass    ?: Object|string,
  contentClass          ?: Object|string,
  gap                   ?: 0|2|4|8|12|16,
  rounded               ?: ROUNDED_TYPE,
  size                  ?: 'compact' | 'default' | 'large',
  titleActiveClass      ?: Object|string,
  titleClass            ?: Object|string,
  variant               ?: 'default' | 'flush',
}

export interface BREADCRUMB_DATA_TYPE {
  active ?: boolean,
  text    : string,
  href   ?: string,
}

export interface BUTTON_CONFIG_TYPE {
  activeClass   ?: boolean|string,
  animate       ?: ANIMATE_SPEED_TYPE,
  class         ?: string,
  outline       ?: boolean,
  rounded       ?: ROUNDED_TYPE,
  shadow        ?: SHADOW_TYPE,
  size          ?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0
}

export interface COLLAPSE_CONFIG_TYPE {
  animate       ?: ANIMATE_SPEED_TYPE,
}

export interface DD_ITEM_CONFIG_TYPE {
  activeClass     ?: string,
  class           ?: string,
  dividerClass    ?: string,
  headerClass     ?: string
}

export interface DD_CONFIG_TYPE {
  animate             ?: ANIMATE_SPEED_TYPE,
  animation           ?: 'slide-left' | 'slide-up' | 'slide-right' | 'slide-down' | 'fade' | 'zoom-in' | 'zoom-out',
  alignEnd            ?: boolean,
  backdrop            ?: boolean,
  closeOnClick        ?: boolean,
  closeOnOutsideClick ?: boolean,
  itemConfig          ?: DD_ITEM_CONFIG_TYPE,
  reset               ?: boolean,
  rounded             ?: ROUNDED_TYPE,
  size                ?: 'sm' | 'md' | 'lg' | 'full' | 'auto',
  standalone          ?: boolean,
}

export interface DD_DATA {
  active     ?: boolean,
  url        ?: string,
  text       ?: string,
  type        : 'link' | 'divider' | 'header',
}

export interface MODAL_CONFIG_TYPE {
  animate         ?: ANIMATE_SPEED_TYPE,
  animation       ?: 'slide-down' | 'slide-up' | 'fade' | 'zoom-in' | 'zoom-out',
  backdrop        ?: boolean,
  bodyClass       ?: string,
  closeBtn        ?: boolean,
  closeOnEsc      ?: boolean,
  contentClass    ?: string,
  position        ?: 'top' | 'center' | 'bottom',
  reset           ?: boolean,
  rounded         ?: ROUNDED_TYPE,
  size            ?: 'sm' | 'md' | 'lg' | 'full',
  staticBackdrop  ?: boolean,
}

export interface NAV_CONFIG_TYPE {
  activeLinkStyle       ?: string,
  animate               ?: ANIMATE_SPEED_TYPE,
  height                ?: 'sm' | 'md' | 'lg' | 'xl',
  linkStyle             ?: string,
  responsive            ?: 'md' | 'lg' | 'xl' | false,
  rounded               ?: ROUNDED_TYPE,
  scrollAmountToShrink  ?: number,
  scrollAmountToHide    ?: number,
  scrollBehavior        ?: 'fixed' | 'default' | 'shrinkOnScrollDown' | 'hideOnScrollDown' | 'shrinkAndHide'
  scrollClass           ?: string,
}

export interface NOTIFY_CONFIG_TYPE {
  class         ?: string,
  removeAfter   ?: number,
  removeOnClick ?: boolean,
  reset         ?: boolean,
  rounded       ?: ROUNDED_TYPE,
  style         ?: 'card'|'flat',
}

export interface OFFCANVAS_CONFIG_TYPE {
  animate         ?: ANIMATE_SPEED_TYPE,
  backdrop        ?: boolean,
  closeOnEsc      ?: boolean,
  position        ?: 'top' | 'right' | 'bottom' | 'left',
  staticBackdrop  ?: boolean,
}

export interface POPUP_CONFIG_TYPE {
  backdrop        ?: boolean,
  backdropClass   ?: string,
  containerClass  ?: string,
  contentClass    ?: string,
  rounded         ?: ROUNDED_TYPE,
  staticBackdrop  ?: boolean
}

export interface PROGRESS_CONFIG_TYPE {
  barClass        ?: string,
  height          ?: 'px' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  rounded         ?: ROUNDED_TYPE,
  roundedProgress ?: ROUNDED_TYPE,
}

export interface TABLE_CONFIG_TYPE {
  border          ?: 'x'|'y'|'both'|'none',
  borderColor     ?: string,
  hover           ?: boolean|string,
  reset           ?: boolean,
  space           ?: 'compact'|'default'|'comfortable',
  stripe          ?: boolean|string,
  containerClass  ?: string,
  theadClass      ?: string,
  tbodyClass      ?: string,
  trClass         ?: string,
}

export interface TAB_CONFIG_TYPE {
  animate         ?: ANIMATE_SPEED_TYPE,
  activeTabClass  ?: object|string,
  reset           ?: boolean,
  rounded         ?: ROUNDED_TYPE,
  shadow          ?: SHADOW_TYPE,
  tabClass        ?: object|string,
}

export interface TOOLTIP_CONFIG_TYPE {
  animate       ?: ANIMATE_SPEED_TYPE,
  animation     ?: 'fade' | 'slide' | 'zoom-in' | 'zoom-out',
  bgColor       ?: string,
  inline        ?: boolean,
  position      ?: 'left' | 'top' | 'right' | 'bottom',
  reset         ?: boolean,
  rounded       ?: ROUNDED_TYPE
}

// FORM CONTROLS AND DATA TYPES
export interface INPUT_CONFIG_TYPE {
  animate         ?: ANIMATE_SPEED_TYPE,
  inputGrow       ?: boolean,
  class           ?: string|object,
  labelStyle      ?: string,
  rounded         ?: ROUNDED_TYPE,
  size            ?: 'none' | 'sm' | 'md' | 'lg' | 'xl',
  variant         ?: 'filled' | 'bordered' | 'flat',
}

export interface SELECT_DATA_TYPE {
  disabled ?: boolean,
  selected ?: boolean,
  text      : string,
  value    ?: any,
}
