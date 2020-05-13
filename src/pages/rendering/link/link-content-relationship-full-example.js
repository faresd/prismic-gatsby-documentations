import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Page = ({ data }) => {
  const document = data.prismic.allPages.edges[0].node

  return (
    <a href={Link.url(document.document_link, linkResolver)}>Go to page</a>
  )
}

export const query = graphql`
  query {
    prismic {
      allPages(uid: "test-page") {
        edges {
          node {
            document_link {
              _linkType
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Page
