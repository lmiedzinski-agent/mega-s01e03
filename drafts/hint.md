# Booking-v3 date hint disagrees with tenant date interpretation

Reports covered: **33** unique reports from merged ticket #4471.

Booking-v3 prints MM/DD/YYYY while the form reads dates in its day-first tenant convention. Affected form tenants: alder.physio, copper.studio, pale.harbour. Example R-41230: 6 January becomes 1 June. Reproduce by following the hint with an ambiguous date. Align hint, validation, and interpretation. Fixing the shared parser alone does not correct the misleading hint. Assign by tenant locale and form, not browser locale or intakeTag.

## Scope and evidence

This count is from the 4 October 2026 export, deduplicated by report ID. Intake tags and matching subjects are not diagnostic. The three issue counts partition all 412 unique reports. New desk reports must be reconciled separately.

- R-41230 · copper.studio · form: My client came on 1 June instead of 6 January. We sorted it out.
- R-41241 · alder.physio · form: We had two people show up on 8 June. They were booked for 6 August.

## Covered report IDs

R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584
