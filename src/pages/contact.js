import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

export default function Contact() {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h2>Contact Page</h2>
                <a>Email</a>
                <a>Phone</a>
                <a>Github</a>
            </Layout>
        </div>
    )
}
