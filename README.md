# Next.js static site for GitHub pages

---

## Fast start

1. Set GitHub repo name in `sh ./deploy.sh`  
   (not needed if using the root repo named `<username>.github.io`)

2. Run `sh ./deploy.sh` to build, export, and deploy

---

## Guided steps

### Part 1

Prepare the initial state of the app (as a starter for other projects)

#### Prepare the repo and GitHub Codespaces

1. Create a new repo on GitHub and name it `username.github.io`

   Check to create the readme file to have a working repo with the green `Code` button

2. Run GitHub Codespaces

3. Install `Prettier` plugin

4. Adjust `VS Code` settings

   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "prettier.semi": false,

     "editor.tabSize": 2,
     "editor.lineHeight": 24,
     "terminal.integrated.lineHeight": 1.2,
     "terminal.integrated.letterSpacing": 1
   }
   ```

#### Install Next.js

1. Run installation command

   ```bash
   npx create-next-app@latest
   ```

2. Choose the name app as `.` (current directory)

#### Install TailwindCSS

[Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

1. Install `Tailwind CSS IntelliSense` plugin in `VS Code` - **this is important!**

2. Clean up `Next.js` default files (delete `api`, `css modules`)

3. Check development preview

   ```bash
   npm run dev
   ```

#### Push changes as an initial state for building apps

```bash
git add . && git commit -m "Set initial project state" && git push
```

---

### Part 2

Create the app

Reuse existing components from the repo

---

### Part 3

Deploy the project

#### Export project to static files

1. Add export command to `package.json` and run it

   ```json
   "export": "next build && next export"
   ```

#### Deploy to GitHub

1.  Create a new `git-worktree` (new branch accessible inside a folder)

    ```bash
    git worktree add gh-pages
    ```

2.  Ignore that new folder from the main branch

    In `.gitignore` add:

    ```
    # github pages branch
    /gh-pages
    ```

3.  Remove all files from `gh-pages` dir, except `.git` folder

    ```bash
    find gh-pages/ -mindepth 1 -not -name '.git' -delete
    ```

4.  Copy files from `out` dir to `gh-pages`

    ```bash
    cp -r out/* gh-pages
    ```

5.  Commit changes in `gh-pages` branch and push them

    ```bash
    cd gh-pages &&
    git add . &&
    git commit -m 'Deploy' &&
    git push --set-upstream origin gh-pages
    ```

6.  Chain those commands in the bash script `deploy.sh`

    ```bash
    #! /bin/bash

    # Install node_modules
    npm install

    # Build the Next.js app
    npx next build &&

    # Export static files from the build (by default to the `out` dir)
    npx next export &&

    # Create a branch `gh-pages` inside the folder
    git worktree add gh-pages

    # Delete all files inside `gh-pages` folder, except the `.git` (to preserve the worktree)
    find gh-pages/ -mindepth 1 -not -name '.git' -delete

    # Copy all files from the `out` to `gh-pages` folder
    cp -r out/* gh-pages/ &&

    # Commit changes inside `gh-pages` folder/branch and push them to GitHub
    cd gh-pages &&
    git add . &&
    git commit -m 'Deploy' &&
    git push --set-upstream origin gh-pages
    ```

7.  Check the GitHub page setting

8.  Remove Jekyll from the build chain by creating `.nojekyll` file in `gh-pages` folder/branch

    (with Jekyll, underscored names won’t work, like `_next`)

9.  Include that in the deploy script (after deleting files in `gh-pages`)

    ```bash
    # Disable Jekyll build process (https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators)
    touch gh-pages/.nojekyll
    ```

#### Fix subpaths for GitHub repositories

1.  Use `GITHUB_REPO` env variable before the build script and update the deploy script:

    ```bash
    # Set the GitHub repo name and build the Next.js app
    GITHUB_REPO="" npx next build &&
    ```

2.  Update `next.config.js` file:

    ```
    const nextConfig = {
      // ...
      basePath: process.env.GITHUB_REPO ? `/${process.env.GITHUB_REPO}` : "",
    }
    ```
