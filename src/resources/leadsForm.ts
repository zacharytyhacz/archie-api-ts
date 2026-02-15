import type { AxiosInstance } from 'axios'
import type {
  LeadsForm,
  LeadsFormSubmission,
  LeadsFormSubmissionListParams,
} from '../types'

export class LeadsForms {
  private readonly http: AxiosInstance
  private readonly basePath = '/leadsForm'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async get(): Promise<LeadsForm> {
    const { data } = await this.http
      .get<LeadsForm>(this.basePath)
    return data
  }

  async create(body: unknown): Promise<LeadsForm> {
    const { data } = await this.http
      .post<LeadsForm>(this.basePath, body)
    return data
  }

  async update(body: unknown): Promise<LeadsForm> {
    const { data } = await this.http
      .put<LeadsForm>(this.basePath, body)
    return data
  }

  async getSubmissions(
    params?: LeadsFormSubmissionListParams,
  ): Promise<LeadsFormSubmission[]> {
    const { data } = await this.http
      .get<LeadsFormSubmission[]>(
        `${this.basePath}/submissions`,
        { params },
      )
    return data
  }
}
