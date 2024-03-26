{/*
Copyright (c) 2024, Nick Wolff <nick@wolff.tech>

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/}

// Übersicht Widget for displaying a line starting with "- [~]" from a Markdown document

// Specify the path to your Markdown document
const markdownFilePath = "~/Documents/worklog.md";

export const command = `cat ${markdownFilePath}`;

// Set the refresh frequency for updating the widget
export const refreshFrequency = 5000; // ms

const parseMarkdown = (output) => {
  const lines = output.split('\n');
  const taskLine = lines.find(line => line.startsWith('- [~]'));
  return taskLine ? taskLine.replace('- [~]', '').trim() : '';
};

// Render function to display the widget
export const render = ({ output }) => (
  <div>
    {/* Internal style definitions for enhanced customization */}
    <style>{`
      .current-task {
        font-family: 'Realtime Semibold', sans-serif;
        font-size: 16px;
        color: #fff;
        font-weight: bold;
      }

      .task-details {
        font-family: 'Realtime Light', sans-serif;
        font-size: 16px;
        color: #fff;
      }
    `}</style>

    {/* Display the "Current Task:" header with different styles */}
    <p><span className="current-task">Current Task:</span> <span className="task-details">{parseMarkdown(output)}</span></p>
  </div>
);

// Styling for the overall widget presentation
export const className = `
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-family: 'Realtime';
  font-size: 14px;
`;
