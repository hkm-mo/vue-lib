import { defineComponent as s, openBlock as l, createElementBlock as o, toDisplayString as i } from "vue";
const m = /* @__PURE__ */ s({
  __name: "MyButton",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e;
    return (a, c) => (l(), o("button", {
      class: "my-lib-btn",
      onClick: c[0] || (c[0] = (u) => n("click"))
    }, i(t.label || "Default Label"), 1));
  }
}), r = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, c] of e)
    n[a] = c;
  return n;
}, h = /* @__PURE__ */ r(m, [["__scopeId", "data-v-fe8ec0a2"]]), _ = ["src", "alt", "width", "height"], g = /* @__PURE__ */ s({
  __name: "MyImage",
  props: {
    src: {},
    alt: {},
    width: { default: "auto" },
    height: { default: "auto" }
  },
  setup(t) {
    return (e, n) => (l(), o("img", {
      src: t.src,
      alt: t.alt,
      width: t.width,
      height: t.height
    }, null, 8, _));
  }
}), d = {
  emits: ["click"],
  props: {
    /**
     * The text to display inside the button.
     *
     * If not provided, the component renders a default label.
     *
     * @type {string}
     * @default 'Default Label'
     */
    label: {
      type: String,
      default: "Default Label"
    }
  }
};
function f(t, e, n, a, c, u) {
  return l(), o("button", {
    class: "my-lib-btn",
    onClick: e[0] || (e[0] = (p) => t.$emit("click"))
  }, i(n.label), 1);
}
const y = /* @__PURE__ */ r(d, [["render", f], ["__scopeId", "data-v-cc8bb1cf"]]);
export {
  h as MyButton,
  g as MyImage,
  y as MyInput
};
