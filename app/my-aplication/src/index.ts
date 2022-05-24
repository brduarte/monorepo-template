import http from '@core/http';

const app = http();

const port = 3000

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})