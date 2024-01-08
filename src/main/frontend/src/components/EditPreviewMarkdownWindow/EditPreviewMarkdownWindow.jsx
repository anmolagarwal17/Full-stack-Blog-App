import Markdown from "react-markdown";

export default function EditPreviewMarkdownWindow({
  blog,
  handleTitle,
  handleBody,
}) {
  return (
    <div className="my-12 flex justify-around">
      <br /> <br />
      <div className="left">
        <input
          value={blog?.title}
          onChange={handleTitle}
          className="bg-gray-100 h-10 w-full rounded-sm pl-11"
          type="text"
          placeholder="Enter title"
        />{" "}
        <br /> <br />
        <textarea
          value={blog?.body}
          onChange={handleBody}
          className="bg-gray-100 h-28 w-80 rounded-sm p-[40px]"
          type="text"
          placeholder="Enter content"
        />{" "}
        <br /> <br />
      </div>
      <div className="right">
        <div className="bg-gray-100 h-10 rounded-sm p-2">
          {" "}
          <Markdown>{blog?.title}</Markdown>{" "}
        </div>{" "}
        <br /> <br />
        <div className="bg-gray-100 h-28 w-80 rounded-sm p-[40px]">
          {" "}
          <Markdown>{blog?.body}</Markdown>{" "}
        </div>{" "}
        <br /> <br />
      </div>
    </div>
  );
}
