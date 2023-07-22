export function getFirstMediaUrl(media: MediaCollection[], collectionName: string) {
  let originalUrl = ''

  media.find(item => {
    if (item.collection_name === collectionName) {
      originalUrl = item.original_url
    }
  })

  return originalUrl
}

export function getMediaUrls(media: MediaCollection[], collectionName: string) {
  const urls: string[] = []

  media.forEach(item => {
    if (item.collection_name === collectionName) {
      urls.push(item.original_url)
    }
  })

  return urls
}

export function getFirstMedia(media: MediaCollection[], collectionName: string) {
  return media.find(item => item.collection_name === collectionName)
}

export function getMedia(media: MediaCollection[], collectionName: string) {
  return media.filter(item => item.collection_name === collectionName)
}
