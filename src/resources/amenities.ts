import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Amenity,
  AmenityCreate,
  AmenityUpdate,
} from '../types'

export class Amenities extends Resource<
  Amenity,
  Amenity[],
  AmenityCreate,
  AmenityUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/amenities')
  }
}
