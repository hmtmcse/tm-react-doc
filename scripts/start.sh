echo "Welcome to React Mono Repo Project";
echo "-------------------------------------------------------------"
echo "-------------------------------------------------------------"

cd ../modules

echo "Cloning TM React Project From GitHub";
git clone https://github.com/hmtmcse/tm-react.git


echo "Cloning React MUI UI Project From GitHub";
git clone https://github.com/hmtmcse/react-mui-ui.git

echo "Cloning TM Node Console Project From GitHub";
git clone https://github.com/hmtmcse/tm-node-console.git

cd ..
echo "Installing Yarn";
yarn install

echo "Cloning TM React Website From GitHub";
git clone https://github.com/tm-react/tm-react.github.io.git website