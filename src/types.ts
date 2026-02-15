// ── Auth & Config ──

export interface ArchieConfig {
  clientId: string
  clientSecret: string
  spaceDomain: string
}

export interface AuthResponse {
  access_token: string
  expires_in: number
  refresh_token: string
}

export interface TokenState {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

// ── Errors ──

export interface ArchieError {
  error: {
    message_code: string
    message: string
    type: string
    invalid_parameters?: Record<string, unknown>
    params?: {
      permission_required?: string
      [key: string]: unknown
    }
  }
  request_uuid: string
}

// ── Pagination ──

export interface PaginatedResponse<T> {
  data: T[]
  total_count: number
  has_more: boolean
  next_token: string
}

export interface PaginationParams {
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  startAfter?: string
}

// ── Shared / Common ──

export interface TaxDetail {
  amount: number
  name: string
  number: string
  percentage: number
}

export interface Tax {
  creation_date: string
  default: boolean
  href: string
  name: string
  number: string
  percentage: number
  slug: string
  update_date: string
  uuid: string
}

export interface TaxNumber {
  name: string
  value: string
}

export interface AvailableTime {
  day: string
  end: string
  start: string
}

export interface File {
  content_type: string
  creation_date: string
  filename: string
  generation_status: string
  href: string
  size: number
  update_date: string
  uuid: string
}

export interface CustomFieldResult {
  [key: string]: unknown
}

// ── Accounting Codes ──

export interface AccountingCode {
  code: string
  creation_date: string
  href: string
  name: string
  update_date: string
  uuid: string
}

export type AccountingCodeCreate =
  Omit<AccountingCode, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type AccountingCodeUpdate =
  Partial<AccountingCodeCreate>

// ── Amenities ──

export interface Amenity {
  categories: string[]
  creation_date: string
  description: string
  href: string
  name: string
  update_date: string
  uuid: string
}

export type AmenityCreate =
  Omit<Amenity, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type AmenityUpdate = Partial<AmenityCreate>

// ── Benefit Categories ──

export interface BenefitCategory {
  creation_date: string
  href: string
  name: string
  slug: string
  update_date: string
  uuid: string
}

export type BenefitCategoryCreate =
  Omit<BenefitCategory, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type BenefitCategoryUpdate =
  Partial<BenefitCategoryCreate>

// ── Benefits ──

export interface Benefit {
  category: BenefitCategory
  creation_date: string
  description: string
  how_to_use_it: string
  href: string
  link: string
  logo_picture: string
  offer: string
  provider: string
  update_date: string
  uuid: string
}

export type BenefitCreate =
  Omit<Benefit, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type BenefitUpdate = Partial<BenefitCreate>

export interface BenefitListParams
  extends PaginationParams {
  categoryUUIDs?: string[]
}

// ── Bookings ──

export interface BookingRecurrence {
  by_month?: number[]
  by_month_day?: number[]
  by_set_pos?: number[]
  by_week_day?: string[]
  count?: number
  frequency?: string
  interval?: number
  recurrence_end_type?: string
  until?: string
}

export interface Booking {
  uuid: string
  creation_date: string
  update_date: string
  href: string
  subscriber_type: string
  beneficiary_type: string
  item_type: string
  start_date: string
  only_physical_check_in: boolean
  continuous: boolean
  end_date: string
  period_unit: string
  period_count: number
  note: string
  name: string
  description: string
  full_day: boolean
  attendees_count: number
  reservation_number: string
  attendees_notified: unknown[]
  visibility: string
  check_ins: unknown[]
  booking_key: string
  is_master: boolean
  shared_dates: unknown[]
  cancelled: boolean
  buffer_time: number
  field_results: unknown | null
  approval_status: string

  user_subscriber: User
  user_beneficiary: User
  responsible: User

  conference_room: ConferenceRoom
  space: Space
  invoice: Invoice
}

export type BookingCreate =
  Omit<Booking, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type BookingUpdate = Partial<BookingCreate>

export interface BookingListParams
  extends PaginationParams {
  search?: string
  startDate?: string
  endDate?: string
  withCancelled?: boolean
  'types[]'?: string[]
  itemType?: string
  'categories[]'?: string[]
}

export interface BookingCalculatePricesRequest {
  [key: string]: unknown
}

export interface BookingCalculateFinalPricesRequest {
  [key: string]: unknown
}

export interface BookingCalculateRecurrenceRequest {
  [key: string]: unknown
}

export interface BookingSubmitRequest {
  [key: string]: unknown
}

export interface BookingRescheduleRequest {
  [key: string]: unknown
}

export interface BookingRescheduleAvailabilitiesParams {
  startDate: string
  periodUnit: string
  period: number
}

export interface BookingExportCSVParams {
  startDate: string
  endDate: string
  withCancelled?: string
  'columns[]'?: string[]
}

// ── Building Guide Sections ──

export interface BuildingGuideSection {
  creation_date: string
  files: File[]
  href: string
  rank: number
  text: string
  title: string
  update_date: string
  uuid: string
}

export type BuildingGuideSectionCreate =
  Omit<BuildingGuideSection, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type BuildingGuideSectionUpdate =
  Partial<BuildingGuideSectionCreate>

// ── Carts ──

export interface CartItem {
  auto_assign?: boolean
  beneficiaries?: CartItemBeneficiary[]
  key?: string
  name?: string
  plan?: Plan
  plan_revision?: PlanRevision
  product?: Product
  product_revision?: ProductRevision
  recurrence?: string
  revision_uuid?: string
  type?: string
  uuid?: string
  [key: string]: unknown
}

export interface CartItemBeneficiary {
  billing_start_date?: string
  continuous?: boolean
  coupon_code?: string
  discount?: number
  discount_amount?: number
  discount_end_date?: string
  end_date?: string
  entities?: { type: string; uuid: string }[]
  period?: number
  period_unit?: string
  quantity?: number
  recurrence?: string
  start_date?: string
  type?: string
  uuid?: string
  [key: string]: unknown
}

export interface Cart {
  charges: CartItem[]
  contains_static_quotas: boolean
  creation_date: string
  custom_products: unknown[]
  day_passes: CartItem[]
  deposits: CartItem[]
  group: Group
  href: string
  payer_type: string
  payer_uuid: string
  payment: Payment
  payment_method: PaymentMethod
  plans: CartItem[]
  products: CartItem[]
  send_documents_for_signature: boolean
  state: string
  subscriber_type: string
  subscriber_uuid: string
  tickets: CartItem[]
  update_date: string
  user: User
  uuid: string
  [key: string]: unknown
}

export interface CartPrice {
  billing_day: number
  cart_uuid: string
  currency: string
  purchases: unknown[]
  subscriptions: unknown[]
  total: number
  total_with_discount: number
  total_with_discount_with_taxes: number
  total_with_taxes: number
  [key: string]: unknown
}

export interface CartForecast {
  [key: string]: unknown
}

// ── Check-Ins ──

export interface CheckIn {
  auto_assign: boolean
  cancelled: boolean
  check_in_date: string
  creation_date: string
  entity_type: string
  entity_uuid: string
  expire_date: string
  href: string
  quota_uuid: string
  responsible: User
  type: string
  update_date: string
  uuid: string
}

export interface CheckInListParams {
  date?: string
}

// ── Conference Rooms (Areas) ──

export interface ConferenceRoomRevision {
  available_times: AvailableTime[]
  creation_date: string
  daily_billing_mode: string
  daily_price: number
  entity_name: string
  entity_type: string
  entity_uuid: string
  half_day_billing_mode: string
  half_day_price: number
  hourly_billing_mode: string
  hourly_price: number
  href: string
  number: number
  single_use: boolean
  state: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface ConferenceRoom {
  accounting_code: AccountingCode
  allow_daily_bookings: boolean
  allow_half_day_bookings: boolean
  allow_hourly_bookings: boolean
  amenities: Amenity[]
  archived: boolean
  ask_attendees: boolean
  auto_assign: boolean
  buffer_time: number
  cancellable: boolean
  cancellation_delay: number
  category: string
  color: string
  creation_date: string
  current_revision: ConferenceRoomRevision
  current_revisions: ConferenceRoomRevision[]
  description: string
  href: string
  interval: number
  invoice_description: string
  is_available: boolean
  logo_picture: string
  name: string
  need_to_know: string
  number_seats: number
  rank: number
  requires_approval: boolean
  slug: string
  surface: number
  taxes: Tax[]
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type ConferenceRoomCreate =
  Omit<ConferenceRoom, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type ConferenceRoomUpdate =
  Partial<ConferenceRoomCreate>

export interface ConferenceRoomListParams {
  'categories[]'?: string[]
  withArchived?: boolean
}

export interface ConferenceRoomActiveParams {
  'categories[]'?: string[]
  startDate?: string
  periodUnit: string
  period?: string
  numberSeats?: string
  fullDay?: boolean
  'amenities[]'?: string[]
}

export interface ConferenceRoomAvailabilitiesParams {
  'areaUUIDs[]'?: string[]
  startDate?: string
  periodUnit?: string
  period?: string
  fullDay?: boolean
  includeChildren?: boolean
}

export interface Availability {
  end_date: string
  item_type: string
  item_uuid: string
  quantity: number
  reason: string
  start_date: string
  unit: string
}

// ── Coupons ──

export interface Coupon {
  applied_type: string
  area_uuids: string[]
  code: string
  creation_date: string
  day_pass_uuids: string[]
  discount: number
  discount_amount: number
  group_uuids: string[]
  href: string
  item_types: string[]
  per_account_redeem: number
  period_count: number
  period_infinite: boolean
  period_unit: string
  plan_uuids: string[]
  product_uuids: string[]
  remaining: number
  total_quantity: number
  type: string
  update_date: string
  user_uuids: string[]
  uuid: string
  valid_from: string
  valid_to: string
}

export type CouponCreate =
  Omit<Coupon, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type CouponUpdate = Partial<CouponCreate>

export interface CouponListParams {
  startDate?: string
  endDate?: string
}

// ── Credit Notes ──

export interface CreditNote {
  amount_remaining: number
  billed_entity_name: string
  billed_entity_type: string
  creation_date: string
  credit_note_date: string
  due_date: string
  edited: boolean
  href: string
  labels: string[]
  lines: InvoiceLine[]
  note: string
  price: number
  price_with_discount: number
  price_with_discount_taxes: number
  price_with_discount_taxes_details: TaxDetail[]
  price_with_discount_with_taxes: number
  reference: string
  space_currency: string
  state: string
  sync_state: string
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type CreditNoteCreate =
  Omit<CreditNote, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type CreditNoteUpdate =
  Partial<CreditNoteCreate>

export interface CreditNoteListParams
  extends PaginationParams {
  startDate?: string
  endDate?: string
  'status[]'?: string[]
  'syncStatus[]'?: string[]
  search?: string
}

export interface CreditNoteLine {
  accounting_code: AccountingCode
  creation_date: string
  deleted: boolean
  description: string
  discount: number
  discount_amount: number
  href: string
  key: string
  price: number
  price_with_discount: number
  price_with_discount_with_taxes: number
  quantity: number
  taxes: Tax[]
  type: string
  unit_price: number
  [key: string]: unknown
}

// ── Day Passes ──

export interface DayPassRevision {
  allow_inventory_selection: boolean
  availability_infinite: boolean
  creation_date: string
  entity_name: string
  entity_type: string
  entity_uuid: string
  expiration_count: number
  expiration_unit: string
  hours_per_day: number
  href: string
  number: number
  single_use: boolean
  state: string
  unit_price: number
  update_date: string
  uuid: string
}

export interface DayPass {
  accounting_code: AccountingCode
  always_available: boolean
  archived: boolean
  available_times: AvailableTime[]
  creation_date: string
  current_revision: DayPassRevision
  current_revisions: DayPassRevision[]
  description: string
  href: string
  invoice_description: string
  logo_picture: string
  name: string
  rank: number
  slug: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type DayPassCreate =
  Omit<DayPass, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type DayPassUpdate = Partial<DayPassCreate>

// ── Entity Deposits ──

export interface EntityDeposit {
  amount: number
  creation_date: string
  currency: string
  href: string
  status: string
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface EntityDepositListParams
  extends PaginationParams {
  'depositUUIDs[]'?: string[]
}

// ── Events ──

export interface Event {
  author: User
  cancelled: boolean
  category: string
  category_other: string
  cover: string
  creation_date: string
  description: string
  end_date: string
  external_tickets_sale: boolean
  external_tickets_sale_link: string
  href: string
  slug: string
  space: Space
  start_date: string
  tickets: unknown[]
  title: string
  type: string
  update_date: string
  uuid: string
}

// ── Groups ──

export interface Group {
  archived: boolean
  business_number: string
  city: string
  company_name: string
  country: string
  creation_date: string
  department: string
  email: string
  href: string
  invoice_recipients: string[]
  manager: User
  name: string
  phone: string
  postal_code: string
  slug: string
  street_address: string
  tax_numbers: TaxNumber[]
  update_date: string
  users: User[]
  uuid: string
  [key: string]: unknown
}

export type GroupCreate =
  Omit<Group, 'uuid' | 'href' | 'creation_date' | 'update_date' | 'users'>

export type GroupUpdate = Partial<GroupCreate>

export interface GroupListParams
  extends PaginationParams {
  'primaryLocations[]'?: string[]
  withArchived?: string
  name?: string
  onlyNewThisMonth?: string
}

// ── Invoices ──

export interface InvoiceLine {
  accounting_code: AccountingCode
  creation_date: string
  deleted: boolean
  description: string
  discount: number
  discount_amount: number
  href: string
  key: string
  price: number
  price_with_discount: number
  price_with_discount_with_taxes: number
  quantity: number
  taxes: Tax[]
  type: string
  unit_price: number
  [key: string]: unknown
}

export interface Invoice {
  amount_remaining: number
  billed_entity_name: string
  billed_entity_type: string
  creation_date: string
  due_date: string
  edited: boolean
  href: string
  invoice_date: string
  labels: string[]
  lines: InvoiceLine[]
  note: string
  price: number
  price_with_discount: number
  price_with_discount_taxes: number
  price_with_discount_taxes_details: TaxDetail[]
  price_with_discount_with_taxes: number
  reference: string
  space_currency: string
  state: string
  sync_state: string
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type InvoiceCreate =
  Omit<Invoice, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type InvoiceUpdate = Partial<InvoiceCreate>

export interface InvoiceListParams
  extends PaginationParams {
  startDate?: string
  endDate?: string
  'status[]'?: string[]
  'syncStatus[]'?: string[]
  onlyOverdue?: boolean
  search?: string
}

// ── Issue Ticket Categories ──

export interface IssueTicketCategory {
  creation_date: string
  href: string
  name: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type IssueTicketCategoryCreate =
  Omit<IssueTicketCategory, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type IssueTicketCategoryUpdate =
  Partial<IssueTicketCategoryCreate>

// ── Issue Tickets ──

export interface IssueTicket {
  assigned_user: User
  attachments: File[]
  author: User
  category: IssueTicketCategory
  creation_date: string
  description: string
  href: string
  note: string
  status: string
  subject: string
  tracking_number: string
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type IssueTicketCreate =
  Omit<IssueTicket, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type IssueTicketUpdate =
  Partial<IssueTicketCreate>

export interface IssueTicketListParams {
  'status[]'?: string[]
}

// ── Leads Form ──

export interface LeadsForm {
  creation_date: string
  description: string
  href: string
  pipeline_stage: PipelineStage
  rows: unknown[][]
  title: string
  update_date: string
  uuid: string
}

export interface LeadsFormSubmission {
  creation_date: string
  fields: CustomFieldResult[]
  href: string
  update_date: string
  user: User
  uuid: string
}

export interface LeadsFormSubmissionListParams
  extends PaginationParams {
  startDate?: string
  endDate?: string
}

// ── Notes ──

export interface Note {
  creation_date: string
  href: string
  text: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type NoteCreate =
  Omit<Note, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type NoteUpdate = Partial<NoteCreate>

// ── Opportunities ──

export interface Opportunity {
  amount: number
  author: User
  creation_date: string
  entity_type: string
  entity_uuid: string
  group: Group
  href: string
  number_members: number
  pipeline_stage: PipelineStage
  update_date: string
  user: unknown
  uuid: string
  [key: string]: unknown
}

export type OpportunityCreate =
  Omit<Opportunity, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type OpportunityUpdate =
  Partial<OpportunityCreate>

// ── Payment Accounts ──

export interface PaymentAccount {
  creation_date: string
  href: string
  name: string
  type: string
  update_date: string
  uuid: string
}

export type PaymentAccountCreate =
  Omit<PaymentAccount, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type PaymentAccountUpdate =
  Partial<PaymentAccountCreate>

// ── Payment Methods ──

export interface PaymentMethod {
  brand: string
  creation_date: string
  entity_type: string
  entity_uuid: string
  exp_month: string
  exp_year: string
  expired: boolean
  href: string
  last4: string
  primary: boolean
  provider_type: string
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

// ── Payments ──

export interface Payment {
  amount: number
  cancelled: boolean
  creation_date: string
  currency: string
  href: string
  note: string
  payment_account: PaymentAccount
  payment_date: string
  payment_method: PaymentMethod
  status: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface PaymentListParams
  extends PaginationParams {
  search?: string
  startDate?: string
  endDate?: string
  status?: string
  chargeID?: string
}

// ── Pipeline Stages ──

export interface PipelineStage {
  creation_date: string
  href: string
  name: string
  rank: number
  slug: string
  update_date: string
  uuid: string
}

export type PipelineStageCreate =
  Omit<PipelineStage, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type PipelineStageUpdate =
  Partial<PipelineStageCreate>

// ── Plans ──

export interface PlanRevision {
  creation_date: string
  entity_name: string
  entity_type: string
  entity_uuid: string
  href: string
  number: number
  single_use: boolean
  state: string
  unit_price: number
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface Plan {
  allow_self_cancellation: boolean
  always_available: boolean
  archived: boolean
  available_times: AvailableTime[]
  creation_date: string
  current_revision: PlanRevision
  current_revisions: PlanRevision[]
  description: string
  href: string
  invoice_description: string
  logo_picture: string
  name: string
  rank: number
  recurrence: string
  slug: string
  taxes: Tax[]
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type PlanCreate =
  Omit<Plan, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type PlanUpdate = Partial<PlanCreate>

export interface PlanListParams {
  startDate?: string
  endDate?: string
}

// ── Presence Logs ──

export interface PresenceLog {
  check_in_date: string
  check_in_responsible: User
  check_in_type: string
  check_out_date: string
  check_out_responsible: User
  check_out_type: string
  creation_date: string
  href: string
  physical_check_in: boolean
  physical_check_out: boolean
  update_date: string
  user: User
  uuid: string
}

// ── Printing Accounts ──

export interface PrintingAccount {
  access_code: string
  creation_date: string
  href: string
  provider_type: string
  update_date: string
  user: User
  uuid: string
  [key: string]: unknown
}

// ── Products ──

export interface ProductRevision {
  creation_date: string
  entity_name: string
  entity_type: string
  entity_uuid: string
  href: string
  number: number
  single_use: boolean
  state: string
  unit_price: number
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface Product {
  allow_self_cancellation: boolean
  always_available: boolean
  archived: boolean
  cancellable: boolean
  category: unknown
  color: string
  creation_date: string
  current_revision: ProductRevision
  current_revisions: ProductRevision[]
  description: string
  href: string
  invoice_description: string
  logo_picture: string
  name: string
  one_time: boolean
  quantity: number
  rank: number
  slug: string
  taxes: Tax[]
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type ProductCreate =
  Omit<Product, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type ProductUpdate = Partial<ProductCreate>

// ── Purchases ──

export interface Purchase {
  beneficiary_type: string
  cancelled: boolean
  coupon: Coupon
  creation_date: string
  discount: number
  href: string
  order_number: string
  payer_type: string
  pending: boolean
  price: number
  price_with_discount: number
  price_with_discount_with_taxes: number
  product: Product
  quantity_count: number
  start_date: string
  subscriber_type: string
  taxes: Tax[]
  type: string
  unit_price: number
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface PurchaseListParams
  extends PaginationParams {
  search?: string
  startDate?: string
  endDate?: string
  'types[]'?: string[]
}

// ── Quotas ──

export interface Quota {
  availability_end_date: string
  availability_infinite: boolean
  availability_start_date: string
  beneficiary_type: string
  count: number
  creation_date: string
  credits: number
  dynamic: boolean
  end_date: string
  href: string
  item_type: string
  key: string
  quantity: number
  recurring: boolean
  recursion_unit: string
  remaining_count: number
  remaining_credits: number
  remaining_quantity: number
  start_date: string
  unit: string
  unlimited: boolean
  update_date: string
  uuid: string
}

export interface QuotaConsumption {
  consumer_item_type: string
  continuous: boolean
  count: number
  creation_date: string
  credits: number
  end_date: string
  href: string
  quantity: number
  quota: Quota
  start_date: string
  unit: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export interface QuotaListParams {
  'itemTypes[]'?: string[]
  startDate?: string
}

export interface QuotaRequest {
  area_categories?: string[]
  area_uuids?: string[]
  continuous?: boolean
  credits?: number
  item_type?: string
  period?: number
  period_unit?: string
  recurring?: boolean
  recursion_unit?: string
  role_uuid?: string
  segment_uuid?: string
  start_date?: string
  unlimited?: boolean
}

// ── Roles ──

export interface Role {
  admin_rights: boolean
  community: boolean
  creation_date: string
  description: string
  href: string
  name: string
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type RoleCreate =
  Omit<Role, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type RoleUpdate = Partial<RoleCreate>

// ── Segments ──

export interface Segment {
  color: string
  creation_date: string
  default: boolean
  description: string
  href: string
  name: string
  rank: number
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type SegmentCreate =
  Omit<Segment, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type SegmentUpdate = Partial<SegmentCreate>

// ── Subscriptions ──

export interface Subscription {
  beneficiary_type: string
  billing_start_date: string
  cancellation_date: string
  continuous: boolean
  creation_date: string
  discount: number
  discount_amount: number
  end_date: string
  href: string
  included_for_free: boolean
  payer_type: string
  period_count: number
  period_unit: string
  plan: Plan
  price: number
  price_with_discount: number
  price_with_discount_with_taxes: number
  product: Product
  start_date: string
  subscriber_type: string
  subscriber_uuid: string
  taxes: Tax[]
  type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type SubscriptionUpdate = Partial<Subscription>

export interface SubscriptionListParams
  extends PaginationParams {
  search?: string
  withEnded?: boolean
  startDate?: string
  endDate?: string
}

// ── Taxes ──

export type TaxCreate =
  Omit<Tax, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type TaxUpdate = Partial<TaxCreate>

// ── Users ──

export interface User {
  archived: boolean
  bio: string
  birthday: string
  calling_code: string
  city: string
  company: string
  connection_status: string
  country: string
  creation_date: string
  email: string
  external_id: string
  firstname: string
  fullname: string
  gender: string
  group_joined_date: string
  href: string
  language: string
  last_connexion: string
  lastname: string
  phone: string
  profile_picture: string
  skills: string[]
  status: string
  title: string
  type: string
  update_date: string
  username: string
  uuid: string
  [key: string]: unknown
}

export type UserCreate =
  Omit<User, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type UserUpdate = Partial<UserCreate>

export interface UserListParams
  extends PaginationParams {
  status?: string
  'primaryLocations[]'?: string[]
  'segmentsUUID[]'?: string[]
  search?: string
  title?: string
  withAdminRights?: boolean
  withArchived?: boolean
  onlyNewThisMonth?: boolean
}

// ── Door Access Accounts ──

export interface DoorAccessAccount {
  creation_date: string
  href: string
  is_pause: boolean
  provider_type: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

// ── Visit Types ──

export interface VisitType {
  capture_picture_on_check_in: boolean
  creation_date: string
  href: string
  is_anonymous: boolean
  name: string
  slug: string
  update_date: string
  uuid: string
  [key: string]: unknown
}

export type VisitTypeCreate =
  Omit<VisitType, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type VisitTypeUpdate =
  Partial<VisitTypeCreate>

// ── Visits ──

export interface Visit {
  admin_note: string
  check_in_date: string
  creation_date: string
  date: string
  email: string
  firstname: string
  guest_door_link: string
  has_door_access_entry: boolean
  host: User
  href: string
  instructions: string
  lastname: string
  phone: string
  picture: string
  presence_logs: PresenceLog[]
  status: string
  update_date: string
  user: User
  uuid: string
  visit_type: VisitType
  walk_in: boolean
  [key: string]: unknown
}

export type VisitCreate =
  Omit<Visit, 'uuid' | 'href' | 'creation_date' | 'update_date'>

export type VisitUpdate = Partial<VisitCreate>

export interface VisitListParams
  extends PaginationParams {
  'hostUUIDs[]'?: string[]
  startDate?: string
  endDate?: string
  badge?: string
  hostName?: string
  guestName?: string
}

export interface Space {
  uuid: string
  creation_date: string
  update_date: string
  href: string
  name: string
  slug: string
  domain: string
  calling_code: string
  phone: string
  website: string
  social_networks: SocialNetworks
  external_booking: boolean
  external_workspace_booking: boolean
  external_shop: boolean
  external_events: boolean
  book_a_tour: boolean
  leads_form: boolean
  external_office_booking: boolean
  time_zone: string
  language: string
  date_format: string
  time_format: string
  first_day_of_week: string
  surface_unit: string
  enable_global_message: boolean
  global_message_text: string
  global_message_link: string
  theme: string
  type: string
  kind: string
  is_demo: boolean
  demo_sales_contact: string
  ios_mobile_app_store_link: string
  android_mobile_app_store_link: string
  apps_flyers_link: string
  one_signal_app_id: string
  one_signal_app_secret: string
  google_tag_manager_id: string
  google_analytics_id: string
  allow_group_manage_members: boolean
  suspended_temporarily: boolean
  dynamic_billing_day: boolean
  visitor_self_check_out: boolean
  visitor_auto_check_out: boolean
  set_new_accounts_auto_charge: boolean
  self_sign_up: boolean
  automatic_credit_note_charge: boolean
  automatic_prepayment_charge: boolean
  minimum_time_interval: number
  hide_archie_branding: boolean
  half_day_break: string
  stripe_customer_id: string
  external_shop_description: string | null
  external_booking_description: string | null
  external_workspace_booking_description: string | null
  external_office_booking_description: string | null
  external_resource_booking_description: string | null
  street_address: string
  city: string
  postal_code: string
  state_province_region: string
  country: string
  billing_street_address: string
  billing_city: string
  billing_postal_code: string
  billing_state_province_region: string
  billing_country: string
  currency: string
  business_hours: BusinessHour[]
  custom_hours: CustomHour[]
  billing_day: number
  invoice_reminder_delay_day: number | null
  booking_reminder_delay_minute: number | null
  limit_bookings_same_category: number | null
  show_prices_with_taxes: boolean
  primary_color: string
  booking_bill_from_booking_date: boolean
  business_number_name: string | null
  business_number: string | null
  menu_tabs_hidden: string[]
  menu_tab_extensions: unknown[]
  emails_sent_count: number
  document_signatures_reminder_delay_day: number | null
  tablet_rooms_settings: Record<string, unknown>
  tablet_visitor_settings: TabletVisitorSettings
  evacuation_settings: EvacuationSettings
  redirect_after_sign_in: string
  invoice_document_name: string
  credit_note_document_name: string
  disable_recurring_booking: boolean
  user_integrations_enabled: string[]
  user_fields_hidden: UserFieldsHidden
  user_fields_visibility: UserFieldsVisibility
  integrations: Record<string, unknown>
  is_primary_location: boolean
  booking_configuration: BookingConfiguration
  visit_check_in_policies: VisitCheckInPolicies
  user_status: string
  invoice_counter: number | null
  credit_note_counter: number | null
  payment_method_rules: unknown[]
  features: unknown | null
}

export type SocialNetworks = {
  facebook: string
  instagram: string
  twitter: string
}

export type BusinessHour = {
  start: string
  end: string
  day: string
}

export type CustomHour = {
  date: string
  reason: string
  filter_segments: unknown[]
}

export type TabletVisitorSettings = {
  enable_deliveries: boolean
  user_notification_delivery_mode: string
  custom_delivery_message: string
  delivery_preselected_users: unknown | null
  force_visit_flow_segments: unknown | null
}

export type EvacuationSettings = {
  enable_alerts: boolean
  start_instructions: string
  phone_number: string
  calling_code: string
  end_instructions: string
  start_pictures: unknown[]
}

export type UserFieldsHidden = {
  gender: boolean
  profile_picture: boolean
  birthday: boolean
  emergency_contact: boolean
}

export type UserFieldsVisibility = {
  gender: string
  profile_picture: string
  birthday: string
  emergency_contact: string
  firstname: string
  lastname: string
  email: string
  phone: string
}

export type BookingConfiguration = {
  room_booking_admins_display: string
  room_booking_users_display: string
  desk_booking_admins_display: string
  desk_booking_users_display: string
  office_booking_admins_display: string
  office_booking_users_display: string
  check_in_policies: unknown[]
  abandoned_protection_policies: unknown[]
}

export type VisitCheckInPolicies = {
  advanced_check_in_window_period_count: number
  advanced_check_in_window_period_unit: string
  in_window_auto_check_in: boolean
  only_physical_check_in: boolean
}
