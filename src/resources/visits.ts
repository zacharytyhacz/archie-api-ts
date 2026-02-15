import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Visit,
  VisitCreate,
  VisitUpdate,
  VisitListParams,
  PaginatedResponse,
} from '../types'

export class Visits extends Resource<
  Visit,
  PaginatedResponse<Visit>,
  VisitCreate,
  VisitUpdate,
  VisitListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/visits')
  }
}
