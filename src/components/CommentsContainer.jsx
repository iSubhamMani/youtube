import Comment from "./Comment";

const commentsData = [
  {
    id: 11221,
    name: "Subham Mani",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate fugiat dolor nostrum id modi exercitationem voluptates repellendus odio, eos odit deleniti, adipisci harum quas, labore ab quam natus saepe.",
    replies: [
      {
        id: 541923,
        name: "Subham Mani",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cupiditate fugiat dolor nostrum id modi exercitationem voluptates repellendus odio, eos odit deleniti, adipisci harum quas, labore ab quam natus saepe.",
        replies: [],
      },
    ],
  },
  {
    id: 22345,
    name: "John Doe",
    text: "Another example text for John Doe.",
    replies: [
      {
        id: 98765,
        name: "John Doe",
        text: "Reply from John Doe.",
        replies: [
          {
            id: 123456,
            name: "Jane Smith",
            text: "Reply from Jane Smith to John Doe.",
            replies: [],
          },
        ],
      },
    ],
  },
  // Add more objects as needed
];

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="ml-4 border-l-black border-l-2 pl-4">
        {comment.replies.length !== 0 && (
          <CommentsList comments={comment.replies} />
        )}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <div className="my-4 text-2xl font-medium">Comments: </div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
