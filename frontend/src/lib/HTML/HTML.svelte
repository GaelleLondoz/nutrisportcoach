<script>
  // import sanitizeHtml from "sanitize-html";
  import { OPTIONS } from "./HTML.conf";

  /** The html string you want to render */
  export let text;
  /**
   * Set to true to remove all html tags from the {text}.
   * NB: this is designed to avoid visual degradation in browsers. For efficient xss protection, look at src/server/utils/sanitizer.js
   *
   * @type {boolean}
   */
  export let removeTags = false;
  // Lib option to remove all tags (cf https://github.com/apostrophecms/sanitize-html#what-if-i-dont-want-to-allow-any-tags)
  const NO_TAGS = {
    allowedTags: [],
    allowedAttributes: {},
  };

  /** sanitize-html options object that will get merged into app settings
   * https://github.com/apostrophecms/sanitize-html
   */
  export let options = {};

  // We use the default's lib and we softly overide it with our conf
  // const OPTIONS = {
  //   allowedTags: (sanitizeHtml?.defaults?.allowedTags || [])
  //     .concat(ALLOWED)
  //     .filter((tag) => !RESTRICTED.includes(tag)),
  //   allowedAttributes: (sanitizeHtml?.defaults?.allowedAttributes || [])
  //     .concat(ATTRIBUTES)
  //     .filter((attribute) => !RESTRICTED.includes(attribute)),
  // };
</script>

<!--
@component
HTML take a string, sanitize it and render it as HTML. It is meant to replace direct
`{@html text}` usage.

Usage:
```tsx
<HTML text={someHtmlFromTheOutsideWorld} />
```
-->
<!-- We are safe to use svelte @html here -->
<!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
<!-- {@html sanitizeHtml(
  text,
  removeTags ? { NO_TAGS } : { ...OPTIONS, ...options }
)} -->
