import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  PipelineStage,
  PipelineStageCreate,
  PipelineStageUpdate,
} from '../types'

export class PipelineStages extends Resource<
  PipelineStage,
  PipelineStage[],
  PipelineStageCreate,
  PipelineStageUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/pipelines/stages')
  }

  async moveUp(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/moveUp`,
    )
  }
}
