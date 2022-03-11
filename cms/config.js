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
      label: "Homepage",
      name: "homepage",
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
            {
              label: "Content",
              name: "body",
              widget: "markdown",
            },
          ],
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      folder: "content/pages",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Featured Image", name: "thumbnail", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      label: "Blog",
      name: "blog",
      folder: "content/posts",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Featured Image", name: "thumbnail", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
};
