export default function getAuthenticatedUser(){
    return JSON.parse(localStorage.getItem('user', ''))
}