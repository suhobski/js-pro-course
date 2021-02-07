export function hideComment(node) {
  const comment = node.querySelector('.task__comment')
  if (comment && comment.clientHeight > 34) {
    comment.style.height = '34px'
    comment.querySelector('.task__button--full-comment').style.display = 'block'
  }  
}

export function hideAllComments() {
  const comments = document.querySelectorAll('.card .task__comment')
  comments.forEach(comment => {
    if (comment.clientHeight > 34) {
      comment.style.height = '34px'
      comment.querySelector('.task__button--full-comment').style.display = 'block'
    }
  })
}

export function displayComment() {
  const commentButtons = document.querySelectorAll('.task__button--full-comment')
  commentButtons.forEach(button => {
    button.addEventListener('click', event => {
      let comment = event.target.parentNode;
      comment.style.height = 'auto'
      event.target.style.display = 'none'
    })    
  })
}