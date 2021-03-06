module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/index.ts",
        templateFile: "plop-templates/Component/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.stories.tsx",
        templateFile: "plop-templates/Component/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.css.ts",
        templateFile: "plop-templates/Component/Component.css.ts.hbs",
      },
    ],
  });
};
