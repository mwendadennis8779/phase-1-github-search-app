let form = document.getElementById('github-form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let search = document.getElementById('search').value
    let originalName = search.split(' ').join('')



    fetch('https://api.github.com/users/' + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
        document.getElementById('user-list').innerHTML =
                `
       <a target="_blank" href='https://www.github.com/${originalName}'> 
       <img src = '${data.avatar_url}'/></a>

    
       
        
        `
        document.getElementById('user-repo').innerHTML = `
        <img src = '${data.repos_url}'/>
        `
        })
}

)