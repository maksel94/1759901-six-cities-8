type RoomGalleryProps = {
  images: string[];
};

function RoomGallery({ images }: RoomGalleryProps): JSX.Element {
  if (images.length > 6) {
    images.length = 6;
  }

  const imageRender = (image: string, index: number) => {
    const key = `image_${index}`;
    return (
      <div key={key} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    );
  };

  return <div className="property__gallery">{images.map(imageRender)}</div>;
}

export default RoomGallery;
