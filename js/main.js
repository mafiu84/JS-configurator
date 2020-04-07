function setRange(Boat) {

    var dropbox = document.BoatConfigurator.Range_type;

    dropbox.options.length = 0;

    if (Boat == "1") {

        dropbox.options[dropbox.options.length] = new Option('Shell', '1');

        dropbox.options[dropbox.options.length] = new Option

            ('Sailaway', '2');
        dropbox.options[dropbox.options.length] = new Option

            ('Sailaway lined', '3');
        dropbox.options[dropbox.options.length] = new Option

            ('Fully fitted', '4');

    }

    if (Boat == "2") {

        dropbox.options[dropbox.options.length] = new Option('Pioneer', '5');

        dropbox.options[dropbox.options.length] = new Option('Monarch/Emperor', '6');

        dropbox.options[dropbox.options.length] = new Option('Baby euro', '7');

        dropbox.options[dropbox.options.length] = new Option('Euro', '8');

        dropbox.options[dropbox.options.length] = new Option('Hoxton', '9');

        dropbox.options[dropbox.options.length] = new Option('Abode', '10');

    }

}