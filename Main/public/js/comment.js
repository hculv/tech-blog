



  
//   async function commentFormHandler(event) {
//     event.preventDefault();


//     const commentContent = document.querySelector("input[name='comment-body']").value;
//     inputComment = commentContent.value;
//     console.log(inputComment);

//     // const post_id = window.location.toString().split('/')[
//     //     window.location.toString().split('/').length - 1
//     // ];

//     if (commentContent) {
//       // problem here not await or fetch -- submit input
//         const response =  {
//             method: 'POST',
//             body: JSON.stringify({
//                 // post_id,
//                 commentContent })
            
//             // headers: {
//             //     'Content-Type': 'application/json'
//             // }
            
//         };

//         if (response.ok) {

//           document.appendChild(response);
          

//         } else {
//             alert(response.statusText);
//             document.querySelector('.comment-button') 
//         };
//     };
//   }

// document.querySelector('.comment-form')
//   .addEventListener('submit', commentFormHandler);



  const commentFormHandler = async function (event) {
    event.preventDefault();
  
    const blog_id = document.querySelector('.new-comment-form').dataset.blogId;
    const comment_description = document.querySelector('#comment_description').value.trim();
    const Project = document.querySelector('#commentList');

    if (comment_description) {
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          blog_id,
          comment_description,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    console.log(comment_description);
// document.createElement('<div>${comment_description}</div>');
Project.append(comment_description)

  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler)
