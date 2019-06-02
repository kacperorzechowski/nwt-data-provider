export function extractGiphyResponse (data, res) {
  data.push(
    ...res
      .map((item) => ({
          previewFormat: item.images.fixed_width.url,
          webFormat: item.images.original_still.url
        })
      )
  )
}

export function extractPixabayResponse (data, res) {
  data.push(...res.map((item) => ({
    previewFormat: item.previewURL,
    webFormat: item.webformatURL
  })))
}
