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
    {
        imageId: 2,
        imageUrl: "https://photos.zillowstatic.com/fp/3b2f0d7f9b0d0f2a9a7b5d0a5e7c6e9b-uncropped_scaled_within_1536_1152.webp",
    }
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