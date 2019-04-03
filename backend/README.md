
Getting Started
---------------

```sh
# clone it
git clone https://github.com/MaibornWolff/bitcoin.me.git
cd bitcoin.me/backend

# Install dependencies
yarn

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
Docker Support
------
```sh
cd bitcoin.me/backend

# Build your docker
docker build -t bitcoin.me/backend .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 bitcoin.me/backend
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT
