# Unofficial Archie API SDK

- Type Safety
- Proper response types
- Lightweight

## Note
The official Archie API documentation has some misleading response types.

Not all API methods in this package are 100% accurate and tested YET

## Setup
```
import { Archie } from 'archie-api-ts'

const archie = new Archie({
    clientId: 'your client id',
    clientSecret: 'your client secret',
    spaceDomain: 'coworx-space-1'
})

// Will create and save access token
await archie.authenticate()

// Once authenticated, you can call any API methods

const res = await archie.users.list({
    search: 'John'
})

console.log('All John users:')
console.log(res.data.map((user) => user.fullname))
```
