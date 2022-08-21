var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => errors
});
module.exports = __toCommonJS(stdin_exports);
const errors = {
  403: {
    message: "<p>Il semblerait que vous n'ayez pas acc\xE8s \xE0 cette page.</p><p>Tentez de recharger la page ou vider votre cache</p>"
  },
  404: {
    message: "<p>Il semblerait qu\u2019aucune page n\u2019aie \xE9t\xE9 trouv\xE9e</p>"
  },
  500: {
    message: "<p>Notre serveur semble rencontrer un probl\xE8me</p>.<p>Recharger la page d'ici quelques minutes</p>"
  },
  502: {
    message: "<p>Il semblerait que vous ne soyez plus connect\xE9 \xE0 un r\xE9seau</p>"
  },
  503: {
    message: "<p>Notre serveur semble rencontrer un probl\xE8me</p>.<p>Recharger la page d'ici quelques minutes</p>"
  },
  504: {
    message: "<p>Notre serveur semble rencontrer un probl\xE8me</p>.<p>Recharger la page d'ici quelques minutes</p>"
  }
};
