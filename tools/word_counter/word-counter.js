$(document).ready(function(){
    $('#count-words').click(function(){
      wordCount = countWord();
      displayCount(wordCount);
    });

    function countWord(){
      var text = $('#text-input').val().trim();
      
      // Menghapus spasi ekstra dan memisahkan kata berdasarkan spasi
      var wordsArray = text.split(/\s+/);
      
      // Menghitung kata (filter array untuk menghilangkan entri kosong)
      var wordCount = wordsArray.filter(function(word){
        return word.length > 0;
      }).length;

      return wordCount;
    }

    function displayCount(wordCount){
      // Menampilkan hasilnya
      $('#word-count').text(wordCount);
    }

    $("#text-input").on('change keyup paste', function(){
      wordCount = countWord();
      displayCount(wordCount);
    });
  });
  