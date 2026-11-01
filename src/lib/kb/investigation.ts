import reports from '#lib/data/reports-4471.json';
import notes from '#lib/data/desk-notes.json';
import { uniqueById, causeOf, type Report } from '#lib/kb/causes';
import { tenantOf } from '#lib/kb/locales';

// These are symptom exceptions documented by the desk, not a proven third root cause.
export const unique = uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471);
export const exceptions = new Set(notes.oneDayMove);
export const groups = [
  {key:'parser', title:'Shared parser reverses day and month', reports:unique.filter(r => !exceptions.has(r.id) && causeOf(r,tenantOf(r)) === 'parser')},
  {key:'hint', title:'Booking-v3 date hint conflicts with tenant format', reports:unique.filter(r => !exceptions.has(r.id) && causeOf(r,tenantOf(r)) === 'hint')},
  {key:'investigate', title:'One-day shifts and invite chronology need investigation', reports:unique.filter(r => exceptions.has(r.id))}
];
export const months = [...new Set(unique.map(r=>r.receivedAt.slice(0,7)))].sort().map(month=>({month,received:unique.filter(r=>r.receivedAt.startsWith(month)).length,merged:unique.filter(r=>r.mergedAt?.startsWith(month)).length}));
