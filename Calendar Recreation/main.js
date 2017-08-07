window.onload = function() {


    const active = document.querySelector('#active-day');
    const days = document.querySelectorAll('.Calendar__day');

    function removeActive() {
        days.forEach(day => day.removeAttribute('id'));
    }

    function changeActiveDay(e) {
        removeActive();
        let targetDay = e.target;
        if (targetDay.tagName === 'SPAN') {
            targetDay = targetDay.parentNode;
        }
        targetDay.id = 'active-day';
    }

    days.forEach(day => day.addEventListener('click', changeActiveDay));

    //Toggle Checkbox Checked
    const eventcheck = document.querySelectorAll('.Calendar__checkbox');
    const checkboxChecked = 'Calendar__checkbox--checked';


    //////////////function to bind checkboxes to click event listeners
    function bindClickHandlerToCheckbox(checkbox) {
        checkbox.addEventListener('click', function(e) {
            if (this.classList.contains(checkboxChecked)) {
                this.classList.remove(checkboxChecked);
            } else {
                this.classList.add(checkboxChecked);
            }
        });
    }
    ///////Bind eventlistener to what is already on the page
    eventcheck.forEach(bindClickHandlerToCheckbox);






    //Pop up the new event lightbox
    const popup = document.querySelector('#popup');
    const addnew = document.querySelector('#addbtn');

    function newbox() {
        addnew.addEventListener('click', function() {
            popup.classList.remove('hidden');

            document.querySelector('#title').focus();
        })
    }
    newbox();

    //Close pop up box without submitting
    const cancelbtn = document.querySelector('#cancel');

    function cancelBox() {
        cancelbtn.addEventListener('click', () =>
            popup.classList.add('hidden'));
    }
    cancelBox();

    //Submit a new calendar event



    const title = document.querySelector('#title');
    const notes = document.querySelector('#notes');

    function addNewEvent() {

        const eventList = document.querySelector('#list');
        const eventListItem = document.createElement('div');
        const eventAvatar = document.createElement('div');
        const avatarImg = document.createElement('img');
        const eventContent = document.createElement('div');
        const contentTitle = document.createElement('h2');
        const contentNotes = document.createElement('strong');
        const eventCheckbox = document.createElement('div');

        eventListItem.setAttribute('class', 'Calendar__list-item');
        eventAvatar.setAttribute('class', 'Calendar__avatar');
        avatarImg.setAttribute('src', 'http://i.pravatar.cc/100?img=2');
        eventContent.setAttribute('class', 'Calendar__list-item__content');
        eventCheckbox.setAttribute('class', 'Calendar__checkbox');

        contentTitle.textContent = title.value;
        contentNotes.textContent = notes.value;

        eventContent.appendChild(contentTitle);
        eventContent.appendChild(contentNotes);
        eventAvatar.appendChild(avatarImg);
        eventListItem.appendChild(eventAvatar);
        eventListItem.appendChild(eventContent);
        eventListItem.appendChild(eventCheckbox);
        eventList.appendChild(eventListItem);

        bindClickHandlerToCheckbox(eventCheckbox);

        //--------------Reset text boxes and hide the lightbox----------//
        title.value = '';
        notes.value = '';
        popup.classList.add('hidden');

    }

    const submitbtn = document.querySelector('#submit');
    submitbtn.addEventListener('click', addNewEvent);












    /*
                var title = document.getElementById('title');
                var notes = document.getElementById('notes');

                //Get the whole list to append to later.
                var list = document.getElementById('list');

                //Create all elements with their attributes
                /********* This is the old way*****************/
    /*
                var listItemDiv = document.createElement('div');
                listItemDiv.setAttribute('class', 'Calendar__list-item');

                var avatarDiv = document.createElement('div');
                avatarDiv.setAttribute('class', 'Calendar__avatar');

                var avatarImg = document.createElement('img');
                avatarImg.setAttribute('src', 'http://i.pravatar.cc/100?img=2');

                var contentDiv = document.createElement('div');
                contentDiv.setAttribute('class', 'Calendar__list-item__content');

                var contentH2 = document.createElement('h2');
                contentH2.textContent = title.value;

                var contentStrong = document.createElement('strong');
                contentStrong.textContent = notes.value;

                var checkboxDiv = document.createElement('div');
                checkboxDiv.setAttribute('class', 'Calendar__checkbox');

                //Append children to the Main list's children
                avatarDiv.appendChild(avatarImg);
                contentDiv.appendChild(contentH2);
                contentDiv.appendChild(contentStrong);

                //Append the main children to the main list
                listItemDiv.appendChild(avatarDiv);
                listItemDiv.appendChild(contentDiv);
                listItemDiv.appendChild(checkboxDiv);

                list.appendChild(listItemDiv);
    */

}