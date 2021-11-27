<h1 align="center">
  Next Authentication
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Usage</a>
</p>
<br />
<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/next-auth" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/next-auth" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/next-auth" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/next-auth" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/next-auth" alt="Pull requests" >
  <img src="https://img.shields.io/github/last-commit/Lissone/next-auth" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/next-auth/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/next-auth/issues">Request feature</a>
</p>

<br />

## Description

Simple jwt authentication application with refresh token. Developed in order to deepen my knowledge of jwt authentication through the front-end using NextJs. 

I learned a lot about interceptors and axios request queue, api data recovery logic by client-side and server-side using refresh token, permission control with react and server-side components, besides knowing more about BrodcastChannel for automatic logout of tabs.

This project can be used as a model to create react applications that need jwt authentication with refresh token.

## Requirements

- [Npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Nodejs](https://nodejs.org/en/)

## Technologies

### Backend (Api)

- Nodejs
- Typescript
- Express
- Json web token

### Front End

- NextJs
- Typescript
- Sass
- Axios
- Nookies
- ESLint (Airbnb config + pessoal rules)
- Prettier

## Usage

You can clone it on your pc using the command:

```bash
git clone https://github.com/Lissone/next-auth.git
cd next-auth
```

Install dependencies using:

```bash
yarn
#or
npm install
```

Run api:
```bash
cd .\packages\api\
yarn dev
#or
npm run dev
```

Run web:
```bash
cd .\packages\web\
yarn dev
#or
npm run dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
