$(document).ready(function () {
    const subPagesContainer = $('#subPagesContainer');

    // Path to the directory containing sub-pages
    const subPagesDirectory = 'Subpages/';

    // Function to load and inject HTML content
    function loadAndInjectContent(filePath) {
        $.get(filePath, function (data) {
            subPagesContainer.append(data);
        });
    }

    // Load and inject content for each sub-page
    $.ajax({
        url: subPagesDirectory,
        success: function (data) {
            $(data).find('a[href$=".html"]').each(function () {
                const subPagePath = $(this).attr('href');
                loadAndInjectContent(subPagePath);
            });
        }
    });
});