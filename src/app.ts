import express from 'express';
import createError from 'http-errors'
import healthRouter  from './routes/health'
import productsRouter from'./routes/products'

const app = express();
const port = 4000;

app.use('/health', healthRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});