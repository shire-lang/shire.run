curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GithubToken}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/issues
