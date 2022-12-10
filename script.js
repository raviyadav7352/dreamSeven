(function () {
    let playerData = [
        { image: "images/images (1).jfif", pname: "player1", rate: "4.2", star: true },
        { image: "images/images (2).jfif", pname: "player2", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player3", rate: "4.2", star: true },
        { image: "images/images (4).jfif", pname: "player4", rate: "4.2", star: true },
        { image: "images/images (1).jfif", pname: "player5", rate: "4.2", star: true },
        { image: "images/images (2).jfif", pname: "player6", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player7", rate: "4.2", star: true },
        { image: "images/images (4).jfif", pname: "player8", rate: "4.2", star: true },
        { image: "images/images (1).jfif", pname: "player9", rate: "4.2", star: true },
        { image: "images/images (2).jfif", pname: "player10", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player11", rate: "4.2", star: true },
    ]


    let playerSet = ()=>{
        let html0 ='';
        let html1 ='';
        let html2 ='';
        let html3 ='';
        let item='';
        
        playerData.forEach((item ,index)=>{
            let htmlelem = `<div class="item df-dr-col align-c overf-h" >
        <img src="${item.image}" alt="player" class="item-img"> 
        <div class="ratting-box df-aln-center just-sp-ar">
            <p class="ratting">${item.rate}</p>
            <span class="material-symbols-rounded star">
            star
            </span>
        </div>
        <p class="player-name">${item.pname}</p>
        </div>`
            if(index <=0 ){
            html0 +=htmlelem
        }else if(index >0 && index <=4){
            html1 +=htmlelem
        }else if(index >4 && index <=7){
            html2 +=htmlelem
        }else if(index >=7){
            html3 +=htmlelem
        }
           
        })

        document.getElementById("player1").innerHTML=html0
        document.getElementById("player2").innerHTML=html1
        document.getElementById("player3").innerHTML=html2
        document.getElementById("player4").innerHTML=html3
    }
    let initFn = ()=>{

    }
    playerSet()

})()

