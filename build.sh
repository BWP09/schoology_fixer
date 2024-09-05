uglifyjs bookmarklet.js --compress --mangle --mangle-props --output temp
sed 's/^/javascript:/ ' temp > bookmarklet.min.js
rm temp