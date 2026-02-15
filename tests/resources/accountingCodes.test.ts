import { archie, authenticateOnce } from '../setup'

beforeAll(async () => {
  await authenticateOnce()
}, 15_000)

describe('accountingCodes', () => {
  it('should list and return proper structure', async () => {
    const codes = await archie.accountingCodes.list()

    expect(Array.isArray(codes)).toBe(true)
    if (codes.length > 0) {
      const code = codes[0]
      expect(typeof code.uuid).toBe('string')
      expect(typeof code.name).toBe('string')
      expect(typeof code.code).toBe('string')
      expect(typeof code.href).toBe('string')
    }
  })
})
