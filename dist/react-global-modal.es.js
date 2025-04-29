var le = Object.defineProperty;
var ie = (o, t, r) => t in o ? le(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var k = (o, t, r) => ie(o, typeof t != "symbol" ? t + "" : t, r);
import re, { forwardRef as te, useEffect as ce, Component as ue } from "react";
var $ = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function de() {
  if (Q) return M;
  Q = 1;
  var o = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, s, i) {
    var u = null;
    if (i !== void 0 && (u = "" + i), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      i = {};
      for (var d in s)
        d !== "key" && (i[d] = s[d]);
    } else i = s;
    return s = i.ref, {
      $$typeof: o,
      type: a,
      key: u,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return M.Fragment = t, M.jsx = r, M.jsxs = r, M;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function fe() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case S:
          return "Profiler";
        case A:
          return "StrictMode";
        case I:
          return "Suspense";
        case F:
          return "SuspenseList";
        case x:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case T:
            return "Portal";
          case C:
            return (e.displayName || "Context") + ".Provider";
          case O:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case W:
            return n = e.displayName || null, n !== null ? n : o(e.type) || "Memo";
          case Y:
            n = e._payload, e = e._init;
            try {
              return o(e(n));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function r(e) {
      try {
        t(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var c = n.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), t(e);
      }
    }
    function a(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var n = o(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (B.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, n) {
      function c() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function p() {
      var e = o(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function E(e, n, c, f, j, g, D, G) {
      return c = g.ref, e = {
        $$typeof: h,
        type: e,
        key: n,
        props: g,
        _owner: j
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, n, c, f, j, g, D, G) {
      var m = n.children;
      if (m !== void 0)
        if (f)
          if (ne(m)) {
            for (f = 0; f < m.length; f++)
              v(m[f]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(m);
      if (B.call(n, "key")) {
        m = o(e);
        var N = Object.keys(n).filter(function(se) {
          return se !== "key";
        });
        f = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", Z[m + f] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          m,
          N,
          m
        ), Z[m + f] = !0);
      }
      if (m = null, c !== void 0 && (r(c), m = "" + c), u(n) && (r(n.key), m = "" + n.key), "key" in n) {
        c = {};
        for (var q in n)
          q !== "key" && (c[q] = n[q]);
      } else c = n;
      return m && d(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), E(
        e,
        m,
        g,
        j,
        s(),
        c,
        D,
        G
      );
    }
    function v(e) {
      typeof e == "object" && e !== null && e.$$typeof === h && e._store && (e._store.validated = 1);
    }
    var R = re, h = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), C = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), L = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, ne = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var V, z = {}, H = R["react-stack-bottom-frame"].bind(
      R,
      i
    )(), X = U(a(i)), Z = {};
    P.Fragment = _, P.jsx = function(e, n, c, f, j) {
      var g = 1e4 > L.recentlyCreatedOwnerStacks++;
      return b(
        e,
        n,
        c,
        !1,
        f,
        j,
        g ? Error("react-stack-top-frame") : H,
        g ? U(a(e)) : X
      );
    }, P.jsxs = function(e, n, c, f, j) {
      var g = 1e4 > L.recentlyCreatedOwnerStacks++;
      return b(
        e,
        n,
        c,
        !0,
        f,
        j,
        g ? Error("react-stack-top-frame") : H,
        g ? U(a(e)) : X
      );
    };
  }()), P;
}
var ee;
function me() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? $.exports = de() : $.exports = fe()), $.exports;
}
var l = me();
function ae(o) {
  var t, r, a = "";
  if (typeof o == "string" || typeof o == "number") a += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var s = o.length;
    for (t = 0; t < s; t++) o[t] && (r = ae(o[t])) && (a && (a += " "), a += r);
  } else for (r in o) o[r] && (a && (a += " "), a += r);
  return a;
}
function y() {
  for (var o, t, r = 0, a = "", s = arguments.length; r < s; r++) (o = arguments[r]) && (t = ae(o)) && (a && (a += " "), a += t);
  return a;
}
const pe = ({ className: o = "", actions: t = [] }) => /* @__PURE__ */ l.jsx("div", { className: `modal-action ${o}`, children: t.map((r, a) => /* @__PURE__ */ l.jsx("button", { className: `btn ${r.className}`, onClick: r.onClick, ...r.props, children: r.title }, a)) }), he = ({
  children: o,
  className: t = "",
  onBackdropClick: r,
  hideCloseIcon: a = !1,
  closeIconComponent: s
}) => /* @__PURE__ */ l.jsxs("div", { className: `modalHeader ${t}`, children: [
  /* @__PURE__ */ l.jsx("div", { className: "modal-header-title", children: o }),
  !a && (s || /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "close-wrapper",
      onClick: () => {
        r && r();
      },
      children: /* @__PURE__ */ l.jsx("div", { className: "icon", children: "x" })
    }
  ))
] }), be = te(
  ({
    children: o,
    open: t,
    className: r = "",
    isCloseable: a = !1,
    title: s = "Modal Header",
    hideHeader: i = !1,
    headerComponent: u,
    headerClassName: d = "",
    actions: p = [],
    actionClassName: E = "",
    contentClassName: b = "",
    onModalClose: v = () => {
    },
    hideCloseIcon: R = !1,
    isSlidePane: h = !1,
    position: T = "right",
    modalSize: _ = "sm",
    isDark: A = !1,
    disableTheme: S = !1,
    footer: O,
    closeIconComponent: C
  }, J) => {
    ce(() => {
      if (!S) {
        const x = document.documentElement.getAttributeNames();
        A && !x.includes("dark") && document.documentElement.setAttribute("data-theme", "dark"), x.includes("dark") && !A && document.documentElement.setAttribute("data-theme", "dark");
      }
    }, [A, S]);
    const I = y("modal", "modal-open", r, {
      dark: A
    }), F = y(
      // 'modal-wrapper',
      {
        "modal-wrapper": !h,
        "slidepane-wrapper": h,
        right: h && T === "right",
        left: h && T === "left"
      }
    ), W = y(
      "modal-body",
      {
        "w-xs": _ === "xs",
        "w-sm": _ === "sm",
        "w-md": _ === "md",
        "w-lg": _ === "lg"
      },
      b
    ), Y = y("modalContent");
    return /* @__PURE__ */ l.jsx(
      "div",
      {
        "aria-hidden": !t,
        "aria-modal": t,
        className: I,
        "dark-them": "light",
        onClick: (x) => {
          x.stopPropagation(), x.target === x.currentTarget && (x.stopPropagation(), v());
        },
        children: /* @__PURE__ */ l.jsx("div", { className: F, children: /* @__PURE__ */ l.jsxs("div", { className: Y, children: [
          /* @__PURE__ */ l.jsx("div", { className: "position", children: i ? !R && /* @__PURE__ */ l.jsx(l.Fragment, { children: C || /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "close-wrapper close",
              onClick: () => {
                a || v();
              },
              children: /* @__PURE__ */ l.jsx("div", { className: "icon", children: "x" })
            }
          ) }) : /* @__PURE__ */ l.jsx(
            he,
            {
              className: d,
              onBackdropClick: v,
              hideCloseIcon: R,
              closeIconComponent: C,
              children: /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
                s ?? null,
                u ?? null
              ] })
            }
          ) }),
          /* @__PURE__ */ l.jsx("div", { className: W, children: o }),
          O && O,
          (p == null ? void 0 : p.length) > 0 && !O && /* @__PURE__ */ l.jsx(pe, { actions: p, className: E })
        ] }) })
      }
    );
  }
), Re = te(
  ({
    isOpen: o,
    component: t,
    props: r,
    isCloseable: a = !1,
    onClose: s = () => {
    },
    closeModal: i = () => {
    },
    width: u,
    customModal: d,
    ...p
  }, E) => {
    const b = () => {
      a || (i(), s());
    };
    return d ? /* @__PURE__ */ l.jsx(
      d,
      {
        open: o || !1,
        width: u,
        onModalClose: b,
        isCloseable: a,
        ...p,
        ref: E,
        children: t && /* @__PURE__ */ l.jsx(t, { ...r, isInModal: !0 })
      }
    ) : /* @__PURE__ */ l.jsx(
      be,
      {
        open: o || !1,
        width: u,
        onModalClose: b,
        ...p,
        ref: E,
        children: t && /* @__PURE__ */ l.jsx(t, { ...r, isInModal: !0 })
      }
    );
  }
);
class xe extends ue {
  constructor() {
    super(...arguments);
    k(this, "state", {
      modals: []
    });
    k(this, "totalIndex", 0);
    k(this, "open", ({ ...r }) => {
      const a = { ...r }, { modals: s } = this.state;
      this.totalIndex++, a.isOpen = !0, a.id = this.totalIndex, a.ref || (a.ref = re.createRef()), s.push({ ...a }), this.setState({ modals: s });
    });
    k(this, "close", (r = this.state.modals.length - 1) => {
      const { modals: a } = this.state;
      setTimeout(() => {
        a.splice(r, 1), this.setState({ modals: a });
      }, 200), a[r] && (a[r].isOpen = !1, this.setState({ modals: a }));
    });
    k(this, "updateModalProps", ({ ...r }, a = this.state.modals.length - 1) => {
      var u, d;
      const { modals: s } = this.state, i = (u = s[a]) == null ? void 0 : u.ref;
      i && ((d = i.current) == null || d.add(r));
    });
    k(this, "closeAll", () => {
      const { modals: r } = this.state;
      r.forEach(() => {
        setTimeout(() => {
          r.splice(r.length - 1, 1), this.setState({ modals: r });
        }, 10), r[r.length - 1] && (r[r.length - 1].isOpen = !1, this.setState({ modals: r }));
      });
    });
  }
  render() {
    const { modals: r } = this.state, { customModal: a } = this.props;
    return r.map((s, i) => /* @__PURE__ */ l.jsx(
      Re,
      {
        closeModal: this.close.bind(this),
        ...s,
        customModal: a
      },
      s.id + "" + i
    ));
  }
}
class w {
  constructor() {
    k(this, "_globalModalRef", null);
  }
  //reference variable
  /**
   * GlobalModal is a class that provides a global modal dialog.
   * It uses a reference to a modal component to control the modal's behavior.
   *
   * @class
   */
  static setUpModal(t) {
    this._globalModalRef = t;
  }
  /**
   * GlobalModal is a class that provides a global modal dialog.
   * It uses a reference to a modal component to control the modal's behavior.
   *
   * @class
   */
  static push({ ...t }) {
    this._globalModalRef && this._globalModalRef.open({ ...t });
  }
  /**
   * Updates the properties of the modal at the specified index.
   *
   * @static
   * @param {object} props - The new properties to apply to the modal.
   * @param {number} modalIndex - The index of the modal to update.
   */
  static add({ props: t, modalIndex: r }) {
    this._globalModalRef && this._globalModalRef.updateModalProps({ ...t }, r);
  }
  /**
   * Closes the modal at the specified index.
   *
   * @static
   * @param {number} [index] - The index of the modal to close. If not specified, the last modal is closed.
   */
  static pop(t) {
    this._globalModalRef && this._globalModalRef.close(t);
  }
  /**
   * Closes all modals.
   *
   * @static
   */
  static closeAll() {
    this._globalModalRef && this._globalModalRef.closeAll();
  }
}
const Te = ({
  cancelLabel: o = "Cancel",
  okayLabel: t = "Confirm",
  message: r = "AsynConfirmation Modal message",
  title: a = "AsyncConfirmation Modal Title",
  isClosable: s = !0,
  confirmationBody: i,
  confirmationClassName: u = "",
  className: d = "",
  actions: p,
  footer: E,
  okyActionProps: b,
  cancelActionProps: v,
  ...R
}) => new Promise((h) => {
  const T = [
    {
      title: t,
      onClick: () => {
        h(!0), w.pop();
      },
      className: "btn-primary",
      ...b
    },
    {
      title: o,
      onClick: () => {
        h(!1), w.pop();
      },
      className: "btn-error",
      ...v
    }
  ];
  w.push({
    component: i ?? Ee,
    actions: p ?? T,
    title: a,
    isCloseable: s,
    hideCloseIcon: !0,
    modalSize: "sm",
    className: d,
    footer: E,
    props: {
      message: r,
      confirmationClassName: u
    },
    ...R
  });
}), Ee = ({
  message: o,
  confirmationClassName: t = ""
}) => {
  const r = y("confirmation", t);
  return /* @__PURE__ */ l.jsx("div", { className: r, children: o });
}, je = ({
  title: o = "Confirmation Modal Title",
  cancelLabel: t = "Cancel",
  message: r = "Confirmation Modal Message",
  okayLabel: a = "Okay",
  onCancel: s = () => {
  },
  onOkay: i = () => {
  },
  isCloseable: u = !0,
  confirmationBody: d,
  confirmationClassName: p = "",
  className: E = "",
  actions: b,
  footer: v,
  okyActionProps: R,
  cancelActionProps: h,
  ...T
}) => {
  const _ = [
    {
      title: a,
      onClick: () => {
        i(), w.pop();
      },
      className: "btn-primary",
      ...R
    },
    {
      title: t,
      onClick: () => {
        s(), w.pop();
      },
      className: "btn-error",
      ...h
    }
  ];
  w.push({
    component: d ?? ve,
    actions: b ?? _,
    title: o,
    isCloseable: u,
    hideCloseIcon: !0,
    modalSize: "sm",
    className: E,
    footer: v,
    props: {
      message: r,
      confirmationClassName: p
    },
    ...T
  });
}, ve = ({ message: o, confirmationClassName: t = "" }) => {
  const r = y("confirmation", t);
  return /* @__PURE__ */ l.jsx("div", { className: r, children: o });
};
export {
  Te as AsyncConfirmationModal,
  je as ConfirmationModal,
  w as GlobalModal,
  Re as GlobalModalComponent,
  xe as GlobalModalWrapper,
  be as ModalComponent
};
