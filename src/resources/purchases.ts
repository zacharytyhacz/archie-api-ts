import type { AxiosInstance } from 'axios'
import type {
  Purchase,
  PurchaseListParams,
  PaginatedResponse,
} from '../types'

export class Purchases {
  private readonly http: AxiosInstance
  private readonly basePath = '/purchases'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    params?: PurchaseListParams,
  ): Promise<PaginatedResponse<Purchase>> {
    const { data } = await this.http
      .get<PaginatedResponse<Purchase>>(
        this.basePath,
        { params },
      )
    return data
  }
}
