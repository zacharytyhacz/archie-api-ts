import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  DayPass,
  DayPassCreate,
  DayPassUpdate,
  DayPassRevision,
} from '../types'

export class DayPasses extends Resource<
  DayPass,
  DayPass[],
  DayPassCreate,
  DayPassUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/dayPasses')
  }

  async getRevisions(
    uuid: string,
    params?: { type?: string },
  ): Promise<DayPassRevision[]> {
    const { data } = await this.http
      .get<DayPassRevision[]>(
        `${this.basePath}/${uuid}/revisions`,
        { params },
      )
    return data
  }

  async createRevision(
    uuid: string,
    body: Partial<DayPassRevision>,
  ): Promise<DayPassRevision> {
    const { data } = await this.http
      .post<DayPassRevision>(
        `${this.basePath}/${uuid}/revisions`,
        body,
      )
    return data
  }

  async updateRevision(
    dayPassUUID: string,
    revisionUUID: string,
    body: Partial<DayPassRevision>,
  ): Promise<DayPassRevision> {
    const { data } = await this.http
      .put<DayPassRevision>(
        `${this.basePath}/${dayPassUUID}/revisions/${revisionUUID}`,
        body,
      )
    return data
  }

  async deleteRevision(
    dayPassUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${dayPassUUID}/revisions/${revisionUUID}`,
    )
  }

  async archiveRevision(
    dayPassUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${dayPassUUID}/revisions/${revisionUUID}/archive`,
    )
  }

  async publishRevision(
    dayPassUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${dayPassUUID}/revisions/${revisionUUID}/publish`,
    )
  }
}
