import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
    original: string;
}

export const images: CustomImage[] = [
    {
        src: "/IMG_6.jpg",
        original: "/IMG_6.jpg",
        width: 4160,
        height: 2768,
    },
    {
        src: "/IMG_1.jpg",
        original: "/IMG_1.jpg",
        width: 3725,
        height: 2475,
        // tags: [
        //     { value: "Nature", title: "Nature" },
        //     { value: "Flora", title: "Flora" },
        // ],
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "/IMG_2.jpg",
        original: "/IMG_2.jpg",
        width: 4160,
        height: 2768,
    },
    {
        src: "/IMG_3.jpg",
        original: "/IMG_3.jpg",
        width: 4021,
        height: 2676,
    },
    {
        src: "/IMG_4.jpg",
        original: "/IMG_4.jpg",
        width: 4160,
        height: 2768,
    },
    {
        src: "/IMG_5.jpg",
        original: "/IMG_5.jpg",
        width: 4056,
        height: 2699,
    },
    {
        src: "/IMG_7.PNG",
        original: "/IMG_7.PNG",
        width: 936,
        height: 1028,
    },
    {
        src: "/IMG_10.jpeg",
        original: "/IMG_10.jpeg",
        width: 768,
        height: 1024,
    },
];