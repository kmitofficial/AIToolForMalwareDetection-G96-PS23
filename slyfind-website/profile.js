 document.querySelectorAll('.profile').forEach((profile) => {
        profile.addEventListener('click', () => {
            profile.classList.toggle('expanded');
        });
    });
    