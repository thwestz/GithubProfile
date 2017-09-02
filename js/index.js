import { getGithubProfile } from './api'
getGithubProfile()
.then(response => response.json())
.catch(e => console.err('Fail'))
.then(response => console.log(response))
