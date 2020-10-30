import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    uid: uuidv4(),
    text: 'Tarea 1',
    completed: false,
    pending: false,
  },
  {
    uid: uuidv4(),
    text: 'Tarea 2',
    completed: false,
    pending: false,
  },
  {
    uid: uuidv4(),
    text: 'Tarea 3',
    completed: false,
    pending: false,
  },
];

function getApiData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data]);
    }, 2000);
  });
}

function sendApiData(item, status) {
  console.log('API receiving new item:', item);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve({
          status: 0,
          data: {}
        })
      } else {
        reject({
          status: 1,
          data: {
            error: 'Internal Server Error'
          }
        })
      }
    }, 2000)
  })
}

export {
  getApiData,
  sendApiData
}