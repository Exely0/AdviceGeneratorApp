const api = "https://api.adviceslip.com/advice";

document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('button');
    const adviceBox = document.getElementById('advice');
    const adviceID = document.getElementById("advice-id")
  
    button.addEventListener('click', function() {


        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {

            if (adviceBox.classList.contains("bg-white")) {
                adviceBox.classList.remove("bg-white");
            }
            if (adviceID.classList.contains("bg-green-600")) {
                adviceID.classList.remove("bg-green-600");
            }

            const advice = data.slip.advice;
            const id = data.slip.id;
  
            adviceBox.textContent = '"'+advice+'"';
            adviceID.textContent = `Advice n°${id}`;
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération du conseil :', error);
        });
    });
  });
  