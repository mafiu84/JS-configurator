function setRange(Boat) {

    var dropbox = document.BoatConfigurator.Range;

    dropbox.options.length = 0;

    if (Boat == "1" || Boat == "2") {

        dropbox.options[dropbox.options.length] = new Option('Shell', '1');

        dropbox.options[dropbox.options.length] = new Option('Sailaway', '2');

        dropbox.options[dropbox.options.length] = new Option('Sailaway lined', '3');

        dropbox.options[dropbox.options.length] = new Option('Fully fitted', '4');

    }
}