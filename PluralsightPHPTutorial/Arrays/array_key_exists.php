<?php

$authors = array("CHarles Dickens", "Jane Austin", "William Shakespeare");

$authorsAssociative = array (
    "quarky" => "Charles Dickens",
    "brilliamt" => "Jane Austin",
    "poetic" => "William Shakespeare",
);

echo array_key_exists('poetic', $authorsAssociative);
//echo $authors[1]; 
//echo $authorsAssociative['quarky'];