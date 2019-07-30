echo "Started Build Documentation";
echo "-------------------------------------------------------------"
echo "-------------------------------------------------------------"

cd ..

yarn build-doc
cp docs/index.html docs/404.html
echo -e "---\npermalink: /404.html\n---" >> docs/404.html
git add docs
git commit -m "Updated at `date '+%H:%M:%S %A %d-%B, %Y'`"
git push --all


exit 0

cd website
rm -rf static
cp -a ../docs/static .
rm -rf 404.html
cp -a ../docs/404.html .
rm -rf assets.json
cp -a ../docs/assets.json .
rm -rf index.html
cp -a ../docs/index.html .

git add --all
git commit -m "Last Updated at `date '+%H:%M:%S %A %d-%B, %Y'`"
git push --all
