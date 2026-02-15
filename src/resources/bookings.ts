import type { AxiosInstance } from 'axios'
import { Resource } from '../resource'
import type {
  Booking,
  BookingCreate,
  BookingUpdate,
  BookingListParams,
  BookingRescheduleAvailabilitiesParams,
  BookingExportCSVParams,
  Availability,
  PaginatedResponse,
} from '../types'

export class Bookings extends Resource<
  Booking,
  PaginatedResponse<Booking>,
  BookingCreate,
  BookingUpdate,
  BookingListParams
> {
  constructor(http: AxiosInstance) {
    super(http, '/bookings')
  }

  async cancel(
    uuid: string,
    cancellationType?: string,
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/cancel`,
      null,
      { params: { cancellationType } },
    )
  }

  async generateInvoice(uuid: string): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/${uuid}/generateInvoice`,
    )
    return data
  }

  async reschedule(
    uuid: string,
    body: unknown,
    cancellationType?: string,
  ): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/${uuid}/reschedule`,
      body,
      { params: { cancellationType } },
    )
    return data
  }

  async rescheduleAvailabilities(
    uuid: string,
    params: BookingRescheduleAvailabilitiesParams,
  ): Promise<Availability[]> {
    const { data } = await this.http
      .get<Availability[]>(
        `${this.basePath}/${uuid}/rescheduleAvailabilities`,
        { params },
      )
    return data
  }

  async sendDetails(
    uuid: string,
    emails: string[],
  ): Promise<void> {
    await this.http.post(
      `${this.basePath}/${uuid}/sendDetails`,
      null,
      { params: { 'emails[]': emails } },
    )
  }

  async calculatePrices(body: unknown): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/calculatePrices`,
      body,
    )
    return data
  }

  async calculateFinalPrices(
    body: unknown,
  ): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/calculateFinalPrices`,
      body,
    )
    return data
  }

  async calculateRecurrence(
    body: unknown,
  ): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/calculateRecurrence`,
      body,
    )
    return data
  }

  async exportCSV(
    params: BookingExportCSVParams,
  ): Promise<unknown> {
    const { data } = await this.http.get(
      `${this.basePath}/exportCSV`,
      { params },
    )
    return data
  }

  async importCSV(body: unknown): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/importCSV`,
      body,
    )
    return data
  }

  async submit(body: unknown): Promise<unknown> {
    const { data } = await this.http.post(
      `${this.basePath}/submit`,
      body,
    )
    return data
  }
}
