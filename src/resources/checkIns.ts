import type { AxiosInstance } from 'axios'
import type { CheckIn, CheckInListParams } from '../types'

export class CheckIns {
  private readonly http: AxiosInstance
  private readonly basePath = '/checkIns'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    params?: CheckInListParams,
  ): Promise<CheckIn[]> {
    const { data } = await this.http.get<CheckIn[]>(
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
}
