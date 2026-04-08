Portfolio site

This repository holds a simple static site (index.html).

What I set up for you locally:
- Initialized a local git repository
- Created this README and a .gitignore
- Created `main` and `gh-pages` branches locally with an initial commit

How to publish to GitHub Pages (choose one):

1) Using GitHub CLI (recommended)
- Install GitHub CLI: https://cli.github.com/
- Authenticate: `gh auth login`
- From this project folder run:
  gh repo create --public --source=. --remote=origin --push
  gh api -X POST /repos/:owner/:repo/pages -f source.branch=gh-pages -f source.path=/ || true

This will create a public repository under your account, push the code, and attempt to set GitHub Pages to the `gh-pages` branch.

2) Manual via GitHub web:
- Create a new repository on GitHub with the same name you want.
- On your machine, add the remote and push:
  git remote add origin https://github.com/<your-username>/<repo-name>.git
  git push -u origin main
  git push -u origin gh-pages
- In the repository settings on GitHub: go to Pages and set the source branch to `gh-pages` (root). Save.

Notes:
- I couldn't detect the GitHub CLI on this machine, so I created the local repo for you.
- If you'd like, I can continue and create the remote and enable Pages if you install the GitHub CLI or provide a token and allow me to use it.
