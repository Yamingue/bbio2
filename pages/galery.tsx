import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import { useState } from 'react';
import { images, CustomImage } from "../images"
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

export default function galey() {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);
    return (
        <Page title="Galery">
            <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
            />
            {!!currentImage && (
                /* @ts-ignore */
                <Lightbox
                    mainSrc={currentImage.original}
                    imageTitle={currentImage.caption}
                    mainSrcThumbnail={currentImage.src}
                    nextSrc={nextImage.original}
                    nextSrcThumbnail={nextImage.src}
                    prevSrc={prevImage.original}
                    prevSrcThumbnail={prevImage.src}
                    onCloseRequest={handleClose}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </Page>
    );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
