<?php $errors = [];
if ($_SERVER['REQUEST_METHOD'] === "POST"){
    if (!empty($_POST['lname']) || !empty($_POST['firstname']) || !empty($_POST['email']) || !empty($_POST['message'])) {
        if (empty($_POST['lname'])) {
            $errors['lname'] = "* Please enter your lastname.";
        };
        if (empty($_POST['firstname'])) {
            $errors['firstname'] = "* Please enter your firstname.";
        };
        if (empty($_POST['email'])) {
            $errors['email'] = "* Please enter your email.";
        };
        if (empty($_POST['message'])) {
            $errors['message'] = "* Please enter your message.";
        };
    } else {
        $errors['allField'] = "* Please fill in all the fields.";
    }
}
?>
<section id="contact" class="all_contact">
    <h2 class="animate-text">CONTACT</h2>
        <p class="Merci">Please fill in the form and John Doe will answer you</p>
                    
            <form class="formulaire" method="POST" action="#contact">
                    <div class="php"><?php 
                    if (isset($errors['allField'])){
                        echo $errors['allField'];
                    }
                    ?></div>
                    <label for="lname">Lastname:</label><br>
                    <input class="enterFormulaire" type="text" id="lastname" name="lname" placeholder="DOE"><br>
                    <div class="php"><?php 
                    if (isset($errors['lname'])){
                        echo $errors['lname'];
                    }
                    ?></div>
                    <label for="firstname">Firstname:</label><br>
                    <input class="enterFormulaire" type="text" id="name" name="firstname" placeholder="John"><br>
                    <div class="php"><?php 
                    if (isset($errors['firstname'])){
                        echo $errors['firstname'];
                    }
                    ?></div>
                    <label for="email">Email:</label><br>
                    <input class="enterFormulaire" type="email" id="email" name="email" placeholder="johnDOE@LancelotduLac.com"><br>
                    <div class="php"><?php 
                    if (isset($errors['email'])){
                        echo $errors['email'];
                    }
                    ?></div>
                    <label for="message">Message:</label><br>
                    <textarea class="texteClient" id="message" name="message"></textarea><br><br>
                    <div class="php"><?php 
                    if (isset($errors['message'])){
                        echo $errors['message'];
                    }
                    ?></div>
                    <div class="sectionSubmit"><button class="btnContact" type="submit"><strong>Send</strong></button></div>                    
            </form>
        </div>
</section>

