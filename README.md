# honkit-plugin-github-sha
As in GitHub, add a commit hash to the URL by pressing the `Y` key.

## Requirement
- HonKit

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

Press the Y key on honkit, A commit hash like `?hash=01234567` is appended to the URL.

## Plugin Config
- `environmentVariableName` (default: `"GITHUB_SHA"`)
  - Name of the environment variable where a commit hash is stored
- `hashByteLength` (default: `4`)
  - Length of a commit hash to be appended to the URL

```json
{
  "pluginsConfig": {
    "github-sha": {
      "environmentVariableName": "CF_PAGES_COMMIT_SHA",
      "hashByteLength": 8
    }
  }
}
```

## License
MIT
