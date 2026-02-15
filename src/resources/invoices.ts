import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Invoice,
  InvoiceCreate,
  InvoiceUpdate,
  InvoiceListParams,
  InvoiceLine,
  PaginatedResponse,
} from '../types'

export class Invoices extends Resource<
  Invoice,
  PaginatedResponse<Invoice>,
  InvoiceCreate,
  InvoiceUpdate,
  InvoiceListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/invoices')
  }

  async cancel(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/cancel`,
    )
  }

  async addLine(
    uuid: string,
    body: Partial<InvoiceLine>,
  ): Promise<InvoiceLine> {
    const { data } = await this.http
      .post<InvoiceLine>(
        `${this.basePath}/${uuid}/lines`,
        body,
      )
    return data
  }

  async updateLine(
    uuid: string,
    lineKey: string,
    body: Partial<InvoiceLine>,
  ): Promise<InvoiceLine> {
    const { data } = await this.http
      .post<InvoiceLine>(
        `${this.basePath}/${uuid}/lines/${lineKey}`,
        body,
      )
    return data
  }

  async restoreLine(
    uuid: string,
    lineKey: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/lines/${lineKey}/restore`,
    )
  }

  async pay(
    uuid: string,
    params?: {
      notifyEmail?: boolean
      includeProcessingFee?: boolean
    },
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/pay`,
      null,
      { params },
    )
  }

  async print(uuid: string): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/${uuid}/print`,
    )
    return data
  }

  async send(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/send`,
    )
  }

  async updateInvoiceDate(
    uuid: string,
    body: unknown,
  ): Promise<Invoice> {
    const { data } = await this.http
      .post<Invoice>(
        `${this.basePath}/${uuid}/updateInvoiceDate`,
        body,
      )
    return data
  }

  async exportCSV(params: {
    startDate: string
    endDate: string
    columns?: string[]
  }): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/exportCSV`,
      { params },
    )
    return data
  }
}
