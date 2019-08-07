/** @jsx jsx */
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { jsx, Styled } from 'theme-ui';

import Layout from '../layout';
import SEO from '../seo';

/** @typedef { import('react') } React */

/**
 * @typedef {object} Props
 * @property {object} data
 * @property {object} data.mdx
 * @property {string} data.mdx.id
 * @property {string} data.mdx.body
 * @property {object} data.mdx.frontmatter
 * @property {string} data.mdx.frontmatter.title
 * @property {string | Date} data.mdx.frontmatter.date
 */

/**
 * @param {Props} props
 */
const Post = ({
  data: {
    mdx: {
      id,
      body,
      frontmatter: { title, date }
    }
  }
}) => {
  return (
    <Layout>
      <SEO />
      <Styled.h1>{title}</Styled.h1>
      <Styled.p
        sx={{
          fontSize: [0, 0],
          fontWeight: 'bold'
        }}
      >
        {id}
      </Styled.p>
      <Styled.p
        sx={{
          fontSize: [0, 0],
          fontWeight: 'bold'
        }}
      >
        {date}
      </Styled.p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default Post;
