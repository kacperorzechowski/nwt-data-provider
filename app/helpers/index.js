export function extractGiphyResponse (data, res) {
  data.push(
    ...res
      .map((item) => ({
          previewFormat: item.images.fixed_width.url
        })
      )
  )
}

export function extractPixabayResponse (data, res) {
  data.push(...res.map((item) => ({
    previewFormat: item.webformatURL
  })))
}
