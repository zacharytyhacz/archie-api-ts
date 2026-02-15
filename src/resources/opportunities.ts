import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Opportunity,
  OpportunityCreate,
  OpportunityUpdate,
} from '../types'

export class Opportunities extends Resource<
  Opportunity,
  Opportunity[],
  OpportunityCreate,
  OpportunityUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/opportunities')
  }
}
