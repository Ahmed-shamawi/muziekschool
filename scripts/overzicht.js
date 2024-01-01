
$(document).ready(function() {
  $.ajax({
    url: 'artikelen.html',
    dataType: 'html',
    success: function(data) {
      let posts = $(data).find('.article_content'); // Get the first 3 posts
       posts.sort(function(a, b) {
               return new Date($(b).find(".date").text()) - new Date($(a).find(".date").text());
    });
      // Lus door de posts
      posts.slice(0, 3).each(function() {
        let post = $(this);
        let image = post.find('.post-image').attr('src');
        let title = post.find('.article_title').html();
        let author = post.find('.author').html();
        let date = post.find('.date').html();
        let categories = post.find('.categories').html();
        let content = post.find('.article_paragraf p').html();
        let btn = post.find('.btn').html();

        // Maak het HTML-element voor elk post
        let postHTML = 
          '<article class="col col-6 article_content">' +
            '<img src="' + image + '" class="post-image">' +
            '<div class="post-preview">' +
              '<h3 class="article_title">' + title + '</h3>' +
              '<div class="post-meta">'+
                '<ul>'+
                  '<li>'+
                    '<span class="author">' + author + '</span>'+
                  '</li>'+
                  '&nbsp;'+
                  '<li>'+
                    '<span class="date">' + date + '</span>'+
                  '</li>'+
                  '&nbsp;'+
                  '<li>'+
                    '<span class="categories">' + categories + '</span>'+
                  '</li>'+
               '</ul>'+
              '</div>'+
              '<div class="article_paragraf">'+
                '<p>' + content + '</p>' +
                '<a href="detailpagina.html" class="btn read-more">'+ btn + '</a>'+
              '</div>' +
            '</div>' +
          '</article>';

        // Voeg de postHTML toe aan de container
        $('.articles').append(postHTML);
      });
    }
  });
});
     
 