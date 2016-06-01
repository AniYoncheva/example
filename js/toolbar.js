var toolbar = (function () {
    function render(selector) {
        var renderHTML = $(selector).append(
            '<div class="btn-group-wrap">' +
            '<div class="btn-group">' +
            '<div type="button" class="btn btn-default" id="link">Add Button</div>' +
            '<div type="button" class="btn btn-default" id="text">Add Text</div>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-md-6" id="container-link"></div>' +
            '<div class="col-md-6" id="container-text"></div>' +
            '</div>');
        return renderHTML;
    }

    function createButton(selectorOption, selector, element) {
        $(selectorOption).click(function () {
            $(selector).append("<div><a class='btn btn-success' href='#'>Бутон</a></div>");
            background.setBackground(element);
        });
    }

    function createText(selectorOption, selector, element) {
        $(selectorOption).click(function () {
            $(selector).append("<div class='btn btn-info' >Текст</div>");
            background.setBackground(element);
        });
    }

    return {
        render: render,
        createButton: createButton,
        createText: createText,
    };

}());