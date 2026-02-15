import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  BenefitCategory,
  BenefitCategoryCreate,
  BenefitCategoryUpdate,
} from '../types'

export class BenefitCategories extends Resource<
  BenefitCategory,
  BenefitCategory[],
  BenefitCategoryCreate,
  BenefitCategoryUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/benefitCategories')
  }
}
