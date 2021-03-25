<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiniCoders</title>
    <link rel="stylesheet" href="../assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/12c728ad22.js" crossorigin="anonymous"></script>
</head>
<body id="home_page_id">
<section class=containerheader>

<header class=headerNormal>
    <div class="nameSignature" id="signatureJohn">
            <h1 class=signedJohn>John doe</h1>
        </div>
        <nav id="burger">
            <ul class="btnUl">
                <li class ="btnNav" id = "buttonHome" onClick="reloadThePage()"><a href="#home_page"  class="aNavhf" id="btnHrefNav" >Home</a></li>
                <li class ="btnNav" id = "buttonAbout" onClick="reloadThePage()"><a href="#pageAboutMe"  class="aNavhf" id="btnHrefNav">About Me</a></li>
                <li class ="btnNav" id = "buttonProject" onClick="reloadThePage()"><a href="#pageProject" class="aNavhf" id="btnHrefNav">Project</a></li>
                <li class ="btnNav" id = "buttonContact" onClick="reloadThePage()"><a href="#contact" class="aNavhf" id="btnHrefNav">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div class="navBurger">
        <a href="index.php" class="active">John Doe</a>
        <div id="myLinks">
            <a href="#home_page"  class="aNavhf" id="btnHrefNav" onClick="reloadThePage()">Home</a>
            <a href="#pageAboutMe"  class="aNavhf" id="btnHrefNav"onClick="reloadThePage()">About Me</a>
            <a href="#pageProject" class="aNavhf" id="btnHrefNav"onClick="reloadThePage()">Project</a>
            <a href="#contact" class="aNavhf" id="btnHrefNav" onClick="reloadThePage()">Contact</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="burgerMenu()">
            <i class="fa fa-bars"></i>
        </a>
    </div>   

</section>
