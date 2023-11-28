interface GetImageFromStorageProps {
    ref: string;
    token?: string;
    imageName: string;
    storageBucket: string;
}
/** Returns width and hieght object */
declare function imageDimension(size: number): {
    width: number;
    height: number;
};
/** Returns the full link of a image inside the Firebase Storage */
declare function getImageFromStorage(props: GetImageFromStorageProps): string;
export { getImageFromStorage, imageDimension };
