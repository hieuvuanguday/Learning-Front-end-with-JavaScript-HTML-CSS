// ui
class Ui{
    render(profile, repos){
        let _main = document.querySelector("main"); //_main ám chỉ main sẽ bị ẩn đi
        if(_main){
            _main.remove();
        }
        // chuẩn bị cardString
        let cardString = repos.reduce((result, current)=> {
            return (result += `
                <div class="mb-3 p-2 card">
                    <a href="${current.html_url}" class="mb-3 fs-4">${current.name}</a>
                    <p class="mb-3">${current.description}</p>
                    <div class="mb-3">
                        <span class="badge bg-primary">${current.language}</span>
                        <span class="badge bg-info">${current.stargazers_count}</span>
                        <span class="badge bg-success">${current.forks_count}</span>
                    </div>
                </div>
            `);
        }, "");

        // chuẩn bị main mới
        const main = document.createElement("main");
        main.innerHTML = `
            <div class="container">
                <div class="row">
                    <!-- Bên trái -->
                    <div class="col-4">
                        <figure> <!-- là cái div có border -->
                            <img src="${profile.avatar_url}" 
                                style="
                                    height: 150px; 
                                    width: 150px; 
                                    object-fit: cover
                                "/>
                        </figure>
                        <h1 class="fs-3">${profile.login}</h1>
                        <p>${profile.bio}</p>
                        <a href="${profile.html_url}" target="_blank" class="btn btn-primary">View Profile</a>
                        <div class="mb-3">
                            <span class="badge bg-primary">${profile.following}</span>
                            <span class="badge bg-info">${profile.public_repos}</span>
                            <span class="badge bg-success">${profile.followers}</span>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Website: <a href="${profile.blog}">${profile.blog}</a>
                            </li>
                            <li class="list-group-item">
                                Location: ${profile.location}
                            </li>
                            <li class="list-group-item">
                                CreateAt: ${profile.created_at}
                            </li>
                            <li class="list-group-item">
                                Twitter: ${profile.twitter_username}
                            </li>
                        </ul>
                    </div>
                    <!-- Bên phải -->
                    <div class="col-8">
                        <h1 class="fs-2">Repositories</h1>
                        ${cardString}
                    </div>
                </div>
            </div>
        `;
        document.body.insertBefore(main, document.querySelector("footer"));
    };
    // tạo method thông báo
    alert(message, type = "success"){
        const alertNode = document.createElement("div")
        alertNode.innerHTML = message;
        alertNode.className = `alert alert-${type}`;
        document.querySelector("#notification").appendChild(alertNode);
        setTimeout(() => {
            alertNode.remove();
        }, 2000);
    }
};