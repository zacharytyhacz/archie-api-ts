import type { AxiosInstance } from 'axios'
import type { CartPrice } from '../types'

export class Carts {
  private readonly http: AxiosInstance
  private readonly basePath = '/carts'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async calculatePrices(
    body: unknown,
  ): Promise<CartPrice> {
    const { data } = await this.http.post<CartPrice>(
      `${this.basePath}/calculatePrices`,
      body,
    )
    return data
  }

  async generateForecast(
    body: unknown,
  ): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/generateForecast`,
      body,
    )
    return data
  }

  async submit(body: unknown): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/submit`,
      body,
    )
    return data
  }
}
