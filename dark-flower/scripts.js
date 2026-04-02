* {
    box- sizing: border - box;
    /* use border-box model on everything */
}

#demo {
    display: flex;
    flex - direction: row;
    /* or column, row-reverse, column-reverse */
    flex - wrap: wrap;
}

#demo h1 {
    flex - basis: 100 %;
    order: -1;
}

#demo p {
    flex - basis: 20 %;
    padding - right: 1em;
    margin - top: 0;
}

#para1 {
    order: 0;
}

#para2 {
    order: 0;
}

#toggleDarkMode {
    margin - top: 2em;
}

body.darkMode {
    background - color: darkgrey;
    color: white;
}

body.darkMode h1 {
    color: red;
}