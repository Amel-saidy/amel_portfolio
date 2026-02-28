<#
Run this in PowerShell *on your machine* after Git is installed and you're in the project root.

Usage:
  1. Install Git (and gh), then open PowerShell and run this script:
     .\scripts\push-to-github.ps1 -RemoteUrl https://github.com/Amel-saidy/MY_PORTFOLIO.git

  2. If the remote already exists, use the -ForceRemote switch to overwrite an existing 'origin'.

Notes:
  - This script does not attempt to auto-authenticate (you'll be prompted by Git or GitHub CLI).
  - If you prefer to use `gh` to create the remote, see README.md; `gh` can create the repo and push in one step.
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$RemoteUrl,

    [switch]$ForceRemote
)

function Check-Git {
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        Write-Error "git is not installed or not on PATH. Install git first then re-run this script."
        exit 2
    }
}

Check-Git

Write-Host "Initializing git repo (if not already initialized) and committing files..." -ForegroundColor Cyan

if (-not (Test-Path .git)) {
    git init
}

# Ensure branch name main
try {
    git switch -c main -q
} catch {
    git branch -M main
}

# Stage and commit (if there's anything new to commit)
git add -A

$status = git status --porcelain
if ($status) {
    git commit -m "chore: initial commit — portfolio site" -q
    Write-Host "Committed local files." -ForegroundColor Green
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

# Add or update remote
if (git remote get-url origin 2>$null) {
    if ($ForceRemote) {
        git remote set-url origin $RemoteUrl
        Write-Host "Replaced 'origin' URL with $RemoteUrl" -ForegroundColor Green
    } else {
        Write-Host "Remote 'origin' already configured. Use -ForceRemote to overwrite." -ForegroundColor Yellow
    }
} else {
    git remote add origin $RemoteUrl
    Write-Host "Added 'origin' -> $RemoteUrl" -ForegroundColor Green
}

Write-Host "Pushing branch 'main' to origin..." -ForegroundColor Cyan
git push -u origin main

Write-Host "Done — if push failed check authentication/remote permissions and retry." -ForegroundColor Green
