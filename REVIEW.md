# Incident #4471 review

- [Review source](src/routes/kb/incidents/4471-review/+page.svx)
- [Rendered review](build/kb/incidents/4471-review.html) — serve the build directory to view with styles and interactive components.
- [Parser issue](https://github.com/lmiedzinski-agent/mega-s01e03/issues/1): 374 reports
- [Form hint issue](https://github.com/lmiedzinski-agent/mega-s01e03/issues/2): 33 reports
- [Unresolved symptoms](https://github.com/lmiedzinski-agent/mega-s01e03/issues/3): 5 reports; cause unconfirmed

The original export has 427 rows representing 412 unique report IDs. The three issues partition those IDs. Existing components classify 379 as parser and 33 as hint; five symptom exceptions have been separated for investigation rather than treated as proven parser failures.

The supplied accepted decision record is preserved. The review proposes replacing subject-only merging and explains the limitations of the export and classifier.

Build with `npm ci` then `npm run build`. Preview with `npm run preview`, or serve `build/` using a static server.

## Engineering outcome

The course Challenge page subsequently reported #4471 closed on 5 October 2026: parser fixed (`fix(dates): parse dd/mm for eu locales`), hint won't fix because booking-v3 was retired. Issue 1 is completed; issue 2 is not planned. The five anomalous reports are still an open investigation and are not established as resolved by that update.
