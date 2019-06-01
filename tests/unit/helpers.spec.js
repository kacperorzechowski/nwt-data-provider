import { extractResponse } from '../../app/helpers'

const mockedResponse = [
  {
    a: 'test',
    b: 'test',
    images: {
      original_still: 'url',
      fixed_width: 'url'
    }
  }
]

describe('helpers test', () => {
  it('returns mapped array', () => {
    // given
    let data = []
    const desiredArray = [{
      original_still: 'url',
      fixed_width: 'url'
    }]
    // when
    extractResponse(data, mockedResponse)
    console.log(data)
    // then
    expect(data).toEqual(desiredArray)
  })
})
