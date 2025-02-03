import { default as icons } from "../svg/map.json";

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return "";
  }
  return icons[name];
}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon,
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["wi"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["wi"] = { getIcon, getIconList };

/**
 * The default custom icon implementation expects the icon to be defined by one
 * path (as in, a <path> element) and an array specifing the viewport.
 *
 * In order to support full-color icons we need to support more complex SVG markup.
 * To do so, we hack into the `<ha-icon>` definition, overriding the _setCustomPath
 * method (ugly, I know). This method usually the contents of the SVG <path> element
 * to use. Insted, we let the setCustomPath function to run (which will do nothing because
 * it won't find a path for the custom icon), then wait for the `ha-svg-icon` to be
 * rendered, find its internal <svg> and replace it with our markup.
 */
customElements.whenDefined("ha-icon").then((HaIcon) => {
  const orig = HaIcon.prototype._setCustomPath;
  HaIcon.prototype._setCustomPath = async function (promise, requestedIcon) {
    await orig?.bind(this)?.(promise, requestedIcon);
    const icon = await promise;

    // Only run for our icons, so we don't break other custom icons
    if (!requestedIcon.startsWith("wi:")) {
      return promise;
    }

    // Wait for the element to be fully updated (https://lit.dev/docs/v1/components/lifecycle/#updatecomplete)
    await this.UpdateComplete;
    const el = this.shadowRoot.querySelector("ha-svg-icon");
    await el?.updateComplete;

    // Find the internal SVG, and replace it with our markup.
    const root = el?.shadowRoot.querySelector("svg");
    const template = document.createElement("template");
    template.innerHTML = icon;
    root.replaceWith(template.content.firstChild);
  };
});
