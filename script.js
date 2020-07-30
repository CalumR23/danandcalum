// with jquery
$("#search").click(function (event) {
    event.preventDefault()
    console.log("ping")
    $.ajax(`https://sv443.net/jokeapi/v2/joke/Any`)
      .then(data => {
        console.log(data)
        // original is .html but .append for adding on everytime someone searches
        // preprend if you want newest on top
        // $(‘#movie’).html(`
        if(data.setup) {
        $('#joke').append(`
        <p>Setup: ${data.setup}</p>
        <p>Delivery: ${data.delivery}</p>
      `)
    } else {
        $('#joke').append(`
        <p>Joke: ${data.joke}</p>
      `)
      }
      })
      .catch(err => { console.log(err) })
  })
