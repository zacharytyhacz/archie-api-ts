import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Benefit,
  BenefitCreate,
  BenefitUpdate,
  BenefitListParams,
  PaginatedResponse,
} from '../types'

export class Benefits extends Resource<
  Benefit,
  PaginatedResponse<Benefit>,
  BenefitCreate,
  BenefitUpdate,
  BenefitListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/benefits')
  }

  async uploadLogo(
    uuid: string,
    data: unknown,
  ): Promise<Benefit> {
    const { data: result } =
      await this.http.post<Benefit>(
        `${this.basePath}/${uuid}/logo`,
        data,
      )
    return result
  }
}
