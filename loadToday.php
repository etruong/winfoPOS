<?php
    # Inserts positive events into database

    error_reporting(E_ALL);
    $db = new PDO("mysql:dbname=hw7;host=localhost;charset=utf8", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    date_default_timezone_set('America/Los_Angeles');
    $day = date('D, m-d-y');
    
    if (isset($_POST["one"])) {
        $one = $_POST["one"];
        $two = setup("two");
        $three = setup("three");
        $db->exec("INSERT INTO Positive (entry_date, one, two, three) " . 
                    "VALUES ('$day', '$one', '$two', '$three');");
    }
    
    if (isset($_POST["struggle"])) {
        $struggle = $_POST["struggle"];
        $db->exec("INSERT INTO Struggles (entry_date, struggle) " . 
                    "VALUES ('$day', '$struggle');");
    }

    function setup($event_num) {
        if (isset($_POST[$event_num])) {
            return $_POST[$event_num];
        } else {
            return "none";
        }
    }
?>