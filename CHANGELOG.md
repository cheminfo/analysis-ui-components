# Changelog

## [12.2.0](https://github.com/zakodium-oss/react-science/compare/v12.1.0...v12.2.0) (2025-01-06)


### Features

* **Table:** add scrollToRowRef prop to the Table component ([#816](https://github.com/zakodium-oss/react-science/issues/816)) ([49cd819](https://github.com/zakodium-oss/react-science/commit/49cd819126c7fe1b361c45587c4f259f808cdc82))


### Bug Fixes

* add stylelint and fix CSS errors ([#845](https://github.com/zakodium-oss/react-science/issues/845)) ([238e55a](https://github.com/zakodium-oss/react-science/commit/238e55a18f9a86ed675a8bf4c702d82a7d8c2253))
* allow to search with `yes` or `no` ([#850](https://github.com/zakodium-oss/react-science/issues/850)) ([dd3cb39](https://github.com/zakodium-oss/react-science/commit/dd3cb3995240d87af4d4ffafa28dd3d5a236e06c))
* **Menus:** do not overflow divider ([#848](https://github.com/zakodium-oss/react-science/issues/848)) ([1c9d33d](https://github.com/zakodium-oss/react-science/commit/1c9d33d36009d4efada5c2d87db2c2d7e9509cc6))

## [12.1.0](https://github.com/zakodium-oss/react-science/compare/v12.0.0...v12.1.0) (2024-12-11)


### Features

* make Table component compatible with styled components libraries ([#813](https://github.com/zakodium-oss/react-science/issues/813)) ([a76181c](https://github.com/zakodium-oss/react-science/commit/a76181cd0c072345942670026961862409fe9b35))


### Bug Fixes

* **table_root:** show border when table is sticky ([#810](https://github.com/zakodium-oss/react-science/issues/810)) ([93fae28](https://github.com/zakodium-oss/react-science/commit/93fae283a43019afed22e395fa5aaec19e6a2bcb))

## [12.0.0](https://github.com/zakodium-oss/react-science/compare/v11.2.0...v12.0.0) (2024-12-09)


### ⚠ BREAKING CHANGES

* `@tanstack/react-query`'s QueryClientProvider was removed from the `RootLayout` component. You'll have to provide your own client if you relied on it to use react-query in your application.
* The `RadioGroup` component has been renamed to `RadioButtonGroup`. Its interface is now the same as blueprintjs's `RadioGroup` component, which changes how multiple of its props are named and typed.

### Features

* **Table:** change sorting icons to use blueprint ([#804](https://github.com/zakodium-oss/react-science/issues/804)) ([fe7bcee](https://github.com/zakodium-oss/react-science/commit/fe7bcee95f422d44c4c8ce4629665902a9208f41))


### Miscellaneous Chores

* remove radix-ui dependencies ([#780](https://github.com/zakodium-oss/react-science/issues/780)) ([d69d7e0](https://github.com/zakodium-oss/react-science/commit/d69d7e00a7585dd88c04a2c6f7c3936f2f4558d7))


### Code Refactoring

* remove react-query from root layout ([#807](https://github.com/zakodium-oss/react-science/issues/807)) ([52ba146](https://github.com/zakodium-oss/react-science/commit/52ba146c5611f270415d18a868d8cb9b97292f28))

## [11.2.0](https://github.com/zakodium-oss/react-science/compare/v11.1.0...v11.2.0) (2024-12-05)


### Features

* add renderHeaderCell prop to `Table` component ([#799](https://github.com/zakodium-oss/react-science/issues/799)) ([3050b6f](https://github.com/zakodium-oss/react-science/commit/3050b6fe4dcd936f7ee416b0f028a65831d9b412))


### Bug Fixes

* ensure proper spacing between header title and sort indicator in default header renderer ([3050b6f](https://github.com/zakodium-oss/react-science/commit/3050b6fe4dcd936f7ee416b0f028a65831d9b412))

## [11.1.0](https://github.com/zakodium-oss/react-science/compare/v11.0.0...v11.1.0) (2024-12-03)


### Features

* add option to table component to virtualize rows ([#796](https://github.com/zakodium-oss/react-science/issues/796)) ([d0b6128](https://github.com/zakodium-oss/react-science/commit/d0b6128d9260d8b39932670228d8a74bd268e484))

## [11.0.0](https://github.com/zakodium-oss/react-science/compare/v10.0.0...v11.0.0) (2024-11-29)


### ⚠ BREAKING CHANGES

* remove non-ui exports ([#789](https://github.com/zakodium-oss/react-science/issues/789))

### Features

* add unmountChildren prop to Accordion and Accordion.Item ([#793](https://github.com/zakodium-oss/react-science/issues/793)) ([1f94fc4](https://github.com/zakodium-oss/react-science/commit/1f94fc494840fce85429e526af5b1090ca5b396f))


### Code Refactoring

* remove non-ui exports ([#789](https://github.com/zakodium-oss/react-science/issues/789)) ([9217809](https://github.com/zakodium-oss/react-science/commit/9217809473dab8bbf9f5707a411551d75f3cc249))

## [10.0.0](https://github.com/zakodium-oss/react-science/compare/v9.0.1...v10.0.0) (2024-11-21)


### ⚠ BREAKING CHANGES

* **toolbar:** the onClick handler of a toolbar item is only passed the mouse event.
* the `isPopover` was removed from the toolbar item components.

### Features

* add ActivityPanel components ([#768](https://github.com/zakodium-oss/react-science/issues/768)) ([2ad5a18](https://github.com/zakodium-oss/react-science/commit/2ad5a1858e393d762ad9672f90b894adf9b57c29))


### Bug Fixes

* **button:** correct default height of buttons ([#785](https://github.com/zakodium-oss/react-science/issues/785)) ([26fa1df](https://github.com/zakodium-oss/react-science/commit/26fa1df0406da00dfdc00b0601a166bafa5d6fd3))
* do not expose the isPopover prop ([177c0ae](https://github.com/zakodium-oss/react-science/commit/177c0ae556e17b673243944ff906c37926739a2e))
* **toolbar:** do not pass item props in onClick callback ([29aa9e1](https://github.com/zakodium-oss/react-science/commit/29aa9e10cf98424074668495ec05a24a58990ea9))

## [9.0.1](https://github.com/zakodium-oss/react-science/compare/v9.0.0...v9.0.1) (2024-10-18)


### Bug Fixes

* ensure popover toolbar item does not grow ([9d8a0b4](https://github.com/zakodium-oss/react-science/commit/9d8a0b459c813295af29cf90200e35540b495840))

## [9.0.0](https://github.com/zakodium-oss/react-science/compare/v8.0.1...v9.0.0) (2024-10-18)


### ⚠ BREAKING CHANGES

* the `fill`, `large` and `minimal` props have been removed from the Toolbar component

### Features

* add ActivityBar component ([a51279a](https://github.com/zakodium-oss/react-science/commit/a51279abde657877bf199f8c0b56e0fc8a4a2506))
* remove fill, large and minimal props from Toolbar component ([40069b1](https://github.com/zakodium-oss/react-science/commit/40069b1c1a9ec924b96809dd2649ef5c047cc2a1))


### Bug Fixes

* correct regression to incorrect layout in Toolbar component ([9eb75ae](https://github.com/zakodium-oss/react-science/commit/9eb75ae416d5ca3b9883464a7009b7a2bb0af142))
* Toolbar should have a backdrop only with "click" as the interaction kind ([19d5350](https://github.com/zakodium-oss/react-science/commit/19d53503010b72a4996762cb4ee473a411148291))

## [8.0.1](https://github.com/zakodium-oss/react-science/compare/v8.0.0...v8.0.1) (2024-10-16)


### Bug Fixes

* ensure unique keys by using index in shortcut list ([bc12268](https://github.com/zakodium-oss/react-science/commit/bc1226867f47d56e1494ba0691ebc53172f48159))
* use relative position on toolbar popover items ([#774](https://github.com/zakodium-oss/react-science/issues/774)) ([761eb4b](https://github.com/zakodium-oss/react-science/commit/761eb4bdc1b74b52aa37e5cab70bb6303e9193ef))

## [8.0.0](https://github.com/zakodium-oss/react-science/compare/v7.0.0...v8.0.0) (2024-10-15)


### ⚠ BREAKING CHANGES

* the module is now ESM-only

### Features

* make module native ESM ([#769](https://github.com/zakodium-oss/react-science/issues/769)) ([b2aab07](https://github.com/zakodium-oss/react-science/commit/b2aab07fe52f3e74e07dc5f324c763a7cf7185bd))

## [7.0.0](https://github.com/zakodium-oss/react-science/compare/v6.0.2...v7.0.0) (2024-10-09)


### ⚠ BREAKING CHANGES

* Toolbar: the new `minimal` prop must be set to `true` in order to keep a similar appearance when upgrading.

### Features

* add minimal and fill props to toolbar component and improve style ([87eafb3](https://github.com/zakodium-oss/react-science/commit/87eafb34d902e6ea7ff752ff6784e4721786194c))
* add SelectedTotal component ([26700a7](https://github.com/zakodium-oss/react-science/commit/26700a7eb81488455480636c4fc6bb991d90b7e2))

## [6.0.2](https://github.com/zakodium-oss/react-science/compare/v6.0.1...v6.0.2) (2024-09-28)


### Bug Fixes

* avoid unnecessary rerenders of InfoPanel contents ([245173e](https://github.com/zakodium-oss/react-science/commit/245173efd364004509cc71fdae0cfeb7bf48da9d))

## [6.0.1](https://github.com/zakodium-oss/react-science/compare/v6.0.0...v6.0.1) (2024-09-11)


### Bug Fixes

* include alpha in hex code for semi-transparent colors ([6cc6a97](https://github.com/zakodium-oss/react-science/commit/6cc6a97864c201c3e04ba5529733c559a11ba8c7))
* toolbar popover item should have backdrop to avoid interactions outside of it when it is open ([#756](https://github.com/zakodium-oss/react-science/issues/756)) ([c2f3ff3](https://github.com/zakodium-oss/react-science/commit/c2f3ff37edbd6b4bcc23c38d08271e59d2a3877f))

## [6.0.0](https://github.com/zakodium-oss/react-science/compare/v5.0.0...v6.0.0) (2024-07-31)


### ⚠ BREAKING CHANGES

* replace `getRowTrProps` with render prop `renderRowTr` ([#753](https://github.com/zakodium-oss/react-science/issues/753))

### Features

* replace `getRowTrProps` with render prop `renderRowTr` ([#753](https://github.com/zakodium-oss/react-science/issues/753)) ([19346d9](https://github.com/zakodium-oss/react-science/commit/19346d93ea83379c567898344f313b8ee4268881))


### Bug Fixes

* update react-plot ([#754](https://github.com/zakodium-oss/react-science/issues/754)) ([36283d2](https://github.com/zakodium-oss/react-science/commit/36283d2d79fc2749498f455620cd99a9c3a2e2cc))

## [5.0.0](https://github.com/zakodium-oss/react-science/compare/v4.1.3...v5.0.0) (2024-07-29)


### ⚠ BREAKING CHANGES

* reimplement Table component with react-table

### Features

* reimplement Table component with react-table ([52251d4](https://github.com/zakodium-oss/react-science/commit/52251d49a0c9f8ad504a95e68e863314f7e62f66))


### Bug Fixes

* do not use `React` global type ([1566417](https://github.com/zakodium-oss/react-science/commit/1566417c74af615a45ce0b146062fd106bd4d65c))
* use `ReactElement` instead of `JSX.Element` ([2921eb2](https://github.com/zakodium-oss/react-science/commit/2921eb230d290f63ae4e92f75f9f83657f322ca4))

## [4.1.3](https://github.com/zakodium-oss/react-science/compare/v4.1.2...v4.1.3) (2024-07-29)


### Bug Fixes

* export useSelect hook's parameter type ([#742](https://github.com/zakodium-oss/react-science/issues/742)) ([f672494](https://github.com/zakodium-oss/react-science/commit/f6724946f2e448cc37b97ae6bdea2d4204abb31b))
* replace 'button' with 'div' to prevent nested button ([#749](https://github.com/zakodium-oss/react-science/issues/749)) ([633d2ec](https://github.com/zakodium-oss/react-science/commit/633d2ec54eb88b81dccb5338ed6a9eb5e9246bcf))

## [4.1.2](https://github.com/zakodium-oss/react-science/compare/v4.1.1...v4.1.2) (2024-06-24)


### Bug Fixes

* remove dependency on d3-scale-chromatic types ([#738](https://github.com/zakodium-oss/react-science/issues/738)) ([0e6a485](https://github.com/zakodium-oss/react-science/commit/0e6a4858cebc601fabe4ac94de5d0578904722de))

## [4.1.1](https://github.com/zakodium-oss/react-science/compare/v4.1.0...v4.1.1) (2024-06-21)


### Bug Fixes

* organize and update dependencies ([#736](https://github.com/zakodium-oss/react-science/issues/736)) ([3134c16](https://github.com/zakodium-oss/react-science/commit/3134c16861a43743281f48c6d52ee93c5e3adfc0))

## [4.1.0](https://github.com/zakodium-oss/react-science/compare/v4.0.0...v4.1.0) (2024-06-13)


### Features

* add sticky table header option ([#729](https://github.com/zakodium-oss/react-science/issues/729)) ([1827fe7](https://github.com/zakodium-oss/react-science/commit/1827fe72a7391acd7c5ceb06db9984cbaa5f01d1))
* improve InfoPanel ([#727](https://github.com/zakodium-oss/react-science/issues/727)) ([7e62024](https://github.com/zakodium-oss/react-science/commit/7e6202430dd8c83ed10df6c9f37f3d710d6a579f))
* improve useSelect hook item render ([#732](https://github.com/zakodium-oss/react-science/issues/732)) ([76ac3f4](https://github.com/zakodium-oss/react-science/commit/76ac3f43faccc8fd8bca575a68ceeb3a20df9ad9))


### Bug Fixes

* disable button tooltips with empty content ([#730](https://github.com/zakodium-oss/react-science/issues/730)) ([ebdd792](https://github.com/zakodium-oss/react-science/commit/ebdd792930bc8aac01e5b857cc367bff32859284))

## [4.0.0](https://github.com/zakodium-oss/react-science/compare/v3.1.0...v4.0.0) (2024-05-17)


### ⚠ BREAKING CHANGES

* remove hasBorder prop from Table component

### Features

* add logger components ([#709](https://github.com/zakodium-oss/react-science/issues/709)) ([30b6212](https://github.com/zakodium-oss/react-science/commit/30b6212d3c87f5f5c88eae5685e8eaf110785f8b))
* provide only one way to add borders to Table ([90cc00e](https://github.com/zakodium-oss/react-science/commit/90cc00e59a416c1222f01a90361d9a38ffe3ea2f))
* tooltip help content ([#715](https://github.com/zakodium-oss/react-science/issues/715)) ([287f1c3](https://github.com/zakodium-oss/react-science/commit/287f1c3eff668e687ca5a19b04d23fd42185b6bf))


### Bug Fixes

* update selected dependencies ([#724](https://github.com/zakodium-oss/react-science/issues/724)) ([7452982](https://github.com/zakodium-oss/react-science/commit/7452982f3ccec44e8c4ba6f95465ed50be093711))

## [3.1.0](https://github.com/zakodium-oss/react-science/compare/v3.0.0...v3.1.0) (2024-04-09)


### Features

* spread Table.Row props into HTML row tag ([#718](https://github.com/zakodium-oss/react-science/issues/718)) ([e02f013](https://github.com/zakodium-oss/react-science/commit/e02f01370e1adb43ec63feaa1ae51b18449749bb))
* toolbar in accordion ([#698](https://github.com/zakodium-oss/react-science/issues/698)) ([93f8f45](https://github.com/zakodium-oss/react-science/commit/93f8f45afc197a013c9038ebf4829067c4e54e11))

## [3.0.0](https://github.com/zakodium-oss/react-science/compare/v2.0.0...v3.0.0) (2024-04-03)


### ⚠ BREAKING CHANGES

* rename `title` to `tooltip`, which now any custom content. Remove `noTooltip` and make `tooltip` optional instead. Add tooltipProps to customize the tooltip's behaviour.

### Features

* allow to customize toolbar item's tooltip ([#699](https://github.com/zakodium-oss/react-science/issues/699)) ([d050d83](https://github.com/zakodium-oss/react-science/commit/d050d83499eff4184261c57793470f45e1e81699))

## [2.0.0](https://github.com/zakodium-oss/react-science/compare/v1.0.2...v2.0.0) (2024-04-02)


### ⚠ BREAKING CHANGES

* remove LayoutManager ([#692](https://github.com/zakodium-oss/react-science/issues/692))

### Features

* improve info-panel design ([#696](https://github.com/zakodium-oss/react-science/issues/696)) ([792b7df](https://github.com/zakodium-oss/react-science/commit/792b7df9150430d77f04bcb4e61dc05962a11dd9))
* remove LayoutManager ([#692](https://github.com/zakodium-oss/react-science/issues/692)) ([636c2f2](https://github.com/zakodium-oss/react-science/commit/636c2f27308f0657e198690f1f49a0b5b2cbd6fe))

## [1.0.2](https://github.com/zakodium-oss/react-science/compare/v1.0.1...v1.0.2) (2024-03-16)


### Bug Fixes

* add blueprint provider to root layout ([#687](https://github.com/zakodium-oss/react-science/issues/687)) ([e8aebd4](https://github.com/zakodium-oss/react-science/commit/e8aebd40319dcdf4127eb591a6eb952907fc251d))

## [1.0.1](https://github.com/zakodium-oss/react-science/compare/v1.0.0...v1.0.1) (2024-03-16)


### Bug Fixes

* update dependencies ([#683](https://github.com/zakodium-oss/react-science/issues/683)) ([79a784f](https://github.com/zakodium-oss/react-science/commit/79a784f22b3a8c5e256771d632c7957d9120c026))

## [1.0.0](https://github.com/zakodium-oss/react-science/compare/v0.37.0...v1.0.0) (2024-03-14)


### ⚠ BREAKING CHANGES

* useSelect now takes `itemTextKey` or `getItemText` prop to choose what text should be rendered  in a Select option

### Features

* default selected value and custom text with useSelect ([#681](https://github.com/zakodium-oss/react-science/issues/681)) ([c9125c8](https://github.com/zakodium-oss/react-science/commit/c9125c876707cb520e8141d35a0f5e9bcc1fbd66))

## [0.37.0](https://github.com/zakodium-oss/react-science/compare/v0.36.0...v0.37.0) (2024-02-27)


### ⚠ BREAKING CHANGES

* in the dropzone component, rename "fileValidator" prop to "validator"

### Features

* extend drop zone component properties ([#675](https://github.com/zakodium-oss/react-science/issues/675)) ([34f23b5](https://github.com/zakodium-oss/react-science/commit/34f23b5c4ccee61cfb6e7aa71d7dc3a56c76ef00))

## [0.36.0](https://github.com/zakodium-oss/react-science/compare/v0.35.0...v0.36.0) (2024-02-21)


### ⚠ BREAKING CHANGES

* `type` prop was removed from RadioGroup component, the classic type being replaced by the blueprintjs component

### Features

* add tag to button component and toolbar items ([#654](https://github.com/zakodium-oss/react-science/issues/654)) ([bd04e6e](https://github.com/zakodium-oss/react-science/commit/bd04e6e93cc97f803b537fd6caa4476ff95ef512))
* add trigger option to popover toolbar ([#666](https://github.com/zakodium-oss/react-science/issues/666)) ([5eebe1b](https://github.com/zakodium-oss/react-science/commit/5eebe1b2e92e7b508da70a27cdd589b00321a16e))
* create useSelect hook to make the Select component better with keyboard navigation ([#645](https://github.com/zakodium-oss/react-science/issues/645)) ([2317f62](https://github.com/zakodium-oss/react-science/commit/2317f62dd381bff938dfbe490a9a9a8120bf1d51))
* replace classic radio button with blueprintjs radio ([#664](https://github.com/zakodium-oss/react-science/issues/664)) ([c944af2](https://github.com/zakodium-oss/react-science/commit/c944af2a6a379a14716a5d9af108c133bece8de5))

## [0.35.0](https://github.com/zakodium-oss/react-science/compare/v0.34.0...v0.35.0) (2024-02-13)


### ⚠ BREAKING CHANGES

* remove ButtonGroup component ([#663](https://github.com/zakodium-oss/react-science/issues/663))
* changed font sizes in components accordingly but this is possibly breaking layout

### Features

* add Toolbar.PopoverItem ([#635](https://github.com/zakodium-oss/react-science/issues/635)) ([d11e8b7](https://github.com/zakodium-oss/react-science/commit/d11e8b76392df7155e5144f966ead701a8e00c53))
* improve measurements panel ([6ccb3a6](https://github.com/zakodium-oss/react-science/commit/6ccb3a6033d49ee9a7086724ef26c0fb762e6e01))
* improve popover toolbar item layout ([#653](https://github.com/zakodium-oss/react-science/issues/653)) ([ec8193c](https://github.com/zakodium-oss/react-science/commit/ec8193c45700cb25de04886269f6580fbab2e32e))
* remove ButtonGroup component ([#663](https://github.com/zakodium-oss/react-science/issues/663)) ([3d8bfe9](https://github.com/zakodium-oss/react-science/commit/3d8bfe92a3c03a398e692d706abd6892e3dd044b))
* use 14px as base font size ([#652](https://github.com/zakodium-oss/react-science/issues/652)) ([3a3bdc6](https://github.com/zakodium-oss/react-science/commit/3a3bdc6891c4df6dc9b3088f9dd406c4a391098c))


### Documentation

* add accordion scroll example ([#646](https://github.com/zakodium-oss/react-science/issues/646)) ([b4f919d](https://github.com/zakodium-oss/react-science/commit/b4f919ddc6a1df381061a825d0ff9465356d970a))
* fix measurement-plot story ([#661](https://github.com/zakodium-oss/react-science/issues/661)) ([48ae20c](https://github.com/zakodium-oss/react-science/commit/48ae20c2bc69ab340bea3b635ad9b977779ea285))
* story with accordion + panel toolbar + stacked panel ([#633](https://github.com/zakodium-oss/react-science/issues/633)) ([1dd41a8](https://github.com/zakodium-oss/react-science/commit/1dd41a8beb0ec54ec492dd382ed734b778997a46))

## [0.34.0](https://github.com/zakodium-oss/react-science/compare/v0.33.0...v0.34.0) (2024-01-31)


### Features

* render color picker dropdown in blueprintjs Popover ([5c48821](https://github.com/zakodium-oss/react-science/commit/5c488211e9a8d2d2f13c0180d292fd7b76ff1711))

## [0.33.0](https://github.com/zakodium-oss/react-science/compare/v0.32.2...v0.33.0) (2024-01-26)


### ⚠ BREAKING CHANGES

* remove Modal component in favor of blueprintjs' Dialog component ([#626](https://github.com/zakodium-oss/react-science/issues/626))
* remove component tabs in favor of blueprintjs Tabs component ([#624](https://github.com/zakodium-oss/react-science/issues/624))
* Table's font size changed from 12px to 14px. Table `border` prop rename to `hasBorder`
* You should use ValueRenderer.Header instead of ValueRenderer.Title inside of Table.Header

### Features

* add a 'disabled' prop to Toolbar.Item ([#615](https://github.com/zakodium-oss/react-science/issues/615)) ([c5352bc](https://github.com/zakodium-oss/react-science/commit/c5352bc0fbbd8440775d3c6d512075f992fefa91))
* add noTooltip prop to Toolbar.Item ([#629](https://github.com/zakodium-oss/react-science/issues/629)) ([82a2be9](https://github.com/zakodium-oss/react-science/commit/82a2be9ed4b48d1e67d624fbd079af36394ee1cc))
* improve layout of tabs ([#630](https://github.com/zakodium-oss/react-science/issues/630)) ([123f72f](https://github.com/zakodium-oss/react-science/commit/123f72f3177c0676d391c7f254d879ce8c4d20e1))
* remove Modal component in favor of blueprintjs' Dialog component ([#626](https://github.com/zakodium-oss/react-science/issues/626)) ([64ad1d0](https://github.com/zakodium-oss/react-science/commit/64ad1d01e1f8464545b0887a27b0663df2253225))
* use blueprint html table, adds bordered, compact, interactive and striped props ([#611](https://github.com/zakodium-oss/react-science/issues/611)) ([fef5ea7](https://github.com/zakodium-oss/react-science/commit/fef5ea723ec64b9dec692b4e860f0e3f16addc3d))


### Bug Fixes

* disable auto-translate of applications ([#637](https://github.com/zakodium-oss/react-science/issues/637)) ([c6bef12](https://github.com/zakodium-oss/react-science/commit/c6bef12a1d7500b43b393955fda35e85672f11f4))


### Documentation

* create controllable tooltip on button stories ([#619](https://github.com/zakodium-oss/react-science/issues/619)) ([bf1bfde](https://github.com/zakodium-oss/react-science/commit/bf1bfde5b8bb437746a56bf9daaa6116936f4364))
* fix keyboard navigation in most select stories ([f917094](https://github.com/zakodium-oss/react-science/commit/f9170945ececc365b31537d933b66090667bc74b))


### Miscellaneous Chores

* add missing breaking changes to changelog ([#618](https://github.com/zakodium-oss/react-science/issues/618)) ([d2d3871](https://github.com/zakodium-oss/react-science/commit/d2d3871001e344e69d52a052de491b2fb23674d7))


### Code Refactoring

* remove component tabs in favor of blueprintjs Tabs component ([#624](https://github.com/zakodium-oss/react-science/issues/624)) ([ebf6eb7](https://github.com/zakodium-oss/react-science/commit/ebf6eb7475f41a9262d6ef574d2b413dd281afdd))

## [0.32.2](https://github.com/zakodium-oss/react-science/compare/v0.32.1...v0.32.2) (2023-12-14)


### Bug Fixes

* re-enable cjs build ([#608](https://github.com/zakodium-oss/react-science/issues/608)) ([8df2be7](https://github.com/zakodium-oss/react-science/commit/8df2be7e410421dc11688adc68ec358243dcfcf5))

## [0.32.1](https://github.com/zakodium-oss/react-science/compare/v0.32.0...v0.32.1) (2023-12-14)


### Bug Fixes

* avoid passing wrong props to toolbar item and underlying button ([02c7b1d](https://github.com/zakodium-oss/react-science/commit/02c7b1d7fcca7bb80c22e5a1e7152bb3b65eee09))

## [0.32.0](https://github.com/zakodium-oss/react-science/compare/v0.31.0...v0.32.0) (2023-12-13)


### ⚠ BREAKING CHANGES

* Modal's and ConfirmModal's `onRequestClose` is now mandatory. Note that a Modal has to always be closed (`isOpen` must be set to `false`) when `onRequestClose` is called. This is driven by a change in the HTML spec that ensures a web page cannot indefinitely keep a dialog open. See https://github.com/whatwg/html/pull/9462 and https://bugs.chromium.org/p/chromium/issues/detail?id=1511166#c1

### Bug Fixes

* make Modal's onRequestClose mandatory and call it on close ([#602](https://github.com/zakodium-oss/react-science/issues/602)) ([e3f753f](https://github.com/zakodium-oss/react-science/commit/e3f753f45fc7e6c7acaba81ac6c89cd9b1696fd1))

## [0.31.0](https://github.com/zakodium-oss/react-science/compare/v0.30.1...v0.31.0) (2023-12-13)


### Features

* fix toolbar item alignement and allow different intents on each item ([#592](https://github.com/zakodium-oss/react-science/issues/592)) ([b54779b](https://github.com/zakodium-oss/react-science/commit/b54779bb0edb1d1f27463ffc1ec484531690dafe))


### Bug Fixes

* correct toolbar layout when items should fit the width of the container ([#599](https://github.com/zakodium-oss/react-science/issues/599)) ([6ab507f](https://github.com/zakodium-oss/react-science/commit/6ab507f5545232358c427eaed80e3bb32edebbec))

## [0.30.1](https://github.com/zakodium-oss/react-science/compare/v0.30.0...v0.30.1) (2023-12-12)


### Bug Fixes

* use tinycolor to compute rgba ([d29b40d](https://github.com/zakodium-oss/react-science/commit/d29b40d64d7c2d3374cf2c644618297c2fc77170))

## [0.30.0](https://github.com/zakodium-oss/react-science/compare/v0.29.0...v0.30.0) (2023-12-12)


### ⚠ BREAKING CHANGES

* remove Select component. Use blueprintjs select component instead
* remove our Input, Textarea, Checkbox and Field components. Use blueprintjs components directly instead.

### Features

* remove Input, Textarea, Checkbox and Field ([#579](https://github.com/zakodium-oss/react-science/issues/579)) ([104e2ad](https://github.com/zakodium-oss/react-science/commit/104e2ad54bf39d11f235381561fb4e1766a15f97))
* remove Select component ([#588](https://github.com/zakodium-oss/react-science/issues/588)) ([f695596](https://github.com/zakodium-oss/react-science/commit/f69559624335640473dc4dd6e5bc7098e427926d))
* use NonIdealState for empty DropZone ([#586](https://github.com/zakodium-oss/react-science/issues/586)) ([4ed7560](https://github.com/zakodium-oss/react-science/commit/4ed75604ccf19a1983957a546f8aeb57f5e7914f))


### Bug Fixes

* do not render button in span in Button component ([#595](https://github.com/zakodium-oss/react-science/issues/595)) ([88e0b37](https://github.com/zakodium-oss/react-science/commit/88e0b37afb49412e9f5b42b077f403fe6eea56cc))

## [0.29.0](https://github.com/zakodium-oss/react-science/compare/v0.28.1...v0.29.0) (2023-12-06)


### ⚠ BREAKING CHANGES

* remove ContextMenu and Dropdown components. We advise using the equivalent components provided by blueprintjs.
* rewrite buttons to be wrappers around blueprintjs buttons

### Features

* remove ContextMenu and Dropdown components in favour of using blueprintjs ([#585](https://github.com/zakodium-oss/react-science/issues/585)) ([03d9ce9](https://github.com/zakodium-oss/react-science/commit/03d9ce980108245b0d305e1018ede8b17f90670f))
* rewrite buttons to be wrappers around blueprintjs buttons ([c191026](https://github.com/zakodium-oss/react-science/commit/c191026e986e11cf097c9170cd429fe6dff2edde))


### Bug Fixes

* render explicit string literals for representing boolean values ([#589](https://github.com/zakodium-oss/react-science/issues/589)) ([40314a6](https://github.com/zakodium-oss/react-science/commit/40314a67bb899f8f9681eae1d37e71ffbd0dd853))
* update dependencies ([#580](https://github.com/zakodium-oss/react-science/issues/580)) ([a85d339](https://github.com/zakodium-oss/react-science/commit/a85d339d06aae45371349ec7ecb2607df25ee61a))

## [0.28.1](https://github.com/zakodium-oss/react-science/compare/v0.28.0...v0.28.1) (2023-10-18)


### Bug Fixes

* remove commonjs build and fix esm build ([#568](https://github.com/zakodium-oss/react-science/issues/568)) ([c353399](https://github.com/zakodium-oss/react-science/commit/c35339965dc3c4391f06ef81ffdc9c104e0594f8))

## [0.28.0](https://github.com/zakodium-oss/react-science/compare/v0.27.0...v0.28.0) (2023-10-17)


### ⚠ BREAKING CHANGES

* the api of the `Toolbar` component has changed. To migrate, remove `orientation='horizontal'` or replace `orientation='vertical'` with `vertical={true}`.  The api of the `Toolbar.Item` has changed. To migrate, set the icon in the `icon` prop instead of passing it in children. It is recommended to use blueprint icons by passing one of the available string constants to `icon`.

### Features

* sort info-panel search results ([#564](https://github.com/zakodium-oss/react-science/issues/564)) ([cb14d47](https://github.com/zakodium-oss/react-science/commit/cb14d4778412e0cc86216b4e29855f127d985ba7))


### Bug Fixes

* confirm modal outline ([6e3ba05](https://github.com/zakodium-oss/react-science/commit/6e3ba05c256ebb755885f5ecfb913ee8b0df421b))
* display boolean and zero values correctly in value renderers ([#566](https://github.com/zakodium-oss/react-science/issues/566)) ([10c65fe](https://github.com/zakodium-oss/react-science/commit/10c65fe0591aa4913ab525df5f07a731f5ef10b6))
* replace mouse event with pointer event to support touch devices ([#557](https://github.com/zakodium-oss/react-science/issues/557)) ([db36620](https://github.com/zakodium-oss/react-science/commit/db366208ec8a85fe7060a0acd0011eb637113431))


### Code Refactoring

* migrate Toolbar to blueprintjs components ([#559](https://github.com/zakodium-oss/react-science/issues/559)) ([d258b69](https://github.com/zakodium-oss/react-science/commit/d258b6938dc748f00a944e59b5123988cddb88f4))

## [0.27.0](https://github.com/zakodium-oss/react-science/compare/v0.26.2...v0.27.0) (2023-09-28)


### ⚠ BREAKING CHANGES

* the shadow dom has been removed from the root layout and global styles no longer apply to it. Recommended global styles (same as the TailwindCSS preflight styles) are published by the library so that users can use them in their applications.

### Features

* remove shadow dom and global styles ([#555](https://github.com/zakodium-oss/react-science/issues/555)) ([f87c170](https://github.com/zakodium-oss/react-science/commit/f87c170a0701c8d661a81fa734ba96d21dd39531))

## [0.26.2](https://github.com/zakodium-oss/react-science/compare/v0.26.1...v0.26.2) (2023-08-17)


### Bug Fixes

* InfoPanel key warning ([#544](https://github.com/zakodium-oss/react-science/issues/544)) ([45f4d21](https://github.com/zakodium-oss/react-science/commit/45f4d21cce50760164f44829d76bf874ff6bc7f4))
* remove Modal outline on focus ([#545](https://github.com/zakodium-oss/react-science/issues/545)) ([e8c1282](https://github.com/zakodium-oss/react-science/commit/e8c1282333f1941691ac395a1482e089feb6846b))
* resolve react-radio-group dependency issues ([#542](https://github.com/zakodium-oss/react-science/issues/542)) ([7dab585](https://github.com/zakodium-oss/react-science/commit/7dab585026946ef4d953b6fcda09e8c5394df494))

## [0.26.1](https://github.com/zakodium-oss/react-science/compare/v0.26.0...v0.26.1) (2023-08-16)


### Bug Fixes

* avoid ts error on build ([#538](https://github.com/zakodium-oss/react-science/issues/538)) ([b4b2222](https://github.com/zakodium-oss/react-science/commit/b4b22221f2e95e8be6ad6868329474944400f06f))

## [0.26.0](https://github.com/zakodium-oss/react-science/compare/v0.25.0...v0.26.0) (2023-08-15)


### Features

* allow many measurements ([#483](https://github.com/zakodium-oss/react-science/issues/483)) ([f3b2f40](https://github.com/zakodium-oss/react-science/commit/f3b2f40369116de7ba074b5ee427645383104b8b))
* implement info-panel component ([da259ba](https://github.com/zakodium-oss/react-science/commit/da259bab60a3e22e00479726ef411bf8f9fae16b))
* implement panel-preferences-toolbar ([8fd57c1](https://github.com/zakodium-oss/react-science/commit/8fd57c111af788f587677a2b4c6b5a7770486133))
* implement Panelheader ([#523](https://github.com/zakodium-oss/react-science/issues/523)) ([394d4ff](https://github.com/zakodium-oss/react-science/commit/394d4fff4ed4a199e0ae0df2b94326db28367781))
* implement RadioGroup component ([#536](https://github.com/zakodium-oss/react-science/issues/536)) ([2aff78e](https://github.com/zakodium-oss/react-science/commit/2aff78ec4419fedb577e5e3ce574d075f092abbb))
* implement textarea component ([#516](https://github.com/zakodium-oss/react-science/issues/516)) ([871df9d](https://github.com/zakodium-oss/react-science/commit/871df9d7ee8cdca7d2fec398af4b1bb60056f84a))
* improve table component  to allow html table props ([e28bd5f](https://github.com/zakodium-oss/react-science/commit/e28bd5fa53fb2407ec0c7df35f9baee98699f116))


### Bug Fixes

* improve confirm-modal style ([#537](https://github.com/zakodium-oss/react-science/issues/537)) ([1cd416b](https://github.com/zakodium-oss/react-science/commit/1cd416b273fc6f9e38356b30a0602a3348f61b6c))

## [0.25.0](https://github.com/zakodium-oss/react-science/compare/v0.24.3...v0.25.0) (2023-08-08)


### Features

* update dependencies ([#528](https://github.com/zakodium-oss/react-science/issues/528)) ([d40d20a](https://github.com/zakodium-oss/react-science/commit/d40d20a8f54a0515ac8c144bf266b4074ca1d4e3))


### Bug Fixes

* only render modal children after calling showModal ([#530](https://github.com/zakodium-oss/react-science/issues/530)) ([0a4d3c4](https://github.com/zakodium-oss/react-science/commit/0a4d3c4e22eecacbbedb2b8164db139bb3dcf095))

## [0.24.3](https://github.com/zakodium-oss/react-science/compare/v0.24.2...v0.24.3) (2023-07-13)


### Bug Fixes

* set min-width or min-height on split-pane ([#517](https://github.com/zakodium-oss/react-science/issues/517)) ([481aa05](https://github.com/zakodium-oss/react-science/commit/481aa0533f3173dace9207499e69010b824bad46))


### Documentation

* improve package description ([#513](https://github.com/zakodium-oss/react-science/issues/513)) ([5d9e56a](https://github.com/zakodium-oss/react-science/commit/5d9e56a27be383d7f6a906a7fd7fd117eadaa8e5))

## [0.24.2](https://github.com/zakodium-oss/react-science/compare/v0.24.1...v0.24.2) (2023-06-22)


### Bug Fixes

* modal generate a new portal context ([#510](https://github.com/zakodium-oss/react-science/issues/510)) ([01edd09](https://github.com/zakodium-oss/react-science/commit/01edd090528d534a1c1f4c9fb7148d9ee078bfdf))

## [0.24.1](https://github.com/zakodium-oss/react-science/compare/v0.24.0...v0.24.1) (2023-06-20)


### Bug Fixes

* correctly export select component ([cba5aac](https://github.com/zakodium-oss/react-science/commit/cba5aacbb3a306017124f638267eec19fcd4263a))
* export MenuOption and MenuOptions types ([#507](https://github.com/zakodium-oss/react-science/issues/507)) ([05855ed](https://github.com/zakodium-oss/react-science/commit/05855ed831d80960821d2ad27c598abdc36d32a0))

## [0.24.0](https://github.com/zakodium-oss/react-science/compare/v0.23.0...v0.24.0) (2023-06-17)


### Features

* disableable buttons ([#504](https://github.com/zakodium-oss/react-science/issues/504)) ([e4ddf56](https://github.com/zakodium-oss/react-science/commit/e4ddf560e81f8394611f85ba9e93f2f1e7c9f9aa))


### Bug Fixes

* enforce Select component to be controlled ([#501](https://github.com/zakodium-oss/react-science/issues/501)) ([b8d2150](https://github.com/zakodium-oss/react-science/commit/b8d215018c53989a74990ab95a5b441b83495213))
* set min width on percentage uncontrolled side ([#505](https://github.com/zakodium-oss/react-science/issues/505)) ([d303cb8](https://github.com/zakodium-oss/react-science/commit/d303cb89c92914e938af6ca8d7f38af110cc129b))

## [0.23.0](https://github.com/zakodium-oss/react-science/compare/v0.22.2...v0.23.0) (2023-06-07)


### Features

* add select component ([#495](https://github.com/zakodium-oss/react-science/issues/495)) ([80b2786](https://github.com/zakodium-oss/react-science/commit/80b278646b0dae590d79d7f8b7adf6cf09a85f36))
* allow to style tables ([#494](https://github.com/zakodium-oss/react-science/issues/494)) ([44af685](https://github.com/zakodium-oss/react-science/commit/44af685534e34afb2502b96eb27da2d296b0dfa9))
* checkbox component ([#490](https://github.com/zakodium-oss/react-science/issues/490)) ([d1f820f](https://github.com/zakodium-oss/react-science/commit/d1f820fa8268d4900c63efea2b4c08a1fb9365cb))

## [0.22.2](https://github.com/zakodium-oss/react-science/compare/v0.22.1...v0.22.2) (2023-05-26)


### Bug Fixes

* avoid double clicking issue ([#488](https://github.com/zakodium-oss/react-science/issues/488)) ([a98a468](https://github.com/zakodium-oss/react-science/commit/a98a468ae5200898605b413486ab7d9195ca012e))

## [0.22.1](https://github.com/zakodium-oss/react-science/compare/v0.22.0...v0.22.1) (2023-05-24)


### Bug Fixes

* stop propagation on dialog backdrop click ([#480](https://github.com/zakodium-oss/react-science/issues/480)) ([46f04c5](https://github.com/zakodium-oss/react-science/commit/46f04c5330abbae650506d1a88e006a44d5d1179))
* **tabs:** ensure consistant behavior between horizontal and vertical ([#486](https://github.com/zakodium-oss/react-science/issues/486)) ([9bb61e0](https://github.com/zakodium-oss/react-science/commit/9bb61e01f06ad88229f7489d8d83d7def9a99116))

## [0.22.0](https://github.com/zakodium-oss/react-science/compare/v0.21.2...v0.22.0) (2023-04-28)


### Features

* adapt the DropdownMenu to accept 'as' prop to specify an element to be a wrapper ([#476](https://github.com/zakodium-oss/react-science/issues/476)) ([824fd23](https://github.com/zakodium-oss/react-science/commit/824fd239cf4e15f3f4f9925875177d1f14908bc2))


### Bug Fixes

* correctly set dialog's cancel event handler ([05bdfc5](https://github.com/zakodium-oss/react-science/commit/05bdfc5fb2dc4ca7218a3ba576f0fa41ab0c6d49))

## [0.21.2](https://github.com/zakodium-oss/react-science/compare/v0.21.1...v0.21.2) (2023-03-24)


### Bug Fixes

* correct modal rendering on Webkit ([#466](https://github.com/zakodium-oss/react-science/issues/466)) ([46ed4de](https://github.com/zakodium-oss/react-science/commit/46ed4de3af94210c0331b81081773d9b04dae5cf))

## [0.21.1](https://github.com/zakodium-oss/react-science/compare/v0.21.0...v0.21.1) (2023-03-23)


### Bug Fixes

* modal should not take space in the layout if no nodes inside it ([#462](https://github.com/zakodium-oss/react-science/issues/462)) ([7cf740a](https://github.com/zakodium-oss/react-science/commit/7cf740a2664fad892fbc73a57f800d059d6e919d))
* render Modal in a portal and avoid rendering it when closed ([#465](https://github.com/zakodium-oss/react-science/issues/465)) ([7b273ed](https://github.com/zakodium-oss/react-science/commit/7b273ede3cf7513b215c3a150b115dcccb3be62f))

## [0.21.0](https://github.com/zakodium-oss/react-science/compare/v0.20.1...v0.21.0) (2023-03-13)


### ⚠ BREAKING CHANGES

* renamed `initialSize` and `initialClosed` props to `size` and `closed`

### Features

* make SplitPane semi-controlled ([#457](https://github.com/zakodium-oss/react-science/issues/457)) ([7374555](https://github.com/zakodium-oss/react-science/commit/7374555e3cab0a56f0461970c00e8dfa414a76d2))


### Bug Fixes

* parse decimal size ([#453](https://github.com/zakodium-oss/react-science/issues/453)) ([cb0da96](https://github.com/zakodium-oss/react-science/commit/cb0da96c6aa5cb29113dadac1dc07725a90d6927))

## [0.20.1](https://github.com/zakodium-oss/react-science/compare/v0.20.0...v0.20.1) (2023-01-19)


### Bug Fixes

* stop click event propagation on MenuItem ([#446](https://github.com/zakodium-oss/react-science/issues/446)) ([fde9b13](https://github.com/zakodium-oss/react-science/commit/fde9b13d496d957b598d8bf9fc8955f05bff61df))

## [0.20.0](https://github.com/zakodium-oss/react-science/compare/v0.19.2...v0.20.0) (2023-01-18)


### Features

* add input component ([#429](https://github.com/zakodium-oss/react-science/issues/429)) ([438bb50](https://github.com/zakodium-oss/react-science/commit/438bb501bd9cb391bbb026d65bdd4a102cffd44e))
* add validation props to input ([#441](https://github.com/zakodium-oss/react-science/issues/441)) ([086f0b8](https://github.com/zakodium-oss/react-science/commit/086f0b8621c250dd7b23e996924e474693586fec))


### Bug Fixes

* use Portal for context menu ([#444](https://github.com/zakodium-oss/react-science/issues/444)) ([c3f8c12](https://github.com/zakodium-oss/react-science/commit/c3f8c127b7aacac1a6f8462659a7751c7275d72f))

## [0.19.2](https://github.com/zakodium-oss/react-science/compare/v0.19.1...v0.19.2) (2022-12-08)


### Bug Fixes

* improve size of elements in IV plot view ([9cfcd9a](https://github.com/zakodium-oss/react-science/commit/9cfcd9a314d35fc79eaad21a278dcee4366a4856))

## [0.19.1](https://github.com/zakodium-oss/react-science/compare/v0.19.0...v0.19.1) (2022-12-05)


### Bug Fixes

* make build work for publication ([#435](https://github.com/zakodium-oss/react-science/issues/435)) ([70a81c8](https://github.com/zakodium-oss/react-science/commit/70a81c8fd298fee555d19e770c5d89f615a1daf2))

## [0.19.0](https://github.com/zakodium-oss/react-science/compare/v0.18.0...v0.19.0) (2022-12-05)


### Features

* accept many measurement in each kind ([#285](https://github.com/zakodium-oss/react-science/issues/285)) ([c39abde](https://github.com/zakodium-oss/react-science/commit/c39abde9d821ecee103a5c7c529f41ac330bf054))
* add ColorPickerDropdown to the application ([#395](https://github.com/zakodium-oss/react-science/issues/395)) ([c9a29dd](https://github.com/zakodium-oss/react-science/commit/c9a29ddea83cf8180669447130bf934e0c4c4565))
* add column to toggle measurement visibility ([4195952](https://github.com/zakodium-oss/react-science/commit/419595216b586a3846be406a730cb76377d5f9d6))
* add context menu dropdown ([#317](https://github.com/zakodium-oss/react-science/issues/317)) ([f71c83c](https://github.com/zakodium-oss/react-science/commit/f71c83cabadebb4b1dd6069a64da6646401a55dc))
* add crosshair to IV plot ([#418](https://github.com/zakodium-oss/react-science/issues/418)) ([288d867](https://github.com/zakodium-oss/react-science/commit/288d8679ccc954ab961fb8a346e70905f459941c))
* add dialog to add a AboutUs Modal ([#400](https://github.com/zakodium-oss/react-science/issues/400)) ([352ebab](https://github.com/zakodium-oss/react-science/commit/352ebabf285c5b7dd4f30a73946bfcf2c3489dd9))
* add FullscreenToolbarButton ([#352](https://github.com/zakodium-oss/react-science/issues/352)) ([225526d](https://github.com/zakodium-oss/react-science/commit/225526d247951f7f7f2a4164923cfcfb4a0f59c3))
* add GradientSelect component ([4112f5b](https://github.com/zakodium-oss/react-science/commit/4112f5b7b43e04ad7ae7562ab3c061ce52075aa0))
* add hook to load data from filelist URL ([#367](https://github.com/zakodium-oss/react-science/issues/367)) ([69f6a23](https://github.com/zakodium-oss/react-science/commit/69f6a23f8ab32d1b1bf8c2a594e728de0a3cde02))
* add info panel to app ([#295](https://github.com/zakodium-oss/react-science/issues/295)) ([110a25a](https://github.com/zakodium-oss/react-science/commit/110a25a6b8423b6f8ef8cf2f6d03d7072950851e))
* add Mass plot ([#303](https://github.com/zakodium-oss/react-science/issues/303)) ([102fd1a](https://github.com/zakodium-oss/react-science/commit/102fd1ab05ae1ac52bcd53fab28b49623f2c53f8))
* add measurement color preview ([#399](https://github.com/zakodium-oss/react-science/issues/399)) ([14c5942](https://github.com/zakodium-oss/react-science/commit/14c5942f665331b237e36f41e75e857ef7f5ca63))
* add responsive chart option ([#256](https://github.com/zakodium-oss/react-science/issues/256)) ([6d7b5a0](https://github.com/zakodium-oss/react-science/commit/6d7b5a09f2039a3edfd3979fd667be7a55b0b932))
* add settings state ([ad8b0a6](https://github.com/zakodium-oss/react-science/commit/ad8b0a6b6841e7853dc99754259040abe16dc6b9))
* add spinner while fetching data ([#396](https://github.com/zakodium-oss/react-science/issues/396)) ([37078c5](https://github.com/zakodium-oss/react-science/commit/37078c509afede682232bbfad417b6491ddea452))
* add the possibility to not select any measurement in measurement panel ([d5d9d73](https://github.com/zakodium-oss/react-science/commit/d5d9d73f20ef60caf3cce8a835a1f4fe4b27ddcf))
* add zoom out toolbar ([#428](https://github.com/zakodium-oss/react-science/issues/428)) ([f0720f3](https://github.com/zakodium-oss/react-science/commit/f0720f381bf21d134aebcec9c71e9947e5a1a510))
* allow to change all selected measurements visibility at once ([#419](https://github.com/zakodium-oss/react-science/issues/419)) ([d1a291a](https://github.com/zakodium-oss/react-science/commit/d1a291ab3870dc4d83e17af6bddfabc52a68f2cf))
* allow to change measurement color from table ([1bd971b](https://github.com/zakodium-oss/react-science/commit/1bd971b7fab953cda4fa8c3ba39a472cf08f75f2))
* allow to select X and Y variables in IV measurements ([045e888](https://github.com/zakodium-oss/react-science/commit/045e888577098e032ea3a9131fe4c48732afa247))
* allow users to change multiple measurements color config ([#424](https://github.com/zakodium-oss/react-science/issues/424)) ([0005105](https://github.com/zakodium-oss/react-science/commit/00051058108de2023c974ab35127fa84ec665553))
* cdf loader for gcms added ([#290](https://github.com/zakodium-oss/react-science/issues/290)) ([79f9147](https://github.com/zakodium-oss/react-science/commit/79f9147ed2db8bae7e4b874e92de997822da8486))
* create MeasurementVariableSelect component ([2f0320e](https://github.com/zakodium-oss/react-science/commit/2f0320ec7ebabe860d98ccd6d683e72d373210eb))
* customize measurement stroke color ([#358](https://github.com/zakodium-oss/react-science/issues/358)) ([d3c41f8](https://github.com/zakodium-oss/react-science/commit/d3c41f820f3f6dc4b3134d91ac821eed784de988))
* display variable labels on IV axes ([f367fcb](https://github.com/zakodium-oss/react-science/commit/f367fcbf25a2b184765f5d01d3dd22cd3a176698))
* implement DropDownMenu ([#283](https://github.com/zakodium-oss/react-science/issues/283)) ([800a5a1](https://github.com/zakodium-oss/react-science/commit/800a5a172dfec1e4f078aefe813847add6c767f1))
* improved cdf loader to work with hplc close [#298](https://github.com/zakodium-oss/react-science/issues/298) ([#310](https://github.com/zakodium-oss/react-science/issues/310)) ([0babd2a](https://github.com/zakodium-oss/react-science/commit/0babd2a9e7d387044e74c6c10cc9fec3c6615bd3))
* load state from .ium file ([#267](https://github.com/zakodium-oss/react-science/issues/267)) ([443572a](https://github.com/zakodium-oss/react-science/commit/443572a18291ef4a84c951d6a2496fe77df8dd7f))
* opened in Tabs must contain opened item id ([#401](https://github.com/zakodium-oss/react-science/issues/401)) ([4943a48](https://github.com/zakodium-oss/react-science/commit/4943a4810c4507a0586e96f14ae4733a2e69f4f5))
* put measurements actions in a toolbar and add button to delete measurements ([#426](https://github.com/zakodium-oss/react-science/issues/426)) ([308048e](https://github.com/zakodium-oss/react-science/commit/308048e6741bcc3ba76851e7a6aaab9f8b1c6c0d))
* save using ctrl+s ([#296](https://github.com/zakodium-oss/react-science/issues/296)) ([e76a9db](https://github.com/zakodium-oss/react-science/commit/e76a9db00c86f0b887deef4c4b1bf11136a91e75))
* select measurement on drop ([#268](https://github.com/zakodium-oss/react-science/issues/268)) ([d078aeb](https://github.com/zakodium-oss/react-science/commit/d078aeb186703ade0394299684a7535daa351c35))
* superimpose IV measurements in the plot view ([6158c23](https://github.com/zakodium-oss/react-science/commit/6158c234f4d58973d44448b4007a95a75366f277))
* update measurements table ([#402](https://github.com/zakodium-oss/react-science/issues/402)) ([5643933](https://github.com/zakodium-oss/react-science/commit/56439331dd940bf572fc2762a901f3e85416aed2))
* use smaller base size in components and express font sizes in em instead of pixel ([e819cf7](https://github.com/zakodium-oss/react-science/commit/e819cf707ba7ab6e6ea7e9b831431a25ee9424b8))


### Bug Fixes

* add confirm dialog to delete measurements ([3203ca5](https://github.com/zakodium-oss/react-science/commit/3203ca550dc6f12d94271c26a3b85c78407a9c48))
* add measurements ([#344](https://github.com/zakodium-oss/react-science/issues/344)) ([09ed2cc](https://github.com/zakodium-oss/react-science/commit/09ed2cc49c89868cab7a8b25283d0f0fb5ea742d))
* add missing key to IvSeries ([095b6a9](https://github.com/zakodium-oss/react-science/commit/095b6a932d29a8dd532296d096e2e7d24f2ebf35))
* add padding to y axis ([#360](https://github.com/zakodium-oss/react-science/issues/360)) ([e419707](https://github.com/zakodium-oss/react-science/commit/e419707314edc19c0d0e67e36809a068a656be3b))
* add safari fullscreen case ([#356](https://github.com/zakodium-oss/react-science/issues/356)) ([0aef859](https://github.com/zakodium-oss/react-science/commit/0aef859ce0ad9cf7768620ed450485e8aa1bbf50))
* add table header to measurements panel ([f795010](https://github.com/zakodium-oss/react-science/commit/f795010d729b7ef4c0b1297b0963c713cd2c1758))
* avoid crash with empty data ([b2b5740](https://github.com/zakodium-oss/react-science/commit/b2b5740681d34c4c993a2aaf6b2379cfdf93149e))
* avoid DropZone leaking style to children ([a267efa](https://github.com/zakodium-oss/react-science/commit/a267efa2343e3ae16622ccf2455e39661d25c222))
* change onClickOutside to be called correctly & allow menu to close on click ([#404](https://github.com/zakodium-oss/react-science/issues/404)) ([5a075c3](https://github.com/zakodium-oss/react-science/commit/5a075c321be89beac76e73767bc7f2ab530e658e))
* compute missing variables min/max while loading measurements ([0304b17](https://github.com/zakodium-oss/react-science/commit/0304b17817cc700eccbe34630f041a150f43d02b))
* display file name and technique in measurements header ([ad36dda](https://github.com/zakodium-oss/react-science/commit/ad36ddaed049c021d294017c03fc18d93b8ef386))
* do not propagate font size from DropZone to  children ([0386cb0](https://github.com/zakodium-oss/react-science/commit/0386cb0c6d68e68d7cd9240bb9787fb8de5710a9))
* do not wrap text in tabs ([4958f2e](https://github.com/zakodium-oss/react-science/commit/4958f2eb875cce21a1e5c25aca23e590246ccf1e))
* escape key to exit fullscreen ([#334](https://github.com/zakodium-oss/react-science/issues/334)) ([7365d88](https://github.com/zakodium-oss/react-science/commit/7365d88451a80df983ddb7d2a5d23304fb9ad9bf))
* fix Dropzone layout ([#338](https://github.com/zakodium-oss/react-science/issues/338)) ([f2c23f8](https://github.com/zakodium-oss/react-science/commit/f2c23f8952f036e230e2a02706ade65bd60c1cdc))
* **gradient-select:** allow to click on the chevron ([#362](https://github.com/zakodium-oss/react-science/issues/362)) ([1febf3c](https://github.com/zakodium-oss/react-science/commit/1febf3cd260c5fbb250927455d9cf1a62db51b14))
* hide panels when multiple measurements are selected ([9e9f23d](https://github.com/zakodium-oss/react-science/commit/9e9f23d46466caeb975d445e8a4b4e96436d7b3d))
* improve DropZone layout and style ([7738172](https://github.com/zakodium-oss/react-science/commit/7738172aec969db6054c93eba23f630ac58134fe))
* let split pane be resized with fixed-sized children ([#306](https://github.com/zakodium-oss/react-science/issues/306)) ([0b9ccdd](https://github.com/zakodium-oss/react-science/commit/0b9ccddf95a779c8c2208f4f32536e0c6f562008))
* never hide measurement info panel ([024f9ea](https://github.com/zakodium-oss/react-science/commit/024f9ea53d8ccf9c1afd973fb16f59897c2c6dc9))
* only show spinner when data is loading ([#417](https://github.com/zakodium-oss/react-science/issues/417)) ([7921c1e](https://github.com/zakodium-oss/react-science/commit/7921c1ea7bbca15c26b964b8661eef9008e5cf3b))
* pick default colors from a palette while loading data ([#422](https://github.com/zakodium-oss/react-science/issues/422)) ([f65a6c3](https://github.com/zakodium-oss/react-science/commit/f65a6c36bebe623addc3e8f3f1a0b0ff1e562669))
* plot mass with labels ([#309](https://github.com/zakodium-oss/react-science/issues/309)) ([1d45352](https://github.com/zakodium-oss/react-science/commit/1d45352d937471e25a73f7fc9cc5f7f39a8b6e7a))
* reduce icon size less drastically ([e6235f6](https://github.com/zakodium-oss/react-science/commit/e6235f6d58c25bfa98599b18df696d632e2a78b4))


### Documentation

* add bigmap ([#348](https://github.com/zakodium-oss/react-science/issues/348)) ([f969c8f](https://github.com/zakodium-oss/react-science/commit/f969c8f94afd9589567a45864566b5c3b3f02a82))
* add demo links on readme ([#265](https://github.com/zakodium-oss/react-science/issues/265)) ([6aa3b0e](https://github.com/zakodium-oss/react-science/commit/6aa3b0e9beb11e0b18ce5b45f6c8e50e930d6ce9))
* add general info ([#271](https://github.com/zakodium-oss/react-science/issues/271)) ([6f36ab0](https://github.com/zakodium-oss/react-science/commit/6f36ab05af11f848d4ed98eb10c99184a713ae97))
* add link to mass.json ([d2b58cd](https://github.com/zakodium-oss/react-science/commit/d2b58cd65d5dbc421cf925e774d9484fcc64c70d))
* adding info about loading new data ([b9d33af](https://github.com/zakodium-oss/react-science/commit/b9d33af5eb262a03f75aef1a7cca484a479438bb))

## [0.18.0](https://github.com/zakodium-oss/react-science/compare/v0.17.3...v0.18.0) (2022-10-20)


### ⚠ BREAKING CHANGES

* support for fileCollection and guess the spectra type (#246)
* implement Modal using dialog

### Features

* add api for switching parts of the UI to fullscreen ([#237](https://github.com/zakodium-oss/react-science/issues/237)) ([37d42df](https://github.com/zakodium-oss/react-science/commit/37d42dff3b9feb9fcd4d038c81da2f455586b95b))
* add biologic parser ([ab90365](https://github.com/zakodium-oss/react-science/commit/ab90365734bbfdf08bc236f0e2880336bfca2708))
* add width and height props to ConfirmModal ([792cfe7](https://github.com/zakodium-oss/react-science/commit/792cfe7688e052aec6466d67e29f69cee77f378b))
* implement Modal using dialog ([ddfdb59](https://github.com/zakodium-oss/react-science/commit/ddfdb59da2892665a7f160badc381666ab62ef96))
* load data from url ([#240](https://github.com/zakodium-oss/react-science/issues/240)) ([d653f67](https://github.com/zakodium-oss/react-science/commit/d653f679508d2e7990a35157d9710ca65e15a902))
* save as ium ([#238](https://github.com/zakodium-oss/react-science/issues/238)) ([b7df05d](https://github.com/zakodium-oss/react-science/commit/b7df05d94bf5f331616092368bfeae0c2921465b))
* scroll when tabs overflow ([#242](https://github.com/zakodium-oss/react-science/issues/242)) ([4f33be3](https://github.com/zakodium-oss/react-science/commit/4f33be3d051865faa0bded861c73ad1b482dca05))
* use the MeasurementExplorer component in the app ([#241](https://github.com/zakodium-oss/react-science/issues/241)) ([91402c5](https://github.com/zakodium-oss/react-science/commit/91402c579b5ab0ed3324e1e1315d88d1aa756995))


### Bug Fixes

* remove id attribute on RootLayout ([a76cff9](https://github.com/zakodium-oss/react-science/commit/a76cff9845323e063ae32088f6657e5558fcc8e4))


### update

* support for fileCollection and guess the spectra type ([#246](https://github.com/zakodium-oss/react-science/issues/246)) ([0bb78c5](https://github.com/zakodium-oss/react-science/commit/0bb78c5a990577c4b4f626baeb04fc895b69c856))

## [0.17.3](https://github.com/zakodium-oss/react-science/compare/v0.17.2...v0.17.3) (2022-10-02)


### Bug Fixes

* split pan cursor in px type ([#235](https://github.com/zakodium-oss/react-science/issues/235)) ([09ca0f4](https://github.com/zakodium-oss/react-science/commit/09ca0f46502b1837a7d2b6515df98c29691c2ed4))

## [0.17.2](https://github.com/zakodium-oss/react-science/compare/v0.17.1...v0.17.2) (2022-09-30)


### Bug Fixes

* rename mainSide to controlledSide ([#231](https://github.com/zakodium-oss/react-science/issues/231)) ([45084ba](https://github.com/zakodium-oss/react-science/commit/45084baff543692513f198830bd23054ba6c9c09))

## [0.17.1](https://github.com/zakodium-oss/react-science/compare/v0.17.0...v0.17.1) (2022-09-30)


### Bug Fixes

* package exports ([#229](https://github.com/zakodium-oss/react-science/issues/229)) ([2093191](https://github.com/zakodium-oss/react-science/commit/2093191094157de2ffff642ead617b28c1e786c5))

## [0.17.0](https://github.com/zakodium-oss/react-science/compare/v0.16.0...v0.17.0) (2022-09-30)


### ⚠ BREAKING CHANGES

* React >=v18 is now mandatory.

### Features

* add signal processing panel ([#201](https://github.com/zakodium-oss/react-science/issues/201)) ([868bba2](https://github.com/zakodium-oss/react-science/commit/868bba296121a77a3fcdf5568be747486f3517af))
* drag and drop measurements in App page ([#213](https://github.com/zakodium-oss/react-science/issues/213)) ([2df2cc0](https://github.com/zakodium-oss/react-science/commit/2df2cc06780a2fb1459d67388fda7495423a1232))
* improve peak panel ([#199](https://github.com/zakodium-oss/react-science/issues/199)) ([c8cb819](https://github.com/zakodium-oss/react-science/commit/c8cb819b039a930deabd8eb1b7a9524645f5db37))


### Bug Fixes

* split pane ([#228](https://github.com/zakodium-oss/react-science/issues/228)) ([bd169fd](https://github.com/zakodium-oss/react-science/commit/bd169fd746b53ecd5700d555dc9008b216f57c9b))


### Miscellaneous Chores

* update dependencies ([#203](https://github.com/zakodium-oss/react-science/issues/203)) ([cd40545](https://github.com/zakodium-oss/react-science/commit/cd405453245f6b436516e0cd75b7a8915023035e))

## [0.16.0](https://github.com/zakodium-oss/react-science/compare/v0.15.2...v0.16.0) (2022-08-04)


### ⚠ BREAKING CHANGES

* refactor value-renderer components (#171)

### Features

* add DataState utilities ([3b9c9de](https://github.com/zakodium-oss/react-science/commit/3b9c9de0a239904f6c1de4f606fcd9a5e82cbcaa))
* add flip btn in measurementExplorer ([a86520a](https://github.com/zakodium-oss/react-science/commit/a86520a6b436367ae17a7462540e9669bb22da61))
* add MeasurementsPanel ([d5e7c9b](https://github.com/zakodium-oss/react-science/commit/d5e7c9b4050baa78cb1a089fd2f1ffd67213f65a))
* add new properties for zoom in MeasurementPlot ([52878e7](https://github.com/zakodium-oss/react-science/commit/52878e7fa51b6f769cfd171063473d2531bc971d))
* add no data available case in MeasurementsPanel ([#179](https://github.com/zakodium-oss/react-science/issues/179)) ([c6f155a](https://github.com/zakodium-oss/react-science/commit/c6f155a72eff63ebc0e237470d14e40aaab0cbaf))
* implement IRPeaksPanel ([#186](https://github.com/zakodium-oss/react-science/issues/186)) ([d8a6426](https://github.com/zakodium-oss/react-science/commit/d8a642677a4b5779aee8d771ce18011a5aa9fd6c))
* implement MeasurementInfoPanel ([#188](https://github.com/zakodium-oss/react-science/issues/188)) ([46d515c](https://github.com/zakodium-oss/react-science/commit/46d515c443c0c811dfda735d62154e7ef6eba039))
* improve measurement panel ([#187](https://github.com/zakodium-oss/react-science/issues/187)) ([fab94d7](https://github.com/zakodium-oss/react-science/commit/fab94d7a0833162cb5663c5bf5b97b4f0ef6b676))
* Measurement explorer ([#150](https://github.com/zakodium-oss/react-science/issues/150)) ([63a235e](https://github.com/zakodium-oss/react-science/commit/63a235e148a479b2b9c746885b5bd2bdb773222a))


### Bug Fixes

* keep side panel closed when initialClosed is passed ([#176](https://github.com/zakodium-oss/react-science/issues/176)) ([6a7cb00](https://github.com/zakodium-oss/react-science/commit/6a7cb009bacc5d63dffc57956199e73743f1fc46))
* make ESM build work correctly ([#202](https://github.com/zakodium-oss/react-science/issues/202)) ([43a15f4](https://github.com/zakodium-oss/react-science/commit/43a15f4f036bb31109c4fd6baa1b4d2f1ddf7eaf))


### Miscellaneous Chores

* refactor value-renderer components ([#171](https://github.com/zakodium-oss/react-science/issues/171)) ([f279f6c](https://github.com/zakodium-oss/react-science/commit/f279f6c2d76b23643bcc551233d21e63d748a4b7))

## [0.15.2](https://github.com/zakodium-oss/react-science/compare/v0.15.1...v0.15.2) (2022-06-23)


### Bug Fixes

* enlarge the side panel does not appear anymore after shrinking it ([#155](https://github.com/zakodium-oss/react-science/issues/155)) ([3fe3637](https://github.com/zakodium-oss/react-science/commit/3fe3637268913c7f21c39ed34d1cdf945b71e1b6))
* specify base URL for gh-pages build ([#156](https://github.com/zakodium-oss/react-science/issues/156)) ([e45bb03](https://github.com/zakodium-oss/react-science/commit/e45bb034f2d32ba6455360192e8b0a67b698fcc5))
* specify base URL for Storybook in gh-pages build ([#158](https://github.com/zakodium-oss/react-science/issues/158)) ([378ec45](https://github.com/zakodium-oss/react-science/commit/378ec45845dec3ef34a688bd6df4330e05d54051))

## [0.15.1](https://github.com/zakodium-oss/react-science/compare/v0.15.0...v0.15.1) (2022-06-08)


### Bug Fixes

* minimumSize parameter is not considering the correct side of the split ([#153](https://github.com/zakodium-oss/react-science/issues/153)) ([227f7d4](https://github.com/zakodium-oss/react-science/commit/227f7d4ed5a31fbb4a8327c063fb69b637bc3876))

## [0.15.0](https://github.com/zakodium-oss/react-science/compare/v0.14.2...v0.15.0) (2022-05-31)


### Features

* add minimumSize prop to close SplitPane on load ([#147](https://github.com/zakodium-oss/react-science/issues/147)) ([baaebd5](https://github.com/zakodium-oss/react-science/commit/baaebd5da92066477984d0ececedcdd98d420601)), closes [#143](https://github.com/zakodium-oss/react-science/issues/143)
* create MeasurementPlot component ([#141](https://github.com/zakodium-oss/react-science/issues/141)) ([b272f47](https://github.com/zakodium-oss/react-science/commit/b272f47493cb14590c60296f5243c6e4244a4c61))

### [0.14.2](https://github.com/zakodium-oss/react-science/compare/v0.14.1...v0.14.2) (2022-05-12)


### Bug Fixes

* **ColorPicker:** remove border radius from saturation element ([a60cf0a](https://github.com/zakodium-oss/react-science/commit/a60cf0a84c40c67edbd87a3a43b4f8a22c783374))

### [0.14.1](https://github.com/zakodium-oss/react-science/compare/v0.14.0...v0.14.1) (2022-05-10)


### Bug Fixes

* react color picker crash when load it ([#130](https://github.com/zakodium-oss/react-science/issues/130)) ([8c2e90f](https://github.com/zakodium-oss/react-science/commit/8c2e90fb8614ae60748cb83a341965184d661702))

## [0.14.0](https://github.com/zakodium-oss/react-science/compare/v0.13.0...v0.14.0) (2022-05-09)


### Features

* add ColorPicker component ([#125](https://github.com/zakodium-oss/react-science/issues/125)) ([c2efce8](https://github.com/zakodium-oss/react-science/commit/c2efce8f1285828e585e356f10c503661a5b4c83))

## [0.13.0](https://github.com/zakodium-oss/react-science/compare/v0.12.0...v0.13.0) (2022-05-04)


### Features

* revert RootLayout, Add id to each component, Add custom components from string. ([c82980c](https://github.com/zakodium-oss/react-science/commit/c82980ce7e6a6f16ff00dda9734b730a8e98cd16))


### Bug Fixes

* update dependencies ([97e21cd](https://github.com/zakodium-oss/react-science/commit/97e21cd7d31f1184c6d7b6aab6e2299697b20dab))

## [0.12.0](https://github.com/zakodium-oss/react-science/compare/v0.11.1...v0.12.0) (2022-04-27)


### Features

* add table and basic rendering components ([#115](https://github.com/zakodium-oss/react-science/issues/115)) ([d892375](https://github.com/zakodium-oss/react-science/commit/d8923751efcd1a545638992fdf98deb76675e5ea))
* specify whether the split pane is initially closed or not ([#121](https://github.com/zakodium-oss/react-science/issues/121)) ([f850310](https://github.com/zakodium-oss/react-science/commit/f85031007bbf6a2c2e2d153f2143a8c907820c59))

### [0.11.1](https://github.com/zakodium-oss/react-science/compare/v0.11.0...v0.11.1) (2022-03-30)


### Bug Fixes

* resolve error on SSR with document ([#117](https://github.com/zakodium-oss/react-science/issues/117)) ([08869d0](https://github.com/zakodium-oss/react-science/commit/08869d01d99a8c4614419c19e7db442e9e71378e))

## [0.11.0](https://github.com/cheminfo/react-science/compare/v0.10.4...v0.11.0) (2022-03-11)


### Features

* Render components from layout object ([#103](https://github.com/cheminfo/react-science/issues/103)) ([e3b93f0](https://github.com/cheminfo/react-science/commit/e3b93f0c2b22bbb3d8a27b057f2b2f4c2b662977))


### Bug Fixes

* reintroduce react-shadow ([897f496](https://github.com/cheminfo/react-science/commit/897f4969f5d7fe11e9100cff8c56b1895ce8ba0d))

### [0.10.4](https://github.com/cheminfo/react-science/compare/v0.10.3...v0.10.4) (2022-03-10)


### Bug Fixes

* export lib on cjs ([#104](https://github.com/cheminfo/react-science/issues/104)) ([573a491](https://github.com/cheminfo/react-science/commit/573a4910d21735e840e1c83a4e29ee33262e92bc))

### [0.10.3](https://github.com/cheminfo/react-science/compare/v0.10.2...v0.10.3) (2022-02-28)


### Bug Fixes

* remove react-shadow ([d736b3c](https://github.com/cheminfo/react-science/commit/d736b3c4b3439b1add942d3104256428e3efdd5f))

### [0.10.2](https://www.github.com/cheminfo/react-science/compare/v0.10.1...v0.10.2) (2022-02-24)


### Bug Fixes

* remove global style reset ([179648f](https://www.github.com/cheminfo/react-science/commit/179648f0f7d084576cbdebba2cbc517d02628949))

### [0.10.1](https://www.github.com/cheminfo/react-science/compare/v0.10.0...v0.10.1) (2022-02-19)


### Bug Fixes

* remove shadow root again to fix usage with OCL ([051b4e4](https://www.github.com/cheminfo/react-science/commit/051b4e40714ad706b6ee96ab884ff90455ff81e4))

## [0.10.0](https://www.github.com/cheminfo/react-science/compare/v0.9.3...v0.10.0) (2022-02-19)


### Features

* allow useModal to be called without options ([3f17b50](https://www.github.com/cheminfo/react-science/commit/3f17b50e8355926da4082a623cc770ffa39a742f))


### Bug Fixes

* re-enable shadow root ([1696f58](https://www.github.com/cheminfo/react-science/commit/1696f5833d45be16b1a419ddd72f46bfe74245d1))

### [0.9.3](https://www.github.com/cheminfo/react-science/compare/v0.9.2...v0.9.3) (2022-01-28)


### Bug Fixes

* resolve error to allow Accordion to be opened on the SplitPane ([6ff1be9](https://www.github.com/cheminfo/react-science/commit/6ff1be95136b7b4b666fee6cbe66cb6a35970bf9))
* should not crashes if item not found ([851e0c3](https://www.github.com/cheminfo/react-science/commit/851e0c39d77db36301a2190c27cb12c34ef4fe27))

### [0.9.2](https://www.github.com/cheminfo/react-science/compare/v0.9.1...v0.9.2) (2021-11-08)


### Bug Fixes

* disable shadow root ([36e0561](https://www.github.com/cheminfo/react-science/commit/36e056193a7f4362607a2f6f85cb9312f80dc5cd))

### [0.9.1](https://www.github.com/cheminfo/react-science/compare/v0.9.0...v0.9.1) (2021-11-06)


### Bug Fixes

* recompute toolbar width when size changes ([2489524](https://www.github.com/cheminfo/react-science/commit/2489524626c7e51d2923566dc86fa22bd149cba0))

## [0.9.0](https://www.github.com/cheminfo/react-science/compare/v0.8.1...v0.9.0) (2021-11-06)


### Features

* add default color on Button ([f4e18a1](https://www.github.com/cheminfo/react-science/commit/f4e18a178caa1b70852559e77be23a084531dccd))
* add flex on Tabs ([d5b6e7a](https://www.github.com/cheminfo/react-science/commit/d5b6e7aa94044e6bd6f687e2f8f81432fbd578e1))
* add flex-1 on Tabs & Modal ([215ee8e](https://www.github.com/cheminfo/react-science/commit/215ee8ecedf8755d546bf8942b1e60e5d362a57a))
* add minHeight  / maxWidth on Modal ([f8f0e7a](https://www.github.com/cheminfo/react-science/commit/f8f0e7a77e843e01db63690d99cada77ae7a44d0))


### Bug Fixes

* change Modal impl to allow user to have a minHeight ([d6089ec](https://www.github.com/cheminfo/react-science/commit/d6089ecb39e7b09e126e6266e79ebf1bb9cc550f))
* **toolbar:** make elements wrap if height is too small ([6c038ae](https://www.github.com/cheminfo/react-science/commit/6c038ae97dafa868c7b00a63c9640e93d00f071f))

### [0.8.1](https://www.github.com/cheminfo/react-science/compare/v0.8.0...v0.8.1) (2021-10-05)


### Bug Fixes

* add tabs styles override ([#67](https://www.github.com/cheminfo/react-science/issues/67)) ([8fcbd5f](https://www.github.com/cheminfo/react-science/commit/8fcbd5fa838ea473547a2543168e0650ea35f22b))

## [0.8.0](https://www.github.com/cheminfo/react-science/compare/v0.7.0...v0.8.0) (2021-10-05)


### Features

* add export useOnOff ([dceb8f2](https://www.github.com/cheminfo/react-science/commit/dceb8f2633be4f230b2f6a72b36b3cef5cbf435c))


### Bug Fixes

* add Portal to place modals ([#65](https://www.github.com/cheminfo/react-science/issues/65)) ([7b72a19](https://www.github.com/cheminfo/react-science/commit/7b72a195233ff40ae30c32de62d0becad0dbed01))
* change children props of modal to accept one element ([7bbd478](https://www.github.com/cheminfo/react-science/commit/7bbd478f7c06785f1ac6edfa1198fced1099dd4b))

## [0.7.0](https://www.github.com/cheminfo/react-science/compare/v0.6.1...v0.7.0) (2021-10-01)


### Features

* add button / modal / tabs ([#60](https://www.github.com/cheminfo/react-science/issues/60)) ([3f1e69a](https://www.github.com/cheminfo/react-science/commit/3f1e69ae7ef62100caf9b210e14a013500ec538f))
* add buttons components ([3f1e69a](https://www.github.com/cheminfo/react-science/commit/3f1e69ae7ef62100caf9b210e14a013500ec538f))
* add modal components ([3f1e69a](https://www.github.com/cheminfo/react-science/commit/3f1e69ae7ef62100caf9b210e14a013500ec538f))
* add Tabs on components ([3f1e69a](https://www.github.com/cheminfo/react-science/commit/3f1e69ae7ef62100caf9b210e14a013500ec538f))
* implement style scoping using a shadow DOM ([3f1e69a](https://www.github.com/cheminfo/react-science/commit/3f1e69ae7ef62100caf9b210e14a013500ec538f))


### Bug Fixes

* make toolbar a bit smaller ([#59](https://www.github.com/cheminfo/react-science/issues/59)) ([9c38865](https://www.github.com/cheminfo/react-science/commit/9c38865b9815aa7ff0099a500e2fa6f7ddfe11af))
* resolve spacing problems on modal ([3f1e69a](https://www.github.com/cheminfo/react-science/commit/3f1e69ae7ef62100caf9b210e14a013500ec538f))

### [0.6.1](https://www.github.com/cheminfo/react-science/compare/v0.6.0...v0.6.1) (2021-09-24)


### Bug Fixes

* add full width in accordion ([#56](https://www.github.com/cheminfo/react-science/issues/56)) ([c85c7fe](https://www.github.com/cheminfo/react-science/commit/c85c7fe8d443063caca46c7913ea4e40a93445ec))

## [0.6.0](https://www.github.com/cheminfo/react-science/compare/v0.5.0...v0.6.0) (2021-09-24)


### Features

* remove backgroundcolor on header ([6dce124](https://www.github.com/cheminfo/react-science/commit/6dce1242f79cef4a001ec532db22569bdcf916d0))
* remove outline on button ([df54be7](https://www.github.com/cheminfo/react-science/commit/df54be77db79cf5cd0ee4ceb0559dd34e93944a0))


### Bug Fixes

* allow the Accordion to have a max height ([2825868](https://www.github.com/cheminfo/react-science/commit/2825868202dc54a199b63a7ca622c90eb372eac8))

## [0.5.0](https://www.github.com/cheminfo/react-science/compare/v0.4.1...v0.5.0) (2021-09-21)


### Features

* add border on height / width for SplitPane ([323286e](https://www.github.com/cheminfo/react-science/commit/323286eee1a34039df9c4657d132302ad413e4e2))
* add toggleAccordion ([d3546c3](https://www.github.com/cheminfo/react-science/commit/d3546c305d42cec9da4b8b06b9912338eb9b3e10))
* allow to close a pane with double click on divider ([dfa6c51](https://www.github.com/cheminfo/react-science/commit/dfa6c51a20001fcf233fb345e69be20112495345))


### Bug Fixes

* resolve error on chrome & firefox & safari on scroll pane ([9a2f81c](https://www.github.com/cheminfo/react-science/commit/9a2f81c234d1da37b5b9839486d159e877621933))

### [0.4.1](https://www.github.com/cheminfo/react-science/compare/v0.4.0...v0.4.1) (2021-09-16)


### Bug Fixes

* add flex on Accordion ([#43](https://www.github.com/cheminfo/react-science/issues/43)) ([ef4eb31](https://www.github.com/cheminfo/react-science/commit/ef4eb31b5113a35239a21dec8e965762c5156c18))

## [0.4.0](https://www.github.com/cheminfo/react-science/compare/v0.3.1...v0.4.0) (2021-09-16)


### Features

* add double click on Accordion to close every items ([bcb2604](https://www.github.com/cheminfo/react-science/commit/bcb260403c6799c7b71c0203657e828b8698f7a0))


### Bug Fixes

* add min width on SplitPane ([4bec92f](https://www.github.com/cheminfo/react-science/commit/4bec92f77db3257950af01065a7bcd800b6667ba))
* change block to flex on Accordion ([#42](https://www.github.com/cheminfo/react-science/issues/42)) ([fcc24bb](https://www.github.com/cheminfo/react-science/commit/fcc24bb813405f8203be6d06be637e887c51f40c))
* remove animation ([b07dc3c](https://www.github.com/cheminfo/react-science/commit/b07dc3c9cf978927f778e1bfe1a8e365154601c3))

### [0.3.1](https://www.github.com/cheminfo/react-science/compare/v0.3.0...v0.3.1) (2021-09-14)


### Bug Fixes

* move the onClick on Accordion ([#29](https://www.github.com/cheminfo/react-science/issues/29)) ([70a7da5](https://www.github.com/cheminfo/react-science/commit/70a7da5c2e4bdeea7fa5288b909714f6d9378d78))

## [0.3.0](https://www.github.com/cheminfo/react-science/compare/v0.2.0...v0.3.0) (2021-09-14)


### Features

* add ReactFragment undefined null boolean on Accordion ([#26](https://www.github.com/cheminfo/react-science/issues/26)) ([c076bcf](https://www.github.com/cheminfo/react-science/commit/c076bcfa682091f5780886485e04f15c30ec78ed))

## [0.2.0](https://www.github.com/cheminfo/react-science/compare/v0.1.0...v0.2.0) (2021-09-13)


### Features

* add color on background of modal ([cdadf6e](https://www.github.com/cheminfo/react-science/commit/cdadf6ed576825a331c2e6b59d3784f060f4ac1d))
* add Modal to components ([9f2f3e2](https://www.github.com/cheminfo/react-science/commit/9f2f3e238b8d676577f9b2d0fad9f39e739af73d))
* add zindex 50 on tooltip ([da760b2](https://www.github.com/cheminfo/react-science/commit/da760b243a507c54e50285677c2c98100e89a25a))
* allow to pass className to Toolbar.Item ([#20](https://www.github.com/cheminfo/react-science/issues/20)) ([e2509ce](https://www.github.com/cheminfo/react-science/commit/e2509ce4fc90110f545684ea2b9e317c94b32f31))
* set text from Toolbar to center ([44f7f62](https://www.github.com/cheminfo/react-science/commit/44f7f627e3bcebc5054f8dd164244c29c20ac130))


### Bug Fixes

* add ReactFragment, boolean and null to Toolbar ([#14](https://www.github.com/cheminfo/react-science/issues/14)) ([4584681](https://www.github.com/cheminfo/react-science/commit/4584681c471726e81162c3668219776bffb96a9f))

## 0.1.0 (2021-09-13)


### Features

* add AccordionLayout ([11305fe](https://www.github.com/cheminfo/react-science/commit/11305fee0487ede53a9ce3227acfc3ee5f5d966c))
* add HeaderLayout ([1d773f8](https://www.github.com/cheminfo/react-science/commit/1d773f8015cb86b488acfa1ec461c34e7a076992))
* add normalize css on public ([8e8b450](https://www.github.com/cheminfo/react-science/commit/8e8b4508c9acc23fa5bb5e6120d6b71fa2131ce1))
* add normalize css on storybook ([7f44526](https://www.github.com/cheminfo/react-science/commit/7f44526e8cc347eae7054aa119c77086d342fbc7))
* add normalized css & import on vite & sb ([ed59479](https://www.github.com/cheminfo/react-science/commit/ed594794878ab05382d9fbb615a0bc2843d0d333))
* add resizable width in px ([5501ae9](https://www.github.com/cheminfo/react-science/commit/5501ae93abf0d4e3e667f207af5f39420d3371d9))
* add SideBarLayout & RootLayout ([1fb019b](https://www.github.com/cheminfo/react-science/commit/1fb019bf24e6213bdefeac758e7b32f5b756b078))
* add style props on RootLayout ([84a5db0](https://www.github.com/cheminfo/react-science/commit/84a5db01970fa67683e14a4ed074b8b580318e5f))
* add titleOrientation on Toolbar ([4e3ad6f](https://www.github.com/cheminfo/react-science/commit/4e3ad6f3ca2d91c4ed75baa81da5fa8ceba9c12e))
* change normalized css to use the tailwind one ([14b9fab](https://www.github.com/cheminfo/react-science/commit/14b9fabe9d22d4d7c5e685b4eb7bbb6f9fe8a0b2))
* implement SplitPane with % and px & set the default value to 50% ([8a65486](https://www.github.com/cheminfo/react-science/commit/8a65486254b65614fe0736769da151e145aebb23))
* remove unused digit on the onChange SplitPane ([0bc4b47](https://www.github.com/cheminfo/react-science/commit/0bc4b47d34009c6ef51ba087ba538dec29ab10ee))


### Bug Fixes

* add right border on Toolbar ([575ba75](https://www.github.com/cheminfo/react-science/commit/575ba7574d485ba062100a0791c2a4f0a8dfbae5))
* display the entire tooltip on hover ([3aed192](https://www.github.com/cheminfo/react-science/commit/3aed1927c545094166c4d13fc138df217c665c6b))
* resolve error on script to install the project ([a386c04](https://www.github.com/cheminfo/react-science/commit/a386c0475ba111127b886fe6ba77810e4552916f))
* resolve error on sideSeparation end ([6684af8](https://www.github.com/cheminfo/react-science/commit/6684af824c35d8f00c6ed213a9c5b3f03f0ea646))
* upgrade action to push on gh-pages ([f949102](https://www.github.com/cheminfo/react-science/commit/f949102874ea0ae9fc34875c176edd97a34e9b50))
