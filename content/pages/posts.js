import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { PostsList } from '../components/PostsList'
import { SEO } from '../components/SEO'

const RSSAside = styled.aside`
  float: right;
`
const PostsPage = () => (
  <Layout>
    <SEO title='Posts archive' description='fsis.site posts archive' />
    <RSSAside><a href='/feed.xml'>RSS feed</a></RSSAside>
    <h1>Posts archive</h1>
    <PostsList />
  </Layout>
)

export default PostsPage
