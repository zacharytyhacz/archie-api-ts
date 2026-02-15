import type { AxiosInstance } from 'axios'

export type Without<T, K extends keyof T> = Omit<T, K>

export class Resource<
  TOne = unknown,
  TMany = TOne[],
  TCreate = Partial<TOne>,
  TUpdate = Partial<TOne>,
  TListParams = Record<string, unknown>,
> {
  protected readonly http: AxiosInstance
  protected readonly basePath: string

  constructor(http: AxiosInstance, basePath: string) {
    this.http = http
    this.basePath = basePath
  }

  async get(uuid: string): Promise<TOne> {
    const { data } = await this.http.get<TOne>(
      `${this.basePath}/${uuid}`,
    )
    return data
  }

  async list(
    ...args: TListParams extends undefined
      ? []
      : [params?: TListParams]
  ): Promise<TMany> {
    const params = args[0] ?? undefined
    const { data } = await this.http.get<TMany>(
      this.basePath,
      { params },
    )
    return data
  }

  async create(body: TCreate): Promise<TOne> {
    const { data } = await this.http.post<TOne>(
      this.basePath,
      body,
    )
    return data
  }

  async update(
    uuid: string,
    body: TUpdate,
  ): Promise<TOne> {
    const { data } = await this.http.put<TOne>(
      `${this.basePath}/${uuid}`,
      body,
    )
    return data
  }

  async delete(uuid: string): Promise<void> {
    await this.http.delete(`${this.basePath}/${uuid}`)
  }
}
