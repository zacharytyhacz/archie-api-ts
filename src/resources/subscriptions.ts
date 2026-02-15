import type { AxiosInstance } from 'axios'
import type {
  Subscription,
  SubscriptionUpdate,
  SubscriptionListParams,
  Quota,
  PaginatedResponse,
} from '../types'

export class Subscriptions {
  private readonly http: AxiosInstance
  private readonly basePath = '/subscriptions'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    params?: SubscriptionListParams,
  ): Promise<PaginatedResponse<Subscription>> {
    const { data } = await this.http
      .get<PaginatedResponse<Subscription>>(
        this.basePath,
        { params },
      )
    return data
  }

  async update(
    uuid: string,
    body: SubscriptionUpdate,
    params?: {
      generateDocumentSignature?: boolean
      sendDocumentSignature?: boolean
    },
  ): Promise<Subscription> {
    const { data } = await this.http
      .put<Subscription>(
        `${this.basePath}/${uuid}`,
        body,
        { params },
      )
    return data
  }

  async cancel(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/cancel`,
    )
  }

  async getQuotas(
    uuid: string,
    params: { 'itemTypes[]': string[] },
  ): Promise<Quota[]> {
    const { data } = await this.http
      .get<Quota[]>(
        `${this.basePath}/${uuid}/quotas`,
        { params },
      )
    return data
  }

  async signDocument(
    uuid: string,
    body: unknown,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/signDocument`,
      body,
    )
  }

  async transfer(
    uuid: string,
    body: unknown,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/transfer`,
      body,
    )
  }

  async updateBeneficiaries(
    uuid: string,
    body: unknown,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/updateBeneficiaries`,
      body,
    )
  }

  async updateSegments(
    uuid: string,
    segmentUUIDs: string[],
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/updateSegments`,
      null,
      { params: { 'segmentUUIDs[]': segmentUUIDs } },
    )
  }

  async exportCSV(params: {
    startDate: string
    endDate: string
    'columns[]'?: string[]
  }): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/exportCSV`,
      { params },
    )
    return data
  }
}
