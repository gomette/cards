$(document).ready(function() {

    $(function() {
        var images = ['6.png', '7.png', '8.png', '9.png', '10.png', 'as.png', 'valet.png', 'dame.png', 'roi.png'];
        var img = images[Math.floor(Math.random() * images.length)];
        var img2 = images[Math.floor(Math.random() * images.length)];
        var img3 = images[Math.floor(Math.random() * images.length)];

        $('#bg').click(function() {
            $("#bg").attr('src', img);
        });
        $('#bg1').click(function() {
            $("#bg1").attr('src', img2);
        });
        $('#bg2').click(function() {
            $("#bg2").attr('src', img3);
        });
    });
});