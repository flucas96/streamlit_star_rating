function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { styled } from '../styles/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { initFocusVisible } from '../utils/focusVisible.js';
const StyledAppContainer = styled('div', {});
StyledAppContainer.displayName = "StyledAppContainer";
const StyledLayersContainer = styled('div', {});
StyledLayersContainer.displayName = "StyledLayersContainer";

function defaultEventHandlerFn() {
  if (process.env.NODE_ENV !== "production") {
    console.warn('`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information');
  }
}

export const LayersContext = /*#__PURE__*/React.createContext({
  addEscapeHandler: defaultEventHandlerFn,
  removeEscapeHandler: defaultEventHandlerFn,
  addDocClickHandler: defaultEventHandlerFn,
  removeDocClickHandler: defaultEventHandlerFn,
  host: undefined,
  zIndex: undefined
});
export const Provider = LayersContext.Provider;
export const Consumer = LayersContext.Consumer;
export default class LayersManager extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "host", /*#__PURE__*/React.createRef());

    _defineProperty(this, "containerRef", /*#__PURE__*/React.createRef());

    _defineProperty(this, "onDocumentClick", event => {
      const docClickHandler = this.state.docClickHandlers[this.state.docClickHandlers.length - 1];

      if (docClickHandler) {
        docClickHandler(event);
      }
    });

    _defineProperty(this, "onKeyUp", event => {
      if (event.key === 'Escape') {
        const escapeKeyHandler = this.state.escapeKeyHandlers[this.state.escapeKeyHandlers.length - 1];

        if (escapeKeyHandler) {
          escapeKeyHandler();
        }
      }
    });

    _defineProperty(this, "onAddEscapeHandler", escapeKeyHandler => {
      this.setState(prev => {
        return {
          escapeKeyHandlers: [...prev.escapeKeyHandlers, escapeKeyHandler]
        };
      });
    });

    _defineProperty(this, "onRemoveEscapeHandler", escapeKeyHandler => {
      this.setState(prev => {
        return {
          escapeKeyHandlers: prev.escapeKeyHandlers.filter(handler => handler !== escapeKeyHandler)
        };
      });
    });

    _defineProperty(this, "onAddDocClickHandler", docClickHandler => {
      this.setState(prev => {
        return {
          docClickHandlers: [...prev.docClickHandlers, docClickHandler]
        };
      });
    });

    _defineProperty(this, "onRemoveDocClickHandler", docClickHandler => {
      this.setState(prev => {
        return {
          docClickHandlers: prev.docClickHandlers.filter(handler => handler !== docClickHandler)
        };
      });
    });

    this.state = {
      escapeKeyHandlers: [],
      docClickHandlers: []
    };
  }

  componentDidMount() {
    this.forceUpdate();
    initFocusVisible(this.containerRef.current);

    if (typeof document !== 'undefined') {
      document.addEventListener('keyup', this.onKeyUp); // using mousedown event so that callback runs before events on children inside of the layer

      document.addEventListener('mousedown', this.onDocumentClick);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keyup', this.onKeyUp);
      document.removeEventListener('mousedown', this.onDocumentClick);
    }
  }

  render() {
    const {
      overrides = {}
    } = this.props;
    const [AppContainer, appContainerProps] = getOverrides(overrides.AppContainer, StyledAppContainer);
    const [LayersContainer, layersContainerProps] = getOverrides(overrides.LayersContainer, StyledLayersContainer);
    return /*#__PURE__*/React.createElement(Consumer, null, ({
      host
    }) => {
      if (process.env.NODE_ENV !== "production") {
        if (host !== undefined) {
          // eslint-disable-next-line no-console
          console.warn('There is a LayersManager already exists in your application. It is not recommended to have more than one LayersManager in an application.');
        }
      }

      return /*#__PURE__*/React.createElement(Provider, {
        value: {
          host: host || this.host.current,
          zIndex: this.props.zIndex,
          addEscapeHandler: this.onAddEscapeHandler,
          removeEscapeHandler: this.onRemoveEscapeHandler,
          addDocClickHandler: this.onAddDocClickHandler,
          removeDocClickHandler: this.onRemoveDocClickHandler
        }
      }, /*#__PURE__*/React.createElement(AppContainer, _extends({}, appContainerProps, {
        ref: this.containerRef
      }), this.props.children), /*#__PURE__*/React.createElement(LayersContainer, _extends({}, layersContainerProps, {
        ref: this.host
      })));
    });
  }

}