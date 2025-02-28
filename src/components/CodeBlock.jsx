// components/CodeBlock.jsx
import React from 'react';

const CodeBlock = ({ code, language }) => {
  return (
    <div className="bg-gray-900 rounded-md overflow-hidden">
      <div className="flex items-center bg-gray-800 px-4 py-2">
        <span className="text-xs text-gray-400">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-gray-300 text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;