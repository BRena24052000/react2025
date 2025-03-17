import {config} from "./config";

export function getPopularMovies() {
    return fetch(`${config.baseUrl}/v2.2/films/collections?type=TOP_POPULAR_MOVIES`).then(res => res.json())
}


// test
async function getPost(id) {
    const response = await feuch(`
        http${id}`,
    )
    const data = await response.json();
    return data

}
getPost(1)
.then(data => console.log(data))
.catch(err => console.error(err))

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
xhr.onload = function () {
    if(xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText))
    } else {
        console.error(xhr.status)
    }
}

xhr.onerror = function() {
    console.error()
}
xhr.send()

fetch('http')
.then(response => response.json())
.then(data => users = data)
.catch(error => console.error('Ошибка загрузки', error))

useEffect(()=>{
    
}, [])

