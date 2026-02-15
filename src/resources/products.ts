import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Product,
  ProductCreate,
  ProductUpdate,
  ProductRevision,
} from '../types'

export class Products extends Resource<
  Product,
  Product[],
  ProductCreate,
  ProductUpdate,
  undefined
> {
  constructor(http: AxiosInstance) {
    super(http, '/products')
  }

  async getRevisions(
    uuid: string,
    params: { type: string },
  ): Promise<ProductRevision[]> {
    const { data } = await this.http
      .get<ProductRevision[]>(
        `${this.basePath}/${uuid}/revisions`,
        { params },
      )
    return data
  }

  async createRevision(
    uuid: string,
    body: Partial<ProductRevision>,
  ): Promise<ProductRevision> {
    const { data } = await this.http
      .post<ProductRevision>(
        `${this.basePath}/${uuid}/revisions`,
        body,
      )
    return data
  }

  async updateRevision(
    productUUID: string,
    revisionUUID: string,
    body: Partial<ProductRevision>,
  ): Promise<ProductRevision> {
    const { data } = await this.http
      .put<ProductRevision>(
        `${this.basePath}/${productUUID}/revisions/${revisionUUID}`,
        body,
      )
    return data
  }

  async deleteRevision(
    productUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.delete(
      `${this.basePath}/${productUUID}/revisions/${revisionUUID}`,
    )
  }

  async archiveRevision(
    productUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${productUUID}/revisions/${revisionUUID}/archive`,
    )
  }

  async publishRevision(
    productUUID: string,
    revisionUUID: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${productUUID}/revisions/${revisionUUID}/publish`,
    )
  }
}
