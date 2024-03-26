# WidgetWorklog

Ubersicht plugin that displays the current active tasks from a markdown worklog

## How to use

1. Pull the Repository
2. Choose which version of the plugin you wish to use.

- MarkdownLineWidget - This version will display the current active task in the worklog. The task must start with the following `- [~]`
- MarkdownLineWidgetWithLink - This version is the same as above, but will also display anything at the end of the line in parentheses on a second line.

3. In the jsx file, update the `markdownFilePath` variable to point to your worklog markdown file.
4. Change the `font-family` in the render function to whatever font you wish to use. In this case, I'm using Realtime.
5. Put the jsx file into your Ubersicht widgets folder.

## Disclaimer

I'm no expert with JavaScript, so this is very basic and probably bad code. I'm sure there are better ways to do this, but this works for now.
