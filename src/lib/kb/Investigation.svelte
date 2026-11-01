<script lang="ts">
 import { unique, groups, months } from '#lib/kb/investigation';
 import { causeOf } from '#lib/kb/causes';
 import { tenantOf } from '#lib/kb/locales';
</script>
<p>{unique.length} unique reports in #4471. Counts below partition the reports: each ID appears once.</p>
<table><thead><tr><th>Problem</th><th>Reports</th><th>Evidence</th></tr></thead><tbody>
{#each groups as g}<tr><td>{g.title}</td><td>{g.reports.length}</td><td>{g.reports.slice(0,2).map(r=>r.id).join(', ')}</td></tr>{/each}
</tbody></table>
<p>The supplied tenant rule labels {unique.filter(r=>causeOf(r,tenantOf(r))==='parser').length} reports parser and {unique.filter(r=>causeOf(r,tenantOf(r))==='hint').length} hint. Its parser total includes the symptom exceptions below. These exceptions are not proof of a timezone bug.</p>
<table><thead><tr><th>Exception</th><th>Tenant / channel</th><th>Reporter’s words</th></tr></thead><tbody>
{#each groups[2].reports as r}<tr><td>{r.id}</td><td>{r.tenant} / {r.channel}</td><td>{r.body}</td></tr>{/each}
</tbody></table>
<h2>Reports arrived before the merge</h2>
<table><thead><tr><th>Month</th><th>Received</th><th>Merged</th></tr></thead><tbody>{#each months as m}<tr><td>{m.month}</td><td>{m.received}</td><td>{m.merged}</td></tr>{/each}</tbody></table>
<p>October is a partial month in this export. A merge timestamp records desk work, not when the user first encountered a fault.</p>
