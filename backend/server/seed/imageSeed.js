const images = [
    {
        imageId: 1,
        imageUrl: "https://photos.zillowstatic.com/fp/b59a13db22d49514bb6c612aa5d0378d-uncropped_scaled_within_1536_1152.webp",
    },
    {
        imageId: 2,
        imageUrl: "https://photos.zillowstatic.com/fp/3b2f0d7f9b0d0f2a9a7b5d0a5e7c6e9b-uncropped_scaled_within_1536_1152.webp",
    }
];

export const createImages = async function createImages(db){
    for (const image of images) {
        await db.image
            .create({
                imageId: image.imageId,
                imageUrl: image.imageUrl,
        })
    }
}