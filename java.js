function test(url) {
    return function(isAuth) {
      return function(id) {
        console.log(`Запрос данных ${isAuth? 'от авторизованного' : 'от не авторизованного'} под ID: ${id} под URL: ${url}`)
      }
    }
  }

const testUrl = test('https://example.com');
const testAuth = testUrl(true);
testAuth(123); 

const testNoAuth = testUrl(false);
testNoAuth(456); 

//я попробовал, вызов происходит через JS. В терминале я не помню как делать.