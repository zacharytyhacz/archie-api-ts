import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  PaymentAccount,
  PaymentAccountCreate,
  PaymentAccountUpdate,
} from '../types'

export class PaymentAccounts extends Resource<
  PaymentAccount,
  PaymentAccount[],
  PaymentAccountCreate,
  PaymentAccountUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/paymentAccounts')
  }
}
