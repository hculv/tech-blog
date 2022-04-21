// // async function editFormHandler(event) {
// //     event.preventDefault();
  
// //     const title = document.querySelector('input[name="project-name"]').value.trim();
// //     const content = document.querySelector('input[name="project-descrip"]').value.trim();
  
// //     const id = window.location.toString().split('/')[
// //       window.location.toString().split('/').length - 1
// //     ];
  
// //     const response = await fetch(`/api/post/${id}`, {
// //       method: 'PUT',
// //       body: JSON.stringify({
// //         post_id: id,
// //         title,
// //         content,
// //       }),
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     });
  
// //     if (response.ok) {
// //       document.location.replace('/dashboard/');
// //     } else {
// //       alert(response.statusText);
// //     }
// //   }
  
// //   document
// //     .querySelector('.edit-post-form')
// //     .addEventListener('submit', editFormHandler);


// const editBTN = document.querySelector("#edit-btn");

// const response = await fetch(`/api/post/${id}`, {
//           method: 'PUT',
//           body: JSON.stringify({
//             post_id: id,
//             title,
//             content,
//           }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
      
//         if (response.ok) {
//           document.location.replace('/dashboard/');
//         } else {
//           alert(response.statusText);
//         }
      

// editBTN.addEventListener('submit', editForm);