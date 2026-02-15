import { archie, authenticateOnce } from '../setup'

beforeAll(async () => {
  await authenticateOnce()
}, 15_000)

describe('benefits', () => {
  it('should list and return proper structure', async () => {
    const result = await archie.benefits.list({ limit: 1 })
    expect(typeof result.total_count).toBe('number')
    expect(typeof result.has_more).toBe('boolean')
    expect(Array.isArray(result.data)).toBe(true)
    if (result.data.length > 0) {
      const item = result.data[0]
      expect(typeof item.uuid).toBe('string')
      expect(typeof item.provider).toBe('string')
    }
  })
})
