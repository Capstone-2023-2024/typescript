"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageDimension = exports.getImageFromStorage = void 0;
/** Returns width and hieght object */
function imageDimension(size) {
    return {
        width: size,
        height: size,
    };
}
exports.imageDimension = imageDimension;
/** Returns the full link of a image inside the Firebase Storage */
function getImageFromStorage(props) {
    const { imageName, storageBucket } = props;
    const BASE = "https://firebasestorage.googleapis.com";
    const PATH = imageName.replace(/\//g, "%2F");
    switch (props.token) {
        case undefined:
            return `${BASE}/v0/b/${storageBucket}/o/${props.ref}%2F${PATH}?alt=media`;
        default:
            return `${BASE}/v0/b/${storageBucket}/o/${props.ref}%2F${PATH}?alt=media&token=${props.token}`;
    }
}
exports.getImageFromStorage = getImageFromStorage;
