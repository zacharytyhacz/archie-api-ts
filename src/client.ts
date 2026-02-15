import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ArchieConfig, AuthResponse } from './types'
import type { Without } from './resource'
import {
  AccountingCodes,
  Amenities,
  BenefitCategories,
  Benefits,
  Bookings,
  BuildingGuideSections,
  Carts,
  CheckIns,
  ConferenceRooms,
  Coupons,
  CreditNotes,
  DayPasses,
  EntityDeposits,
  Events,
  Files,
  Groups,
  Invoices,
  IssueTicketCategories,
  IssueTickets,
  LeadsForms,
  Opportunities,
  PaymentAccounts,
  PaymentMethods,
  Payments,
  PipelineStages,
  Plans,
  PresenceLogs,
  PrintingAccounts,
  Products,
  Purchases,
  Quotas,
  Roles,
  Segments,
  Subscriptions,
  Taxes,
  Users,
  VisitTypes,
  Visits,
} from './resources'

const BASE_URL = 'https://api.archieapp.co/v1'

export class Archie {
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly spaceDomain: string
  readonly http: AxiosInstance

  readonly accountingCodes: Without<
    AccountingCodes, 'get'
  >
  readonly amenities: Without<Amenities, 'get'>
  readonly benefitCategories: Without<
    BenefitCategories, 'get'
  >
  readonly benefits: Without<Benefits, 'get'>
  readonly bookings: Bookings
  readonly buildingGuideSections: Without<
    BuildingGuideSections, 'get'
  >
  readonly carts: Carts
  readonly checkIns: CheckIns
  readonly conferenceRooms: ConferenceRooms
  readonly coupons: Without<Coupons, 'get'>
  readonly creditNotes: CreditNotes
  readonly dayPasses: DayPasses
  readonly entityDeposits: EntityDeposits
  readonly events: Events
  readonly files: Files
  readonly groups: Groups
  readonly invoices: Invoices
  readonly issueTicketCategories: Without<
    IssueTicketCategories, 'get'
  >
  readonly issueTickets: IssueTickets
  readonly leadsForm: LeadsForms
  readonly opportunities: Without<
    Opportunities, 'get'
  >
  readonly paymentAccounts: Without<
    PaymentAccounts, 'get'
  >
  readonly paymentMethods: PaymentMethods
  readonly payments: Payments
  readonly pipelineStages: Without<
    PipelineStages, 'get'
  >
  readonly plans: Plans
  readonly presenceLogs: PresenceLogs
  readonly printingAccounts: PrintingAccounts
  readonly products: Products
  readonly purchases: Purchases
  readonly quotas: Quotas
  readonly roles: Without<Roles, 'get'>
  readonly segments: Without<Segments, 'get'>
  readonly subscriptions: Subscriptions
  readonly taxes: Without<Taxes, 'get'>
  readonly users: Users
  readonly visitTypes: Without<VisitTypes, 'get'>
  readonly visits: Visits

  constructor(config: ArchieConfig) {
    this.clientId = config.clientId
    this.clientSecret = config.clientSecret
    this.spaceDomain = config.spaceDomain

    this.http = axios.create({
      baseURL:
        BASE_URL + `/spaces/${this.spaceDomain}`,
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
    })

    this.accountingCodes =
      new AccountingCodes(this.http)
    this.amenities = new Amenities(this.http)
    this.benefitCategories =
      new BenefitCategories(this.http)
    this.benefits = new Benefits(this.http)
    this.bookings = new Bookings(this.http)
    this.buildingGuideSections =
      new BuildingGuideSections(this.http)
    this.carts = new Carts(this.http)
    this.checkIns = new CheckIns(this.http)
    this.conferenceRooms =
      new ConferenceRooms(this.http)
    this.coupons = new Coupons(this.http)
    this.creditNotes = new CreditNotes(this.http)
    this.dayPasses = new DayPasses(this.http)
    this.entityDeposits =
      new EntityDeposits(this.http)
    this.events = new Events(this.http)
    this.files = new Files(this.http)
    this.groups = new Groups(this.http)
    this.invoices = new Invoices(this.http)
    this.issueTicketCategories =
      new IssueTicketCategories(this.http)
    this.issueTickets = new IssueTickets(this.http)
    this.leadsForm = new LeadsForms(this.http)
    this.opportunities =
      new Opportunities(this.http)
    this.paymentAccounts =
      new PaymentAccounts(this.http)
    this.paymentMethods =
      new PaymentMethods(this.http)
    this.payments = new Payments(this.http)
    this.pipelineStages =
      new PipelineStages(this.http)
    this.plans = new Plans(this.http)
    this.presenceLogs = new PresenceLogs(this.http)
    this.printingAccounts =
      new PrintingAccounts(this.http)
    this.products = new Products(this.http)
    this.purchases = new Purchases(this.http)
    this.quotas = new Quotas(this.http)
    this.roles = new Roles(this.http)
    this.segments = new Segments(this.http)
    this.subscriptions =
      new Subscriptions(this.http)
    this.taxes = new Taxes(this.http)
    this.users = new Users(this.http)
    this.visitTypes = new VisitTypes(this.http)
    this.visits = new Visits(this.http)
  }

  async authenticate(): Promise<void> {
    const { data } =
      await this.http.post<AuthResponse>(
        '/authenticate',
        {
          client_id: this.clientId,
          client_secret: this.clientSecret,
        },
        { baseURL: BASE_URL },
      )

    this.http.defaults.headers
      .common.Authorization =
        `Bearer ${data.access_token}`
  }
}
