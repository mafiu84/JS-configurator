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

function setLength() {
    var dropbox = document.BoatConfigurator.Length;

    dropbox.options.length = 0;

    dropbox.options[dropbox.options.length] = new Option(' ', '0');

    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "1") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '1');

        dropbox.options[dropbox.options.length] = new Option('45ft', '2');

        dropbox.options[dropbox.options.length] = new Option('50ft', '3');

        dropbox.options[dropbox.options.length] = new Option('57ft', '4');

        dropbox.options[dropbox.options.length] = new Option('60ft', '5');

        dropbox.options[dropbox.options.length] = new Option('65ft', '6');

        dropbox.options[dropbox.options.length] = new Option('70ft', '7');

    }
    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "2") {

        dropbox.options[dropbox.options.length] = new Option('30ft', '8');

        dropbox.options[dropbox.options.length] = new Option('35ft', '9');

        dropbox.options[dropbox.options.length] = new Option('40ft', '10');

        dropbox.options[dropbox.options.length] = new Option('45ft', '11');

        dropbox.options[dropbox.options.length] = new Option('50ft', '12');

        dropbox.options[dropbox.options.length] = new Option('55ft', '13');

        dropbox.options[dropbox.options.length] = new Option('57ft', '14');

        dropbox.options[dropbox.options.length] = new Option('60ft', '15');

        dropbox.options[dropbox.options.length] = new Option('65ft', '16');

        dropbox.options[dropbox.options.length] = new Option('70ft', '17');

    }
    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "3") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '18');

        dropbox.options[dropbox.options.length] = new Option('45ft', '19');

        dropbox.options[dropbox.options.length] = new Option('50ft', '20');

        dropbox.options[dropbox.options.length] = new Option('55ft', '21');

        dropbox.options[dropbox.options.length] = new Option('57ft', '22');

        dropbox.options[dropbox.options.length] = new Option('60ft', '23');

        dropbox.options[dropbox.options.length] = new Option('65ft', '24');

        dropbox.options[dropbox.options.length] = new Option('70ft', '25');

    }
    if (document.BoatConfigurator.Boat_type.value == "1" && document.BoatConfigurator.Range.value == "4") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '26');

        dropbox.options[dropbox.options.length] = new Option('45ft', '27');

        dropbox.options[dropbox.options.length] = new Option('50ft', '28');

        dropbox.options[dropbox.options.length] = new Option('55ft', '29');

        dropbox.options[dropbox.options.length] = new Option('57ft', '30');

        dropbox.options[dropbox.options.length] = new Option('60ft', '31');

        dropbox.options[dropbox.options.length] = new Option('65ft', '32');

        dropbox.options[dropbox.options.length] = new Option('70ft', '33');

    }
    if (document.BoatConfigurator.Boat_type.value == "2" && document.BoatConfigurator.Range.value == "1") {

        dropbox.options[dropbox.options.length] = new Option('40ft', '34');

        dropbox.options[dropbox.options.length] = new Option('45ft', '35');

        dropbox.options[dropbox.options.length] = new Option('50ft', '36');

        dropbox.options[dropbox.options.length] = new Option('57ft', '37');

        dropbox.options[dropbox.options.length] = new Option('60ft', '38');

        dropbox.options[dropbox.options.length] = new Option('65ft', '39');

        dropbox.options[dropbox.options.length] = new Option('70ft', '40');

    }
    if (document.BoatConfigurator.Boat_type.value == "2" && document.BoatConfigurator.Range.value == "2") {

        dropbox.options[dropbox.options.length] = new Option('50ft', '41');

        dropbox.options[dropbox.options.length] = new Option('57ft', '42');

        dropbox.options[dropbox.options.length] = new Option('60ft', '43');

        dropbox.options[dropbox.options.length] = new Option('65ft', '44');

        dropbox.options[dropbox.options.length] = new Option('70ft', '45');

    }
    if (document.BoatConfigurator.Boat_type.value == "2" && document.BoatConfigurator.Range.value == "3") {

        dropbox.options[dropbox.options.length] = new Option('50ft', '46');

        dropbox.options[dropbox.options.length] = new Option('57ft', '47');

        dropbox.options[dropbox.options.length] = new Option('60ft', '48');

        dropbox.options[dropbox.options.length] = new Option('65ft', '49');

        dropbox.options[dropbox.options.length] = new Option('70ft', '50');

    }
}