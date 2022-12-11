(function () {
    let lineData = [
        { image: "images/images (1).jfif", pname: "player1", rate: "4.2", star: false },
        { image: "images/images (3).jfif", pname: "player2", rate: "4.2", star: true },
        { image: "images/images (2).jfif", pname: "player3", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player4", rate: "4.2", star: false },
        { image: "images/images (4).jfif", pname: "player5", rate: "4.2", star: true },
        { image: "images/images (1).jfif", pname: "player6", rate: "4.2", star: true },
        { image: "images/images (2).jfif", pname: "player7", rate: "4.2", star: false },
        { image: "images/images (3).jfif", pname: "player8", rate: "4.2", star: true },
        { image: "images/images (4).jfif", pname: "player9", rate: "4.2", star: true },
        { image: "images/images (1).jfif", pname: "player10", rate: "4.2", star: false },
        { image: "images/images (2).jfif", pname: "player11", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player1", rate: "4.2", star: true },
        { image: "images/images (1).jfif", pname: "player2", rate: "4.2", star: false },
        { image: "images/images (2).jfif", pname: "player3", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player4", rate: "4.2", star: true },
        { image: "images/images (4).jfif", pname: "player5", rate: "4.2", star: false },
        { image: "images/images (1).jfif", pname: "player6", rate: "4.2", star: true },
        { image: "images/images (2).jfif", pname: "player7", rate: "4.2", star: true },
        { image: "images/images (3).jfif", pname: "player8", rate: "4.2", star: false },
        { image: "images/images (4).jfif", pname: "player9", rate: "4.2", star: true },
        { image: "images/images (1).jfif", pname: "player10", rate: "4.2", star: false },
        { image: "images/images (2).jfif", pname: "player11", rate: "4.2", star: true },
       
    ]


    let lineSet = ()=>{
        let html1 ='';
        let html2 ='';
        let html3 ='';
        let html4 ='';
        let html5 ='';
        let html6 ='';
        let html7 ='';
        let html8 ='';
        let html9 ='';
        let item='';
        
        lineData.forEach((item ,index)=>{
            let hire = ` 
            <div class="hire">
                <span class="material-symbols-rounded arrowDown">
                arrow_downward
                </span>
            </div>`
            let htmlelem = `
            <div class="item df-dr-col align-c " >
                <div class="image-box">
                    <img src="${item.image}" alt="line" class="item-img"> 
                    <div class="ratting-box df-aln-center just-sp-ar">
                        <p class="ratting">${item.rate}</p>
                        <span class="material-symbols-rounded star">
                            star
                        </span>
                    </div>
                   ${item.star ? hire :''}
                </div>
                <p class="line-name">${item.pname}</p>
            </div>`
            if(index <=0 ){
            html1 +=htmlelem
        }else if(index >0 && index <=4){
            html2 +=htmlelem
        }else if(index >4 && index <=7){
            html3 +=htmlelem
        }else if(index >7 && index <=10){
            html4 +=htmlelem
        }else if(index >10 && index <=11){
            html5 +=htmlelem
        }else if(index >11 && index <=14){
            html6 +=htmlelem
        }else if(index >14 && index <=16){
            html7 +=htmlelem
        }else if(index >16 && index <=20){
            html8 +=htmlelem
        }else if(index >20){
            html9 +=htmlelem
        }
           
        })
        document.getElementById("line1").innerHTML=html1
        document.getElementById("line2").innerHTML=html2
        document.getElementById("line3").innerHTML=html3
        document.getElementById("line4").innerHTML=html4
        document.getElementById("line5").innerHTML=html5
        document.getElementById("line6").innerHTML=html6
        document.getElementById("line7").innerHTML=html7
        document.getElementById("line8").innerHTML=html8
        document.getElementById("line9").innerHTML=html9
    }
    let initFn = ()=>{

    }
    lineSet()

})()

