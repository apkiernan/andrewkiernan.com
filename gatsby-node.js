const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      projects: allStrapiProject {
        edges {
          node {
            name
            slug
            featureBullets
          }
        }
      }
      blogPosts: allStrapiBlogPost {
        edges {
          node {
            title
            slug
            content
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const projects = result.data.projects.edges;
    const blogPosts = result.data.blogPosts.edges;

    projects.forEach((project) => {
      createPage({
        path: `/projects/${project.node.slug}`,
        component: path.resolve(`src/pages/project.tsx`),
        context: {
          slug: project.node.slug,
        },
      });
    });
    blogPosts.forEach((bp) => {
      createPage({
        path: `/${bp.node.slug}`,
        component: path.resolve(`src/pages/blog-post.tsx`),
        context: {
          slug: bp.node.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
