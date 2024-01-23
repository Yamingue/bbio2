import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import BasicSection from "components/BasicSection";
import type { CustomImage } from "../images"
import "react-image-lightbox/style.css";
import OverTitle from "components/OverTitle";
import RichText from "components/RichText";
import Page from "components/Page";
import { images } from "../images"

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
        <Page title="B-Bio production">
            <BasicSection
                imageUrl="/ODD.png"
                title="Proposition de valeur"
                objectFit="contain"
                overTitle="HIGH-PRECISION WATER PURIFICATION WITHOUT CHEMICALS OR ELECTRICITY"
            >
                <ul>
                    <li>Semences de Qualité Supérieure</li>
                    <li>Variétés Adaptées à la Région</li>
                    <li>Pratiques Durables</li>
                    <li>Conseils Agricoles Personnalisés</li>
                    <li>Partenaire de Confiance</li>
                    <li>Engagement envers la Durabilité Environnementale</li>
                </ul>

            </BasicSection>
            <div style={{
                // display: "flex",
                textAlign: "center",
                margin: "3em"

            }}>
                <OverTitle>
                    Notre impact
                </OverTitle>
            </div>
            <RichText style={{
                textAlign: "justify"
            }}>
                En 3 ans, nous avons créé 4 emplois direct et plus de 20 emplois non qualifiés (main d&apos;œuvre)
                avec un chiffre d&apos;affaires de plus de 6 millions en d&apos;année 2022.
                Nous produisons sur 10 hectares avec les techniques de production agro écologique. Plus de
                400 agriculteurs dont 60% des femmes sont accompagnés. Notre cible principale c&apos;est les petits
                agriculteurs c&apos;est-à-dire les producteurs ayant une capacité de production à comprise en 0.5
                hectare et 2 hectares.
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

//   ${media("<=tablet")} {
//     flex-direction: column;
//   }
// `;
