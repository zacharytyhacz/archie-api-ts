import type { AxiosInstance } from 'axios'
import type { PresenceLog } from '../types'

export class PresenceLogs {
  private readonly http: AxiosInstance
  private readonly basePath = '/presenceLogs'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(): Promise<PresenceLog[]> {
    const { data } = await this.http
      .get<PresenceLog[]>(this.basePath)
    return data
  }

  async delete(uuid: string): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${uuid}`,
    )
  }

  async checkOut(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/checkOut`,
    )
  }

  async checkIn(
    body: unknown,
  ): Promise<PresenceLog> {
    const { data } = await this.http
      .post<PresenceLog>(
        `${this.basePath}/checkIn`,
        body,
      )
    return data
  }
}
