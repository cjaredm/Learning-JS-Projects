//Function runs when window is done loading.
window.onload = function() {
    //Focus on input feild when loaded.
    document.getElementById('input-item').focus();



    //New ToDo Input and Submit Button
    var newInput = document.getElementById('input-item');
    var addbtn = document.getElementById('addbtn');


    // Add the 'remove' button to all Ps

    //Noticed that some people put the var i outside of the For loop.
    //Not sure if there is a good reason for that or not...
    var addRemove = function() {
        var allps = document.getElementsByTagName('p');
        for (var i = 0; i < allps.length; i++) {
            var span = document.createElement("span");
            var txt = document.createTextNode('remove');
            span.className = "remove";
            span.appendChild(txt);
            allps[i].appendChild(span);
        }
    }
    addRemove();

    //Hide the list item when removed
    var hideItem = function() {
        var close = document.getElementsByClassName("remove");
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    };
    hideItem();

    //Mark the item completed.
    var finished = function() {
        var ulist = document.getElementsByClassName('list-item');
        for (var i = 0; i < ulist.length; i++) {
            ulist[i].onclick = function(event) {
                //var listItem = event.target;
                if (!this.classList.contains('done')) {
                    this.classList.add('done');
                } else {
                    this.classList.remove('done');
                }
            }
        };
    }
    finished();

    //When the Add btn is clicked
    var addnew = function() {

        var input = newInput.value;
        var p = document.createElement('p');
        var list = document.getElementById('list')

        // If blank give alert
        if (input === "") {
            alert('Did you forget to add something?');
        } else {

            //Not blank then add the new item at the bottom
            p.appendChild(document.createTextNode(input));
            list.appendChild(p);


            //Format new item with same class and remove button
            p.setAttribute('class', 'list-item');
            var span = document.createElement("span");
            var txt = document.createTextNode('remove');
            span.className = "remove";
            span.appendChild(txt);
            p.appendChild(span);

            //Empty the text field for next input
            newInput.value = '';
        }
        //Strike Through when clicked

        //Must be inside the click function when a new item is listed
        //or else the new items added can't be marked done
        //This works but only after a new item is added to the list.
        finished();

        //Hide the list item when remove is clicked
        var removebtn = document.getElementsByClassName('remove');
        for (i = 0; i < removebtn.length; i++) {
            removebtn[i].onclick = function() {
                this.parentElement.style.display = 'none';
            }
        };
    }
    addbtn.onclick = addnew;

    //Trying to add something for when you press enter to submit
    document.getElementById('input-item').onkeydown = function(e) {
        if (e.keyCode == 13) {
            var input = newInput.value;
            var p = document.createElement('p');
            var list = document.getElementById('list');
            if (input === "") {
                alert('Did you forget to add something?');
            } else {

                //Not blank then add the new item at the bottom
                p.appendChild(document.createTextNode(input));
                list.appendChild(p);


                //Format new item with same class and remove button
                p.setAttribute('class', 'list-item');
                var span = document.createElement("span");
                var txt = document.createTextNode('remove');
                span.className = "remove";
                span.appendChild(txt);
                p.appendChild(span);

                //Empty the text field for next input
                newInput.value = '';
            }
            //Add enter key functions to hide list and mark done.
            hideItem();
            finished();
        }
    }

}