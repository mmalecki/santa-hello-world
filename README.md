# santa-hello-world
Example app for [`santa`](https://github.com/vigour-io/santa) deployer

## Usage
```js
npm -g install santa
// Configure santa by editing `~/.santaconf`
git clone https://github.com/vigour-io/santa-hello-world.git
cd santa-hello-world
santa deploy
```

## Structure
This is an example node.js application deployable with santa. It has two
scripts:

  * `scripts/install` - a simple bash scripts which install node.js and
    `santa-hello-world` upstart service
  * `scripts/start` - starts `santa-hello-world` upstart service
