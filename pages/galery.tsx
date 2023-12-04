import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import Page from 'components/Page';
import { images } from "../images"
import type { CustomImage } from "../images"
import "react-image-lightbox/style.css";
import BasicSection from 'components/BasicSection';
import OverTitle from 'components/OverTitle';
import RichText from 'components/RichText';

export default function Galey() {
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
        <Page title="O'NADIF">
            <BasicSection
                imageUrl="/ODD.png"
                title="O'NADIF"
                objectFit='contain'
                overTitle="HIGH-PRECISION WATER PURIFICATION WITHOUT CHEMICALS OR ELECTRICITY"
            >
                <ul>
                    <li>0 chemicals used</li>
                    <li> Simple and robust</li>
                    <li>Simple and robust</li>
                    <li> Little or no maintenance required</li>
                    <li> Designed with illiterate people in mind</li>
                    <li> Removable</li>
                    <li>Easy to travel with</li>
                    <li>Designed for emergencies and disasters</li>
                </ul>

            </BasicSection>
            <div style={{
                // display: 'flex',
                textAlign: 'center',
                margin: '3em'

            }}>
                <OverTitle>
                    Our impact
                </OverTitle>
            </div>
            <RichText style={{
                textAlign: 'justify'
            }}>
                In partnership with the Citoyens Sans Frontières association, our filtration project, deployed in the village of Biir, located in Koundoul, has had a significant impact. This village, home to around a hundred people, was suffering cruelly from a lack of drinking water, leading to water-borne diseases among vulnerable populations. Since the installation of the filter on October 8, 2023, water quality has improved considerably, reducing the incidence of water-borne diseases among these vulnerable populations. This action contributes to improving the quality of life and health of the inhabitants of Biir
            </RichText>
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

// const ContactContainer = styled.div`
//   display: flex;

//   ${media('<=tablet')} {
//     flex-direction: column;
//   }
// `;
