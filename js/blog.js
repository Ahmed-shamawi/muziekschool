
    $(document).ready(function() {
      $.ajax({
        url: "archief.html .blog-post",
        dataType: "html",
        success: function(data) {
          let articles = $(data).find(".blog-post");
          articles.sort(function(a, b) {
            return new Date($(b).find(".date").text()) - new Date($(a).find(".date").text());
          });
          let list = $("<ul>");
          articles.slice(0, 3).each(function() {
            let title = $(this).find(".title").text();
            let author = $(this).find(".author").text();
            let date = $(this).find(".date").text();
            let link = $(this).index() + 1;
            let item = $("<li>").append($("<a>").attr("href", "detail.html#" + link).text(title)).append("<br>").append(author).append("<br>").append(date);
            list.append(item);
          });
          $("#blog-list").append(list); 
        }
      });
    });
