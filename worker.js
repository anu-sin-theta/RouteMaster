function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

       const numMembersSelect = document.getElementById("num-members");
        const memberCountInput = document.getElementById("member-count");

        function updateMemberCount(value) {
            memberCountInput.value = value;
        }

        function addMembers() {
            const numMembers = numMembersSelect.value;
            const members = document.getElementById("members");
        }
