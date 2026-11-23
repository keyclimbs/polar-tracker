# Polar capabilities

Official documentation could not be resolved from this execution environment. The following matrix is intentionally conservative and must not be presented as verification.

| Feature | Documented resource | Fields / units | API version | Historical window | Prerequisites | Reference | Status |
|---|---|---|---|---|---|---|---|
| OAuth connection | AccessLink authorization | Authorization code, server-side state | AccessLink v3 | N/A | Polar developer application, account/user registration if required by the API | https://www.polar.com/accesslink-api/ | Unverified |
| Sleep | Verify against official sleep resource | Not assumed here | AccessLink v3 or later only after verification | Unverified | Compatible device and user permission | https://www.polar.com/accesslink-api/ | Unavailable/unverified |
| Nightly Recharge | Verify against official resource | Native status/components/units not assumed | AccessLink v3 or later only after verification | Unverified | Compatible device and permission | https://www.polar.com/accesslink-api/ | Unavailable/unverified |
| Exercises | Verify against official exercise resource | Duration, sport, distance, calories, HR/zones only if returned | AccessLink v3 or later only after verification | Unverified | Synced exercise and permission | https://www.polar.com/accesslink-api/ | Unavailable/unverified |
| Activity | Verify against official activity resource | Only fields returned by official schema | AccessLink v3 or later only after verification | Unverified | Compatible device and permission | https://www.polar.com/accesslink-api/ | Unavailable/unverified |
| Webhooks | Verify official events/signatures | Event ID/type/payload as documented | AccessLink v3 or later only after verification | N/A | Registered webhook subscription and signature support | https://www.polar.com/accesslink-api/ | Unavailable/unverified |

No Dynamic API v4 endpoints or payload fields are assumed. No refresh-token support is assumed. Demo fixtures are explicitly labeled.
