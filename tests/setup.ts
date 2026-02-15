import 'dotenv/config'
import { Archie } from '../src'

const {
  ARCHIE_CLIENT_ID,
  ARCHIE_CLIENT_SECRET,
  ARCHIE_SPACE_DOMAIN,
} = process.env

if (
  !ARCHIE_CLIENT_ID ||
  !ARCHIE_CLIENT_SECRET ||
  !ARCHIE_SPACE_DOMAIN
) {
  throw new Error(
    'Missing ARCHIE_CLIENT_ID,'
      + ' ARCHIE_CLIENT_SECRET,'
      + ' or ARCHIE_SPACE_DOMAIN env vars'
  )
}

export const archie = new Archie({
  clientId: ARCHIE_CLIENT_ID,
  clientSecret: ARCHIE_CLIENT_SECRET,
  spaceDomain: ARCHIE_SPACE_DOMAIN,
})

let authPromise: Promise<void> | null = null

export function authenticateOnce(): Promise<void> {
  if (!authPromise) {
    authPromise = archie.authenticate()
  }
  return authPromise
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

afterEach(async () => {
  await delay(500)
})
