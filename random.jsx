
function openLink() {
    // Suvalise lingi leidmine:
     var i = Math.floor(Math.random() * links.length);
    // Viin valitud lingile:
    parent.location = links[i];
    return false;
}