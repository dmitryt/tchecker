const Koa = require('koa');
const Router = require('koa-router');
const url = require('url');
const request = require('request');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

const getParams = urlStr => url.parse(urlStr, true).query;
const getUrl = ({lang, suffix}) => {
  return `http://booking.uz.gov.ua/${lang}/purchase/${suffix}`;
}

router
  .get('/:lang/cities', function (ctx, next) {
    const {lang} = ctx.params;
    const qs = getParams(ctx.req.url);
    const url = getUrl({lang, suffix: 'station/'});
    return new Promise(resolve => {
      request.get({url, qs, json:true}, (err, res, body) => {
        if (err) {
          return next(err);
        }
        ctx.body = body;
        resolve();
      });
    })
  })
  .post('/:lang/tickets', function (ctx, next) {
    const {lang} = ctx.params;
    const form = ctx.request.body;
    ///https://github.com/request/request/issues/2619
    form.hasOwnProperty = k => Object.prototype.hasOwnProperty.call(formData, k);

    const url = getUrl({lang, suffix: 'search/'});
    return new Promise(resolve => {
      request.post({url, form}, (err, res, body) => {
        if (err) {
          return next(err);
        }
        ctx.body = body;
        resolve();
      });
    })
  })
;

app
  .use(serve('dist'))
  .use(koaBody())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
;

app.listen(3000);