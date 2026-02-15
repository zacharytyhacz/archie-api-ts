import type { AxiosInstance } from 'axios'
import type { File as ArchieFile } from '../types'

export class Files {
  private readonly http: AxiosInstance
  private readonly basePath = '/files'

  constructor(http: AxiosInstance) {
    this.http = http
  }

  async list(
    type: string,
  ): Promise<ArchieFile[]> {
    const { data } = await this.http
      .get<ArchieFile[]>(
        this.basePath,
        { params: { type } },
      )
    return data
  }
}
