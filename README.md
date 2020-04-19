# node-resize-api
Needed a quick API to resize images sent to my Fitbit Ionic for a few apps, so whipped up something using this [blog article](https://malcoded.com/posts/nodejs-image-resize-express-sharp/) and made a few tweaks.

## Usage
Run using `node index.js`, this starts the API. Takes GET requests on port 8000 at /.

`remoteUri` is the only query string parameter required and specifies which remote URI you want to pull down and, at a minimum, re-format.

`width` and `height` is optional, but is the desired size.

`fit` is a string indicating how the image willl be resized. Available options: `cover` (default), `contain`, `fill`, `inside` or `outside`. Checkout [Sharp's documentation](https://github.com/lovell/sharp/blob/ecd01afad3633e957fa0a9294e3678ff957bde28/docs/api-resize.md#parameters) for more details.

`format` is the format the image will be returned in. Checkout [Sharp's documentation](https://github.com/lovell/sharp/blob/ecd01afad3633e957fa0a9294e3678ff957bde28/docs/api-output.md#toformat) for more details.

### Examples
Download an image from TVDB, return it as a PNG (by default):
```
http://localhost:8000/?remoteUri=https://artworks.thetvdb.com/banners/episodes/71663/55469.jpg
```

## Notice
This is a very basic API with no protection or nothing, this is meant for internal use only and I am in no way responsible of what will happen if you use this.
