import type { AxiosInstance } from 'axios'
import type {
  Quota,
  QuotaListParams,
  QuotaConsumption,
  QuotaRequest,
  CheckIn,
} from '../types'

export class Quotas {
  private readonly http: AxiosInstance
  private readonly basePath = '/quotas'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    params?: QuotaListParams,
  ): Promise<Quota[]> {
    const { data } = await this.http
      .get<Quota[]>(this.basePath, { params })
    return data
  }

  async get(
    uuid: string,
    params?: QuotaListParams,
  ): Promise<Quota> {
    const { data } = await this.http
      .get<Quota>(
        `${this.basePath}/${uuid}`,
        { params },
      )
    return data
  }

  async delete(uuid: string): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${uuid}`,
    )
  }

  async getCheckIns(
    uuid: string,
  ): Promise<CheckIn[]> {
    const { data } = await this.http
      .get<CheckIn[]>(
        `${this.basePath}/${uuid}/checkIns`,
      )
    return data
  }

  async getConsumptions(
    uuid: string,
  ): Promise<QuotaConsumption[]> {
    const { data } = await this.http
      .get<QuotaConsumption[]>(
        `${this.basePath}/${uuid}/consumptions`,
      )
    return data
  }

  async createConsumption(
    uuid: string,
    body: unknown,
  ): Promise<QuotaConsumption> {
    const { data } = await this.http
      .post<QuotaConsumption>(
        `${this.basePath}/${uuid}/consumptions`,
        body,
      )
    return data
  }

  async updateAvailabilityEndDate(
    uuid: string,
  ): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/${uuid}/updateAvailabilityEndDate`,
    )
    return data
  }

  async affect(body: QuotaRequest): Promise<Quota> {
    const { data } = await this.http
      .post<Quota>(
        `${this.basePath}/affect`,
        body,
      )
    return data
  }

  async update(body: QuotaRequest): Promise<Quota> {
    const { data } = await this.http
      .post<Quota>(
        `${this.basePath}/update`,
        body,
      )
    return data
  }
}
