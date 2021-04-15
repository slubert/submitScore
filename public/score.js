const scoreBoard = document.getElementById("scoreBoard");



(async () => {
   const scores = await fetch('/api/scoreData')
   const data = await scores.json();

   for(let i = 0; i < data.length; i++){
      let container = document.createElement('div')
      let name = document.createElement('div')
      let score = document.createElement('div')

      name.textContent = data[i].name
      score.textContent = data[i].score

      name.classList.add('nameBox');
      score.classList.add('scoreBox');
      container.classList.add('scoreContainer')

      container.appendChild(name)
      container.appendChild(score)
      scoreBoard.appendChild(container)

      if(i == 0){
         name.style.color = 'gold'
         score.style.color = 'gold'
      }
      else if (i == 1) {
         name.style.color = 'silver'
         score.style.color = 'silver'
      }
      else if (i == 2){
         name.style.color = '#CD7F32'
         score.style.color = '#CD7F32'
      }
      else if (i + 1 == data.length){
         name.style.color = 'red'
         score.style.color = 'red'
      }

   }

   console.log(data)
   console.log(data.length);
})()