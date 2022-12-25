/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { getInputStyles, getInputContainerStyles, getRootStyles } from '../input/styled-components.js';
// $FlowFixMe https://github.com/facebook/flow/issues/7745
export const StyledTextAreaRoot = styled('div', props => {
  return getRootStyles({ ...props,
    $hasIconTrailing: false
  });
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

StyledTextAreaRoot.displayName = "StyledTextAreaRoot";
export const StyledTextareaContainer = styled('div', props => ({ ...getInputContainerStyles(props)
})); // $FlowFixMe https://github.com/facebook/flow/issues/7745

StyledTextareaContainer.displayName = "StyledTextareaContainer";
export const StyledTextarea = styled('textarea', props => ({ ...getInputStyles(props),
  resize: 'none'
}));
StyledTextarea.displayName = "StyledTextarea";