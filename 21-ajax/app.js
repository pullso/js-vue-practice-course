const btn = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.container');

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', (e) => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener('error', (e) => {
    console.log('error');
  });

  xhr.send();
}

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.addEventListener('load', (e) => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.addEventListener('error', (e) => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
  const card = document.createElement('div');
  card.classList.add('card');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const title = document.createElement('h5');
  title.textContent = post.title;
  title.classList.add('card-title');
  const article = document.createElement('p');
  article.textContent = post.body;
  article.classList.add('card-text');
  cardBody.appendChild(title);
  cardBody.appendChild(article);
  card.appendChild(cardBody);
  return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = cardTemplate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener('click', (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener('click', (e) => {
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  createPost(newPost, (response) => {
    console.log(response);
    const card = cardTemplate(response);
    container.insertAdjacentElement('afterbegin', card);
  });
});

function myHttpRequest({ method, url } = {}, cb) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener('load', (e) => {
      if (Math.floor(xhr.status / 100) !== 2) {
        cb(`Error. Status code ${xhr.status}`, xhr);
        return;
      }
      const response = JSON.parse(xhr.responseText);
      cb(null, response);
    });

    xhr.addEventListener('error', (e) => {
      cb(`Error. Status code ${xhr.status}`, xhr);
    });

    xhr.send();
  } catch (error) {
    cb(error);
  }
}

// myHttpRequest(
//   {
//     method: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/posts',
//   },
//   (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(res);
//   }
// );

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', (e) => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', (e) => {
          cb(`Error. Status code ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', (e) => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', (e) => {
          cb(`Error. Status code ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }
        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

const myHttp = http();
console.log('myHttp: ', myHttp);

myHttp.post(
  'https://jsonplaceholder.typicode.com/posts',
  {
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
  { 'Content-Type': 'application/json' },
  (err, resp) => {
    console.log(err, resp);
  }
);
