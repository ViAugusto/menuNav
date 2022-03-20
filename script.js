// SIDEBAR
const allDropDown = document.querySelectorAll('#sidebar .side-dropdown');

allDropDown.forEach(item => {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e) {
        e.preventDefault();

        if(item.classList.contains('active')) {
            allDropDown.forEach(item => { 
                const aLink = item.parentElement.querySelector('a:first-child');
                aLink.classList.remove('active');
                item.classList.remove('show');
            })
        }

        this.classList.toggle('active');
        item.classList.toggle('show');
    })
})

// PROFILE
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function() {
    dropdownProfile.classList.toggle('show');
})

window.addEventListener('click', function (e) {
    if(e.target !== imgProfile) {
        if(dropdownProfile.classList.contains('show')){
            dropdownProfile.classList.remove('show');
        }
    }
})
