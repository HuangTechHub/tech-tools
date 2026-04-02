# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## Version 2026.04.02-a65bd7e

### Features
-  add CI/CD workflows for releases, nightly docker builds, testing, and e2e validation (ac5e3a5)

### Merge branch 'main' of https
-  //github.com/HuangTechHub/tech-tools (a65bd7e)

## Version 2026.04.02-13aa4de

### Features
-  add CI/CD workflows for releases, nightly docker builds, testing, and E2E validation (464cd24)

### Merge branch 'main' of https
-  //github.com/HuangTechHub/tech-tools (13aa4de)

## Version 2026.04.02-c0c83dc

### Chores
-  update pnpm lockfile dependencies (c0c83dc)
-  upgrade to Node.js 24 and implement CI/CD workflows for testing, releases, and nightly builds (4cb79cb)

## Version 2026.03.25-970ba4b

### Features
-  add GitHub Actions workflow for automated releases, Docker image builds, and GitHub release creation. (970ba4b)

## Version 2026.03.25-891a4e8

### Features
-  Implement an automated release pipeline for versioning, changelog generation, and publishing artifacts. (85a270c)

### Merge branch 'main' of https
-  //github.com/HuangTechHub/tech-tools (891a4e8)

## Version 2026.03.25-103dd97

### Features
-  add DNS records lookup tool with Cloudflare DNS API integration (103dd97)
-  Implement a DNS records lookup tool and update TypeScript configurations for improved type support. (5b289a4)
-  add new tool for DNS records lookup (1bcc95c)
-  Add initial English localization strings for the application UI and various tools. (79a4df5)
-  Add DNS records lookup tool and associated localization. (e85a4c8)
-  Add GitHub Actions workflow for automated releases, Docker image publishing, and changelog generation. (5a10ae8)

## Version 2026.03.25-4d4332b

### Features
-  add release script for automated versioning, changelog generation, and tagging. (4d4332b)
-  Introduce a release pipeline to automate versioning, changelog updates, Docker builds, and GitHub releases. (7e48886)
-  add x509 cert decoder and dns records lookup tools (cf22383)
-  Add SVG logos for dark and light themes and update README references. (ff7d802)
-  Replace PNG logos with SVG logos and update README to use them. (6aa6e5b)
-  rename project to Tech Tools, add numerous new tools, e2e tests, internationalization, and GitHub workflows. (d330250)
- **sponsor**: added sponsor banner (#1422) (08d977b)
- **i18n**: added Norwegian language (#1337) (aa8cba9)
- **new tool**: Regex Tester (and Cheatsheet) (#1030) (f5c4ab1)
- **new tool**: Markdown to HTML (#916) (87984e2)
- **new-tool**: add email normalizer (#1243) (318fb6e)
- **new tools**: JSON to XML and XML to JSON (#1231) (f1a5489)
- **lorem-ipsum**: add button to refresh text lorem-ipsum (#1213) (e1b4f9a)
- **base64**: Base64 enhancements (#905) (30144aa)
- **i18n**: added German translation (#1038) (2c2fb21)
- **new tool**: Outlook Safelink Decoder (#911) (d3b32cc)
- **new tool**: ascii art generator (#886) (fe349ad)
- **i18n**: get locales on build (#880) (dc04615)
- **i18n**: added vi tools translations (#876) (079aa21)
- **i18n**: added zh tools translations (#874) (9c6b122)
- **i18n**: added missing locale files in tools (#863) (7f5fa00)
- **i18n**: added vietnamese language (#859) (1334bff)
- **i18n**: added spanish language (#854) (85b50bb)
- **i18n**: added portuguese language (#813) (c65ffb6)
- **i18n**: added ukrainian language (#827) (693f362)
- **new-tool**: yaml formater (#779) (fc06f01)
- **new-tool**: added unicode conversion utilities (#858) (c46207f)
- **i18n**: improve chinese i18n (#757) (2e56641)
- **i18n**: add tooltip and favoriteButton i18n (#756) (a1037cf)
- **i18n**: add Chinese translation base (#718) (8f99eb6)
- **new tool**: pdf signature checker (#745) (4781920)
- **new tool**: numeronym generator (#729) (e07e2ae)
- **i18n**: language selector (#710) (e86fd96)
- **command-palette**: clear prompt on palette close (#708) (d013696)
- **command-palette**: added about page in command palette (99b1eb9)
- **new tool**: random MAC address generator (#657) (cc3425d)
- **case-converter**: added mocking case (#705) (681f7bf)
- **date-converter**: added excel date time format (#704) (f5eb7a8)
- **i18n**: token generator (#688) (02e68d3)
- **i18n**: home page (#687) (00562ed)
- **i18n**: support for i18n in .ts files (#683) (ebb4ec4)
- **i18n**: tool card (#682) (84a4a64)
- **i18n**: about page (#680) (a2b53c2)
- **i18n**: 404 page (#679) (35563b8)
- **new tool**: text to ascii converter (#669) (b2ad4f7)
- **new tool**: ULID generator (#623) (5c4d775)
- **new tool**: add wifi qr code generator (#599) (0eedce6)
- **new tool**: iban validation and parser (#591) (3a63837)
- **new tool**: text diff and comparator (#588) (81bfe57)
- **copy**: support legacy copy to clipboard for older browser (#581) (6f93cba)
- **new tool**: string obfuscator (#575) (c58d6e3)
- **Case Converter**: Add lowercase and uppercase (#534) (7b6232a)
- **new tool**: emoji picker (#551) (93f7cf0)
- **ui**: added c-select in the ui lib (#550) (dfa1ba8)
- **new-tool**: password strength analyzer (#502) (a9c7b89)
- **new-tool**: yaml to toml (e29b258)
- **new-tool**: json to toml (ea50a3f)
- **new-tool**: toml to yaml (746e5bd)
- **new-tool**: toml to json (c7d4f11)
- **command-palette**: random tool action (ec4c533)
- **config**: allow app to run in a subfolder via BASE_URL (#461) (6304595)
- **new-tool**: percentage calculator (#456) (b9406a4)
- **new-tool**: json to csv converter (69f0bd0)
- **new tool**: xml formatter (#457) (a6bbeae)
- **chmod-calculator**: added symbolic representation (#455) (f771e7a)
- **enhancement**: use system dark mode (#458) (cf7b1f0)
- **phone-parser**: searchable country code select (d2956b6)
- **new tool**: camera screenshot and recorder (34d8e5c)
- **base64-string-converter**: switch to encode and decode url safe base64 strings (#392) (0b20f1c)
- **list-converter**: a small converter who deals with column based data and do some stuff with it (#387) (83a7b3b)
- **new tool**: phone parser and normalizer (ce3150c)
- **ui-lib**: demo pages for c-lib components (92bd835)
- **new-tool**: diff of two json objects (362f2fa)
- **ipv4-range-expander**: expands a given IPv4 start and end address to a valid IPv4 subnet (#366) (df989e2)
- **date converter**: auto focus main input (6d22025)
- **new-tool**: http status codes (8355bd2)
- **cd**: git version tag pushed to docker (dce9ff9)
- **new-tool**: yaml and json converters (c0a8913)
- **new-tool**: generate ula based on timestamp and mac address (#344) (a1e9835)
- **new-tool**: generate ula based on timestamp and mac address (#344) (1d7f8b9)
- **test**: added e2e tests (ec7cb93)
- **new-tool**: ipv4 address converter (d7a503b)
- **new-tool**: ipv4 address converter (28145e0)
- **new-tool**: mac address lookup (076df11)
- **css**: added unocss with attributify preset (001031b)
- **dx**: auto resolve vue components (4ccd73c)
- **dx**: auto import vite plugin (0161395)
- **benchmark-builder**: compute gap and export to bulet list (4d011f1)
- **benchmark-builder**: compute gap and export to bulet list (4a1afb2)
- **new-tool**: add new tool user agent parser (#329) (f350dc1)
- **new-tool**: simple benchmark calculator (2028298)
- **new-tool**: simple benchmark calculator (ff5f38b)
- **new-tool**: simple benchmark calculator (6e84ea4)
- **plausible**: disable plausible instance for self hosted instance (aa4dc04)
- **menu**: collapsible category (15cb033)
- **menu**: collapsible category (24ba0ff)
- **json-prettify**: sort keys (3b625fd)
- **rsa-key-pair-generator**: refresh certs button (165dc93)
- **config**: hide the banner by default (161a21f)
- **new-tool**: IPv4 subnet calculator (c339ab3)
- **new-tool**: add a docker run to docker compose converter (#291) (ffb9957)
- **new-tool**: html wysiwyg editor (f3b1863)
- **new-tool**: RSA key pair generator (30e9149)
- **new-tool**: String to NATO alphabet (0ddf18f)
- **new-tool**: slugify string (6fe4b5a)
- **new-tool**: keycode info (c934c4e)
- **new-tool**: json minify (#265) (f708f50)
- **new-tool**: temperature converter (4607837)
- **new-tool**: jwt parser (#262) (acc7f0a)
- **search-bar**: use cmd + k to focus on mac (bf88836)
- **tracker**: added actions monitoring (bfc2e24)
- **tool**: improved favorite tool management (af075dc)
- **tools**: added favorite tool handling (4cd809b)
- **search-bar**: better search back result (71e98e9)
- **new-tool**: chmod calculator (35b5187)
- **new-tool**: mime type to extension converter (7c9b8ac)
- **date-converter**: added mongodb objectID format (4ef2588)
- **new-tool**: added otp generator (5f16885)
- **config**: added tsx to allowed extension (ea5e7a7)
- **new-tool**: meta tag generator (164e32b)
-  added colored share card (ab7483b)
- **new-tool**: hmac generator (1bc6380)
- **new-tool**: an svg placeholder image generator (129f74c)
- **hash-text**: digest base selector (#254) (422b6eb)
- **new-tool**: added a basic auth generator (bdee93a)
- **new-tool**: added an ETA calculator (125a502)
- **new-tool**: added an SQL prettifier and formatter (d1f95f5)
- **new-tool**: added chronometer (130031c)
- **search**: focus the search bar using Ctrl+K (ab53048)
- **new-tool**: math evaluator (433ba2a)
- **tools**: new badge for recently created tools (11720e6)
- **hash-text**: compute all hashes at the same time (#242) (e9cc499)
- **seo**: added cannonical meta (34bc6a5)
- **new-tool**:  json viewer (d356b14)
-  catch throw on validation (a60f64f)
- **new-tool**: html entities escape/unescape (8e29a97)
- **new-tool**: url parser (2b38d6f)
- **new-tool**: device information (277bd5f)
- **new-tool**: bcrypt (6d5856f)
- **config**: added vercel.json (2e046ad)
-  added commit short sha (668625c)
-  added plausible tracker (0808920)
-  footer in sider (3f03850)
- **nav**: navigation tooltips (b892f50)
- **router**: added legacy routes redirections (dbce46b)
- **ux**: copyable input (1859a9a)
- **tool**: case converter (7a7372d)
- **share**: social image (39746e0)
- **tool**: add lch in color converter (b5243c4)
- **tool**: color converter (4e50b7a)
- **a11y**: aria-label on icon button (5f50275)
- **seo**: pwa and icons (b7193e8)
- **seo**: added robots.txt and humans.txt (cd9a3bc)
-  mobile friendly menu (1e67fa6)
-  added twitter link (d126abc)
- **navbar**: added github link (d4e226e)
- **tool**: qr-code generator (5582d75)
- **tool**: base64 string converter (203b6a9)
- **tool**: crontab generator (358ff45)
- **tool**: text statistics (0a7c325)
- **tool**: lorem ipsum generator (5dcb2ed)
- **tool**: random port generator (7c540f1)
- **tool**: url encode/decode (afac566)
- **tool**: base converter (034c686)
- **tool**: git memo (5cd9997)
- **tool**: date-time converter (2d9cb20)
- **search**: round and clearable searchbar (b112f5f)
- **tool**: bip39-generator (d55329f)
- **tool**: bip39-generator (765c010)
- **seo**: added title + description (5f74037)
- **tool**: encryption (888ab2c)
- **layout**: menu category (9c9be9e)
- **page**: home page layout (57fd14a)
- **page**: added 404 page (3db4f91)
- **tool**: roman-arabic numbers converter (655019c)
- **tool**: uuid v4 generator (3ae6114)
-  persistent theme selection fallback to prefered theme (40e9af0)
- **style**: theme overrides (d542688)
- **style**: dark mode (3e92b7f)
-  search-bar (e8594de)
- **tool**: text hash (0f3b744)
- **tool**: added token generator (40dec52)

### Bug fixes
-  update playwright to latest to support ubuntu-latest 24.04 OS dependencies (d2d10f9)
-  update @vueuse and @unhead dependencies to resolve CI rollup error (06db1f6)
-  register new tools in toolsByCategory router array to fix e2e test 404s (1826e0f)
-  resolve empty test suite errors failing CI (475766a)
- **c-input-text**: set minimum height for input field (#1552) (a4ab7db)
- **locales**: update license from MIT to GPL-3.0 in language files (#1419) (63fbd3b)
- **icons,branding**: swap twitter to X (#1369) (ea8c4ed)
- **FavoriteButton**: pass tool path to favorite button (#1368) (ae13639)
- **readme**: refresh stale contributors graph (#1364) (c7b80fb)
- **yaml-to-json**: allow merge key to be parsed (#1359) (f836666)
- **favorites**: store favorites regardless of languages (#1202) (7ca5933)
- **emoji-picker**: debounced search input (#1181) (76a19d2)
- **format-transformer**: set overflow for output area width (#787) (b430bae)
- **jwt-parser**: prevent UI overflow on small screen (#1095) (dd4b7e6)
- **language**: English language cleanup (#1036) (221ddfa)
- **url-encoder, validation**: typo in validation of url-encoder.vue #1024 (cb5b462)
- **integer base converter**: support bigint (#872) (9eac9cb)
- **bcrypt tool**: allow salt rounds up to 100 (#987) (23f82d9)
- **jwt-parser**: jwt claim array support (#799) (5ed3693)
- **camera-recorder**: stop camera on navigation (#782) (80e46c9)
- **doc**: updated create new tool command in readme (#762) (7a70dbb)
- **base64-file-converter**: fix downloading of index.html content without data preambula (#750) (043e4f0)
- **docker**: rollback armv7 in docker releases (#741) (205e360)
- **eta**: corrected example (#737) (821cbea)
- **dockerfile**: revert replacement of nginx image with non-privileged one (#716) (7d94e11)
- **encryption**: alert on decryption error (#711) (02b0d0d)
- **deps**: fix issue on slugify (#593) (#673) (720201a)
- **deps**: update dependency monaco-editor to ^0.43.0 (#620) (e371ef7)
- **deps**: update dependency sql-formatter to v13 (#606) (c7d4562)
- **deps**: update dependency sql-formatter to v12 (#520) (2bcb77a)
- **deps**: update dependency uuid to v9 (#566) (5e12991)
- **deps**: update dependency mathjs to v11 (#519) (7924456)
- **deps**: update dependency @vueuse/router to v10 (#516) (ea0f27c)
- **copy**: prevent shorthand copy if source is present in useCopy (#559) (86e964a)
- **c-lib**: hide component library shortcut link in non-dev (#557) (56d74d0)
- **emoji picker**: fix copy button (#556) (e5d0ba7)
- **deps**: update dependency @vueuse/head to v1 (#515) (d12dd40)
- **deps**: update dependency country-code-lookup to ^0.1.0 (#493) (8c72e69)
- **deps**: update dependency @vueuse/head to ^0.9.0 (#492) (cec9dea)
- **i18n**: fallback for demo i18n (12d9e5d)
- **typos**: fixed more typos & uppercase JSON (#475) (9526ed8)
- **about**: typos and wording (#474) (7068610)
- **mime-types**: typos (#470) (c4cec9e)
- **sonar**: took down minor sonar warning (4cbd7ac)
- **readme**: typo (105b21b)
- **ipv4-range-expander**: calculate correct for ip addresses where the first octet is lower than 128 (#405) (8c92d56)
- **ipv4-converter**: removed readonly on input (7aed9c5)
- **phone-parser**: use default country code (a43c546)
- **home**: prevent weird blue border on card (3f6c8f0)
- **ts**: cleaned legacy typechecking warning (e88c1d5)
- **mac-address-lookup**: added copy handler on button click (c311e38)
- **mac-address-lookup**: fix typo in mac-address-lookup tool (#345) (d2a2686)
- **roman-numeral-converter**: input validation and feedback (#332) (8930e13)
- **ci**: prevent ci from running twice in pr (2293f63)
- **otp-generator**: editable secret (a599528)
- **docker**: consistent casing in Dockerfile (dee5586)
- **otp-generator**: better computation of token (5281824)
- **docker**: nginx config to redirect to index.html (972ffe6)
- **rsa-key-pair-generator**: correct prime web worker url (f512d09)
- **roman-converter**: replaced incorrect default value (8787ce7)
- **about**: correct git branch in package.json url (6102427)
- **jwt-parser**: prevent [object Object] value (a312ded)
- **case-converter**: allowed diacritics (9634f5d)
- **case-converter**: allowed diacritics (e6c0445)
- **tool-card**: correct text color on light mode for card description (acf8bc1)
- **integer-base-converter**: handle non-decimal char and better error message (8476cf3)
- **ui**: remove icon transparency overlap (35a3760)
- **deps**: added missing optional deps (4975590)
-  removed colored card border (7c449f4)
- **bip39-generator**: cleared an issue with the mnemonic validation (ca7cb44)
- **import**: removed auto added weird .js extension (fda0b0c)
- **eta-calculator**: clamp inputs (#249) (531a25c)
- **bip39-generator**: typo in validation message (7570ad9)
- **base64-to-string**: prevent validation error (8a9e788)
- **wording**: removed spaces before ponctuation (#252) (5f03619)
- **device-information**: handle of unknown values (4f599b6)
- **device-information**: prevent unwanted y-truncature of text (138149e)
- **base64-file**: fixed url slug (412de23)
- **sql-prettifier**: better responsiveness (560fcf3)
- **typo**: fix few typos (6cd25a7)
- **script**: fixed missing paranthesis in tool generator script (1c7257e)
- **text-statistics**: empty text mean 0 words and 0 lines (92ce419)
- **lint**: cleanned index.html (c3a302b)
- **deps**: run dependencie audit auto fix (a16161c)
-  updated license in README (e371e8f)
- **title**: trully reactive tool title (c2e1d59)
-  menu label key value was undefined (f48cd05)
-  tool sorting inconsistencies in home page (5ab4dd3)
- **lint**: missing dangling comma (f05c8e1)
- **config**: updated env values loading (2f61c74)
- **seo**: wrong url in share metas (a88e4a9)
-  update recommended extension ids (#244) (1d7032d)
- **lint**: missing new lines (3cfc5f8)
- **typo**: misspelings (9755e51)
- **base-converter**: responsive input (0b0cbd5)
- **base64-converter**: async onUpload callback (84cf1bb)
- **sider**: default collapsed value (b22aa94)
- **style**: hard width for group labels (ebf6695)
- **sider**: missing href for link in footer (c4dabcc)
- **head**: added titles for non-tool pages (0a15892)
- **url-parser**: cleaned weird margins on dark mode (005ebfb)
- **sider-footer**: fixed commit sha url (ed9046d)
- **git-memo**: pre scroll on overflow (4fc303e)
- **qr-code**: responsive layout (cbf0b3d)
- **menu**: menu auto closed on mobile (71f79a5)
-  remove duplicate property (d066319)
- **style**: url encode/decode layout (34480b4)
-  removed global define (889d594)
- **validation**: proper rules (11d8110)
- **style**: working dark mode persistence (3ae8728)
- **hash-text**: correct copy message (bab92ef)
- **hash-text**: added missing toString() (4ca5fce)

### Refactoring
- **sponsors**: removed sponsor banners (#1553) (07eea0f)
- **sponsor**: removed sponsor banner and related configurations (#1405) (b47d132)
- **regex-tester**: better description (7251700)
- **lint**: removed extra semi (33e5294)
- **auto-imports**: regen auto imports (1242842)
- **home**: lightened tool cards (#882) (a07806c)
- **home**: removed n-grid to prevent layout shift (#881) (10e56b3)
- **i18n**: added locales per tool (#861) (95698cb)
- **about, i18n**: improved i18n dx with markdown (#753) (bd3edcb)
- **token, i18n**: complete fr translation (#752) (de1ee69)
- **uuid generator**: uuid version picker (#751) (38586ca)
- **case converter**: no split on lowercase, uppercase and mocking case (#748) (ca43a25)
- **ui**: replaced legacy n-upload with c-file-upload (#747) (7fe47b3)
- **token**: added password in token generator keywords (#746) (16ffe6b)
- **bcrypt**: fix input label align (#721) (093ff31)
- **math-evaluator**: improved description (e87f4b1)
- **math-evaluator**: improved search and UX (#713) (58de897)
- **ui**: better ui demo preview menu (#664) (015c673)
- **color-converter**: improved color-converter UX (#701) (abb8335)
- **docker**: improved docker config (#700) (020e9cb)
- **c-table**: added description on c-table for accessibility (b408df8)
- **ci**: reduced timeout in e2e (#666) (88b8818)
- **ui**: new c-table ui component (#665) (ee4c853)
- **ui**: removed n-page-header component in user-agent parser (#663) (cbf58fd)
- **ui**: removed n-p components in about page (#662) (a757a51)
- **ui**: switched naive tooltip components to custom ones (#661) (025f556)
- **spelling**: minor corrections to phrasing/spelling (#596) (8a30b6b)
- **i18n**: merge tools scoped locales with global ones (#612) (233d556)
- **c-key-value-list**: got rid of table for layout (#611) (7ab9204)
- **CI**: run e2e against built app and no longer vercel (#610) (18dd140)
- **bcrypt**: fix typo (#604) (e18bae1)
- **navbar**: consistent spacing in navbar buttons (#507) (30f88fc)
- **ui**: remove n-text (#506) (72c98a3)
- **ui**: replaced some n-input to c-input (#505) (05ea545)
- **json-viewer**: input monospace font (#485) (9125dcf)
- **search**: command palette design (#463) (bcb98b3)
- **c-input-text**: force usage of props with default (1e2a35b)
- **naming**: prevent auto import conflicts for git memo (45c2474)
- **imports**: removed unnecessary imports to vue (fe61f0f)
- **ui**: removed all n-space (4d2b037)
- **ui**: replaced some n-input with c-input-text (f7fc779)
- **ui**: replaced some n-input with c-input-text (77f2efc)
- **ui-lib**: prevent c-button to shrink (61ece23)
- **ui**: replaced naive ui cards with custom ones (f080933)
- **clean**: removed unused lodash import (bb32513)
- **clean**: removed useless br tags (74073f5)
- **ui**: getting ride of naive ui buttons (c45bce3)
- **uuid-generator**: prevent NaN in quantity (6fb4994)
- **404**: simplified 404 page (80401b6)
- **date-converter**: improved ux and layout (fd9ab59)
- **dx**: generic data transformer (05f06f6)
- **config**: removed new tools env  config (9fa4c26)
- **lint**: auto fix lint (9d639ed)
- **qr-code**: multiline input (f3480fe)
- **docker-run-converter**: improve error handling (f68e859)
- **docker-run-converter**: improved converter (4872d71)
- **tool**: better new tool logic (fb8a3a0)
- **issue**: better issue template (849981d)
- **new-tool-script**: added new tool creation script in package.json (863c8d0)
- **uuid-generator**: now using computedRefreshable (9b4f772)
- **token-generator**: now using computedRefreshable (cf16cb1)
- **port-generator**: now using computedRefreshable (f623737)
- **import**: removed unused imports (47948dd)
- **html-editor**: use correct letter casing (#292) (91369cb)
- **otp-generator**: coerce lowercase secret characters to uppercase (7c40539)
- **otp-generator**: no more barcode color invertion (b1d6bfd)
- **readme**: better headings levels (dab8d63)
- **branding**: correct branding for twitter & github (#268) (7958e2e)
- **sponsor**: updated support link to buy me a coffe (3351b70)
- **pwa**: prompt for pwa update (53ce079)
- **style**: improved dark mode colors (a771346)
- **tool-card**: enforce description height (32f87f3)
- **tool-card**: enforce description height (a3b1cb5)
- **keycode-info**: wording (1a3f0a1)
- **tools**: config in query params (db817a2)
- **jwt-parser**: simplified code (f52f7a8)
- **tracker**: better tracker injection (def60e7)
- **clean**: removed unused import (4087285)
- **clean**: removed empty style tag (cf723f1)
- **menu**: improve support button (679dd1c)
- **search-bar**: improved tool fuzzy search (1b5d4e7)
- **ui**: change sponsor button location and caption (5d8f46a)
- **otp-generator**: changed url (7f22995)
- **useQRCode**: switched args to MaybeRef (7de6c86)
-  token generator can use a custom alphabet (83da6b7)
- **colored-card**: added transition on like hover (da17696)
- **share**: updated share meta (5222bd5)
- **share**: updated twitter meta tags (992f96b)
- **share**: new share banner (fcf4cfe)
- **validation**: simplified validation management with helpers (f54223f)
- **dry**: mutualised duplicated code with withDefaultOnError (f6cd9b7)
- **lint**: added import rules (208a373)
- **json-prettifier**: more permissive json parser (8089c60)
- **home**: removed new tool first sort (d30cd8a)
- **base64**: mutualized base64 functions into global utilities (447bdf2)
- **chronometer**: improved chronometer precision (e48d60b)
- **lint**: externalization of prettier for simpler IDE support (02c4963)
- **display**: mutualized code display (0be33fb)
- **validation**: simplified validation system (77b5b0c)
- **base64-to-file**: clean validation to convert base64 to file (750a76b)
- **base64-file**: fixed typo (1a22d55)
- **base64**: split base64 text and file conversion in two tools + base64 to file (e6953d1)
- **json-prettify**: improved layout for the json prettifier (328fda6)
- **sql-prettifier**: remove unused service files (ba87097)
- **import**: auto reordered imports (2140842)
-  added accessibility labels on icon buttons (394d085)
-  removed unused import (8fb0e6a)
-  renammed Tool.ts to tool.ts (ac89490)
-  set coerent head title for home page (a46d125)
- **config**: added config management with figue (6becdbb)
- **imports**: removed useless defineProps import (5ce1262)
- **seo**: changed title string (d4ea393)
- **json-viewer**: add clear button (048bc4a)
- **seo**: changed title string (c3b6132)
- **base-layout**: renammed one letter variable (383d975)
- **date-converter**: mutualised and dry-ed code (d2c767f)
-  updated description (b89db3c)
- **responsive**: row layout for multicards on big screens (e21230b)
-  changed twitter account handler (608ec3a)
-  removed useless ref and value (b12cbe4)
- **lint**: linter auto fix (086d31e)
- **menu**: removed burger menu icon tooltip (09abffb)
- **crontab**: list instead of table on small screen (6b11de2)
-  throw an error object instead of string (4112fa5)
-  removed empty sources (a14cac6)
-  lint fix (a58ae24)
-  ref name (5828085)
-  clean imports (724e142)
- **clean**: removed extra console.log (82606f6)
- **style**: label width (fd4426d)
-  removed unused files (c1e7669)
- **style**: updated linter config (6b58ec5)
-  embeded sider scrollbar (f872972)
- **style**: menu item height (8951e87)
-  icon sizes (9bb7fc4)
-  removed theme editor (8559fbd)
-  better icon (0af7d81)
- **style**: improve style for tool-card (65a6896)
- **style**: cleaner layout (1d09a01)
- **style**: responsive layout (2df3f53)
- **style**: menu scrollbar (483cf66)
-  removed unused files (8d9f924)
- **style**: replaced scss style block to less (655d9d2)
- **style**: port display (2632f24)
- **style**: removed extra br (b44539c)
-  menu option key (390ef93)
- **page**: removed unused import (f70fce6)

### Tests
-  align text conversion e2e test expectations with rebranded tech-tools default strings (717c37a)

### Chores
-  remove docker hub deployment to fix IDE secret warnings (7c34b0f)
-  add release_version env definition to appease IDE yaml schema validation (7c08988)
-  update github action container tags for fork (4369229)
- **readme**: remove sponsors section (#1733) (d505845)
- **sponsors**: added warp banner (#1664) (0de73e8)
- **version**: release 2024.10.22-7ca5933 (5732483)
- **sponsors**: fern sponsor banners (#1314) (f962c41)
- **readme**: updated logos (#1294) (6709498)
- **version**: release 2024.05.13-a0bc346 (e876d03)
- **issues**: prevent empty issues (#1078) (a0bc346)
- **issues**: removed old issue templates (#1077) (5a7b0f9)
- **node**: upgraded node version in CI workflows (b59942a)
- **version**: release 2024.05.10-33e5294 (38d5687)
- **issues**: improved issues template (2852c30)
- **issues**: improved bug issue template (#1046) (a799234)
- **version**: release 2023.12.21-5ed3693 (670f735)
- **deps**: switched from oui to oui-data for mac address lookup (#693) (0fe9a20)
- **deps**: update unocss monorepo to ^0.57.0 (#638) (2e396d8)
- **docker**: added armv7 plateform for docker releases (#722) (fe1de8c)
- **version**: release 2023.11.02-7d94e11 (b261499)
- **version**: release 2023.11.01-e164afb (4d5a67d)
- **deps**: clean unused dependencies (#709) (e164afb)
- **deps**: update docker/setup-qemu-action action to v3 (#627) (4365226)
- **deps**: update docker/setup-buildx-action action to v3 (#626) (57ecda1)
- **deps**: update docker/login-action action to v3 (#625) (d8d7a3b)
- **deps**: update docker/build-push-action action to v5 (#624) (d36b18f)
- **deps**: update dependency node to v18.18.2 (#674) (eea9f91)
- **deps**: update dependency node to v18.18.0 (#636) (2d2dffb)
- **deps**: update actions/checkout action to v4 (#613) (4972159)
- **deps**: update dependency unplugin-icons to ^0.17.0 (#609) (f035f48)
- **deps**: update dependency @intlify/unplugin-vue-i18n to ^0.13.0 (#597) (d1dff42)
- **deps**: update dependency @antfu/eslint-config to ^0.41.0 (#585) (a9cd91c)
- **deps**: update dependency typescript to ~5.2.0 (#587) (f3e14fc)
- **version**: release 2023.08.21-6f93cba (2274766)
- **deps**: switched to fucking typescript v5 (#501) (76b2761)
- **deps**: update dependency @antfu/eslint-config to ^0.40.0 (#552) (6ff9a01)
- **deps**: update dependency prettier to v3 (#564) (a2b9b15)
- **deps**: removed @typescript-eslint/parser (#563) (144f86e)
- **deps**: removed ts-pattern (#565) (0f1f659)
- **version**: release 2023.08.16-9bd4ad4 (f235dcd)
- **deps**: update dependency vitest to ^0.34.0 (#562) (9bd4ad4)
- **deps**: update dependency node to v18.17.1 (#560) (65a9474)
- **deps**: update dependency unocss to ^0.55.0 (#561) (85cc7a8)
- **deps**: update dependency @unocss/eslint-config to ^0.55.0 (#553) (4268e25)
- **deps**: update dependency @intlify/unplugin-vue-i18n to ^0.12.0 (#526) (d1c8880)
- **deps**: update docker/login-action action to v2 (#512) (99bc84c)
- **deps**: update dependency jsdom to v22 (#499) (cd5a503)
- **deps**: update dependency @vitejs/plugin-vue-jsx to v3 (#497) (1a60236)
- **deps**: update dependency @vitejs/plugin-vue to v4 (#496) (a249421)
- **deps**: update dependency vite-plugin-pwa to ^0.16.0 (#488) (6498c9b)
- **deps**: update dependency vite to v4 (#503) (f40d7ec)
- **ci**: e2e against vercel deployement (#518) (2e28c50)
- **e2e**: execute e2e against built app (#511) (cf382b5)
- **deps**: update github/codeql-action action to v2 (#513) (0152583)
- **deps**: update node.js to v18 (#514) (38cb61d)
- **deps**: switched from vite-plugin-md to vite-plugin-vue-markdown (#510) (354aed6)
- **deps**: update dependency workbox-window to v7 (#509) (6b8682f)
- **deps**: update dependency vite-svg-loader to v4 (#508) (9e8349d)
- **deps**: update dependency typescript to ~4.9.0 (#481) (f440507)
- **deps**: update dependency vue-tsc to ^0.40.0 (#490) (b0d9a3e)
- **deps**: updated unplugin-auto-import (#504) (5c3bebf)
- **deps**: removed start-server-and-test dependency (8df7cd0)
- **deps**: update dependency c8 to v8 (#498) (6bda2ca)
- **deps**: update dependency @types/jsdom to v21 (#495) (994a1c3)
- **deps**: update node.js to v16.20.1 (#491) (05edaf4)
- **deps**: update dependency vitest to ^0.32.0 (#489) (49eacea)
- **deps**: update actions/checkout action to v3 (#494) (3f7d469)
- **deps**: update dependency unplugin-vue-components to ^0.25.0 (#484) (5f21908)
- **deps**: update dependency unplugin-auto-import to ^0.16.0 (#483) (6cb0845)
- **deps**: update dependency unocss to ^0.53.0 (#482) (38710dc)
- **deps**: update dependency @unocss/eslint-config to ^0.53.0 (#478) (282cfc4)
- **deps**: added renovate.json (#477) (363c2e4)
- **i18n**: tool scoped locales (#471) (1b038c7)
- **wysiwyg-editor**: update tiptap dependencies (732da08)
- **i18n**: setup i18n plugin config (ebfb872)
- **config**: netlify deployment support (#443) (93799af)
- **ci**: shard e2e tests (962a6d6)
- **lint**: switched to a better lint config (33c9b66)
- **version**: release 2023.05.14-77f2efc (b3b6b7c)
- **issues**: updated new tool request issue template (edae4c6)
- **version**: release 2023.04.23-92bd835 (daf2cf0)
- **version**: release 2023.04.14-dbad773 (c68a1fd)
- **release**: create a github release on new version (dbad773)
- **version**: reset CHANGELOG content to support new format (85cb0ff)
- **version**: release v2023.04.13-dce9ff9 (7d7cc99)
- **deps**: updated dependencies (5fa811a)
- **cd**: don't run nightly release if their is no new commits (ebfdb64)
- **cd**: docker nightly releases (1060652)
- **cd**: docker nightly releases (f5c865b)
- **clean**: removed extra console.log (004cb83)
- **docker**: fixed the docker-run command in README (#323) (b3390f6)
- **docker**: arm64 and amd64 as supported platform (#271) (519b169)
- **docker**: it-tools docker container (3bc1f0d)
- **deps**: updated dependencies versions (b519cc9)
- **pwa**: close update notification on update (400654b)
- **release**: 2.19.0 (0720838)
- **release**: 2.18.0 (4a5734d)
- **release**: 2.17.0 (119041c)
- **release**: 2.16.0 (ebb7301)
- **docs**: updated readme (7f96494)
- **git**: added .env to gitignore (274ff02)
- **release**: 2.15.0 (8d09086)
- **release**: 2.14.1 (0ff8534)
- **release**: 2.14.0 (39c8f92)
- **release**: 2.13.0 (94698ce)
- **deps**: upgraded dependencies (8294cd6)
- **release**: 2.12.0 (d3a2936)
- **release**: 2.11.0 (737319e)
-  updated ci workflow to handle pnpm (a77a82f)
- **deps**: switched to pnpm (44d653b)
- **release**: 2.10.3 (cf5e4d9)
- **release**: 2.10.2 (b38ab82)
- **release**: 2.10.1 (04a8e12)
- **release**: 2.10.0 (cc717bc)
- **deps**: updated dependencies (fad4833)
- **release**: 2.9.2 (352365f)
- **release**: 2.9.1 (bb4aac6)
- **release**: 2.9.0 (a70a0f8)
- **release**: 2.8.0 (08ce407)
- **deps**: upgraded naive-ui version (d5738e1)
- **release**: 2.7.0 (99383d2)
- **release**: 2.6.0 (d2f5d3c)
- **release**: 2.5.3 (1dc113a)
- **release**: 2.5.2 (e799745)
-  added missing fields in package.json (c4f9e90)
-  added license file (eff7c23)
- **release**: 2.5.1 (7a01af1)
- **release**: 2.5.0 (ba3b84c)
- **deps**: updated vitest version (a9a6526)
- **release**: 2.4.2 (af0b02d)
- **release**: 2.4.1 (d591a73)
- **release**: 2.4.0 (3aefe83)
-  added pull request template (69f564e)
- **deps**: npm audit fix (347144b)
-  added eslint in recommended extensions (9450537)
- **ci**: run ci on PR (0cc7af6)
- **release**: 2.3.2 (9da56da)
- **release**: 2.3.1 (b64839c)
- **release**: 2.3.0 (9d21fc8)
- **release**: 2.2.1 (81566bc)
- **release**: 2.2.0 (eb2755c)
- **release**: 2.1.0 (3f8c345)
- **release**: 2.0.2 (2b89111)
- **release**: 2.0.1 (dc76856)
- **style**: lint README (1a18b74)
- **release**: 2.0.0 (a8b0d7f)
-  removed cypress integrations (f544928)
-  added standard-version (db21c5a)
- **deps**: removed unused import (5fde776)
- **deps**: removed unused deps (50d2aca)
- **test**: dotted background (1b14740)
- **scripts**: updated tool creation script (24ff652)
- **npm**: updated lint script (bdcb8ba)
- **script**: added tool create helper script (2f49631)
- **docs**: added logo (b4b4ddc)
- **ci**: added stale config (5b13756)
- **fund**: added funding file (51e408d)
- **github**: added issue templates (f73a7c2)
- **ci**: added github actions (56d36ea)
- **deps**: update naive-ui (a87b284)
-  components base (25a8659)
-  first commit (64c92a6)

### Other
-  Merge pull request #1 from HuangTechHub/feature/x509-cert-decoder-and-dns-lookup (15d7851)
-  Update link in README for tech tools (e574128)
-  Update link in README to new domain (1d0a3ee)
-  feat(favorites) drag-and-drop favorites section (#1360) (0b1b98f)
-  feat(html-wysiwyg-editor) h3 fix (#1363) (1314973)
-  feat(page) added the /about page (6154df2)

### Documentation
-  Update project fork attribution and add licensing details in README. (3839ed4)
-  Add fork attribution and maintainer information to README. (f7e1861)
-  Remove contributor graph image and its associated credit from the README. (24cc184)
- **changelog**: update changelog for 2024.10.22-7ca5933 (bd184d9)
- **author**: updated author links (#1316) (1c35ac3)
- **changelog**: update changelog for 2024.05.13-a0bc346 (81cf6b5)
- **changelog**: update changelog for 2024.05.10-33e5294 (9dfd347)
- **changelog**: update changelog for 2023.12.21-5ed3693 (a29ad66)
- **changelog**: update changelog for 2023.11.02-7d94e11 (7964637)
- **changelog**: update changelog for 2023.11.01-e164afb (8174db9)
- **changelog**: update changelog for 2023.08.21-6f93cba (a346175)
- **changelog**: update changelog for 2023.08.16-9bd4ad4 (ba2c589)
- **ide**: updated vscode extensions settings (#472) (847323c)
- **changelog**: update changelog for 2023.05.14-77f2efc (141c124)
- **changelog**: update changelog for 2023.04.23-92bd835 (b7aaea1)
- **changelog**: update changelog for 2023.04.14-dbad773 (46b1a07)
- **docker**: added self hosting command in README (96aaa35)
-  added producthunt banners (4c4da16)
-  updated description (70a3df0)
-  added new tool creation procedure (8177883)
-  updated readme (1134e0b)

### Doc
- **readme**: added contributors list (#622) (557b304)
- **hosting**: added cloudron in the other hosting solutions section (#589) (06c3547)

### Refacor
- **transformers**: use monospace font for JSON and SQL text areas (#476) (ba4876d)

### Chors
- **deps**: updated vueuse dependency version (8515c24)

### Ui-lib
- **new-component**: added text input component in the c-lib (aad8d84)
- **button**: size variants (401f13f)

### Revert
- **pwa**: fallback to autoUpdate (ad202bd)

## Version 2024.10.22-7ca5933

### Features
- **new tool**: Regex Tester (and Cheatsheet) (#1030) (f5c4ab1)
- **new tool**: Markdown to HTML (#916) (87984e2)
- **new-tool**: add email normalizer (#1243) (318fb6e)
- **new tools**: JSON to XML and XML to JSON (#1231) (f1a5489)
- **lorem-ipsum**: add button to refresh text lorem-ipsum (#1213) (e1b4f9a)
- **base64**: Base64 enhancements (#905) (30144aa)

### Bug fixes
- **favorites**: store favorites regardless of languages (#1202) (7ca5933)
- **emoji-picker**: debounced search input (#1181) (76a19d2)
- **format-transformer**: set overflow for output area width (#787) (b430bae)
- **jwt-parser**: prevent UI overflow on small screen (#1095) (dd4b7e6)

### Refactoring
- **regex-tester**: better description (7251700)

### Chores
- **sponsors**: fern sponsor banners (#1314) (f962c41)
- **readme**: updated logos (#1294) (6709498)

### Documentation
- **author**: updated author links (#1316) (1c35ac3)

## Version 2024.05.13-a0bc346

### Features
- **i18n**: added German translation (#1038) (2c2fb21)
- **new tool**: Outlook Safelink Decoder (#911) (d3b32cc)
- **new tool**: ascii art generator (#886) (fe349ad)
- **i18n**: get locales on build (#880) (dc04615)
- **i18n**: added vi tools translations (#876) (079aa21)
- **i18n**: added zh tools translations (#874) (9c6b122)
- **i18n**: added missing locale files in tools (#863) (7f5fa00)
- **i18n**: added vietnamese language (#859) (1334bff)
- **i18n**: added spanish language (#854) (85b50bb)
- **i18n**: added portuguese language (#813) (c65ffb6)
- **i18n**: added ukrainian language (#827) (693f362)
- **new-tool**: yaml formater (#779) (fc06f01)
- **new-tool**: added unicode conversion utilities (#858) (c46207f)

### Bug fixes
- **language**: English language cleanup (#1036) (221ddfa)
- **url-encoder, validation**: typo in validation of url-encoder.vue #1024 (cb5b462)
- **integer base converter**: support bigint (#872) (9eac9cb)
- **bcrypt tool**: allow salt rounds up to 100 (#987) (23f82d9)

### Refactoring
- **lint**: removed extra semi (33e5294)
- **auto-imports**: regen auto imports (1242842)
- **home**: lightened tool cards (#882) (a07806c)
- **home**: removed n-grid to prevent layout shift (#881) (10e56b3)
- **i18n**: added locales per tool (#861) (95698cb)

### Chores
- **issues**: prevent empty issues (#1078) (a0bc346)
- **issues**: removed old issue templates (#1077) (5a7b0f9)
- **node**: upgraded node version in CI workflows (b59942a)
- **version**: release 2024.05.10-33e5294 (38d5687)
- **issues**: improved issues template (2852c30)
- **issues**: improved bug issue template (#1046) (a799234)

### Documentation
- **changelog**: update changelog for 2024.05.10-33e5294 (9dfd347)

## Version 2023.12.21-5ed3693

### Features

- **i18n**: improve chinese i18n (#757) (2e56641)
- **i18n**: add tooltip and favoriteButton i18n (#756) (a1037cf)
- **i18n**: add Chinese translation base (#718) (8f99eb6)
- **new tool**: pdf signature checker (#745) (4781920)
- **new tool**: numeronym generator (#729) (e07e2ae)

### Bug fixes

- **jwt-parser**: jwt claim array support (#799) (5ed3693)
- **camera-recorder**: stop camera on navigation (#782) (80e46c9)
- **doc**: updated create new tool command in readme (#762) (7a70dbb)
- **base64-file-converter**: fix downloading of index.html content without data preambula (#750) (043e4f0)
- **docker**: rollback armv7 in docker releases (#741) (205e360)
- **eta**: corrected example (#737) (821cbea)

### Refactoring

- **about, i18n**: improved i18n dx with markdown (#753) (bd3edcb)
- **token, i18n**: complete fr translation (#752) (de1ee69)
- **uuid generator**: uuid version picker (#751) (38586ca)
- **case converter**: no split on lowercase, uppercase and mocking case (#748) (ca43a25)
- **ui**: replaced legacy n-upload with c-file-upload (#747) (7fe47b3)
- **token**: added password in token generator keywords (#746) (16ffe6b)
- **bcrypt**: fix input label align (#721) (093ff31)

### Chores

- **deps**: switched from oui to oui-data for mac address lookup (#693) (0fe9a20)
- **deps**: update unocss monorepo to ^0.57.0 (#638) (2e396d8)
- **docker**: added armv7 plateform for docker releases (#722) (fe1de8c)

## Version 2023.11.02-7d94e11

### Features

- **i18n**: language selector (#710) (e86fd96)

### Bug fixes

- **dockerfile**: revert replacement of nginx image with non-privileged one (#716) (7d94e11)
- **encryption**: alert on decryption error (#711) (02b0d0d)

### Refactoring

- **math-evaluator**: improved description (e87f4b1)
- **math-evaluator**: improved search and UX (#713) (58de897)

## Version 2023.11.01-e164afb

### Features

- **command-palette**: clear prompt on palette close (#708) (d013696)
- **command-palette**: added about page in command palette (99b1eb9)
- **new tool**: random MAC address generator (#657) (cc3425d)
- **case-converter**: added mocking case (#705) (681f7bf)
- **date-converter**: added excel date time format (#704) (f5eb7a8)
- **i18n**: token generator (#688) (02e68d3)
- **i18n**: home page (#687) (00562ed)
- **i18n**: support for i18n in .ts files (#683) (ebb4ec4)
- **i18n**: tool card (#682) (84a4a64)
- **i18n**: about page (#680) (a2b53c2)
- **i18n**: 404 page (#679) (35563b8)
- **new tool**: text to ascii converter (#669) (b2ad4f7)
- **new tool**: ULID generator (#623) (5c4d775)
- **new tool**: add wifi qr code generator (#599) (0eedce6)
- **new tool**: iban validation and parser (#591) (3a63837)
- **new tool**: text diff and comparator (#588) (81bfe57)

### Bug fixes

- **deps**: fix issue on slugify (#593) (#673) (720201a)
- **deps**: update dependency monaco-editor to ^0.43.0 (#620) (e371ef7)
- **deps**: update dependency sql-formatter to v13 (#606) (c7d4562)

### Refactoring

- **ui**: better ui demo preview menu (#664) (015c673)
- **color-converter**: improved color-converter UX (#701) (abb8335)
- **docker**: improved docker config (#700) (020e9cb)
- **c-table**: added description on c-table for accessibility (b408df8)
- **ci**: reduced timeout in e2e (#666) (88b8818)
- **ui**: new c-table ui component (#665) (ee4c853)
- **ui**: removed n-page-header component in user-agent parser (#663) (cbf58fd)
- **ui**: removed n-p components in about page (#662) (a757a51)
- **ui**: switched naive tooltip components to custom ones (#661) (025f556)
- **spelling**: minor corrections to phrasing/spelling (#596) (8a30b6b)
- **i18n**: merge tools scoped locales with global ones (#612) (233d556)
- **c-key-value-list**: got rid of table for layout (#611) (7ab9204)
- **CI**: run e2e against built app and no longer vercel (#610) (18dd140)
- **bcrypt**: fix typo (#604) (e18bae1)

### Chores

- **deps**: clean unused dependencies (#709) (e164afb)
- **deps**: update docker/setup-qemu-action action to v3 (#627) (4365226)
- **deps**: update docker/setup-buildx-action action to v3 (#626) (57ecda1)
- **deps**: update docker/login-action action to v3 (#625) (d8d7a3b)
- **deps**: update docker/build-push-action action to v5 (#624) (d36b18f)
- **deps**: update dependency node to v18.18.2 (#674) (eea9f91)
- **deps**: update dependency node to v18.18.0 (#636) (2d2dffb)
- **deps**: update actions/checkout action to v4 (#613) (4972159)
- **deps**: update dependency unplugin-icons to ^0.17.0 (#609) (f035f48)
- **deps**: update dependency @intlify/unplugin-vue-i18n to ^0.13.0 (#597) (d1dff42)
- **deps**: update dependency @antfu/eslint-config to ^0.41.0 (#585) (a9cd91c)
- **deps**: update dependency typescript to ~5.2.0 (#587) (f3e14fc)

### Doc

- **readme**: added contributors list (#622) (557b304)
- **hosting**: added cloudron in the other hosting solutions section (#589) (06c3547)

## Version 2023.08.21-6f93cba

### Features

- **copy**: support legacy copy to clipboard for older browser (#581) (6f93cba)
- **new tool**: string obfuscator (#575) (c58d6e3)

### Bug fixes

- **deps**: update dependency sql-formatter to v12 (#520) (2bcb77a)

### Chores

- **deps**: switched to fucking typescript v5 (#501) (76b2761)
- **deps**: update dependency @antfu/eslint-config to ^0.40.0 (#552) (6ff9a01)
- **deps**: update dependency prettier to v3 (#564) (a2b9b15)
- **deps**: removed @typescript-eslint/parser (#563) (144f86e)
- **deps**: removed ts-pattern (#565) (0f1f659)

## Version 2023.08.16-9bd4ad4

### Features

- **Case Converter**: Add lowercase and uppercase (#534) (7b6232a)
- **new tool**: emoji picker (#551) (93f7cf0)
- **ui**: added c-select in the ui lib (#550) (dfa1ba8)
- **new-tool**: password strength analyzer (#502) (a9c7b89)
- **new-tool**: yaml to toml (e29b258)
- **new-tool**: json to toml (ea50a3f)
- **new-tool**: toml to yaml (746e5bd)
- **new-tool**: toml to json (c7d4f11)
- **command-palette**: random tool action (ec4c533)
- **config**: allow app to run in a subfolder via BASE_URL (#461) (6304595)
- **new-tool**: percentage calculator (#456) (b9406a4)
- **new-tool**: json to csv converter (69f0bd0)
- **new tool**: xml formatter (#457) (a6bbeae)
- **chmod-calculator**: added symbolic representation (#455) (f771e7a)
- **enhancement**: use system dark mode (#458) (cf7b1f0)
- **phone-parser**: searchable country code select (d2956b6)
- **new tool**: camera screenshot and recorder (34d8e5c)
- **base64-string-converter**: switch to encode and decode url safe base64 strings (#392) (0b20f1c)

### Bug fixes

- **deps**: update dependency uuid to v9 (#566) (5e12991)
- **deps**: update dependency mathjs to v11 (#519) (7924456)
- **deps**: update dependency @vueuse/router to v10 (#516) (ea0f27c)
- **copy**: prevent shorthand copy if source is present in useCopy (#559) (86e964a)
- **c-lib**: hide component library shortcut link in non-dev (#557) (56d74d0)
- **emoji picker**: fix copy button (#556) (e5d0ba7)
- **deps**: update dependency @vueuse/head to v1 (#515) (d12dd40)
- **deps**: update dependency country-code-lookup to ^0.1.0 (#493) (8c72e69)
- **deps**: update dependency @vueuse/head to ^0.9.0 (#492) (cec9dea)
- **i18n**: fallback for demo i18n (12d9e5d)
- **typos**: fixed more typos & uppercase JSON (#475) (9526ed8)
- **about**: typos and wording (#474) (7068610)
- **mime-types**: typos (#470) (c4cec9e)
- **sonar**: took down minor sonar warning (4cbd7ac)
- **readme**: typo (105b21b)
- **ipv4-range-expander**: calculate correct for ip addresses where the first octet is lower than 128 (#405) (8c92d56)
- **ipv4-converter**: removed readonly on input (7aed9c5)

### Refactoring

- **navbar**: consistent spacing in navbar buttons (#507) (30f88fc)
- **ui**: remove n-text (#506) (72c98a3)
- **ui**: replaced some n-input to c-input (#505) (05ea545)
- **json-viewer**: input monospace font (#485) (9125dcf)
- **search**: command palette design (#463) (bcb98b3)
- **c-input-text**: force usage of props with default (1e2a35b)
- **naming**: prevent auto import conflicts for git memo (45c2474)
- **imports**: removed unnecessary imports to vue (fe61f0f)
- **ui**: removed all n-space (4d2b037)
- **ui**: replaced some n-input with c-input-text (f7fc779)

### Chores

- **deps**: update dependency vitest to ^0.34.0 (#562) (9bd4ad4)
- **deps**: update dependency node to v18.17.1 (#560) (65a9474)
- **deps**: update dependency unocss to ^0.55.0 (#561) (85cc7a8)
- **deps**: update dependency @unocss/eslint-config to ^0.55.0 (#553) (4268e25)
- **deps**: update dependency @intlify/unplugin-vue-i18n to ^0.12.0 (#526) (d1c8880)
- **deps**: update docker/login-action action to v2 (#512) (99bc84c)
- **deps**: update dependency jsdom to v22 (#499) (cd5a503)
- **deps**: update dependency @vitejs/plugin-vue-jsx to v3 (#497) (1a60236)
- **deps**: update dependency @vitejs/plugin-vue to v4 (#496) (a249421)
- **deps**: update dependency vite-plugin-pwa to ^0.16.0 (#488) (6498c9b)
- **deps**: update dependency vite to v4 (#503) (f40d7ec)
- **ci**: e2e against vercel deployement (#518) (2e28c50)
- **e2e**: execute e2e against built app (#511) (cf382b5)
- **deps**: update github/codeql-action action to v2 (#513) (0152583)
- **deps**: update node.js to v18 (#514) (38cb61d)
- **deps**: switched from vite-plugin-md to vite-plugin-vue-markdown (#510) (354aed6)
- **deps**: update dependency workbox-window to v7 (#509) (6b8682f)
- **deps**: update dependency vite-svg-loader to v4 (#508) (9e8349d)
- **deps**: update dependency typescript to ~4.9.0 (#481) (f440507)
- **deps**: update dependency vue-tsc to ^0.40.0 (#490) (b0d9a3e)
- **deps**: updated unplugin-auto-import (#504) (5c3bebf)
- **deps**: removed start-server-and-test dependency (8df7cd0)
- **deps**: update dependency c8 to v8 (#498) (6bda2ca)
- **deps**: update dependency @types/jsdom to v21 (#495) (994a1c3)
- **deps**: update node.js to v16.20.1 (#491) (05edaf4)
- **deps**: update dependency vitest to ^0.32.0 (#489) (49eacea)
- **deps**: update actions/checkout action to v3 (#494) (3f7d469)
- **deps**: update dependency unplugin-vue-components to ^0.25.0 (#484) (5f21908)
- **deps**: update dependency unplugin-auto-import to ^0.16.0 (#483) (6cb0845)
- **deps**: update dependency unocss to ^0.53.0 (#482) (38710dc)
- **deps**: update dependency @unocss/eslint-config to ^0.53.0 (#478) (282cfc4)
- **deps**: added renovate.json (#477) (363c2e4)
- **i18n**: tool scoped locales (#471) (1b038c7)
- **wysiwyg-editor**: update tiptap dependencies (732da08)
- **i18n**: setup i18n plugin config (ebfb872)
- **config**: netlify deployment support (#443) (93799af)
- **ci**: shard e2e tests (962a6d6)
- **lint**: switched to a better lint config (33c9b66)

### Refacor

- **transformers**: use monospace font for JSON and SQL text areas (#476) (ba4876d)

### Documentation

- **ide**: updated vscode extensions settings (#472) (847323c)

### Chors

- **deps**: updated vueuse dependency version (8515c24)

## Version 2023.05.14-77f2efc

### Features

- **list-converter**: a small converter who deals with column based data and do some stuff with it (#387) (83a7b3b)
- **new tool**: phone parser and normalizer (ce3150c)

### Bug fixes

- **phone-parser**: use default country code (a43c546)
- **home**: prevent weird blue border on card (3f6c8f0)

### Refactoring

- **ui**: replaced some n-input with c-input-text (77f2efc)

### Chores

- **issues**: updated new tool request issue template (edae4c6)

### Ui-lib

- **new-component**: added text input component in the c-lib (aad8d84)
- **button**: size variants (401f13f)

## Version 2023.04.23-92bd835

### Features

- **ui-lib**: demo pages for c-lib components (92bd835)
- **new-tool**: diff of two json objects (362f2fa)
- **ipv4-range-expander**: expands a given IPv4 start and end address to a valid IPv4 subnet (#366) (df989e2)
- **date converter**: auto focus main input (6d22025)

### Bug fixes

- **ts**: cleaned legacy typechecking warning (e88c1d5)
- **mac-address-lookup**: added copy handler on button click (c311e38)

### Refactoring

- **ui-lib**: prevent c-button to shrink (61ece23)
- **ui**: replaced naive ui cards with custom ones (f080933)
- **clean**: removed unused lodash import (bb32513)
- **clean**: removed useless br tags (74073f5)
- **ui**: getting ride of naive ui buttons (c45bce3)

## Version 2023.04.14-dbad773

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (dbad773)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version 2023.04.14-f9b77b7

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (f9b77b7)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version 2023.04.14-2f0d239

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (2f0d239)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version 2023.04.14-474cae4

### Features

- **new-tool**: http status codes (8355bd2)

### Refactoring

- **uuid-generator**: prevent NaN in quantity (6fb4994)

### Chores

- **release**: create a github release on new version (474cae4)
- **version**: reset CHANGELOG content to support new format (85cb0ff)

## Version v2023.4.13-dce9ff9

_Diff not available_
