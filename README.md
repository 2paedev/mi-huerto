# Mi Huerto

Manage your garden and allotment

## Description

Companion planting applications.

## Live demo

Here is a working live demo : https://mi-huerto-ab565.web.app

## Table of contents

- [Status](#status)
- [Quick Start](#quick-start)
- [Tasks](#tasks)
- [Hooks](#hooks)
- [Deployment](#deployment)
- [Author](#author)
- [Version History](#version-history)
- [License](#license)

### Status

> Dependencies

- [x] Angular : 13.3.0
- [x] Angular CLI : 13.3.0
- [x] Angular Material : 13.3.1

> Features

- [x] Routing
- [x] Lazy Loading
- [x] Responsive Layout
- [x] Components
- [x] Services
- [x] Reactive Form
- [x] Sass CSS (BEM)
- [x] Custom theming
- [x] Data Store with REDUX and NgRx
- [x] Linters (Typescript and CSS)
- [x] Git hooks
- [x] Unit testing (karma-spec-reporter & coverage)
- [x] E2E (Cypress)
- [x] Firebase hosting

### Quick Start

```bash
# download the example or clone the repo from github
git clone https://github.com/2paedev/mi-huerto.git

# change directory
cd mi-huerto

# install the repo with npm
npm install

# start the development server
npm run start

```

in your browser go to [http://localhost:4200](http://localhost:4200)

### Tasks

- Localhost server

```bash
#!/bin/bash
npm run start
```

- Unit test (no-watch)

```bash
#!/bin/bash
npm run test
```

- Unit test (watch)

```bash
#!/bin/bash
npm run test:watch
```

- Unit test (coverage)

```bash
#!/bin/bash
npm run test:coverage
```

- E2E test (watch)

```bash
#!/bin/bash
npm run e2e
```

- E2E test (no-watch)

```bash
#!/bin/bash
npm run e2e:ci
```

### Hooks

Husky hooks are installed, pre-commit and pre-push are configured.

> [pre-commit] : npm run lint && npm run lint:styles

> [pre-push] : npm run test

### Deployment

```bash
# Log with credentials
firebase login

# Build frontend project
cd mi-huerto
npm run build

# Deploy
firebase deploy
```

### Author

- Author : 2PaeDev
- Github : https://github.com/2paedev

### Version History

- 0.1
  - Initial Release

### License

This project is licensed under the MIT License
