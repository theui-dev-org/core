type ANIMATE_SPEED_TYPE  = 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
type ButtonType          = 'button'| 'reset'| 'submit'
type INPUT_TYPE          = 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'search'| 'tel'| 'text'| 'textarea' | 'time'| 'url' | 'week'
type ROUNDED_TYPE        = 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none'
type SHADOW_TYPE         = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'

type SITE = {
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

type CORE = {
  isRounded             : boolean,
  toggleTheme           : boolean|'system',
  animate               : boolean,
  animateSpeed          : ANIMATE_SPEED_TYPE,
  reset                 : boolean,
}

type ACCORDION_CONFIG_TYPE = {
  animateSpeed          ?: ANIMATE_SPEED_TYPE,
  containerActiveClass  ?: Object|string,
  containerClass        ?: Object|string,
  contentActiveClass    ?: Object|string,
  contentClass          ?: Object|string,
  rounded               ?: ROUNDED_TYPE,
  size                  ?: 'compact' | 'default' | 'large',
  titleActiveClass      ?: Object|string,
  titleClass            ?: Object|string,
  type                  ?: 'default' | 'flush',
}

type BREADCRUMB_DATA_TYPE = {
  active ?: boolean,
  text    : string,
  href    : string,
}

type BUTTON_CONFIG_TYPE = {
  activeClass   ?: boolean|string,
  class         ?: boolean|string,
  outline       ?: boolean,
  rounded       ?: ROUNDED_TYPE,
  shadow        ?: SHADOW_TYPE,
  size          ?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0,
}

type COLLAPSE_CONFIG_TYPE = {
  animateSpeed  ?: ANIMATE_SPEED_TYPE,
}

type DD_ITEM_CONFIG_TYPE = {
  activeClass     ?: string,
  class           ?: string,
  dividerClass    ?: string,
  headerClass     ?: string
}

type DD_CONFIG_TYPE = {
  animateSpeed        ?: ANIMATE_SPEED_TYPE,
  animation           ?: 'slide-left' | 'slide-up' | 'slide-right' | 'slide-down' | 'fade' | 'zoom-in' | 'zoom-out',
  alignRight          ?: boolean,
  backdrop            ?: boolean,
  closeOnClick        ?: boolean,
  closeOnEsc          ?: boolean,
  closeOnOutsideClick ?: boolean,
  itemConfig          ?: DD_ITEM_CONFIG_TYPE,
  rounded             ?: ROUNDED_TYPE,
  size                ?: 'sm' | 'md' | 'lg' | 'full' | 'auto',
  standalone          ?: boolean,
}

type DD_DATA = {
  active     ?: boolean,
  url        ?: string,
  text       ?: string,
  type        : 'link' | 'divider' | 'header',
}

type MODAL_CONFIG_TYPE = {
  animate         ?: boolean,
  animateSpeed    ?: ANIMATE_SPEED_TYPE,
  animation       ?: 'slide-down' | 'slide-up' | 'fade' | 'zoom-in' | 'zoom-out',
  backdrop        ?: boolean,
  bodyClass     ?: string,
  closeBtn        ?: boolean,
  closeOnEsc      ?: boolean,
  contentClass  ?: string,
  position        ?: 'top' | 'center' | 'bottom',
  reset           ?: boolean,
  rounded         ?: ROUNDED_TYPE,
  size            ?: 'sm' | 'md' | 'lg' | 'full',
  staticBackdrop  ?: boolean,
}

type NAV_CONFIG_TYPE = {
  animate               ?: boolean,
  animateSpeed          ?: ANIMATE_SPEED_TYPE,
  class               ?: string,
  height                ?: 'sm' | 'md' | 'lg' | 'xl',
  reset                 ?: boolean,
  rounded               ?: ROUNDED_TYPE,
  scrollAmountToShrink  ?: number,
  scrollAmountToHide    ?: number,
  scrollBehavior        ?: 'fixed' | 'default' | 'shrinkOnScrollDown' | 'hideOnScrollDown' | 'shrinkAndHide'
  scrollClass         ?: string,
}

type NOTIFY_CONFIG_TYPE = {
  class       ?: string,
  removeAfter   ?: number,
  removeOnClick ?: boolean,
  reset         ?: boolean,
  rounded       ?: ROUNDED_TYPE,
  style         ?: 'default'|'flat',
}

type OFFCANVAS_CONFIG_TYPE = {
  animate         ?: boolean,
  animateSpeed    ?: ANIMATE_SPEED_TYPE,
  backdrop        ?: boolean,
  closeOnEsc      ?: boolean,
  position        ?: 'top' | 'right' | 'bottom' | 'left',
  staticBackdrop  ?: boolean,
}

type PROGRESS_CONFIG_TYPE = {
  barClass      ?: string,
  height          ?: 'px' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  rounded         ?: ROUNDED_TYPE,
  roundedProgress ?: ROUNDED_TYPE,
}

type TABLE_CONFIG_TYPE = {
  borderColor       ?: string,
  border            ?: 'x'|'y'|'both'|'none',
  hover             ?: boolean|string,
  reset             ?: boolean,
  size              ?: 'sm'|'md'|'lg',
  stripe            ?: boolean|string,
  containerClass  ?: string,
  tableClass      ?: string,
  theadClass      ?: string,
  tbodyClass      ?: string,
  trClass         ?: string,
}

type TAB_CONFIG_TYPE = {
  activeTabClass  ?: object|string,
  reset             ?: boolean,
  rounded           ?: ROUNDED_TYPE,
  shadow            ?: SHADOW_TYPE,
  tabClass        ?: object|string,
}

type TOOLTIP_CONFIG_TYPE = {
  animate       ?: boolean,
  animateSpeed  ?: ANIMATE_SPEED_TYPE,
  animation     ?: 'fade' | 'slide' | 'zoom-in' | 'zoom-out',
  bgColor       ?: string,
  inline        ?: boolean,
  position      ?: 'left' | 'top' | 'right' | 'bottom',
  reset         ?: boolean,
  rounded       ?: ROUNDED_TYPE
}

// FORM CONTROLS AND DATA TYPES
type INPUT_CONFIG_TYPE = {
  appearance        ?: 'default' | 'flat' | 'material',
  containerClass  ?: string,
  fileBtnClass    ?: string,
  grow              ?: boolean,
  inputClass      ?: string|object,
  inputFocusClass ?: string|object,
  labelStyle        ?: LABEL_STYLE_TYPE,
  marginBottom      ?: 0 | 4 | 8 | 12,
  reset             ?: boolean,
  rounded           ?: ROUNDED_TYPE,
  size              ?: 'none' |'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

type LABEL_STYLE_TYPE = {
  class       ?: string,
  color         ?: string,
  marginBottom  ?: 0 | 2 | 4 | 6,
  textSize      ?: string,
}

type CHECKBOX_RADIO_CONFIG_TYPE = {
  class     ?: string,
  disabled    ?: boolean,
  rounded     ?: ROUNDED_TYPE,
  reset       ?: boolean,
  size        ?: 'md' | 'lg' | 'xl'
}

type SELECT_DATA_TYPE = {
  disabled ?: boolean,
  selected ?: boolean,
  text      : string,
  value    ?: any,
}

export type { SITE, CORE, ANIMATE_SPEED_TYPE, ButtonType, INPUT_TYPE, ROUNDED_TYPE, SHADOW_TYPE,
  ACCORDION_CONFIG_TYPE, BREADCRUMB_DATA_TYPE, BUTTON_CONFIG_TYPE, COLLAPSE_CONFIG_TYPE,
  DD_CONFIG_TYPE, DD_DATA, MODAL_CONFIG_TYPE, NAV_CONFIG_TYPE,
  NOTIFY_CONFIG_TYPE, OFFCANVAS_CONFIG_TYPE, PROGRESS_CONFIG_TYPE, TAB_CONFIG_TYPE,
  TABLE_CONFIG_TYPE, TOOLTIP_CONFIG_TYPE, INPUT_CONFIG_TYPE, LABEL_STYLE_TYPE,
  CHECKBOX_RADIO_CONFIG_TYPE, SELECT_DATA_TYPE}