import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Segment,
  SegmentCreate,
  SegmentUpdate,
} from '../types'

export class Segments extends Resource<
  Segment,
  Segment[],
  SegmentCreate,
  SegmentUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/segments')
  }

  async moveUp(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/moveUp`,
    )
  }
}
