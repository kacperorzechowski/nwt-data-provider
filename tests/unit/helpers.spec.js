import { extractGiphyResponse, extractPixabayResponse } from '../../app/helpers'

const giphyResponse = [
  {
    a: 'test',
    b: 'test',
    images: {
      fixed_width: {
        url: 'url'
      },
      original_still: {
        url: 'url'
      }
    }
  }
]

const pixabayResponse = [
  {
    a: 'test',
    b: 'test',
    previewURL: 'url',
    webformatURL: 'url'
  }
]

describe('helpers test', () => {
  it('returns mapped array from giphy response', () => {
    // given
    let data = []
    const desiredArray = [{
      previewFormat: 'url',
      webFormat: 'url'
    }]
    // when
    extractGiphyResponse(data, giphyResponse)
    // then
    expect(data).toEqual(desiredArray)
  })
  it('returns mapped array from pixabay response', () => {
    // given
    let data = []
    const desiredArray = [{
      previewFormat: 'url',
      webFormat: 'url'
    }]
    // when
    extractPixabayResponse(data, pixabayResponse)
    // then
    expect(data).toEqual(desiredArray)
  })
})
