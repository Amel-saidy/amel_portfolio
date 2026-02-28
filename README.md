# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Publish / Push to GitHub (Windows PowerShell)

If `git` isn't recognized in PowerShell you'll need to install Git on Windows first. The quickest ways:

- Using winget (Windows 10/11):

```powershell
winget install --id Git.Git -e --source winget
winget install --id GitHub.cli -e --source winget   # optional, for `gh` commands
```

- Or download from https://git-scm.com/download/win and run the installer. Restart PowerShell once installed.

After Git is installed, run the quick commands below (from the project root):

```powershell
git init
git branch -M main
git add -A
git commit -m "chore: initial commit — portfolio site"
git remote add origin https://github.com/Amel-saidy/MY_PORTFOLIO.git
git push -u origin main
```

If your repository does not exist and you have `gh` installed (GitHub CLI), you can let `gh` create the remote and push for you:

```powershell
gh auth login       # only if not already logged in
gh repo create Amel-saidy/MY_PORTFOLIO --public --source=. --remote=origin --push
```

I've added a helper script at `./scripts/push-to-github.ps1` that wraps the routine above — after installing git run it like:

```powershell
.\scripts\push-to-github.ps1 -RemoteUrl "https://github.com/Amel-saidy/MY_PORTFOLIO.git"
```

If you run into authentication prompts, follow the CLI guidance — on Windows you will commonly sign in using your GitHub account or a Personal Access Token (PAT) if prompted for credentials.
