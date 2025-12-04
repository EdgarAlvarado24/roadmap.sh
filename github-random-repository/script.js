import { Octokit } from "https://esm.sh/@octokit/core";

document.addEventListener('DOMContentLoaded', ()=>{

    let selectLanguage = document.getElementById('selectLanguage');
    let repoContainer = document.getElementById('repo-container');
    let buttonContainer = document.getElementById('button-container');

    selectLanguage.addEventListener('change', (event)=>{
        let language = event.target.value;
        if (language){
            repoContainer.classList.add('container-repo');
            repoContainer.classList.remove('container-repo-founded');
            repoContainer.innerHTML = `<p>Loading, plase wait...</p>`
            getRandomRepo(language);
        }


        async function getRandomRepo(language){
            try{
                const octokit = new Octokit({auth:''})

                let responseResult = await octokit.request('GET /search/repositories', {
                    q:`language=${language}`,
                    per_page:1
                })
                
                // console.log(responseResult)

                let totalCount = responseResult.data.total_count;
                if(totalCount === 0){
                    displayRepo(null);
                    return;
                }
                // throw Error

                let maxResults = Math.min(totalCount,1000);
                let randomPage = Math.floor(Math.random() * maxResults) + 1;

                let randomRepoResult = await octokit.request('GET /search/repositories', {
                    q:`${language}`,
                    per_page:1,
                    page:randomPage
                })

                console.log(randomRepoResult)

                let repoFounded = randomRepoResult.data.items[0];
                displayRepo(repoFounded)
                

            }catch(error){
                console.error("Error al buscar el repositorio", error)
                repoContainer.classList.remove('container-repo');
                repoContainer.classList.add('container-repo-error');
                repoContainer.innerHTML = `<p>Error fetching repositories</p>`
                if(buttonContainer.childElementCount === 0){
                    creteRefreshButton('error')
                }
            }
            
        }

        function displayRepo(repo){
            console.log(repo)
            repoContainer.classList.remove('container-repo');
            repoContainer.classList.add('container-repo-founded');
            repoContainer.innerHTML = `
            <p class="title-repo">${repo.name}</p>
            <p class="description-repo">${repo.description}</p>
            <div class="container-icons">
                <i class="bi bi-star-fill"><span>${repo.language}</span></i>
                <i class="bi bi-star-fill"><span>${repo.stargazers_count}</span></i>
                <i class="bi bi-star-fill"><span>${repo.forks}</span></i>
                <i class="bi bi-info-circle"><span>${repo.watchers}</span></i>
            </div>
            `;

            if(buttonContainer.childElementCount === 0){
                creteRefreshButton()
            }
        }

        function creteRefreshButton(type='refresh'){
            
            let buttonRefresh = document.createElement('button')
            buttonRefresh.classList.add(`button-${type}`)
            buttonRefresh.textContent = type == 'refresh' ? 'Refresh' :'Click to retry';
            buttonRefresh.addEventListener('click',()=>{
                getRandomRepo(language);
            })
            buttonContainer.appendChild(buttonRefresh);
        }

    })

})




