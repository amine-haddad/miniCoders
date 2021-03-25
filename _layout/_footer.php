<!--Ici tu code ton footer-->
<section class="containerFooter">
    <footer class="footerGround">
        <div class="containerFoot">
            <p>This page was last edited on <?php echo getRandomDate(); ?>, at <?php echo date("H:i:s"); ?> (UTC). 
            <br> Copyright © 2021 johndoe.com</p>
        </div>
    </footer>
</section>
<script src="../assets/main.js"></script>
<script>
    if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }
</script>
</body>
</html>

<?php 

function getRandomDate()
{
    $timestamp = rand( strtotime("Jan 01 2020"), strtotime("Mar 26 2021") );
    return date("d.m.Y", $timestamp );
}

?>
