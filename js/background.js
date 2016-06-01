var background = (function () {

    function setBackground(element) {
        var current = $(element).css("background-color");
        $(element).spectrum({
            color: current,
            preferredFormat: "hex",
            showInput: true,
            showInitial: true,
            showAlpha: true,
            showPalette: true,
            palette: [],
            maxSelectionSize: 5,
            move: function (color) {
                $(this).css({
                    'background-color': color.toRgbString(),
                    'border-color': color.toRgbString()
                });
            }
        });

    };

    return {
        setBackground: setBackground
    }

})();


