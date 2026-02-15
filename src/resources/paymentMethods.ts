import type { AxiosInstance } from 'axios'
import type { PaymentMethod } from '../types'

export class PaymentMethods {
  private readonly http: AxiosInstance
  private readonly basePath = '/paymentMethods'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async create(
    body: unknown,
  ): Promise<PaymentMethod> {
    const { data } = await this.http
      .post<PaymentMethod>(this.basePath, body)
    return data
  }

  async delete(uuid: string): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${uuid}`,
    )
  }

  async setPrimary(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/setPrimary`,
    )
  }
}
