axios.get("https://dummyjson.com/users")
        .then(res => reload(res.data.users))

        
    let wox_imga = document.querySelector('.wox-img')
    let x = document.querySelector('.imgIcon')
    let modal = document.querySelector('.modal')
    let modal_bg = document.querySelector('.modal_bg')
    let body = document.body



        const reload = (arr) => {          
            for(let item of arr){
                console.log(item);
                let wox_block = document.createElement('div')
                let img = document.createElement('img')
                let span = document.createElement('span')
                let span1 = document.createElement('span')

                wox_block.classList.add('wox-block')

                img.src = item.image
                span.innerHTML = `${item.lastName}  `
                span1.innerHTML = item.firstName
                
                wox_block.append(img, span, span1)
                wox_imga.append(wox_block)
                
                // wox_block.onclick = () => {
                //     modal.style.display = "block"
                //     modal_bg.style.display = "block"
                    
                //     setTimeout(() => {
                
                //         modal_bg.style.opacity = "1"
                //         modal.style.opacity = "1"
                //         modal.style.transform = "translate(-50%, -50%) scale(1)"
                //     }, 200);
                // }
            }
            

        }
        
        // x.onclick = () => {
        //     modal_bg.style.opacity = "0"
        //     modal.style.opacity = "0"
        //     modal.style.transform = "translate(-50%, -50%) scale(.2)"
        //     setTimeout(() => {
        //         modal.style.display = "none"
        //         modal_bg.style.display = "none"    
        //     }, 200);
        // }
        // modal_bg.onclick = () => {
        //     modal_bg.style.opacity = "0"
        //     modal.style.opacity = "0"
        //     modal.style.transform = "translate(-50%, -50%) scale(.2)"
        //     setTimeout(() => {
        //         modal.style.display = "none"
        //         modal_bg.style.display = "none"    
        //     }, 200);
        // }




