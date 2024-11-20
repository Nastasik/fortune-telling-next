const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/cardsList', (req, res) => {
    try {
        const { cardsCount } = req.query;

        function uniqueFlowers(arr, n) {
            let resultSet = new Set();
            while (resultSet.size < n) {
              resultSet.add(arr[Math.floor(Math.random() * arr.length)]);
            }
            return Array.from(resultSet);
          }
        //   function efficientRandomElements(arr, count) {
        //     let result = new Array(count),
        //         len = arr.length,
        //         taken = new Array(len);
        //     if (count > len)
        //       throw new RangeError("efficientRandomElements: количество запрашиваемых элементов превышает их количество в массиве");
        //     while (count--) {
        //       let x = Math.floor(Math.random() * len);
        //       result[count] = arr[x in taken ? taken[x] : x];
        //       taken[x] = --len in taken ? taken[len] : len;
        //     }
        //     return result;
        //   }
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { cardsList = [] } = db;

        const uniqueCards = uniqueFlowers(cardsList, cardsCount)

        if (uniqueCards) {
            return res.json(uniqueCards);
        }

        return res.status(403).json({ message: 'Cards not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});
// eslint-disable-next-line
server.use((req, res, next) => {
    // проверяем, авторизован ли пользователь
    // if (!req.headers.authorization) {
    //     return res.status(403).json({ message: 'AUTH ERROR' });
    // }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
