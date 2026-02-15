import { archie, authenticateOnce } from '../setup'

beforeAll(async () => {
  await authenticateOnce()
}, 15_000)

describe('conferenceRooms', () => {
  it('should list and return proper structure', async () => {
    const items = await archie.conferenceRooms.list()
    expect(Array.isArray(items)).toBe(true)
    if (items.length > 0) {
      const item = items[0]
      expect(typeof item.uuid).toBe('string')
      expect(typeof item.name).toBe('string')
      expect(typeof item.category).toBe('string')
    }
  })
})
