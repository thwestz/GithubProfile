import { getBeers } from './api'

getBeers()
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => console.log(response))

const test = () =>{
    console.log('abc')
}