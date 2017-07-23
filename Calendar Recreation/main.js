window.onload = function() {
    function removeActive() {
        const active = document.querySelector('#active-day');

        if (active) {
            active.removeAttribute('id');
        }
    }

    const days = document.querySelectorAll('.Calendar__day');

    for (var i = 0; i < days.length; i++) {
        days[i].addEventListener('click', function(e) {
            removeActive();
            let el = e.target;
            if (e.target.tagName === 'SPAN') {
                el = e.target.parentNode;
            }
            el.id = 'active-day';
        });
    }

    //Toggle Checkbox Checked
    var eventcheck = document.getElementsByClassName('Calendar__checkbox');

    //////////////function to bind checkboxes to clicke event listeners
    function bindClickHandlerToCheckbox(checkbox) {
        checkbox.addEventListener('click', function(e) {
            if (this.classList.contains('Calendar__checkbox--checked')) {
                this.classList.remove('Calendar__checkbox--checked');
            } else {
                this.classList.add('Calendar__checkbox--checked');
            }
        });
    }
    ///////Bind eventlistener to what is already on the page
    for (var i = 0; i < eventcheck.length; i++) {
        bindClickHandlerToCheckbox(eventcheck[i]);
    }






    //Pop up the new event lightbox
    var popup = document.getElementById('popup');
    var addnew = document.getElementById('addbtn');
    var newbox = function() {
        addnew.addEventListener('click', function() {
            popup.classList.remove('hidden');

            document.getElementById('title').focus();
        })
    }
    newbox();

    //Close pop up box without submitting
    var cancelbtn = document.getElementById('cancel');
    var cancelbox = function() {
        cancelbtn.addEventListener('click', function() {
            popup.classList.add('hidden');
        })
    }
    cancelbox();

    //Submit a new calendar event
    var submitbtn = document.getElementById('submit');
    var submitEvent = function(e) {
        submitbtn.addEventListener('click', function() {
            // ASSIGNMENT JARED!
            // Turn all this below into a function that accepts a title and notes and appends the correct elements to the DOM tree.

            //function(title, notes) {
            //}

            function createNewElement(vars, elType) {
                var vars = document.createElement(elType);
            }




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


            //This binds the checkbox click to this item only as it has
            //alrady been bound to the preloaded events above.
            bindClickHandlerToCheckbox(checkboxDiv);

            //--------------Reset text boxes and hide the lightbox----------//
            title.value = '';
            notes.value = '';
            popup.classList.add('hidden');
        });
    }
    submitEvent();
}