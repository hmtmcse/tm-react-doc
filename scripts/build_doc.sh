echo "Started Build Documentation";
echo "-------------------------------------------------------------"
echo "-------------------------------------------------------------"

cd ..

yarn build-doc
cp docs/index.html docs/404.html
echo -e "---\npermalink: /404.html\n---"
git add docs
git commit -m "Updated at `date '+%H:%M:%S %A %d-%B, %Y'`"
git push --all

rm -rf website
cp -a docs website
cp README.md website
cp LICENSE website
cd website
git init
git add --all
git commit -m "Updated at `date '+%H:%M:%S %A %d-%B, %Y'`"
git remote add origin https://github.com/tm-react/tm-react.github.io.git
git push origin master --force
cd ..
rm -rf website