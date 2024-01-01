export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDJjYWU1OThjMTc2MjM4ZmNjNDlhNzVhMjA5ZGFmMiIsInN1YiI6IjY1NmI5OWIyODgwNTUxMDBhZWU4ZDI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y8fmNtwY5nU42q4XWqye-kUjl11Rgg2RB4DD5wXo5vc'
    }
  };


export const debounce = (mainFunction, delay) => {
    let timer;

    return function(...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay)
    }
  }