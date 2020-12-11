import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { fmImagesToRelative } from 'gatsby-remark-relative-images';

export const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      projects: allContentfulProject {
        edges {
          node {
            slug
            title
          }
        }
      }
      blogPosts: allContentfulBlogPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()));
    return Promise.reject(result.errors);
  }

  const projects = result.data.projects.edges;
  const blogPosts = result.data.blogPosts.edges;

  projects.forEach(project => {
    createPage({
      path: `/projects/${project.node.slug}`,
      component: path.resolve(`src/pages/project.tsx`),
      context: {
        slug: project.node.slug
      }
    });
  });
  blogPosts.forEach(bp => {
    createPage({
      path: `/${bp.node.slug}`,
      component: path.resolve(`src/pages/blog-post.tsx`),
      context: {
        slug: bp.node.slug
      }
    });
  });
};

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
