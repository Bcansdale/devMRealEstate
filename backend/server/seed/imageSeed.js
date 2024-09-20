const images = [
    {
        imageId: 1,
        imageUrl: "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
        propertyImage: {
            propertyId: 1,
            imageId:1,
            isPrimary: true
        }
    },
];
// console.log(images)
export const createImages = async function createImages(db){
    for (const image of images) {
        await db.image
            .create({
                imageId: image.imageId,
                imageUrl: image.imageUrl,
        })
            .then(async (newImage) => {
                const propertyImage = image.propertyImage;
                await db.propertyImage.create({
                    propertyId: newImage.propertyId,
                    imageId: propertyImage.imageId,
                    isPrimary: propertyImage.isPrimary
                })
            })
    }
}