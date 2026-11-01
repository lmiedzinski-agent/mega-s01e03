# Investigate adjacent-day shifts and invite arriving before booking

Reports covered: **5** unique reports from merged ticket #4471.

These five reports do not establish a month/day reversal: R-41202 describes 12 May versus 11 May; R-41209 says June bookings are one day off; R-41236 says the invite arrived before booking; R-41344 says Lisbon and Toronto recipients saw different days; R-41620 says 6 October appeared as Monday. Root cause is unconfirmed. Investigate timezone conversion, date-only serialization, recipient rendering, event identity and message chronology. Do not claim all five share a proven cause: split further when evidence warrants. The supplied classifier groups these as parser using tenant/channel alone. They are excluded from the parser issue here to avoid double counting.

## Scope and evidence

This count is from the 4 October 2026 export, deduplicated by report ID. Intake tags and matching subjects are not diagnostic. The three issue counts partition all 412 unique reports. New desk reports must be reconciled separately.

- R-41202 · kettle.books · email: Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.
- R-41209 · alder.physio · app: Every booking in June is one day off. Only June. Why only June.

## Covered report IDs

R-41202, R-41209, R-41236, R-41344, R-41620
