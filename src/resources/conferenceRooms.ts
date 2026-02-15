import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  ConferenceRoom,
  ConferenceRoomCreate,
  ConferenceRoomUpdate,
  ConferenceRoomListParams,
  ConferenceRoomRevision,
  ConferenceRoomActiveParams,
  ConferenceRoomAvailabilitiesParams,
  Availability,
  AvailableTime,
} from '../types'

export class ConferenceRooms extends Resource<
  ConferenceRoom,
  ConferenceRoom[],
  ConferenceRoomCreate,
  ConferenceRoomUpdate,
  ConferenceRoomListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/conferenceRooms')
  }

  async activate(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/activate`,
    )
  }

  async archive(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/archive`,
    )
  }

  async getAvailabilities(
    uuid: string,
    params?: {
      startDate?: string
      periodUnit?: string
      period?: string
      fullDay?: boolean
    },
  ): Promise<Availability[]> {
    const { data } = await this.http
      .get<Availability[]>(
        `${this.basePath}/${uuid}/availabilities`,
        { params },
      )
    return data
  }

  async getAvailableTimes(
    uuid: string,
  ): Promise<AvailableTime[]> {
    const { data } = await this.http
      .get<AvailableTime[]>(
        `${this.basePath}/${uuid}//availableTimes`,
      )
    return data
  }

  async getChildren(
    uuid: string,
    params?: { withArchived?: boolean },
  ): Promise<ConferenceRoom[]> {
    const { data } = await this.http
      .get<ConferenceRoom[]>(
        `${this.basePath}/${uuid}/children`,
        { params },
      )
    return data
  }

  async addChild(
    uuid: string,
    areaUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/children`,
      null,
      { params: { areaUUID } },
    )
  }

  async addChildren(
    uuid: string,
    areaUUIDs: string[],
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/children/add`,
      null,
      { params: { 'areaUUIDs[]': areaUUIDs } },
    )
  }

  async getActiveChildren(
    uuid: string,
    params: {
      periodUnit: string
      startDate?: string
      period?: string
    },
  ): Promise<ConferenceRoom[]> {
    const { data } = await this.http
      .get<ConferenceRoom[]>(
        `${this.basePath}/${uuid}/children/active`,
        { params },
      )
    return data
  }

  async getChildrenAvailabilities(
    uuid: string,
    params?: {
      startDate?: string
      periodUnit?: string
      period?: string
      fullDay?: boolean
    },
  ): Promise<Availability[]> {
    const { data } = await this.http
      .get<Availability[]>(
        `${this.basePath}/${uuid}/children/availabilities`,
        { params },
      )
    return data
  }

  async activateChildren(
    uuid: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/children/activate`,
    )
  }

  async archiveChildren(
    uuid: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/children/archive`,
    )
  }

  async duplicate(
    uuid: string,
  ): Promise<ConferenceRoom> {
    const { data } = await this.http
      .post<ConferenceRoom>(
        `${this.basePath}/${uuid}/duplicate`,
      )
    return data
  }

  async getRevisions(
    uuid: string,
  ): Promise<ConferenceRoomRevision[]> {
    const { data } = await this.http
      .get<ConferenceRoomRevision[]>(
        `${this.basePath}/${uuid}/revisions`,
      )
    return data
  }

  async createRevision(
    uuid: string,
    body: unknown,
  ): Promise<ConferenceRoomRevision> {
    const { data } = await this.http
      .post<ConferenceRoomRevision>(
        `${this.basePath}/${uuid}/revisions`,
        body,
      )
    return data
  }

  async createRevisions(
    uuid: string,
    body: unknown,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/createRevisions`,
      body,
    )
  }

  async updateRevisions(
    uuid: string,
    body: unknown,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/updateRevisions`,
      body,
    )
  }

  async updateRevision(
    areaUUID: string,
    revisionUUID: string,
    body: unknown,
  ): Promise<ConferenceRoomRevision> {
    const { data } = await this.http
      .put<ConferenceRoomRevision>(
        `${this.basePath}/${areaUUID}/revisions/${revisionUUID}`,
        body,
      )
    return data
  }

  async deleteRevision(
    areaUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${areaUUID}/revisions/${revisionUUID}`,
    )
  }

  async archiveRevision(
    areaUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${areaUUID}/revisions/${revisionUUID}/archive`,
    )
  }

  async publishRevision(
    areaUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${areaUUID}/revisions/${revisionUUID}/publish`,
    )
  }

  async duplicateRevision(
    areaUUID: string,
    revisionUUID: string,
  ): Promise<ConferenceRoomRevision> {
    const { data } = await this.http
      .post<ConferenceRoomRevision>(
        `${this.basePath}/${areaUUID}/revisions/${revisionUUID}/duplicate`,
      )
    return data
  }

  async listActive(
    params: ConferenceRoomActiveParams,
  ): Promise<ConferenceRoom[]> {
    const { data } = await this.http
      .get<ConferenceRoom[]>(
        `${this.basePath}/active`,
        { params },
      )
    return data
  }

  async listInactive(
    params?: { 'categories[]'?: string[] },
  ): Promise<ConferenceRoom[]> {
    const { data } = await this.http
      .get<ConferenceRoom[]>(
        `${this.basePath}/inactive`,
        { params },
      )
    return data
  }

  async listAvailabilities(
    params?: ConferenceRoomAvailabilitiesParams,
  ): Promise<Availability[]> {
    const { data } = await this.http
      .get<Availability[]>(
        `${this.basePath}/availabilities`,
        { params },
      )
    return data
  }

  async listStatus(
    params?: { 'categories[]'?: string[] },
  ): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/status`,
      { params },
    )
    return data
  }
}
