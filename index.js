"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadow = exports.roundedFileBtn = exports.rounded = exports.animate = exports.token = exports.randNum = exports.getKey = void 0;
let getKey = (obj, key) => obj[key] || '_NULL_';
exports.getKey = getKey;
let randNum = (min = 10, max = 99) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randNum = randNum;
let token = (prefix = "_id") => {
    let n = Date.now();
    return prefix + (++n).toString(36) + (0, exports.randNum)();
};
exports.token = token;
// ===================================
// Tailwind CSS class getter
// ===================================
let animate = (animate, type = '') => {
    if (type == 'file') {
        return (' ') + (!animate ? 'file:tui-no-animate' : 'file:tui-animate file:transition-all file:ease-in-out ' +
            (animate == 'faster' ? 'file:duration-100' : animate == 'fast' ? 'file:duration-150' :
                animate == 'slow' ? 'file:duration-500' : animate == 'slower' ? 'file:duration-700' : 'file:duration-300'));
    }
    let duration = (' tui-animate ease-in-out ') + (animate == 'faster' ? 'duration-100' : animate == 'fast' ? 'duration-150' :
        animate == 'slow' ? 'duration-500' : animate == 'slower' ? 'duration-700' : 'duration-300');
    if (type == 'color')
        return !animate ? ' tui-no-animate' : (duration + ' transition-colors');
    if (type == 'opacity')
        return !animate ? ' tui-no-animate' : (duration + ' transition-opacity');
    if (type == 'shadow')
        return !animate ? ' tui-no-animate' : (duration + ' transition-shadow');
    if (type == 'transform')
        return !animate ? ' tui-no-animate' : (duration + ' transition-transform');
    return !animate ? ' tui-no-animate' : (duration + ' transition-all');
};
exports.animate = animate;
let rounded = (value, side = 'all') => {
    if (value == 'none' || !value)
        return ' rounded-none';
    if (side == 'top') {
        return value == 'sm' ? ' rounded-t' : value == 'lg' ? ' rounded-t-lg' : (value == 'md' || value === true) ? ' rounded-t-md' :
            value == 'xl' ? ' rounded-t-xl' : value == 'full' ? ' rounded-t-full' : ' ';
    }
    if (side == 'right') {
        return value == 'sm' ? ' rounded-r' : value == 'lg' ? ' rounded-r-lg' : (value == 'md' || value === true) ? ' rounded-r-md' :
            value == 'xl' ? ' rounded-r-xl' : value == 'full' ? ' rounded-r-full' : ' ';
    }
    if (side == 'bottom') {
        return value == 'sm' ? ' rounded-b' : value == 'lg' ? ' rounded-b-lg' : (value == 'md' || value === true) ? ' rounded-b-md' :
            value == 'xl' ? ' rounded-b-xl' : value == 'full' ? ' rounded-b-full' : ' ';
    }
    if (side == 'left') {
        return value == 'sm' ? ' rounded-l' : value == 'lg' ? ' rounded-l-lg' : (value == 'md' || value === true) ? ' rounded-l-md' :
            value == 'xl' ? ' rounded-l-xl' : value == 'full' ? ' rounded-l-full' : ' ';
    }
    if (side == 'all') {
        return value == 'sm' ? ' rounded' : value == 'lg' ? ' rounded-lg' : (value == 'md' || value === true) ? ' rounded-md' :
            value == 'xl' ? ' rounded-xl' : value == 'full' ? ' rounded-full' : ' ';
    }
    return ' ';
};
exports.rounded = rounded;
let roundedFileBtn = (value, side = 'all') => {
    if (value == 'none' || value === false)
        return ' !file:rounded-none';
    if (side == 'top') {
        return value == 'sm' ? ' file:rounded-t' : value == 'lg' ? ' file:rounded-t-lg' : (value == 'md' || value === true) ? ' file:rounded-t-md' :
            value == 'xl' ? ' file:rounded-t-xl' : value == 'full' ? ' file:rounded-t-full' : ' ';
    }
    if (side == 'right') {
        return value == 'sm' ? ' file:rounded-r' : value == 'lg' ? ' file:rounded-r-lg' : (value == 'md' || value === true) ? ' file:rounded-r-md' :
            value == 'xl' ? ' file:rounded-r-xl' : value == 'full' ? ' file:rounded-r-full' : ' ';
    }
    if (side == 'bottom') {
        return value == 'sm' ? ' file:rounded-b' : value == 'lg' ? ' file:rounded-b-lg' : (value == 'md' || value === true) ? ' file:rounded-b-md' :
            value == 'xl' ? ' file:rounded-b-xl' : value == 'full' ? ' file:rounded-b-full' : ' ';
    }
    if (side == 'left') {
        return value == 'sm' ? ' file:rounded-l' : value == 'lg' ? ' file:rounded-l-lg' : (value == 'md' || value === true) ? ' file:rounded-l-md' :
            value == 'xl' ? ' file:rounded-l-xl' : value == 'full' ? ' file:rounded-l-full' : ' ';
    }
    if (side == 'all') {
        return value == 'sm' ? ' file:rounded' : value == 'lg' ? ' file:rounded-lg' : (value == 'md' || value === true) ? ' file:rounded-md' :
            value == 'xl' ? ' file:rounded-xl' : value == 'full' ? ' file:rounded-full' : ' ';
    }
    return ' ';
};
exports.roundedFileBtn = roundedFileBtn;
let shadow = (size) => {
    if (size === 'none')
        return ' shadow-none';
    return (size === 'md') ? ' shadow-md' : (size === 'sm') ? ' shadow-sm' :
        (size === 'lg') ? ' shadow-lg' : (size === 'xl') ? ' shadow-xl' :
            (size === '2xl') ? ' shadow-2xl' : (size === 'inner') ? ' shadow-inner' : ' ';
};
exports.shadow = shadow;
