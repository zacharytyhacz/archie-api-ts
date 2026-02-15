import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Plan,
  PlanCreate,
  PlanUpdate,
  PlanListParams,
  PlanRevision,
} from '../types'

export class Plans extends Resource<
  Plan,
  Plan[],
  PlanCreate,
  PlanUpdate,
  PlanListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/plans')
  }

  async getRevisions(
    uuid: string,
    params?: { type?: string },
  ): Promise<PlanRevision[]> {
    const { data } = await this.http
      .get<PlanRevision[]>(
        `${this.basePath}/${uuid}/revisions`,
        { params },
      )
    return data
  }

  async createRevision(
    uuid: string,
    body: Partial<PlanRevision>,
  ): Promise<PlanRevision> {
    const { data } = await this.http
      .post<PlanRevision>(
        `${this.basePath}/${uuid}/revisions`,
        body,
      )
    return data
  }

  async updateRevision(
    planUUID: string,
    revisionUUID: string,
    body: Partial<PlanRevision>,
  ): Promise<PlanRevision> {
    const { data } = await this.http
      .put<PlanRevision>(
        `${this.basePath}/${planUUID}/revisions/${revisionUUID}`,
        body,
      )
    return data
  }

  async deleteRevision(
    planUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${planUUID}/revisions/${revisionUUID}`,
    )
  }

  async archiveRevision(
    planUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${planUUID}/revisions/${revisionUUID}/archive`,
    )
  }

  async publishRevision(
    planUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${planUUID}/revisions/${revisionUUID}/publish`,
    )
  }
}
