/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { SortableHeadCellFactory } from '../table/index.js';
import { StyledHeadCell } from './styled-components.js';
export var SortableHeadCell = SortableHeadCellFactory(StyledHeadCell);