import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Coupon,
  CouponCreate,
  CouponUpdate,
  CouponListParams,
} from '../types'

export class Coupons extends Resource<
  Coupon,
  Coupon[],
  CouponCreate,
  CouponUpdate,
  CouponListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/coupons')
  }
}
