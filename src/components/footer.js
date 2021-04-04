import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import * as footerStyles from '../styles/footer.module.scss'

export default function Footer() {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <div className={footerStyles.footer}>
            <p>Made by {data.site.siteMetadata.author} © 2021 with GatsbyJS</p>
        </div>
    )
}
