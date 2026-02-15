import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  CreditNote,
  CreditNoteCreate,
  CreditNoteUpdate,
  CreditNoteListParams,
  CreditNoteLine,
  PaginatedResponse,
} from '../types'

export class CreditNotes extends Resource<
  CreditNote,
  PaginatedResponse<CreditNote>,
  CreditNoteCreate,
  CreditNoteUpdate,
  CreditNoteListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/creditNotes')
  }

  async cancel(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/cancel`,
    )
  }

  async addLine(
    uuid: string,
    body: Partial<CreditNoteLine>,
  ): Promise<CreditNoteLine> {
    const { data } = await this.http
      .post<CreditNoteLine>(
        `${this.basePath}/${uuid}/lines`,
        body,
      )
    return data
  }

  async updateLine(
    uuid: string,
    lineKey: string,
    body: Partial<CreditNoteLine>,
  ): Promise<CreditNoteLine> {
    const { data } = await this.http
      .put<CreditNoteLine>(
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
}
