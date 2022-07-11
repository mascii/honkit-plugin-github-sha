# honkit-plugin-github-sha
As in GitHub, add a commit hash to the URL by pressing the `Y` key.

## Requirement
- HonKit
- GitHub Workflows
  - This plugin uses the environment variable `GITHUB_SHA`.

## Install
Install with [npm](https://www.npmjs.com/):

```
npm install -D honkit-plugin-github-sha
```

## Usage
Put `github-sha` to your `book.json`:

```json
{
  "plugins": [
    "github-sha"
  ]
}
```

Press the Y key on honkit, A commit hash like `?hash=01234567` is added to the URL.

## License
MIT
