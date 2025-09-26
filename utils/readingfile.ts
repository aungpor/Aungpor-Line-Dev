import * as fs from "fs";

const BASE_URL = process.env.NEXT_PUBLIC_WEB_URL;

export const staticPaths = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return ![
      "api",
      "_app.tsx",
      "_document.tsx",
      "404.tsx",
      "500.tsx",
      "sitemap.xml.tsx",
      "index.tsx",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });
