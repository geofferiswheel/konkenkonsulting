export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "geofferiswheel/konkenkonsulting",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/home.md",
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Description",
              name: "description",
              widget: "markdown",
            },
          ],
        },
      ],
    },
  ],
};
