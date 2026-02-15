import type { AxiosInstance } from 'axios'
import type { PrintingAccount } from '../types'

export class PrintingAccounts {
  private readonly http: AxiosInstance
  private readonly basePath = '/printingAccounts'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(): Promise<PrintingAccount[]> {
    const { data } = await this.http
      .get<PrintingAccount[]>(this.basePath)
    return data
  }
}
