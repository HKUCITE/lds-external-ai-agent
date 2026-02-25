const fs = require("fs");
const path = require("path");

function joinUrlParts(...parts) {
  return parts
    .map((p) => (p || "").replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");
}

module.exports = function (context, options) {
  const { siteConfig, baseUrl } = context || {};

  return {
    name: "docusaurus-plugin-inject-schema-id",

    async postBuild(props) {
      const outDir = props.outDir || (context && context.outDir) || "build";

      try {
        const siteUrl = siteConfig && siteConfig.url ? siteConfig.url : "";
        const base =
          typeof baseUrl === "string"
            ? baseUrl
            : (siteConfig && siteConfig.baseUrl) || "/";
        const relativePath = "lds/lds-response-json-schema.json";

        const resolved = joinUrlParts(siteUrl, base, relativePath);

        const targetPath = path.join(
          outDir,
          "lds",
          "lds-response-json-schema.json",
        );

        if (!fs.existsSync(targetPath)) {
          console.warn(
            `[docusaurus-plugin-inject-schema-id] File not found: ${targetPath}`,
          );
          return;
        }

        const raw = fs.readFileSync(targetPath, "utf8");
        let json;
        try {
          json = JSON.parse(raw);
        } catch (err) {
          console.error(
            "[docusaurus-plugin-inject-schema-id] Failed to parse JSON:",
            err,
          );
          return;
        }

        json["$id"] = resolved;

        fs.writeFileSync(
          targetPath,
          JSON.stringify(json, null, 2) + "\n",
          "utf8",
        );

        console.log(
          `[docusaurus-plugin-inject-schema-id] Injected $id: ${resolved}`,
        );
      } catch (err) {
        console.error("[docusaurus-plugin-inject-schema-id] Error:", err);
      }
    },
  };
};
