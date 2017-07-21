function generateSummary(selector){
    let btn = $(selector);
    let articleParent = $('#content').parent();
    btn.on('click',function(){
        let summaryText = $('#content strong').text();
        createSummary(summaryText);
    });

    function createSummary(summaryText){
        let summary = $('<div>');
        summary.attr('id','summary');
        let title = $('<h2>').text('Summary'); 
        let para = $('<p>').text(summaryText);

        title.appendTo(summary);
        para.appendTo(summary);
        summary.appendTo(articleParent);
    }
}

