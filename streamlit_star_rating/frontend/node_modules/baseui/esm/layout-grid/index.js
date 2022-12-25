/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { StyledGrid, StyledCell } from './styled-components.js';
import Grid from './grid.js';
import Cell from './cell.js';
import DeprecatedHOC from '../utils/deprecated-component.js';
export { StyledGrid, StyledCell, Grid, Cell };
export * from './constants.js';
var componentName = 'Layout Grid (baseui/layout-grid)';
export var Unstable_StyledGrid = DeprecatedHOC(StyledGrid, componentName);
export var Unstable_StyledCell = DeprecatedHOC(StyledCell, componentName);
export var Unstable_Grid = DeprecatedHOC(Grid, componentName);
export var Unstable_Cell = DeprecatedHOC(Cell, componentName);