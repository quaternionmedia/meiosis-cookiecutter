# Meiosis Cookiecutter
Cookiecutter template for a [Meiosis](https://meiosis.js.org/) project, using [Mithril.js](https://mithril.js.org/), TypeScript, and [Vite](https://vitejs.dev/).


## Usage
### Cookiecutter
Install [cookiecutter](https://cookiecutter.readthedocs.io/en/latest/installation.html) and generate the template:
```bash
pip install cookiecutter
cookiecutter gh:quaternionmedia/cookiecutter-meiosis
```

### Install dependencies:
```bash
cd <project_name>
npm install
```

### Run the development server:
```bash
npm run dev
```

Vist [localhost:1234](http://localhost:1234) in your browser.

## Development
Add you Mithril app to `app/index.ts`

```ts
export interface State {
    // Your state types here
}

export const App = {
  initial: {
    // Your initial state here
  },
  services: [
    // Services that run on state changes
  ],
  // Your application view here
  view: cell => m('h1', 'Hello, world!'),
}
```

## Documentation
For details on how to use Meiosis, check out the [Meiosis documentation](https://meiosis.js.org/).
