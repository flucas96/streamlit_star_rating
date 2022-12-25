function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
export const NestedMenuContext = /*#__PURE__*/React.createContext({
  addMenuToNesting: () => {},
  removeMenuFromNesting: () => {},
  getParentMenu: () => {},
  getChildMenu: () => {},
  mountRef: {
    current: null
  }
});

function isSame(a, b) {
  if (!a || !b) {
    return false;
  }

  return a.isSameNode(b);
}

export default class NestedMenus extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      menus: []
    });

    _defineProperty(this, "mountRef", /*#__PURE__*/React.createRef());

    _defineProperty(this, "addMenuToNesting", ref => {
      // check offsetHeight to determine if component is visible in the dom (0 means hidden)
      // we need to do this so that when we renderAll, the hidden seo-only child-menus don't
      // register themselves which would break the nesting logic
      if (ref.current && ref.current.offsetHeight) {
        this.setState(state => {
          return {
            menus: [...state.menus, ref]
          };
        });
      }
    });

    _defineProperty(this, "removeMenuFromNesting", ref => {
      this.setState(state => {
        const nextMenus = state.menus.filter(r => r.current).filter(r => !isSame(r.current, ref.current));
        return {
          menus: nextMenus
        };
      });
    });

    _defineProperty(this, "findMenuIndexByRef", ref => {
      return this.state.menus.findIndex(r => isSame(r.current, ref.current));
    });

    _defineProperty(this, "getParentMenu", ref => {
      const index = this.findMenuIndexByRef(ref) - 1;
      return this.state.menus[index];
    });

    _defineProperty(this, "getChildMenu", ref => {
      const index = this.findMenuIndexByRef(ref) + 1;
      return this.state.menus[index];
    });
  }

  render() {
    return /*#__PURE__*/React.createElement(NestedMenuContext.Provider, {
      value: {
        addMenuToNesting: this.addMenuToNesting,
        removeMenuFromNesting: this.removeMenuFromNesting,
        getParentMenu: this.getParentMenu,
        getChildMenu: this.getChildMenu,
        mountRef: this.mountRef
      }
    }, /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children, /*#__PURE__*/React.createElement("span", {
      ref: this.mountRef
    })));
  }

}