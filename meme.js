const imgUrl = document.querySelector('#url') 
const topText = document.querySelector('#top') 
const bottomText = document.querySelector('#bottom') 
const memeForm = document.querySelector('#memeForm') 


memeForm.addEventListener('submit', function(event){ 

    event.preventDefault() 
    // div that will contain image,captions, and delete button
    const memeContent = document.createElement('div') 
    memeContent.classList.add('meme') 

    // image
    const image = document.createElement('img') 
    image.classList.add('memeIMG') 
    if (imgUrl.value == ''){ // if there is no image input, throw an error
        alert('Image URL needed')
        try {
            throw new Error("Image url needed")
        } catch {
            return
        }
    }
    function isValidUrl(url){
        try{
            return Boolean(new URL(url)); // creates new URL Object which will return true/false depending on whether url exists
        } catch{
            return false
        }
    }
    if(isValidUrl(imgUrl.value)) {image.src = imgUrl.value }

    else{
        alert('invalid Url')
        return
    }

    // top caption
    const topCaption = document.createElement('div') 
    topCaption.innerHTML = topText.value 
    topCaption.classList.add('topCaption') 
    if(topText.value.length > 60){ 
        try{
            throw new Error('Top Text too long')
        } catch {
            alert('Top caption must be under 60 characters')
            return
        }
    }


    // bottom caption
    const bottomCaption = document.createElement('div') 
    bottomCaption.innerHTML = bottomText.value 
    bottomCaption.classList.add('bottomCaption') 
    if(bottomText.value.length > 60){
        try{
            throw new Error('Bottom Text too long')
        } catch {
            alert('Bottom caption must be under 60 characters')
            return
        }
    }


    // delete button
    const deleteButton = document.createElement('button') 
    deleteButton.classList.add('deleteBtn') 
    deleteButton.innerHTML = 'Delete' 
    memeContent.addEventListener('click',function(event){ 
        if(event.target.tagName ==='BUTTON'){ 
            event.target.parentElement.remove() // Remove the parent element (the meme container that contains the image,captions, and button pressed)
        }
    })


    // Want to append everything last incase an error is caught above
    document.body.appendChild(memeContent)  
    memeContent.appendChild(image) 
    memeContent.appendChild(topCaption)
    memeContent.appendChild(bottomCaption) 
    memeContent.appendChild(deleteButton)
    topText.value = '' 
    bottomText.value = '' 
    url.value = '' 
})