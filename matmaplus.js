        const bird = document.querySelector('.newEagle')
        let i = 0
        // enter press
        document.onkeydown = (e)=>{
            e = e || window.event
            switch (e.which || e.keyCode){
                case 13:
                    document.querySelector('h1').textContent = ''
                    check()
                    break
            }
        }
        function onstart(){
            los()
            document.querySelector('.imie').focus()
        }
        // const changeLevel_1 = ()=> a = 1
        // const changeLevel_2 =() => a = 2
        // random zakres 4-16
        function los(){
            let x = Math.floor(Math.random()*(16-4)+4) 
            let y = (Math.round(Math.random()*10))+4
            document.querySelector('#nr1').textContent= x
            document.querySelector('#nr2').textContent= y
        }
        
        const imie = document.querySelector('.imie')
        imie.addEventListener('change',()=>{
            checkImie(imie.value)
            imie.parentNode.removeChild(imie)
            document.querySelector('#twojWynik').focus()
        })
        function checkImie(nick){
            switch (nick){
                case 'franek kubacki':
                    addpics('franek kubacki')
                    break;
                case 'krzys kubacki':
                    addpics('krzysio kubacki')
                    break;
                default:
                    document.querySelector('#powitanie').textContent='Cześć '+ imie.value

            }
        }
        function addpics(imi){
            const image = document.createElement('img')
            const imagef = document.createElement('img')

            image.src = 'krzys.jpg'
            image.height = '50'
            imagef.src = 'franek.jpg'
            imagef.height = '50'
            if(imi=='krzysio kubacki'){document.querySelector('.log').appendChild(image);};
            if(imi=='franek kubacki'){document.querySelector('.log').appendChild(imagef)}
        }
       
        function check(){
        
            const x = +document.querySelector('#nr1').textContent
            const y = +document.querySelector('#nr2').textContent
            const odp = document.querySelector('#twojWynik').value
            if(odp!=''){
                const wynik = x+y;
                (odp == wynik)?succes():youLost();
            }
            
            document.querySelector('#twojWynik').value = ''
            los()
        }
        
        
        function succes(){
            i++
            bird.innerHTML+='<i class="em em-bird" aria-role="presentation" aria-label="BIRD"></i>'
            changeMoney(i)
        }
        function youLost(){
            bird.innerHTML+='<i class="em em-hankey" aria-role="presentation" aria-label="PILE OF POO"></i>'
        }
        function removeBirds(){
           bird.innerHTML = ''
            
        }
        function changeMoney(i){
            switch(i){
                case 5:
                    document.querySelector('#data1').textContent = 1
                    removeBirds()
                    document.querySelector('#wynik').innerHTML='Wygrałeś 1zł'
                    break
                case 10:
                    document.querySelector('#data1').textContent = 2
                    removeBirds()
                    document.querySelector('#wynik').innerHTML='Wygrałes 2zł'

                    break
                case 15:
                    document.querySelector('#data1').textContent = 3
                    removeBirds()
                    bird.textContent = 'BONUS + 2zł'
                    bird.className = 'Bonus'
                    document.querySelector('#wynik').innerHTML='KONIEC GRY - zrób zdjęcie dla taty'
                    koniec('.center')
                    break

            }
        } 
        function koniec(elID){
            document.querySelector(elID).innerHTML ='WINNER  '+ dataDzis()+'  WINNER'
        }
        function dzieki(){
            alert('Dzięki bardz za kawkę')
        }
        function dataDzis(){
            const d = new Date()
            const dzis = d.toDateString()
            return dzis
        }
                     
