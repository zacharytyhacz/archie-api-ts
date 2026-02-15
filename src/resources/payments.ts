import type { AxiosInstance } from 'axios'
import type {
  Payment,
  PaymentListParams,
  PaginatedResponse,
} from '../types'

export class Payments {
  private readonly http: AxiosInstance
  private readonly basePath = '/payments'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    params?: PaymentListParams,
  ): Promise<PaginatedResponse<Payment>> {
    const { data } = await this.http
      .get<PaginatedResponse<Payment>>(
        this.basePath,
        { params },
      )
    return data
  }

  async exportCSV(params: {
    startDate: string
    endDate: string
    'columns[]'?: string[]
  }): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/exportCSV`,
      { params },
    )
    return data
  }
}
