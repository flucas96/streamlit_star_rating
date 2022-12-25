"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = exports.isAfter = exports.isBefore = exports.subYears = exports.subMonths = exports.subWeeks = exports.subDays = exports.addYears = exports.addMonths = exports.addWeeks = exports.addDays = exports.getYear = exports.getMonth = exports.getDate = exports.getHours = exports.getMinutes = exports.setYear = exports.setMonth = exports.setHours = exports.setMinutes = exports.setSeconds = exports.applyDateToTime = exports.applyTimeToDate = exports.getEffectiveMaxDate = exports.getEffectiveMinDate = exports.monthDisabledAfter = exports.monthDisabledBefore = exports.isOutOfBounds = exports.isDayDisabled = exports.getQuarterInLocale = exports.getMonthInLocale = exports.getWeekdayInLocale = exports.getWeekdayMinInLocale = exports.isEndOfMonth = exports.isStartOfMonth = exports.isDayInRange = exports.isSameDay = exports.isSameMonth = exports.isSameYear = exports.getEndOfMonth = exports.getStartOfMonth = exports.getEndOfWeek = exports.getStartOfWeek = exports.formatDate = void 0;

var _dateFnsAdapter = _interopRequireDefault(require("./date-fns-adapter"));

var _dateHelpers = _interopRequireDefault(require("./date-helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/extensions */
var defaultDateHelpers = new _dateHelpers.default(_dateFnsAdapter.default);
var wrapDate = _dateFnsAdapter.default.date;
var formatDate = defaultDateHelpers.formatDate;
exports.formatDate = formatDate;
var getStartOfWeek = defaultDateHelpers.getStartOfWeek;
exports.getStartOfWeek = getStartOfWeek;
var getEndOfWeek = defaultDateHelpers.getEndOfWeek;
exports.getEndOfWeek = getEndOfWeek;
var getStartOfMonth = defaultDateHelpers.getStartOfMonth;
exports.getStartOfMonth = getStartOfMonth;
var getEndOfMonth = defaultDateHelpers.getEndOfMonth;
exports.getEndOfMonth = getEndOfMonth;
var isSameYear = defaultDateHelpers.isSameYear;
exports.isSameYear = isSameYear;
var isSameMonth = defaultDateHelpers.isSameMonth;
exports.isSameMonth = isSameMonth;
var isSameDay = defaultDateHelpers.isSameDay;
exports.isSameDay = isSameDay;
var isDayInRange = defaultDateHelpers.isDayInRange;
exports.isDayInRange = isDayInRange;
var isStartOfMonth = defaultDateHelpers.isStartOfMonth;
exports.isStartOfMonth = isStartOfMonth;
var isEndOfMonth = defaultDateHelpers.isEndOfMonth;
exports.isEndOfMonth = isEndOfMonth;
var getWeekdayMinInLocale = defaultDateHelpers.getWeekdayMinInLocale;
exports.getWeekdayMinInLocale = getWeekdayMinInLocale;
var getWeekdayInLocale = defaultDateHelpers.getWeekdayInLocale;
exports.getWeekdayInLocale = getWeekdayInLocale;
var getMonthInLocale = defaultDateHelpers.getMonthInLocale;
exports.getMonthInLocale = getMonthInLocale;
var getQuarterInLocale = defaultDateHelpers.getQuarterInLocale;
exports.getQuarterInLocale = getQuarterInLocale;
var isDayDisabled = defaultDateHelpers.isDayDisabled;
exports.isDayDisabled = isDayDisabled;
var isOutOfBounds = defaultDateHelpers.isOutOfBounds;
exports.isOutOfBounds = isOutOfBounds;
var monthDisabledBefore = defaultDateHelpers.monthDisabledBefore;
exports.monthDisabledBefore = monthDisabledBefore;
var monthDisabledAfter = defaultDateHelpers.monthDisabledAfter;
exports.monthDisabledAfter = monthDisabledAfter;
var getEffectiveMinDate = defaultDateHelpers.getEffectiveMinDate;
exports.getEffectiveMinDate = getEffectiveMinDate;
var getEffectiveMaxDate = defaultDateHelpers.getEffectiveMaxDate;
exports.getEffectiveMaxDate = getEffectiveMaxDate;
var applyTimeToDate = defaultDateHelpers.applyTimeToDate;
exports.applyTimeToDate = applyTimeToDate;
var applyDateToTime = defaultDateHelpers.applyDateToTime;
exports.applyDateToTime = applyDateToTime;

var createDirtySetter = function createDirtySetter(setter) {
  return function (dirtyDate, number) {
    return setter(wrapDate(dirtyDate), number);
  };
};

var createDirtyGetter = function createDirtyGetter(getter) {
  return function (dirtyDate) {
    return getter(wrapDate(dirtyDate));
  };
};

var createDirtyCompare = function createDirtyCompare(compare) {
  return function (fromDirty, toDirty) {
    return compare(wrapDate(fromDirty), wrapDate(toDirty));
  };
}; // ** Re-exported from date-fns **
// these need to be able to accept either number or date
// to maintain parity with the old exports
// ** Date Setters **


var setSeconds = createDirtySetter(defaultDateHelpers.setSeconds);
exports.setSeconds = setSeconds;
var setMinutes = createDirtySetter(defaultDateHelpers.setMinutes);
exports.setMinutes = setMinutes;
var setHours = createDirtySetter(defaultDateHelpers.setHours);
exports.setHours = setHours;
var setMonth = createDirtySetter(defaultDateHelpers.setMonth);
exports.setMonth = setMonth;
var setYear = createDirtySetter(defaultDateHelpers.setYear); // ** Date Getters **

exports.setYear = setYear;
var getMinutes = createDirtyGetter(defaultDateHelpers.getMinutes);
exports.getMinutes = getMinutes;
var getHours = createDirtyGetter(defaultDateHelpers.getHours);
exports.getHours = getHours;
var getDate = createDirtyGetter(defaultDateHelpers.getDate);
exports.getDate = getDate;
var getMonth = createDirtyGetter(defaultDateHelpers.getMonth);
exports.getMonth = getMonth;
var getYear = createDirtyGetter(defaultDateHelpers.getYear); // ** Date Math

exports.getYear = getYear;
var addDays = createDirtySetter(defaultDateHelpers.addDays);
exports.addDays = addDays;
var addWeeks = createDirtySetter(defaultDateHelpers.addWeeks);
exports.addWeeks = addWeeks;
var addMonths = createDirtySetter(defaultDateHelpers.addMonths);
exports.addMonths = addMonths;
var addYears = createDirtySetter(defaultDateHelpers.addYears);
exports.addYears = addYears;
var subDays = createDirtySetter(defaultDateHelpers.subDays);
exports.subDays = subDays;
var subWeeks = createDirtySetter(defaultDateHelpers.subWeeks);
exports.subWeeks = subWeeks;
var subMonths = createDirtySetter(defaultDateHelpers.subMonths);
exports.subMonths = subMonths;
var subYears = createDirtySetter(defaultDateHelpers.subYears); // ** Date Comparison

exports.subYears = subYears;
var isBefore = createDirtyCompare(defaultDateHelpers.isBefore);
exports.isBefore = isBefore;
var isAfter = createDirtyCompare(defaultDateHelpers.isAfter); // eslint-disable-next-line flowtype/no-weak-types

exports.isAfter = isAfter;

var format = function format(date, _format, locale) {
  return defaultDateHelpers.format(date, _format, locale);
};

exports.format = format;