# Connect this project to GitHub (full walkthrough, English)

This file is the **full companion** to `GITHUB-PODKLYUCHENIE-RU.md` (same steps, in English). Use either document.

---

## Important: copying into Terminal (macOS)

- **Do not** paste lines that start with three backticks (```) or the word `bash` from Markdown files. The Terminal will get stuck showing `bquote>` or `>`.
- If you are stuck: press **Ctrl + C** once or twice, then type `clear` and Enter, and start again.
- Copy **only** the command lines themselves (they should start with `cd`, `git`, etc.).

Your project path on this machine:

`/Users/elizaveta/Desktop/ИИ АГЕНТЫ/Создатель сайтов/paragliding-school`

Example remote URL after you created the repo **LisaSkyHigh/paragliding-school** on GitHub:

`https://github.com/LisaSkyHigh/paragliding-school.git`

---

## What you get from GitHub

- Code is stored in the cloud.
- You can roll back, compare versions, and tag milestones.
- You can clone the repo on another computer.

---

## Step 1 — GitHub account

If you already have GitHub (you do), skip this.

1. Open https://github.com  
2. Sign up / Sign in.

---

## Step 2 — Create an empty repository

1. On GitHub, click **+** (top right) → **New repository**.  
2. **Repository name:** `paragliding-school` (example).  
3. Choose **Public** or **Private**.  
4. **Do not** check “Add a README”, “Add .gitignore”, or “Choose a license” if you already have a local project with commits — it is easier to push an existing tree.  
5. Click **Create repository**.

On the next page, find **“…or push an existing repository from the command line”**. You will use those commands with your real URL.

---

## Step 3 — Open Terminal and go to the project folder

Copy this line **exactly** (one line), paste into Terminal, press Enter:

cd "/Users/elizaveta/Desktop/ИИ АГЕНТЫ/Создатель сайтов/paragliding-school"

Check Git sees the project:

git status

You should see modified/untracked files or “nothing to commit”.

---

## Step 4 — Link GitHub (remote “origin”)

One-time (use **your** URL from GitHub if different):

git remote add origin https://github.com/LisaSkyHigh/paragliding-school.git

If you see **remote origin already exists**:

git remote remove origin

Then run `git remote add origin …` again.

Verify:

git remote -v

You should see `origin` and your HTTPS URL.

---

## Step 5 — First push

git branch -M main

git add -A

git commit -m "Initial push: paragliding school site"

git push -u origin main

**Authentication:** GitHub usually asks for username + **Personal Access Token** (not your normal password).

### Create a token (once)

1. GitHub → profile photo → **Settings**  
2. **Developer settings** → **Personal access tokens** → **Tokens (classic)**  
3. **Generate new token (classic)**  
4. Enable scope **repo**  
5. Generate, copy the token, store it safely.

When Terminal asks for **Password**, paste the **token**.

If GitHub created a README on the remote and push is rejected, run:

git pull origin main --allow-unrelated-histories

Resolve any merge message if prompted, then:

git push -u origin main

---

## Step 6 — Later pushes (after you edit the site)

cd "/Users/elizaveta/Desktop/ИИ АГЕНТЫ/Создатель сайтов/paragliding-school"

git add -A

git commit -m "Describe your change in one short line"

git push

---

## Optional: tags for milestones

git tag -a site-v1 -m "Homepage and trust strip"

git push origin site-v1

---

## Local preview URLs

| URL | Purpose |
|-----|--------|
| http://localhost:3000 | Current homepage |
| http://localhost:3000/design-original | Short hero reference |
| http://localhost:3000/design-source | Full welcome block only |

Run `npm run dev` in the project folder before opening localhost.

---

## Troubleshooting

- **Permission denied** — wrong token or wrong URL.  
- **Repository not found** — typo in URL, or private repo while not logged in.  
- **Stuck in Terminal** — Ctrl+C, then re-paste commands without Markdown fences.

Also see **`TERMINAL-PUSH-COMMANDS.txt`** in the project root: raw lines only, safe to copy.
