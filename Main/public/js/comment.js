



  
  async function commentFormHandler(event) {
    event.preventDefault();

    const commentContent = document.querySelector(" input[name='comment-body']").textContent;

    // const post_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    if (commentContent) {
      // problem here not await or fetch -- submit input
        const response =  {
            method: 'POST',
            body: JSON.stringify({
                // post_id,
                commentContent })
            
            // headers: {
            //     'Content-Type': 'application/json'
            // }
            
        };
        console.log(response);

        if (response.ok) {

          document.appendChild(response);
          

        } else {
            alert(response.statusText);
            document.querySelector('.comment-button').style.display = "block";
        };
    };
  }

document.querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);


