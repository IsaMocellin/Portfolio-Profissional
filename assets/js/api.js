async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/IsaMocellin/Portfolio-Profissional/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
};

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `https://wa.me/${profileData.phone.replace(/\D/g, '')}`
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softsSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li><h3 class="title github">${portfolio.name}</h3>
    <a href="${portfolio.url}">${portfolio.url}`).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(professionalExperience => `<li><h3 class="title">${professionalExperience.name}</h3>
    <p class="period">${professionalExperience.period}</p>
    <p>${professionalExperience.description}</p></li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})();