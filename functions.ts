let theui =  {
  randomNum : (min: number = 10, max: number = 99): number => {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  },

  token : (prefix: string = "id"): string => {
    let n = Date.now()
	  return prefix + (++n).toString(36) + theui.randomNum()
  },

  getKey: (obj: object, key: string): any => {
    return obj[key]||false
  }
}

module.exports = theui