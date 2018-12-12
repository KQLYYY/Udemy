/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Kqly Martynovets 
 * @license MIT
 *  
 */

class EasyHTTP{
  // Make HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => {
        let response = res;
  console.log(response.headers.get('Content-Type'));  
  console.log(response.headers.get('Date'));

  console.log(response.status);  
  console.log(response.statusText);  
  console.log(response.type);  
  console.log(response.url);  
        return res.json()})
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }


  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

    // Make an HTTP Delete Request
    delete(url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type':'application/json'
          }
        })
        .then(res => res.json())
        .then(() => resolve('Resoure Deleted...'))
        .catch(err => reject(err));
      });
    }

}
