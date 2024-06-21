async function getApiPerfilGitHub() {

    const dadosP = document.querySelector('.content-dados');
    const dadosAmigos = document.querySelector('.colegas');
    let res = await fetch('https://api.github.com/users/JulioCAvilaS');
    let data = await res.json();
    let perfilHTML = '';
    perfilHTML = ` <div class="row ">
    <h4 class=" col-12 mt-4" id="perfil">Perfil</h4>
 </div>
 <div class="row justify-content-center border-top border-dark">
    <div class=" col-lg-3 mt-2">
        <img src="${data.avatar_url}" class="img-thumbnail " alt="...">
    </div>


    <div class="col-lg-9 mt-2">
        <h4 class="text">${data.name}</h4>
        <p class="text-break">${data.bio}</p>
        <div class="float-md-end fs-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            ${data.followers}
        </div>
        </p>
        <P class="text">${data.location}</P>
        <a href="https://github.com" class="text-black pe-3 link-underline link-underline-opacity-0">
            Site: https://github.com/JulioCAvilaS
        </a>

        <div class="mt-3">
            <a href="https://www.facebook.com " class="text-black pe-3 link-underline link-underline-opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-facebook" viewBox="0 0 16 16">
                    <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
            </a>
            <a href="https://twitter.com " class="text-black px-3  link-underline link-underline-opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-twitter" viewBox="0 0 16 16">
                    <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
            </a>
            <a href="https://www.instagram.com" class="text-black px-3 link-underline link-underline-opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-instagram" viewBox="0 0 16 16">
                    <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
            </a>
        </div>

    </div>
 </div>`;


    dadosP.innerHTML = perfilHTML;


}

async function getAmigosGitHub() {

    const dadosAmigos = document.querySelector('#colegas');
    let res = await fetch('http://localhost:3000/colegas');
    let data = await res.json();
    let amigosHTML = '';

    for (let item of data){
        amigosHTML += ` 
        <div class="fs-4 mt-2  col-4 col-md-2">
            <a href="${item.URLperfil}" class="link-underline link-underline-opacity-0 text-black">
                <img src="${item.URLfoto}" class="img-thumbnail " alt="...">
                <p class="text-center">${item.Nome}</p>
                </a>
            </div>
        
        `;
    }
    
    dadosAmigos.innerHTML = amigosHTML;
}

async function getFotosGitHub() {
    const dadosFotos = document.querySelector('#car');
    let res = await fetch('http://localhost:3000/caroussel');
    let data = await res.json();
    let fotosHTML = '';

    if (data.length > 0) {
        fotosHTML += `
        <div id="carouselExampleIndicators" class="carousel slide mt-2">
            <div class="carousel-indicators">
                ${data.map((_, index) => `
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" 
                        class="${index === 0 ? 'active' : ''}" aria-current="true" aria-label="Slide ${index + 1}">
                    </button>`).join('')}
            </div>
            <div class="carousel-inner">
                ${data.map((item, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${item.URLdaimagemdecapadoalbum}" class="d-block w-100" alt="...">
                    </div>`).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
    } else {
        fotosHTML = '<p>No images found.</p>';
    }

    dadosFotos.innerHTML = fotosHTML;
}



async function getApiGitHub() {
    const repositorios = document.querySelector('.content-main');
    try {
        let res = await fetch('https://api.github.com/users/JulioCAvilaS/repos');
        let data = await res.json();
        let cardsHTML = '';

        for (let item of data) {
            cardsHTML += `
                <div class="text-center col-3 mt-2 cards">
                    <a class="link-underline link-underline-opacity-0" href="repos.html?id=${item.id}">
                        <p class="text text-bg-secondary">${item.name}</p>
                        <p class="text-break text-black bg-body-tertiary">${item.description}</p>
                        <p class="fs-3 text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                class="bi bi-star" viewBox="0 0 16 16">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                            </svg>
                            ${item.stargazers_count}
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            ${item.watchers_count}
                        </p>
                    </a>
                </div>
            `;
        }



        repositorios.innerHTML = cardsHTML;
    }
    catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}



getFotosGitHub()
getAmigosGitHub() 
getApiGitHub();
getApiPerfilGitHub();