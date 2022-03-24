// learn more about HTTP functions: here https://arc.codes/http
/**
 * @param {import('@types/architect__functions').HttpRequest} req
 * @returns {import('@types/architect__functions').HttpResponse}
 */
export async function handler(req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control':
        'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/json; charset=utf8'
    },
    body: JSON.stringify({
      hello: 'world'
    })
  }
}
