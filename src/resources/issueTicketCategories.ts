import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  IssueTicketCategory,
  IssueTicketCategoryCreate,
  IssueTicketCategoryUpdate,
} from '../types'

export class IssueTicketCategories extends Resource<
  IssueTicketCategory,
  IssueTicketCategory[],
  IssueTicketCategoryCreate,
  IssueTicketCategoryUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/issueTicketCategories')
  }
}
