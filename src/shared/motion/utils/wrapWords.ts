/**
 * Wraps every word of every text node under `node` in a span.class="word",
 * keeping inline elements (em, b...) intact. Whole words are kept together so
 * Arabic letter joining is never broken. With `mask`, each word also gets an
 * overflow-hidden parent so it can slide up from behind a line.
 */
export function wrapWords(node: Node, options: { mask: boolean }) {
  Array.from(node.childNodes).forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      (child.textContent ?? "").split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.append(part);
          return;
        }
        const word = document.createElement("span");
        word.className = "word";
        word.textContent = part;
        if (options.mask) {
          const mask = document.createElement("span");
          mask.className = "word-mask";
          mask.setAttribute("aria-hidden", "true");
          mask.append(word);
          frag.append(mask);
        } else {
          word.setAttribute("aria-hidden", "true");
          frag.append(word);
        }
      });
      child.replaceWith(frag);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      wrapWords(child, options);
    }
  });
}
