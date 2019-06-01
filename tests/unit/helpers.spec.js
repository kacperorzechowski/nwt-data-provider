import { add } from '@/helpers'

describe('helpers test', () => {
  it('adds two digits', () => {
    expect(add(1,2)).toEqual(3)
  })
})
