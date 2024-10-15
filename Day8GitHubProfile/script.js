const url = "https://api.github.com/users";
const searchInputEl = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const profileContainer = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

const generateProfile = (profile)=>{
    return (
     `   <div class="profile-box">
        <div class="top-section">
          <div class="left">
            <div class="avatar">
              <img src="${profile.avatar_url}" alt="avatar" />
            </div>
            <div class="self">
              <h1>${profile.name}</h1>
              <h1>${profile.login}</h1>
            </div>
          </div>
         <a href="${profile.html_url}" target="_black"> <button id="searchBtn" class="primaryBtn">Check Profile</button> </a>
        </div>

        <div class="about">
          <h2>About</h2>
          <p>${profile.bio}</p>
        </div>
        <div class="status">
          <div class="status-item">
            <h3>Followers</h3>
            <p>${profile.followers}</p>
          </div>
          <div class="status-item">
            <h3>Following</h3>
            <p>${profile.following}</p>
          </div>
          <div class="status-item">
            <h3>Repos</h3>
            <p>${profile.public_repos}</p>
          </div>
        </div>
      </div>`
    )
}





const fetchProfile =  async () =>{

    const userName = searchInputEl.value;

    loadingEl.innerText = "loading....................";
    loadingEl.style.color = "black";
    try {
        const response = await fetch(`${url}/${userName}`);
        const data = await response.json();
        console.log("data",data);

        if(data.bio){
            loadingEl.innerText = "";
            profileContainer.innerHTML = generateProfile(data);
        }else{
          loadingEl.innerHTML = data.message;
          loadingEl.style.color= "red"; 
          profileContainer.innerText = ""; 
        }

    } catch (error) {
        console.log(error,"error");
        loadingEl.innerText = "";
    }
}
searchBtn.addEventListener("click",fetchProfile);
