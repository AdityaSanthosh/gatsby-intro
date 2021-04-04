import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery, Link} from 'gatsby'
import * as blogStyles from './blog.module.scss'
import Head from '../components/head'

export default function Blog() {
  const posts = useStaticQuery(graphql` 
  query {
    allContentfulBlogPost(
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)
    return (
        <div>
            <Layout>
              <Head title="Blog" />
            <h2>Blog Page</h2>
            <ol className={blogStyles.posts}>
                {posts.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${edge.node.slug}`}>
                            <h3>{edge.node.title}</h3>
                            <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            </Layout>
        </div>
    )
}
