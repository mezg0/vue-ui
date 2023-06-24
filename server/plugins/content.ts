import fs from "fs";
import { unified, Preset } from "unified";
import parse from "remark-parse";
import stringify from "remark-stringify";
import remarkMDC from "remark-mdc";
import { visit } from "unist-util-visit";
import * as path from "path";
import { Root } from "mdast";

function compiler() {
  this.Compiler = function (root) {
    return root;
  };
}

export async function markdownToAST(markdown: string) {
  let stream = unified().use(parse).use(remarkMDC).use(compiler);

  const file = stream.parse(markdown);
  return file;
}

const ASTToMarkdown = (ast: Root) => {
  let stream = unified().use(stringify).use(remarkMDC);
  const file = stream.stringify(ast);
  return file;
};

function visitor(node: any) {
  if (node.name === "component-source") {
    if (!node.attributes.src) {
      return;
    }

    const filePath = path.join(process.cwd(), node.attributes.src as string);

    const data = fs.readFileSync(filePath, "utf8");

    node.children.push({
      type: "code",
      lang: "tsx",
      value: `// ~${node.attributes.src}\n\n` + data,
    });
  }

  if (node.name === "component-example") {
    if (!node.attributes.src) {
      return;
    }

    const filePath = path.join(process.cwd(), node.attributes.src as string);

    const data = fs.readFileSync(filePath, "utf8");
    node.children.push({
      type: "componentContainerSection",
      name: "code",
      children: [
        {
          type: "code",
          lang: "vue",
          value: data,
        },
      ],
      data: { hName: "component-slot", hProperties: { "v-slot:code": "" } },
    });
  }
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:beforeParse", async (file) => {
    if (file._id.endsWith(".md")) {
      const ast = await markdownToAST(file.body);
      // console.log(ast);

      visit(ast, visitor);

      file.body = ASTToMarkdown(ast);
    }
  });
});

