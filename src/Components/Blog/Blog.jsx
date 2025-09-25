
const Blog = ({blog}) => {
    const {question,answer,explanation} = blog
    return (
       <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">

       <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-box mb-4">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg font-semibold text-indigo-600 peer-checked:text-indigo-800">
        ❓ {question}
      </div>
      <div className="collapse-content text-gray-700 space-y-3">
        <div>
          <span className="font-medium text-green-600">✅ Answer:</span>
          <p>{answer}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">📘 Explanation:</span>
          <p>{explanation}</p>
        </div>
      </div>
    </div>

    </div>

    );
};

export default Blog;