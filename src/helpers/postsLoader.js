export async function postsLoader() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    console.log(response)
    return response.json()
}