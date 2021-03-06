// Here's the constructor for the individual comments
var Comment  = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return liEl;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Just setting up some variables for DOM access
var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var clearChatList = document.getElementById('clear-chat-list');
var allComments = [];

var renderAllComments = function() {
  chatList.innerHTML = '';
  for (var i = 0; i < allComments.length; i++) {
    chatList.appendChild(allComments[i].render());
  }
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function handles the submission of comments
function handleCommentSubmit(event) {
  console.log(event);
  event.preventDefault(); //gotta have it. prevents page reload

  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
  }

  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  if (commenter === 'Lloyd') {
    remark = 'Can I help you with your code?';
  }

  if (commenter === 'Bart') {
    remark = remark.toUpperCase();
  }

  if (commenter === 'Headless') {
    remark = 'Why am I in your dream?!!!';
  }

  var newComment = new Comment(commenter, remark);

  console.log('Comment by ' + event.target.who.value + ' at ' + Date());

  event.target.who.value = null;
  event.target.says.value = null;

  allComments.push(newComment);
  renderAllComments();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the 'Clear all comments' button
clearChatList.addEventListener('click', function() {
  chatList.innerHTML = '';
  console.log('You just cleared the chat list!');
  allComments = [];
});
