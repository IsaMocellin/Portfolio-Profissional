async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/IsaMocellin/Portfolio-Profissional/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
};

function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})();