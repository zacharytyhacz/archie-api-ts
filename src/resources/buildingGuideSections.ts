import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  BuildingGuideSection,
  BuildingGuideSectionCreate,
  BuildingGuideSectionUpdate,
} from '../types'

export class BuildingGuideSections extends Resource<
  BuildingGuideSection,
  BuildingGuideSection[],
  BuildingGuideSectionCreate,
  BuildingGuideSectionUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/buildingGuideSections')
  }

  async moveUp(uuid: string): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/moveUp`,
    )
  }
}
