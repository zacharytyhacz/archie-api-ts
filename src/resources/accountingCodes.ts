import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  AccountingCode,
  AccountingCodeCreate,
  AccountingCodeUpdate,
} from '../types'

export class AccountingCodes extends Resource<
  AccountingCode,
  AccountingCode[],
  AccountingCodeCreate,
  AccountingCodeUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/accountingCodes')
  }
}
