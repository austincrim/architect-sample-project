import arc from '@architect/functions'

/**
 * @param {import('@types/architect__functions').HttpRequest} req
 * @returns {import('@types/architect__functions').HttpResponse}
 */
export async function handler(req) {
  const client = await arc.tables()

  const todos = await client.todos.scan()

  return {
    statusCode: 200,
    headers: {
      'cache-control':
        'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/json; charset=utf8'
    },
    body: JSON.stringify(todos)
  }
}
