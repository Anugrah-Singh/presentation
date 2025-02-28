// components/SlideContent.jsx
import React from 'react';
import CodeBlock from './CodeBlock';

const SlideContent = ({ slide }) => {
  return (
    <div className="p-8 h-full">
      <h2 className="text-3xl font-bold mb-4 text-purple-300">{slide.title}</h2>
      {slide.subtitle && (
        <h3 className="text-xl font-semibold mb-6 text-purple-200 italic">{slide.subtitle}</h3>
      )}
      
      <div className="space-y-6">
        {slide.content.map((item, index) => {
          if (item.type === 'text') {
            return <p key={index} className="text-lg">{item.value}</p>;
          } else if (item.type === 'list') {
            return (
              <ul key={index} className="list-disc list-inside space-y-2 text-lg">
                {item.items.map((listItem, i) => (
                  <li key={i} className="text-gray-200">{listItem}</li>
                ))}
              </ul>
            );
          } else if (item.type === 'code') {
            return <CodeBlock key={index} code={item.code} language={item.language} />;
          } else if (item.type === 'table') {
            return (
              <div key={index} className="overflow-x-auto">
                <table className="w-full border-collapse my-4">
                  <thead>
                    <tr>
                      {item.headers.map((header, i) => (
                        <th key={i} className="border border-gray-600 p-2 bg-gray-700">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="border border-gray-600 p-2">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          } else if (item.type === 'quote') {
            return (
              <blockquote key={index} className="border-l-4 border-purple-500 pl-4 italic text-gray-300">
                {item.value}
              </blockquote>
            );
          } else if (item.type === 'divider') {
            return <hr key={index} className="my-6 border-gray-600" />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default SlideContent;