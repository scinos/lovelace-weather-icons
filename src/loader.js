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

// Fullcolor support patch
customElements.whenDefined("ha-icon").then((HaIcon) => {
  const orig = HaIcon.prototype._setCustomPath;
  HaIcon.prototype._setCustomPath = async function (promise, requestedIcon) {
    await orig?.bind(this)?.(promise, requestedIcon);

    const icon = await promise;
    if (requestedIcon !== this.icon) return;

    await this.UpdateComplete;
    const el = this.shadowRoot.querySelector("ha-svg-icon");
    await el?.updateComplete;

    this._path = undefined;
    this._secondaryPath = undefined;

    const root = el?.shadowRoot.querySelector("svg");
    const template = document.createElement("template");
    template.innerHTML = icon;
    root.replaceWith(template.content.firstChild);
  };
});
