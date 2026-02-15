import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Tax,
  TaxCreate,
  TaxUpdate,
} from '../types'

export class Taxes extends Resource<
  Tax,
  Tax[],
  TaxCreate,
  TaxUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/taxes')
  }
}
