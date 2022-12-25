/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import Column from './column.js';
import { COLUMNS } from './constants.js';

function CustomColumn(options) {
  return Column({
    kind: COLUMNS.CUSTOM,
    ...options
  });
}

export default CustomColumn;