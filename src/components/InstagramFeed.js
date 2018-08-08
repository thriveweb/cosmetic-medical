import React, { Component } from 'react'

import BackgroundImage from '../components/BackgroundImage'
import './InstagramFeed.css'

export default class InstagramFeed extends Component {
  static defaultProps = {
    instagramUrl: 'https://instagram.com/instagram',
    count: 6
  }

  state = {
    posts: [],
    instagramUsername: ''
  }

  componentWillMount () {
    const parsed = this.parseInstagramUrl(this.props.instagramUrl)
    const instagramUsername = parsed ? parsed[1] : ''
    if (instagramUsername) this.fetchInstagram(instagramUsername)
    this.setState({
      instagramUsername
    })
  }

  parseInstagramUrl = string =>
    string.match(/(?:https?:\/\/)(?:www.)?instagram.com\/([\w\d_-]+)\/?/i)

  fetchInstagram = instagramUsername => {
    const fetch = window.fetch
    fetch(`https://instagram.thrivex.io/?ref=${instagramUsername}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data && data.items ? data.items : []
        })
      })
      .catch(err => console.error(err))
  }

  renderLoadingItems = () => (
    <div className='InstagramFeed'>
      {[...Array(this.props.count)].map((x, index) => (
        <div
          className='InstagramFeed--EmptyPost'
          data-display='Loading'
          key={`EmptyPost-${index}`}
        />
      ))}
    </div>
  )

  render () {
    if (!this.state.posts.length) {
      return this.renderLoadingItems()
    }
    return (
      <div className='InstagramFeed'>
        {this.state.posts
          .slice(0, this.props.count)
          .map(post => (
            <Post
              key={post.code}
              src={post.display_src}
              code={post.code}
              caption={post.caption}
            />
          ))}
      </div>
    )
  }
}

const Post = ({ src, code, caption }) => (
  <a
    className='InstagramFeed--EmptyPost InstagramFeed--EmptyPost-loaded'
    href={`https://instagram.com/p/${code}`}
    rel='noopener'
    target='_blank'
    aria-label='Instagram Post Link'
  >
    <BackgroundImage contain src={src} lazy />
  </a>
)
