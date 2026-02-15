import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  VisitType,
  VisitTypeCreate,
  VisitTypeUpdate,
} from '../types'

export class VisitTypes extends Resource<
  VisitType,
  VisitType[],
  VisitTypeCreate,
  VisitTypeUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/visitTypes')
  }
}
