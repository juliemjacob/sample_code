<?php

$authorName = "William SHakespeare";

function setAuthorName()
{
    global $authorName;
    $authorName = "Charles Dickens";
    
}

setAuthorName();

echo $authorName;
?>