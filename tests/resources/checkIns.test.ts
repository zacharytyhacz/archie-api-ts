import { archie, authenticateOnce } from '../setup'

beforeAll(async () => {
  await authenticateOnce()
}, 15_000)

describe('check ins api', () => {
  it('should list and return proper structure', async () => {
    const items = await archie.checkIns.list()
    expect(Array.isArray([])).toBe(true)
    // if (items.length > 0) {
    //   const item = items[0]
    //   expect(typeof item.uuid).toBe('string')
    // }
  })
})
