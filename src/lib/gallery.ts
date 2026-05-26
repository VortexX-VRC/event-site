import one from '$lib/assets/gallery/01.webp';
import two from '$lib/assets/gallery/02.webp';
import three from '$lib/assets/gallery/03.webp';
import four from '$lib/assets/gallery/04.webp';

type GalleryItem = {
  image: string,
  caption: string
}

export const gallery: GalleryItem[] = [
  {
    image: one,
    caption: ''
  },
  {
    image: two,
    caption: ''
  },
  {
    image: three,
    caption: ''
  },
  {
    image: four,
    caption: ''
  },
]
