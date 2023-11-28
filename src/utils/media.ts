interface GetImageFromStorageProps {
  ref: string
  token?: string
  imageName: string
  storageBucket: string
}

/** Returns width and hieght object */
function imageDimension(size: number) {
  return {
    width: size,
    height: size,
  }
}
/** Returns the full link of a image inside the Firebase Storage */
function getImageFromStorage(props: GetImageFromStorageProps) {
  const { imageName, storageBucket } = props
  const BASE = "https://firebasestorage.googleapis.com"
  const PATH = imageName.replace(/\//g, "%2F")
  switch (props.token) {
    case undefined:
      return `${BASE}/v0/b/${storageBucket}/o/${props.ref}%2F${PATH}?alt=media`
    default:
      return `${BASE}/v0/b/${storageBucket}/o/${props.ref}%2F${PATH}?alt=media&token=${props.token}`
  }
}

export { getImageFromStorage, imageDimension }
