import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  IssueTicket,
  IssueTicketCreate,
  IssueTicketUpdate,
  IssueTicketListParams,
} from '../types'

export class IssueTickets extends Resource<
  IssueTicket,
  IssueTicket[],
  IssueTicketCreate,
  IssueTicketUpdate,
  IssueTicketListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/issueTickets')
  }

  async assign(
    uuid: string,
    userUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/assign`,
      null,
      { params: { userUUID } },
    )
  }

  async close(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/close`,
    )
  }

  async getPosts(
    uuid: string,
    channelUUID: string,
    params?: { first?: string; last?: string },
  ): Promise<unknown[]> {
    const { data } = await this.http
      .get<unknown[]>(
        `${this.basePath}/${uuid}/channels/${channelUUID}/posts`,
        { params },
      )
    return data
  }

  async createPost(
    uuid: string,
    channelUUID: string,
    body: unknown,
  ): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/${uuid}/channels/${channelUUID}/posts`,
      body,
    )
    return data
  }
}
