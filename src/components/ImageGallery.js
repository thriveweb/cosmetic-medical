import React from 'react'
import Lightbox from 'react-images'

import './ImageGallery.css'
import LazyImage from './LazyImage'
import LazyEmbed from './LazyEmbed'

export default class ImageGallery extends React.Component {
  static defaultProps = {
    images: [],
    title: 'Gallery'
  }

  state = {
    lightboxIsOpen: false,
    currentImage: 0
  }

  closeLightbox = () => this.setState({ lightboxIsOpen: false })

  handleImageClick = index => this.setState({
    currentImage: index,
    lightboxIsOpen: true
  })

  gotoPrevLightboxImage = () => this.setState(prevState => ({
    currentImage: prevState.currentImage - 1
  }))

  gotoNextLightboxImage = () => this.setState(prevState => ({
    currentImage: prevState.currentImage + 1
  }))

  render () {
    const { title, embeds } = this.props

    let images = this.props.images && this.props.images.map(image => {
      image.src = image.image
      return image
    })

    return (
      <div>
        <div className='Section thick' id='gallery'>
          <h2 className='H2 taCenter StaffSection--Title'>{title}</h2>

          <div className='ImageGallery'>
            {images && images.map((image, index) => (
              <LazyImage
                className='ImageGallery--Thumbnail'
                src={image.image}
                key={`ImageGallery--Thumbnail-${index}`}
                onClick={() => this.handleImageClick(index)}
                alt={image.caption}
                enableSrcset={false}
                imageSize={600}
              />
            ))}
          </div>

          <Lightbox
            images={images}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevLightboxImage}
            onClickNext={this.gotoNextLightboxImage}
            onClose={this.closeLightbox}
            backdropClosesModal
          />

          {embeds && embeds.map((embed, index) => (
            <div
              className='Container skinny ImageGallery--EmbedContainer'
              key={`ImageGallery--EmbedContainer-${index}`}
            >
              <LazyEmbed src={embed.embed} />
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}
