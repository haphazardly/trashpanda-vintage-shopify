How to compile for localhost development.
```
theme watch --notify=/var/tmp/theme_ready
browser-sync https://trashpanda-vintage.myshopify.com /var/tmp/theme_ready -w --config bs-config.js
npx webpack --watch
```