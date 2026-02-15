import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  User,
  UserCreate,
  UserUpdate,
  UserListParams,
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
  Quota,
  DoorAccessAccount,
  PaginatedResponse,
} from '../types'

export class Users extends Resource<
  User,
  PaginatedResponse<User>,
  UserCreate,
  UserUpdate,
  UserListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/users')
  }

  async archive(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/archive`,
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
    userUUID: string,
    depositUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${userUUID}/entityDeposits/${depositUUID}/cancel`,
    )
  }

  async receiveEntityDeposit(
    userUUID: string,
    depositUUID: string,
    date: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${userUUID}/entityDeposits/${depositUUID}/receive`,
      null,
      { params: { date } },
    )
  }

  async refundEntityDeposit(
    userUUID: string,
    depositUUID: string,
    date?: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${userUUID}/entityDeposits/${depositUUID}/refund`,
      null,
      { params: { date } },
    )
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

  async getDoorAccessAccounts(
    uuid: string,
  ): Promise<DoorAccessAccount[]> {
    const { data } = await this.http
      .get<DoorAccessAccount[]>(
        `${this.basePath}/${uuid}/doorAccessAccounts`,
      )
    return data
  }

  async createDoorAccessAccount(
    uuid: string,
    body: unknown,
  ): Promise<DoorAccessAccount> {
    const { data } = await this.http
      .post<DoorAccessAccount>(
        `${this.basePath}/${uuid}/doorAccessAccounts`,
        body,
      )
    return data
  }

  async updateDoorAccessAccount(
    userUUID: string,
    accountUUID: string,
    body: unknown,
  ): Promise<DoorAccessAccount> {
    const { data } = await this.http
      .put<DoorAccessAccount>(
        `${this.basePath}/${userUUID}/doorAccessAccounts/${accountUUID}`,
        body,
      )
    return data
  }

  async deleteDoorAccessAccount(
    userUUID: string,
    accountUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${userUUID}/doorAccessAccounts/${accountUUID}`,
    )
  }

  async disableDoorAccessAccount(
    userUUID: string,
    accountUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${userUUID}/doorAccessAccounts/${accountUUID}/disable`,
    )
  }

  async disconnectDoorAccessAccount(
    userUUID: string,
    accountUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${userUUID}/doorAccessAccounts/${accountUUID}/disconnect`,
    )
  }

  async enableDoorAccessAccount(
    userUUID: string,
    accountUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${userUUID}/doorAccessAccounts/${accountUUID}/enable`,
    )
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
    userUUID: string,
    noteUUID: string,
    body: NoteUpdate,
  ): Promise<Note> {
    const { data } = await this.http
      .put<Note>(
        `${this.basePath}/${userUUID}/notes/${noteUUID}`,
        body,
      )
    return data
  }

  async deleteNote(
    userUUID: string,
    noteUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${userUUID}/notes/${noteUUID}`,
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
    body: unknown,
  ): Promise<Quota> {
    const { data } = await this.http
      .post<Quota>(
        `${this.basePath}/${uuid}/quotas`,
        body,
      )
    return data
  }

  async exportCSV(params?: {
    'columns[]'?: string[]
  }): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/exportCSV`,
      { params },
    )
    return data
  }
}
