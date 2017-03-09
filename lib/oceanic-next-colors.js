'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var colorValues = {
  colors: {
    cyan: '#5FB3B3',
    blue: '#6699CC',
    purple: '#C594C5',
    pink: '#AB7967',
    red: '#EC5f67',
    orange: '#F99157',
    yellow: '#FAC863',
    green: '#99C794'
  },
  grays: {
    gray0: '#1B2B34',
    gray1: '#343D46',
    gray2: '#4F5B66',
    gray3: '#65737E',
    gray4: '#A7ADBA',
    gray5: '#C0C5CE',
    gray6: '#D8DEE9'
  }
};

exports.default = colorValues;
var uiGroups = exports.uiGroups = _extends({
  userActionNeeded: colorValues.colors.red,
  userCurrentState: colorValues.colors.cyan,
  backgroundShade: colorValues.grays.gray0,
  background: colorValues.grays.gray1,
  foreground: colorValues.grays.gray5
}, colorValues.grays);

var syntaxGroups = exports.syntaxGroups = {
  constant: colorValues.colors.cyan,
  identifier: colorValues.colors.blue,
  statement: colorValues.colors.yellow,
  type: colorValues.colors.green,
  global: colorValues.colors.purple,
  emphasis: colorValues.colors.pink,
  special: colorValues.colors.orange,
  trivial: colorValues.grays.gray4
};

var versionControlGroups = exports.versionControlGroups = {
  added: colorValues.colors.green,
  modified: colorValues.colors.orange,
  removed: colorValues.colors.red,
  renamed: colorValues.colors.blue
};

var ansiGroups = exports.ansiGroups = {
  normal: {
    black: uiGroups.background,
    red: colorValues.colors.red,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.purple,
    cyan: colorValues.colors.cyan,
    white: uiGroups.foreground
  },
  bright: {
    black: colorValues.grays.gray4,
    red: colorValues.colors.orange,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.pink,
    cyan: colorValues.colors.cyan,
    white: colorValues.grays.gray6
  }
};