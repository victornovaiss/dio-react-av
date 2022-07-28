async function api(search = '', callback = () => { }) {

    var userInfos = {}
    var reposResult = []
    
    if (search) {
        var response = await fetch(`https://api.github.com/users/${search}`)
        var data = await response.json()

        let { login, url, avatar_url, blog, location, name, company } = data;

        userInfos = {
            login: login,
            url: url,
            avatar_url: avatar_url,
            blog: blog,
            location: location,
            name: name,
            company: company
        }



        var reposResponse = await fetch(`https://api.github.com/users/${search}/repos`)
        reposResult = await reposResponse.json()

        callback({userInfos, reposResult})
    }else{
        console.log('Please enter a username') 
    }

}

export default api;