import type { AxiosInstance } from 'axios'
import type {
  EntityDeposit,
  EntityDepositListParams,
  PaginatedResponse,
} from '../types'

export class EntityDeposits {
  private readonly http: AxiosInstance
  private readonly basePath = '/entityDeposits'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    params?: EntityDepositListParams,
  ): Promise<PaginatedResponse<EntityDeposit>> {
    const { data } = await this.http
      .get<PaginatedResponse<EntityDeposit>>(
        this.basePath,
        { params },
      )
    return data
  }

  async cancel(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/cancel`,
    )
  }

  async receive(
    uuid: string,
    date: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/receive`,
      null,
      { params: { date } },
    )
  }

  async refund(
    uuid: string,
    date?: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/refund`,
      null,
      { params: { date } },
    )
  }
}
