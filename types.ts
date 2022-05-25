type ANIMATE_SPEED_TYPE  = 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
type ButtonType          = 'button'| 'reset'| 'submit'
type INPUT_TYPE          = 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'search'| 'tel'| 'text'| 'textarea' | 'time'| 'url' | 'week'
type ROUNDED_TYPE        = 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none' | boolean
type SHADOW_TYPE         = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none' | boolean

type CORE = {
  isRounded             : boolean,
  toggleTheme           : boolean|'system',
  animate               : boolean,
  animateSpeed          : ANIMATE_SPEED_TYPE,
  notificationPosition  : 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left',
  reset                 : boolean,
}

type ACCORDION_CONFIG_TYPE = {
  animate           : boolean,
  animateSpeed      : ANIMATE_SPEED_TYPE,
  bodyActiveCls     : string,
  bodyCls           : string,
  cls               : string,
  contentActiveCls  : string,
  contentCls        : string,
  hover             : string,
  reset             : boolean,
  rounded           : ROUNDED_TYPE,
  size              : 'compact' | 'default' | 'large',
  type              : 'default' | 'flat',
  titleActiveCls    : Object|string,
  titleCls          : string,
}

type BREADCRUMB_DATA_TYPE = {
  active ?: boolean,
  text: string,
  href: string,
}

type BUTTON_CONFIG_TYPE = {
  active        : boolean|string,
  animate       : boolean,
  animateSpeed  : ANIMATE_SPEED_TYPE,
  cls           : string,
  hover         : boolean|string,
  outline       : boolean,
  reset         : boolean,
  rounded       : ROUNDED_TYPE,
  shadow        : SHADOW_TYPE,
  size          : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0,
  theme         : string|undefined,
}

type COLLAPSE_CONFIG_TYPE = {
  animate       : boolean,
  animateSpeed  : ANIMATE_SPEED_TYPE,
}

type DD_CONFIG_TYPE = {
  animate             : boolean,
  animateSpeed        : ANIMATE_SPEED_TYPE,
  animation           : 'slide-left' | 'slide-up' | 'slide-right' | 'slide-down' | 'fade' | 'zoom-in' | 'zoom-out',
  alignRight          : boolean,
  backdrop            : boolean,
  block               : boolean,
  closeOnClick        : boolean,
  closeOnEsc          : boolean,
  closeOnOutsideClick : boolean,
  cls                 : string,
  itemConfig          : DD_ITEM_CONFIG_TYPE,
  reset               : boolean,
  rounded             : ROUNDED_TYPE,
  size                : 'sm' | 'md' | 'lg' | 'full' | 'auto',
  standalone          : boolean,
  theme               : string
}

type DD_ITEM_CONFIG_TYPE = {
  active          : boolean,
  activeTheme     : string,
  dividerTheme    : string,
  headerTheme     : string,
  iconAfterSize   : number,
  iconAfterTheme  : string,
  iconBeforeSize  : number,
  iconBeforeTheme : string,
  reset           : boolean,
  theme           : string,
}
type DD_DATA = {
  active ?: boolean,
  divider ?: boolean,
  header ?: boolean,
  name: string,
  href: string,
  iconBefore ?: string,
  iconAfter ?: string,
  text ?: string,
}

type MODAL_CONFIG_TYPE = {
  animate         : boolean,
  animateSpeed    : ANIMATE_SPEED_TYPE,
  animation       : 'slide-down' | 'slide-up' | 'fade' | 'zoom-in' | 'zoom-out',
  backdrop        : boolean,
  closeBtn        : boolean,
  closeOnEsc      : boolean,
  bodyCls         : string,
  position        : 'top' | 'center' | 'bottom',
  reset           : boolean,
  rounded         : ROUNDED_TYPE,
  size            : 'sm' | 'md' | 'lg' | 'full',
  staticBackdrop  : boolean,
  theme           : string,
}

type NAV_CONFIG_TYPE = {
  animate               : boolean,
  animateSpeed          : ANIMATE_SPEED_TYPE,
  cls                   : string,
  height                : 'sm' | 'md' | 'lg' | 'xl',
  reset                 : boolean,
  rounded               : ROUNDED_TYPE,
  scrollAmountToShrink  : number,
  scrollAmountToHide    : number,
  scrollBehavior        : 'fixed' | 'default' | 'shrinkOnScrollDown' | 'hideOnScrollDown' | 'shrinkAndHide'
  theme                 : string,
}

type NOTIFY_CONFIG_TYPE = {
  id          : string,
  position    : 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left',
  removeAfter : number,
  reset       : boolean,
  rounded     : ROUNDED_TYPE,
  style       : string,
  theme       : string|undefined,
}

type OFFCANVAS_CONFIG_TYPE = {
  animate         : boolean,
  animateSpeed    : ANIMATE_SPEED_TYPE,
  backdrop        : boolean,
  closeOnEsc      : boolean,
  cls             : string,
  position        : 'top' | 'right' | 'bottom' | 'left',
  staticBackdrop  : boolean,
  theme           : string,
}

type PROGRESS_CONFIG_TYPE = {
  animate         : boolean,
  animateSpeed    : ANIMATE_SPEED_TYPE,
  height          : 'px' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  reset           : boolean,
  rounded         : ROUNDED_TYPE,
  roundedProgress : ROUNDED_TYPE,
  textTheme       : string,
  trackTheme      : string,
  theme           : string,
}

type TAB_CONFIG_TYPE = {
  activeTabTheme  : object|string,
  animate         : boolean,
  animateSpeed    : ANIMATE_SPEED_TYPE,
  panelTheme      : string,
  reset           : boolean,
  rounded         : ROUNDED_TYPE,
  shadow          : SHADOW_TYPE,
  tabCls          : object|string,
  tabTheme        : object|string,
}

type TOOLTIP_CONFIG_TYPE = {
  animate       : boolean,
  animateSpeed  : ANIMATE_SPEED_TYPE,
  animation     : 'fade' | 'slide' | 'zoom-in' | 'zoom-out',
  reset         : boolean,
  rounded       : ROUNDED_TYPE,
  // theme         : string,
}


// FORM CONTROLS AND DATA TYPES
type INPUT_CONFIG_TYPE = {
  animate       : boolean,
  animateSpeed  : ANIMATE_SPEED_TYPE,
  appearance    : 'default' | 'flat' | 'material',
  containerCls  : string,
  fileBtnCls   ?: string,
  fileBtnTheme ?: string,
  grow          : boolean,
  inputCls      : string|object,
  inputFocusCls : string|object,
  labelStyle    : LABEL_STYLE_TYPE,
  marginBottom  : 0 | 4 | 8 | 12,
  reset         : boolean,
  rounded       : ROUNDED_TYPE,
  size          : 'none' |'xs' | 'sm' | 'md' | 'lg' | 'xl',
  theme         : string,
}

type LABEL_STYLE_TYPE = {
  cls           : string,
  color         : string,
  fontWeight    : string,
  marginBottom  : 0 | 2 | 4 | 6,
  textSize      : string,
  transform     : string,
}

type CHECKBOX_RADIO_CONFIG_TYPE = {
  cls       : string,
  disabled  : boolean,
  rounded   : ROUNDED_TYPE,
  size      : 'md' | 'lg' | 'xl',
  theme     : string,
}

type SELECT_DATA_TYPE = {
  disabled ?: boolean,
  selected ?: boolean,
  text      : string,
  value    ?: any,
}

export type { ANIMATE_SPEED_TYPE, ButtonType, INPUT_TYPE, ROUNDED_TYPE, SHADOW_TYPE, CORE,
  ACCORDION_CONFIG_TYPE, BREADCRUMB_DATA_TYPE, BUTTON_CONFIG_TYPE, COLLAPSE_CONFIG_TYPE,
  DD_CONFIG_TYPE, DD_ITEM_CONFIG_TYPE, DD_DATA, MODAL_CONFIG_TYPE, NAV_CONFIG_TYPE,
  NOTIFY_CONFIG_TYPE, OFFCANVAS_CONFIG_TYPE, PROGRESS_CONFIG_TYPE, TAB_CONFIG_TYPE,
  TOOLTIP_CONFIG_TYPE, INPUT_CONFIG_TYPE, LABEL_STYLE_TYPE, CHECKBOX_RADIO_CONFIG_TYPE,
  SELECT_DATA_TYPE}