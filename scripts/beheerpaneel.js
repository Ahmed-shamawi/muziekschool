
$(document).ready(function() {

   // Formulier valideren
  function validateForm() {
    let title = $("#title").val();
    let author = $("#author").val();
    let date = $("#date").val();
    let content = $("#content").val();
        
      if (title === "" || author === "" || date === "" || content === "") {
      alert("Alle velden zijn verplicht!");
        return false;
      } 
        return true;
      }

  $('#myform').submit(function(event) {

    // Voorkom dat het formulier normaal wordt verzonden
    event.preventDefault();

    // Formulier valideren invoeren 
    if (validateForm()) {

    // Haal de waarden op uit de invoervelden van het formulier
    let title = $('#title').val();
    let author = $('#author').val();
    let date = $('#date').val();
    let content = $('#content').val();
    
    // Maak een object met de formulierwaarden
    let articleData = {
      title: title,
      author: author,
      date: date,
      content: content
    };
    
    // Haal bestaande gegevens op uit localStorage of initialiseer een lege array
    let existingData = JSON.parse(localStorage.getItem('articles')) || [];
    
    // Voeg de nieuwe artikelgegevens in de bestaande data-array
    existingData.push(articleData);
    
    // Sla de bijgewerkte data-array weer op in localStorage
    localStorage.setItem('articles', JSON.stringify(existingData));
    
    // Clear the form inputs
    $('#title').val('');
    $('#author').val('');
    $('#date').val('');
    $('#content').val('');

    alert("Het artikel is toegevoegd!");
    }
    
  });



//=== Code voor index pagina ===

    // Haal gegevens op uit localStorage en tonen in de index pagina
    let storedArticles = JSON.parse(localStorage.getItem('articles')) || [];

    // Declareeren de gemaakte element class in een variabele
    let articleContainer = $('.articles');
    
    // creëer nieuwe elementen voor elk nieuw artikel
    storedArticles.forEach(function(article) {
      
      let articleElement = $('<article class="col col-6 article_content">');
      
        articleElement.append(
          '<div class="post-preview">' +
            '<h3 class="article_title">' +
            '<a href="detailpagina.html">' +
            article.title +
            '</a>' +
            '</h3>' +
            '<div class="post-meta">' +
            '<ul>' +
            '<li>' +
            '<span class="author">' +
            '<i class="fa-solid fa-user author">' +
            '</i>' +
            '&nbsp;' +
            article.author +
            '</span>' +
            '</li>' +
            '<li>' +
            '<span class="date">' +
            '<i class="fa-solid fa-calendar-days">' +
            '</i>' +
            '&nbsp;' +
            article.date +
            '</span>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '<div class="article_paragraf"><p>' +
            article.content +
            '</p></div>' +
            '</div>'
        );

      // Voeg het nieuwe artikel toe aan het gemaakte element op de indexpagina
      articleContainer.prepend(articleElement);
    });
  });  