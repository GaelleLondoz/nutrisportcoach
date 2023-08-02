import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metaTitle = "" } = $$props;
  let { metaDescription = "" } = $$props;
  if ($$props.metaTitle === void 0 && $$bindings.metaTitle && metaTitle !== void 0)
    $$bindings.metaTitle(metaTitle);
  if ($$props.metaDescription === void 0 && $$bindings.metaDescription && metaDescription !== void 0)
    $$bindings.metaDescription(metaDescription);
  return `${$$result.head += `<!-- HEAD_svelte-nygp0t_START -->${$$result.title = `<title>${escape(metaTitle)}</title>`, ""}<meta name="description"${add_attribute("content", metaDescription, 0)}><!-- HEAD_svelte-nygp0t_END -->`, ""}`;
});
export {
  Head as H
};
