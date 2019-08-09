find . -type d -maxdepth 6 -exec test -e "{}/package.json" ';' -not -path "*node_modules*" -exec bash -c "cd '{}' && pwd && npm install" \;
