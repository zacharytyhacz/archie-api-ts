import { archie, authenticateOnce } from '../setup'

beforeAll(async () => {
  await authenticateOnce()
}, 15_000)

describe('subscriptions', () => {
  it('should list and return proper structure', async () => {
    const result = await archie.subscriptions.list({ limit: 1 })
    expect(typeof result.total_count).toBe('number')
    expect(typeof result.has_more).toBe('boolean')
    expect(Array.isArray(result.data)).toBe(true)
    if (result.data.length > 0) {
      const item = result.data[0]
      expect(typeof item.uuid).toBe('string')
      expect(typeof item.href).toBe('string')
      expect(typeof item.beneficiary_type).toBe('string')
      expect(typeof item.billing_start_date).toBe('string')
      expect(typeof item.continuous).toBe('boolean')
      expect(typeof item.creation_date).toBe('string')
      expect(typeof item.discount).toBe('number')
      expect(typeof item.discount_amount).toBe('number')
      expect(typeof item.included_for_free).toBe('boolean')
      expect(typeof item.payer_type).toBe('string')
      expect(typeof item.period_count).toBe('number')
      expect(typeof item.period_unit).toBe('string')
      expect(typeof item.price).toBe('number')
      expect(typeof item.price_with_discount).toBe('number')
      expect(typeof item.price_with_discount_with_taxes)
        .toBe('number')
      expect(typeof item.start_date).toBe('string')
      expect(typeof item.subscriber_type).toBe('string')
      expect(typeof item.subscriber_uuid).toBe('string')
      expect(typeof item.type).toBe('string')
      expect(typeof item.update_date).toBe('string')
      expect(Array.isArray(item.taxes)).toBe(true)
      expect(typeof item.plan).toBe('object')
      expect(typeof item.product).toBe('object')
    }
  })
})
