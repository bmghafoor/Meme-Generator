const imgUrl = document.querySelector('#url') 
const topText = document.querySelector('#top') 
const bottomText = document.querySelector('#bottom') 
const memeForm = document.querySelector('#memeForm') 


memeForm.addEventListener('submit', function(event){ 

    event.preventDefault() 

    const memeContent = document.createElement('div') 
    const topCaption = document.createElement('div') 
    const bottomCaption = document.createElement('div') 
    const deleteButton = document.createElement('button') 
    

    memeContent.classList.add('meme') 

    const image = document.createElement('img') // create a new html element when page is submitted
    if (imgUrl.value == ''){ // if there is no image input, throw an error
        alert('Image URL needed')
        try {
            throw new Error("Image url needed")
        } catch {
            console.log('Image Url field is blank') 
            return
        }
    }

    function isValidUrl(url){
        try{
            return Boolean(new URL(url));
        } catch{
            return false
        }
    }

    if(isValidUrl(imgUrl.value)) {image.src = imgUrl.value }

    else{
        alert('invalid Url')
        console.log('Enter Valid Url')
        return
    }

    
    image.classList.add('memeIMG') 

    topCaption.innerHTML = topText.value 
    topCaption.classList.add('topCaption') 

    bottomCaption.innerHTML = bottomText.value 
    bottomCaption.classList.add('bottomCaption') 

    deleteButton.classList.add('deleteBtn') 
    deleteButton.innerHTML = 'Delete' 

    document.body.appendChild(memeContent)  // Appending the container for the meme to our document body, otherwise it won't show up
    memeContent.appendChild(image) // Add the image as a child to the meme container
    memeContent.appendChild(topCaption)
    memeContent.appendChild(bottomCaption) 
    memeContent.appendChild(deleteButton)
    topText.value = '' // After the form is submitted, the input box for Top caption will be cleared (set to an empty string)
    bottomText.value = '' // After the form is submitted, the input box for Bottom caption will be cleared (set to an empty string)
    url.value = '' // After the form is submitted, the input box for URL will be cleared (set to an empty string)

    memeContent.addEventListener('click',function(event){ // Listens for a click on the meme container 
        if(event.target.tagName ==='BUTTON'){ // If the element that was clicked on is a button
            event.target.parentElement.remove() // Remove the parent element (the meme container that contains the image,captions, and button pressed)
        }
    })

})