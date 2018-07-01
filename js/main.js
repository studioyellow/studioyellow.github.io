// copy function on homepage

function copyFunction(){
  var copyText = document.getElementById("copy_span");
  var textArea = document.createElement("textarea");
  textArea.value = "hello@studioyellow.is";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

// play/pause function on homepage
function pauseFunction(){
  const video = document.getElementById('video');
  const pauseButton = document.getElementById('pause_icon');
    if(video.paused){
      video.play();
      pauseButton.src='img/pause.svg';
    }else{
      video.pause();
      pauseButton.src='img/playbutton.svg';
    }
};

// scroll between projects
function scrollWin(x, y) {
   window.scrollBy(x, y);
};

//------------------------------------------------------------------

// //get json
// const getProjects = () => {
//  return fetch("/data.json")
//  .then((results) => {
//    return results.json();
//  })
//  .then((json) => {
//    json.projects.forEach((project) => {
//      console.log(project);
//    });
//    return json.projects
//  });
// };

// get projects page
const getProjectPage = document.getElementById("get_projects_page");

const getProjects = (project) =>{
  getProjectPage.innerHTML = '';
  projects.forEach((project)=>{
    getProjectPage.innerHTML += `
        <!-- verkefni -->
        <div class="project" onClick="getProject(${project.id})">
          <a href="" type="button" name="button"><div class="more_button"><span class="project_span">im watching you</span></div></a>
          <div class="project_img">
            <img src="${project.images.img1}" alt="">
          </div>
          <div class="project_info">
            <h5>${project.catagory}</h5>
            <h4>${project.name}</h4>
          </div>
        </div>
    `;
  })
}

getProjects();


// get info from data
//Sækja upplýsingar úr data.json sem passa við það verkefni sem smellt var á
const currentProject = document.getElementById("current_project");

const getProject = (id) =>{
  currentProject.innerHTML = `
    <div class="current_project_flex">
      <div class="current_project_img_box">
        <img class="current_project_img" src="${projects[id].images.img1}">
      </div>

      <a href="projects.html"class="close_button" id="close">
        <img src="img/close.svg" class="close" alt="close">
      </a>

      <div class="current_project_info">
        <h5>${projects[id].catagory}</h5>
        <h4 class="title">${projects[id].name}</h4>
        <p>${projects[id].description}</p>
        <a class="website_button" href="${projects[id].url}" >skoða vefsíðu</a>
      </div>

      <div class="navigation_box">
        <a href="index.html">forsíða</a><a href="projects.html">/ verkefni</a><p>/ ${projects[id].name}</p>
      </div>

      <div class="menu_buttons">
        <button class="project_button" type="button" name="button">verkefni</button>
        <button class="us_button" type="button" name="button">studio yellow</button>
      </div>
    </div>
  `;
}

getProject();
