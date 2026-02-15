import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Group,
  GroupCreate,
  GroupUpdate,
  GroupListParams,
  Invoice,
  InvoiceListParams,
  CreditNote,
  CreditNoteListParams,
  CheckIn,
  EntityDeposit,
  EntityDepositListParams,
  Note,
  NoteCreate,
  NoteUpdate,
  PaymentMethod,
  PrintingAccount,
  Quota,
  QuotaRequest,
  PaginatedResponse,
} from '../types'

export class Groups extends Resource<
  Group,
  PaginatedResponse<Group>,
  GroupCreate,
  GroupUpdate,
  GroupListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/groups')
  }

  async activate(
    uuid: string,
    activateUsers?: boolean,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/activate`,
      null,
      { params: { activateUsers } },
    )
  }

  async archive(
    uuid: string,
    archiveUsers?: boolean,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/archive`,
      null,
      { params: { archiveUsers } },
    )
  }

  async addUser(
    uuid: string,
    body: unknown,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/addUser`,
      body,
    )
  }

  async removeUser(
    uuid: string,
    userUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/removeUser`,
      null,
      { params: { userUUID } },
    )
  }

  async getInvoices(
    uuid: string,
    params?: InvoiceListParams,
  ): Promise<PaginatedResponse<Invoice>> {
    const { data } = await this.http
      .get<PaginatedResponse<Invoice>>(
        `${this.basePath}/${uuid}/invoices`,
        { params },
      )
    return data
  }

  async getCreditNotes(
    uuid: string,
    params?: CreditNoteListParams,
  ): Promise<PaginatedResponse<CreditNote>> {
    const { data } = await this.http
      .get<PaginatedResponse<CreditNote>>(
        `${this.basePath}/${uuid}/creditNotes`,
        { params },
      )
    return data
  }

  async createCheckIn(
    uuid: string,
    body: unknown,
  ): Promise<CheckIn> {
    const { data } = await this.http
      .post<CheckIn>(
        `${this.basePath}/${uuid}/checkIns`,
        body,
      )
    return data
  }

  async getEntityDeposits(
    uuid: string,
    params?: EntityDepositListParams,
  ): Promise<PaginatedResponse<EntityDeposit>> {
    const { data } = await this.http
      .get<PaginatedResponse<EntityDeposit>>(
        `${this.basePath}/${uuid}/entityDeposits`,
        { params },
      )
    return data
  }

  async createEntityDeposit(
    uuid: string,
    body: unknown,
  ): Promise<EntityDeposit> {
    const { data } = await this.http
      .post<EntityDeposit>(
        `${this.basePath}/${uuid}/entityDeposits`,
        body,
      )
    return data
  }

  async cancelEntityDeposit(
    groupUUID: string,
    depositUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${groupUUID}/entityDeposits/${depositUUID}/cancel`,
    )
  }

  async receiveEntityDeposit(
    groupUUID: string,
    depositUUID: string,
    date: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${groupUUID}/entityDeposits/${depositUUID}/receive`,
      null,
      { params: { date } },
    )
  }

  async refundEntityDeposit(
    groupUUID: string,
    depositUUID: string,
    date?: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${groupUUID}/entityDeposits/${depositUUID}/refund`,
      null,
      { params: { date } },
    )
  }

  async getNotes(
    uuid: string,
    params?: {
      limit?: number
      startAfter?: string
      sortBy?: string
      sortOrder?: string
    },
  ): Promise<Note[]> {
    const { data } = await this.http
      .get<Note[]>(
        `${this.basePath}/${uuid}/notes`,
        { params },
      )
    return data
  }

  async createNote(
    uuid: string,
    body: NoteCreate,
  ): Promise<Note> {
    const { data } = await this.http
      .post<Note>(
        `${this.basePath}/${uuid}/notes`,
        body,
      )
    return data
  }

  async updateNote(
    groupUUID: string,
    noteUUID: string,
    body: NoteUpdate,
  ): Promise<Note> {
    const { data } = await this.http
      .put<Note>(
        `${this.basePath}/${groupUUID}/notes/${noteUUID}`,
        body,
      )
    return data
  }

  async deleteNote(
    groupUUID: string,
    noteUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${groupUUID}/notes/${noteUUID}`,
    )
  }

  async getPaymentMethods(
    uuid: string,
  ): Promise<PaymentMethod[]> {
    const { data } = await this.http
      .get<PaymentMethod[]>(
        `${this.basePath}/${uuid}/paymentMethods`,
      )
    return data
  }

  async getPaymentBalance(
    uuid: string,
  ): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/${uuid}/payments/balance`,
    )
    return data
  }

  async getPrintingAccounts(
    uuid: string,
  ): Promise<PrintingAccount[]> {
    const { data } = await this.http
      .get<PrintingAccount[]>(
        `${this.basePath}/${uuid}/printingAccounts`,
      )
    return data
  }

  async getQuotas(
    uuid: string,
    params?: {
      'itemTypes[]'?: string[]
      startDate?: string
      raw?: boolean
      withAvailabilityEnded?: boolean
    },
  ): Promise<Quota[]> {
    const { data } = await this.http
      .get<Quota[]>(
        `${this.basePath}/${uuid}/quotas`,
        { params },
      )
    return data
  }

  async createQuota(
    uuid: string,
    body: QuotaRequest,
  ): Promise<Quota> {
    const { data } = await this.http
      .post<Quota>(
        `${this.basePath}/${uuid}/quotas`,
        body,
      )
    return data
  }

  async getDocumentSignatures(
    uuid: string,
    params?: {
      limit?: number
      startAfter?: string
      sortBy?: string
      sortOrder?: string
    },
  ): Promise<unknown[]> {
    const { data } = await this.http
      .get<unknown[]>(
        `${this.basePath}/${uuid}/documentSignatures`,
        { params },
      )
    return data
  }

  async getFiles(
    uuid: string,
  ): Promise<unknown[]> {
    const { data } = await this.http
      .get<unknown[]>(
        `${this.basePath}/${uuid}/files`,
      )
    return data
  }
}
