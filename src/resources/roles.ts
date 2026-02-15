import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Role,
  RoleCreate,
  RoleUpdate,
} from '../types'

export class Roles extends Resource<
  Role,
  Role[],
  RoleCreate,
  RoleUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/roles')
  }
}
