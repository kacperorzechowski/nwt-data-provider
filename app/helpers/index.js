export function extractResponse (data, res) {
  data.push(
    ...res
      .map((item) => ({
          fixed_width: item.images.fixed_width,
          original_still: item.images.original_still
        })
      )
  )
}
