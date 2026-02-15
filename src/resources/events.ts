import type { AxiosInstance } from 'axios'
import type { Event } from '../types'

export class Events {
  private readonly http: AxiosInstance
  private readonly basePath = '/events'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(): Promise<Event[]> {
    const { data } = await this.http
      .get<Event[]>(this.basePath)
    return data
  }

  async exportCSV(params?: {
    columns?: string[]
    eventUUID?: string
  }): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/exportCSV`,
      { params },
    )
    return data
  }
}
