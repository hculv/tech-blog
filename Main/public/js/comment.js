const commentID = document.querySelector('input[name="comment-body"]').value;

console.log("testing");
console.log(commentID);

const commentFormHandler = async (event) => {
  event.preventDefault();

  console.log(commentContent);
  const description = document.querySelector('.comment-body').value.trim();

  if (description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.append('.new-comment-form');
    } else {
      alert('Failed to post comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);